# ShlGrow Website

## Overview
ShlGrow is a professional YouTube growth agency website built with React, TypeScript, Express, and Vite. The site showcases the agency's services for helping creators, influencers, and brands grow their YouTube presence through 360-degree management, researching, scripting, editing, and growth strategies.

## Project Architecture

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Backend**: Express.js server
- **Build Tool**: Vite
- **Database**: PostgreSQL (via Neon)
- **UI Components**: Radix UI components with Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Routing**: Wouter (client-side routing)
- **Authentication**: Passport.js with local strategy

### Project Structure
```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   │   ├── examples/    # Example component variations
│   │   │   └── ui/          # Reusable UI components (Radix)
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions and React Query setup
│   │   ├── pages/       # Page components (home, privacy-policy, not-found)
│   │   ├── App.tsx      # Main app component
│   │   └── main.tsx     # Entry point
│   └── index.html       # HTML template
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Database storage layer
│   └── vite.ts          # Vite dev server integration
├── shared/              # Shared code between frontend and backend
│   └── schema.ts        # Database schema (Drizzle ORM)
└── attached_assets/     # Static assets (images)
```

### Database Schema
The application uses PostgreSQL with Drizzle ORM. Current schema includes:
- **users** table: User authentication with username and password

## Development

### Running the Project
The development server runs on port 5000 and serves both the frontend and backend:
```bash
npm run dev
```

The server is configured to:
- Bind to 0.0.0.0:5000 (required for Replit environment)
- Allow all hosts in development (proxy-friendly)
- Use Vite HMR for hot module replacement
- Serve the React app through Express middleware

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (frontend + backend)
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes

### Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (automatically configured in Replit)
- `PORT` - Server port (defaults to 5000)
- `NODE_ENV` - Environment mode (development/production)

## Features

### Current Pages
1. **Home** - Main landing page with sections:
   - Hero section with CTA
   - Services overview
   - Why YouTube section
   - Statistics
   - Portfolio showcase
   - Testimonials
   - Why Choose Us
   - Contact form
   - Footer

2. **Privacy Policy** - Legal information page

### UI Components
The project includes a comprehensive set of Radix UI components styled with Tailwind CSS:
- Buttons, inputs, forms
- Dialogs, dropdowns, menus
- Cards, accordions, tabs
- Toasts, tooltips, popovers
- And many more...

## Deployment
The application is configured for Replit Autoscale deployment:
- **Build**: `npm run build` - Creates optimized production build
- **Start**: `npm run start` - Runs production Express server
- Static files are served from `dist/public`
- Backend runs on the same port as frontend (5000)

## Recent Changes
- **2025-11-20**: GitHub Import Setup (Fresh Clone)
  - Extracted project from zip archive to root directory
  - Installed npm dependencies (478 packages)
  - Vite config already configured with `allowedHosts: true` for Replit proxy compatibility
  - Server already configured to bind to 0.0.0.0:5000 for Replit environment
  - Configured "dev" workflow on port 5000 with webview output
  - Set up Autoscale deployment configuration:
    - Build command: `npm run build`
    - Start command: `npm run start`
  - Verified development server is running and responding correctly
  - Website loading successfully with blue/black dark theme
  - Note: Currently using in-memory storage (MemStorage), PostgreSQL database not provisioned

- **2025-11-18**: Blue + Black Dark Theme Conversion
  - Complete theme transformation to premium blue/black dark aesthetic:
    - Deep navy backgrounds (#0f172a) throughout the entire site
    - Electric blue (#3b82f6) and cyan (#06b6d4) accent colors
    - All teal color references replaced with blue variants
  - Added premium visual effects:
    - Animated floating particles and geometric shapes in hero section
    - Blue border glow effects on all cards (hover states)
    - Blue→cyan gradient buttons with animated glow
    - Blue overlay on portfolio thumbnails with hover scale
    - Dark-themed contact form inputs with blue focus glow
    - Anime sparkles (✦) positioned around all section headings
    - Blue→cyan gradient for active carousel dot indicators
  - Updated all icon colors from teal to blue throughout components
  - Removed all scrollbars (vertical and horizontal) while maintaining scroll functionality
  - Layout structure preserved 100% from original design

- **Previous**: Services & Testimonials Sections Enhancement
  - Updated both Services and Testimonials sections to use carousel with dot navigation
  - Both sections display 4 items per slide in a 2x2 grid layout (responsive: 2 columns on desktop, 1 on mobile)
  - Services section: 7 total services split across 2 slides (4 + 3)
  - Testimonials section: 6 total testimonials split across 2 slides (4 + 2)
  - Added interactive dot indicators for slide navigation below each carousel
  - Implemented smooth transitions between slides with loop functionality
  - Active dot highlighted with gradient color
  - Users can click dots to jump to specific slides or swipe/drag to navigate

## Notes
- The Vite config is already set up to allow all hosts in development mode (`allowedHosts: true`)
- Server binds to 0.0.0.0 to work properly in Replit's environment
- Database migrations are handled via Drizzle Kit
- The project uses ESM modules throughout
