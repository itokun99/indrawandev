# Indrawan Lisanto - Portfolio & Microblog

A personal portfolio website with integrated microblog, built with **Astro** and **TypeScript**.

## Features

- 🎨 Modern dark/light theme with localStorage persistence
- 🌐 Bilingual support (Indonesian/English) with hreflang
- 📝 Content Collection-based blog with pagination
- 🏷️ Tag-based post organization
- 📡 RSS feeds for both locales
- ♿ Accessible with skip links and semantic HTML
- 🚀 Static generation with pre-rendered pages
- 🐳 Docker deployment ready

## Tech Stack

- **Astro 7** - Static site generator
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Content Collections** - Blog content management
- **@astrojs/rss** - RSS feed generation

## Getting Started

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Docker Deployment

```bash
# Build and run with Docker
docker build -t indrawan-dev .
docker run -p 8080:80 indrawan-dev
```

## Project Structure

```
src/
├── components/
│   ├── Header.astro      # Site header with nav
│   ├── Footer.astro      # Site footer
│   └── sections/         # Page sections
├── content/blog/         # Blog posts (id/en/)
├── layouts/
│   └── BaseLayout.astro  # SEO head + theme bootstrap
├── lib/
│   ├── data.ts           # JSON data exports
│   ├── i18n.ts           # Internationalization
│   ├── posts.ts          # Blog post helpers
│   └── dates.ts          # Date formatting
├── pages/
│   ├── index.astro       # Indonesian home
│   ├── en/index.astro    # English home
│   ├── blog/[...page].astro   # Blog listings
│   ├── blog/[...slug].astro # Individual posts
│   ├── sitemap.xml.ts    # XML sitemap
│   └── rss.xml.ts        # RSS feed
└── styles/
    └── global.css        # Tailwind + custom styles
```

## Blog Content

Blog posts are stored in `src/content/blog/` with language folders:
- `id/` - Indonesian posts
- `en/` - English posts

Each post uses MDX frontmatter:
```yaml
---
title: "Post Title"
description: "Brief description"
pubDate: 2025-01-15
tags: ["tag1", "tag2"]
lang: "id"
---
```

## Localization

The site supports two languages:
- `id` - Indonesian (default)
- `en` - English

Translation keys are managed in `src/lib/i18n.ts`.

## SEO

- Automatic Open Graph tags
- Twitter cards
- JSON-LD structured data
- hreflang alternates
- XML sitemap
- robots.txt

## Deployment

### Vercel

```bash
vercel deploy
```

### Netlify

```bash
netlify deploy --prod
```

### Docker

See Dockerfile in root directory.

## License

MIT
