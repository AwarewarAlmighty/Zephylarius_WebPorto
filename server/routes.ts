import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import 'dotenv/config'; // Make sure to load environment variables

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

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/download/cv", (req, res) => {
  const cvPath = path.join(__dirname, "../attached_assets/Zephylarius Sitanggang_CV_2025-06-25_1751437801917.pdf");
  res.download(cvPath, "Zephylarius_Sitanggang_CV.pdf", (err) => {
    if (err) {
      console.error("Error downloading CV:", err);
      res.status(404).send("CV not found");
    }
  });
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Create a nodemailer transporter using your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Or your email provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

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

      // Setup email data
      const mailOptions = {
        from: `"${sanitizedData.name}" <${process.env.EMAIL_USER}>`, // Sender address
        to: process.env.EMAIL_USER, // Your receiving email address
        replyTo: sanitizedData.email, // Reply-to the person who filled the form
        subject: `New Contact Form Submission: ${sanitizedData.subject}`,
        text: `You have a new message from ${sanitizedData.name} (${sanitizedData.email}):\n\n${sanitizedData.message}`,
        html: `<p>You have a new message from <strong>${sanitizedData.name}</strong> (${sanitizedData.email}):</p><p>${sanitizedData.message}</p>`,
      };

      // Send the email
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
export default router;