# Portfolio Website - Zephylarius Sitanggang

## Overview

This is a modern, Apple-inspired portfolio website built with React, TypeScript, and Express.js. The project showcases Zephylarius Sitanggang's expertise in cybersecurity and event management through an elegant liquid glass design aesthetic. The application features a full-stack architecture with a React frontend, Express backend, and PostgreSQL database integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom Apple-inspired design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: GSAP for smooth animations and scroll-triggered effects
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **API Design**: RESTful endpoints with Zod validation

### Design Philosophy
- **Visual Identity**: Apple liquid glass aesthetic with glassmorphism effects
- **Color Scheme**: Dark theme with blue, purple, and neutral gradients
- **Typography**: Inter font family for modern readability
- **Responsive Design**: Mobile-first approach with fluid scaling
- **Performance**: Optimized with lazy loading and efficient animations

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scroll and mobile menu
- **HeroSection**: Landing area with animated background elements
- **AboutSection**: Dual-column layout showcasing cybersecurity and event management expertise
- **ExperienceSection**: Timeline-based experience showcase with colored indicators
- **SkillsSection**: Animated skill bars and framework proficiency display
- **ProjectsSection**: Project cards with technology tags and achievements
- **ContactSection**: Interactive contact form with validation
- **Footer**: Social links and professional information

### Backend Services
- **Contact API**: Form submission handling with email validation
- **User Management**: Basic user schema with authentication structure
- **Storage Layer**: Memory-based storage with database migration support
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Schema Validation**: Drizzle-Zod integration for type-safe database operations
- **Migrations**: Automated schema migrations with Drizzle Kit

## Data Flow

### Client-Side Flow
1. User interacts with portfolio sections through smooth scroll navigation
2. GSAP animations trigger based on scroll position and user interactions
3. Contact form submissions are validated client-side before API calls
4. TanStack Query manages server state and caching for API responses

### Server-Side Flow
1. Express server handles API routes with middleware for logging and error handling
2. Contact form submissions are validated using Zod schemas
3. Database operations use Drizzle ORM with type-safe queries
4. Response data is formatted and returned with appropriate status codes

### Animation System
1. GSAP ScrollTrigger monitors scroll position for animation timing
2. Glass card components animate into view with staggered timing
3. Background elements float with continuous animation loops
4. Skill bars animate width based on proficiency percentages

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI component primitives
- **drizzle-orm**: Type-safe database ORM
- **gsap**: High-performance animations
- **wouter**: Lightweight React router
- **zod**: Schema validation and type inference

### Development Tools
- **Vite**: Build tool with React plugin and runtime error overlay
- **TypeScript**: Type safety and development experience
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production builds

### Design Resources
- **Inter Font**: Modern web typography
- **Lucide React**: Icon library for UI elements
- **class-variance-authority**: Component variant management

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite development server with instant updates
- **Error Handling**: Runtime error modal for development debugging
- **Database**: Local PostgreSQL with Drizzle migrations
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Frontend**: Vite production build with optimized assets
- **Backend**: ESBuild compilation to single JavaScript file
- **Static Assets**: Served from dist/public directory
- **Database**: Neon serverless PostgreSQL for scalability

### Performance Optimizations
- **Asset Optimization**: Vite handles code splitting and tree shaking
- **Font Loading**: Preconnect to Google Fonts for faster loading
- **Image Optimization**: Responsive images with proper loading attributes
- **Animation Performance**: GSAP hardware acceleration for smooth animations

## Changelog

Changelog:
- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.