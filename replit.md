# replit.md

## Overview

This is a landing page application for **Stash Club** — a luggage storage membership service. Users can sign up with their email for a £1.99 membership that gives them 50% off luggage storage for a year. The app is a full-stack TypeScript application with a React frontend and Express backend, backed by PostgreSQL.

The core flow is simple: a single-page marketing site with a hero section, feature cards, and a signup modal. Users enter their email, get assigned a unique code, and are directed to a Stripe payment link to complete their purchase.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — currently only `/` (Home) and a 404 page
- **Styling**: Tailwind CSS with CSS variables for theming. Brand color is `#026FE3`. Fonts are DM Sans (headings) and Roboto (body), loaded via Google Fonts
- **UI Components**: Shadcn/ui (new-york style) with Radix UI primitives. Components live in `client/src/components/ui/`
- **Animations**: Framer Motion for scroll-triggered animations and transitions
- **State/Data Fetching**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod resolver for validation
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend
- **Framework**: Express 5 on Node.js, written in TypeScript (run via `tsx` in dev)
- **API**: Single REST endpoint `POST /api/users` for email signup
- **Build**: Custom build script using esbuild for server and Vite for client. Production output goes to `dist/`
- **Dev Server**: Vite dev server is integrated as Express middleware with HMR support via `server/vite.ts`
- **Static Serving**: In production, the built client is served from `dist/public/` with SPA fallback

### Database
- **Database**: PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema**: Defined in `shared/schema.ts` — single `users` table with fields: `id`, `email`, `code`, `paymentStatus`, `createdAt`
- **Migrations**: Use `drizzle-kit push` (`npm run db:push`) to sync schema to database
- **Storage Layer**: `server/storage.ts` provides a `DatabaseStorage` class implementing `IStorage` interface for data access

### Shared Code
- `shared/schema.ts` — Drizzle table definitions and Zod validation schemas shared between client and server
- `shared/routes.ts` — API route contract definitions (path, method, input/output schemas) used by both frontend hooks and backend handlers

### Key Design Decisions
1. **Shared schema pattern**: The `shared/` directory contains code used by both client and server, ensuring type safety across the full stack. Zod schemas derived from Drizzle tables are used for both server-side validation and client-side form validation.
2. **Storage interface**: `IStorage` interface in `server/storage.ts` abstracts database operations, making it possible to swap implementations.
3. **Stripe integration approach**: Payment is handled via an external Stripe payment link (redirect) rather than embedded checkout, keeping the MVP simple. The `STRIPE_PAYMENT_LINK` constant in `Home.tsx` needs to be replaced with a real Stripe link.

## External Dependencies

- **PostgreSQL**: Required. Connection via `DATABASE_URL` environment variable. Used with `pg` driver and Drizzle ORM.
- **Stripe**: External payment link for checkout (not API-integrated yet — just a redirect URL). The placeholder `https://buy.stripe.com/YOUR_STRIPE_LINK` in `Home.tsx` needs a real value.
- **Google Fonts**: DM Sans and Roboto loaded via CDN in `client/index.html` and `client/src/index.css`.
- **Unsplash**: Referenced in requirements for stock travel/lifestyle images (not yet implemented).
- **connect-pg-simple**: Listed as a dependency for PostgreSQL session storage (sessions not yet implemented but infrastructure is present).