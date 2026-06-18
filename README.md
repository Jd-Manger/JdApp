# Company JD Manager

A frontend-only SaaS-style job-description manager built from the supplied Stitch references. It uses React, TypeScript, Vite, and Supabase directly—there is no custom backend or service-role key.

## Features

- Supabase email/password authentication and protected routes
- Company create/edit/list/detail workflows
- JD library with search, filters, status badges, skills, detail views, clone, and soft archive/restore
- Immutable JD snapshots: every edit or restore creates a new version
- Responsive Stitch-matched desktop and mobile interface
- Local demo mode when Supabase variables are absent (use any non-empty email/password)

## Local setup

1. Install dependencies: `npm install`
2. Create a Supabase project.
3. Open Supabase **SQL Editor** and run [`supabase/schema.sql`](supabase/schema.sql).
4. In Supabase Authentication, create an email/password user (or enable sign-ups if desired).
5. Copy `.env.example` to `.env.local` and add:

   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

6. Start the app: `npm run dev`

Only the public anon key belongs in the frontend. Never use a Supabase service-role key here. Row Level Security in the supplied schema ensures each authenticated user can only access their own companies, JDs, and versions.

## Vercel deployment

Import this folder into Vercel, keep the detected Vite settings, and add the two `VITE_` environment variables. The included `vercel.json` provides SPA route rewrites. Supabase's free plan and Vercel's free plan are sufficient for normal development and small deployments.

## Design references

The original Stitch exports are preserved under `stitch-references/` for comparison. `screen.png` and `code.html` were used as the visual source of truth.
