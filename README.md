# yuv_project — Designer portfolio

Portfolio website for a 4th-year visual communication student. Built with Next.js + TypeScript + Tailwind, designed to run locally now and deploy to Vercel via GitHub later.

## Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS 4**
- **next/image** for image optimization
- **next/font** with Geist Sans / Geist Mono

## Local development

```bash
npm install      # only needed once
npm run dev      # starts http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Project structure

```
src/
  app/
    layout.tsx          # Site shell: <Nav>, <Footer>, metadata
    page.tsx            # Homepage — hero + project grid
    about/page.tsx      # About page
    work/[slug]/page.tsx  # Project detail page (statically generated)
    globals.css         # Tailwind import + theme variables
  components/
    Nav.tsx
    Footer.tsx
    ProjectCard.tsx
  content/
    projects.ts         # Project data (edit this to add work)
  lib/
    site.ts             # Designer name, tagline, contact, socials
public/
  projects/<slug>/      # Project images live here
```

## Adding a project

1. Drop images into `public/projects/<your-slug>/`.
2. Add an entry to `projects` in `src/content/projects.ts`:

```ts
{
  slug: "my-project",
  title: "My Project",
  year: 2026,
  tags: ["Branding", "Print"],
  summary: "One or two sentences about the project.",
  cover: "/projects/my-project/cover.jpg",
  images: ["/projects/my-project/01.jpg", "/projects/my-project/02.jpg"],
}
```

The homepage grid and `/work/my-project` page render automatically.

## Editing personal info

Update `src/lib/site.ts` — name, tagline, bio, email, social links.

## Deployment (later)

When ready:

1. Create a GitHub repo and push this folder to it.
2. Import the repo at [vercel.com/new](https://vercel.com/new). No config needed — Vercel auto-detects Next.js.
3. Every push to `main` deploys to production; PRs get preview URLs.
