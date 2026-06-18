import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import 'dotenv/config';

// Simple in-memory rate limiter
const rateLimiter = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5; // 5 requests per window

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userRequests = rateLimiter.get(ip) || [];

  const validRequests = userRequests.filter((time: number) => now - time < RATE_LIMIT_WINDOW);

  if (validRequests.length >= MAX_REQUESTS) {
    return false;
  }

  validRequests.push(now);
  rateLimiter.set(ip, validRequests);
  return true;
}

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100).regex(/^[a-zA-Z\s\-'\.]+$/, "Name contains invalid characters"),
  email: z.string().email("Invalid email address").max(255),
  subject: z.string().max(200).optional(),
  message: z.string().min(1, "Message is required").max(1000)
});

function sanitizeInput(input: string): string {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, "../attached_assets");

function getLatestCvFile(): { path: string; downloadName: string } | null {
  const validExtensions = new Set([".pdf", ".doc", ".docx"]);

  if (!fs.existsSync(assetsDir)) {
    return null;
  }

  const cvFiles = fs.readdirSync(assetsDir)
    .filter((fileName) => {
      const extension = path.extname(fileName).toLowerCase();
      return fileName.toLowerCase().includes("cv") && validExtensions.has(extension);
    })
    .map((fileName) => {
      const filePath = path.join(assetsDir, fileName);
      const stats = fs.statSync(filePath);
      return {
        filePath,
        extension: path.extname(fileName),
        latestTime: Math.max(stats.birthtimeMs, stats.ctimeMs, stats.mtimeMs),
      };
    })
    .sort((a, b) => b.latestTime - a.latestTime);

  const latestCv = cvFiles[0];

  if (!latestCv) {
    return null;
  }

  return {
    path: latestCv.filePath,
    downloadName: `Zephylarius_Sitanggang_CV${latestCv.extension}`,
  };
}

export async function registerRoutes(app: Express): Promise<Server> {
  // CV download route
  app.get("/download/cv", (req, res) => {
    const latestCv = getLatestCvFile();

    if (!latestCv) {
      return res.status(404).send("CV not found");
    }

    res.download(latestCv.path, latestCv.downloadName, (err) => {
      if (err) {
        console.error("Error downloading CV:", err);
        if (!res.headersSent) {
          res.status(404).send("CV not found");
        }
      }
    });
  });

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
      if (!checkRateLimit(clientIP)) {
        return res.status(429).json({ 
          success: false, 
          message: "Too many requests. Please try again later." 
        });
      }

      const validatedData = contactSchema.parse(req.body);

      const sanitizedData = {
        name: sanitizeInput(validatedData.name),
        email: sanitizeInput(validatedData.email),
        subject: validatedData.subject ? sanitizeInput(validatedData.subject) : 'No Subject',
        message: sanitizeInput(validatedData.message)
      };
      
      const mailOptions = {
        from: `"${sanitizedData.name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: sanitizedData.email,
        subject: `New Contact Form Submission: ${sanitizedData.subject}`,
        text: `You have a new message from ${sanitizedData.name} (${sanitizedData.email}):\n\n${sanitizedData.message}`,
        html: `<p>You have a new message from <strong>${sanitizedData.name}</strong> (${sanitizedData.email}):</p><p>${sanitizedData.message}</p>`,
      };

      await transporter.sendMail(mailOptions);

      res.json({ 
        success: true, 
        message: "Message sent successfully" 
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
