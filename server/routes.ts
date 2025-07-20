import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

// Simple in-memory rate limiter
const rateLimiter = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5; // 5 requests per window

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userRequests = rateLimiter.get(ip) || [];
  
  // Clean old requests
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

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Rate limiting
      const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
      if (!checkRateLimit(clientIP)) {
        return res.status(429).json({ 
          success: false, 
          message: "Too many requests. Please try again later." 
        });
      }

      const validatedData = contactSchema.parse(req.body);
      
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(validatedData.name),
        email: sanitizeInput(validatedData.email),
        subject: validatedData.subject ? sanitizeInput(validatedData.subject) : undefined,
        message: sanitizeInput(validatedData.message)
      };
      
      // In a real application, you would:
      // 1. Send an email using a service like Nodemailer, SendGrid, etc.
      // 2. Store the message in a database
      // 3. Send notifications
      
      console.log("Contact form submission:", sanitizedData);
      
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
