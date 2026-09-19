# PROJECT KNOWLEDGE BASE

**Generated:** 2026-09-19
**Commit:** ec18ad8
**Branch:** main

## OVERVIEW
Personal portfolio site (Indrawan Lisanto, package name `my-v0-project`).
Next.js 15 App Router + TypeScript + Tailwind 3 + shadcn/ui + react-three-fiber.
Single-page app; all content rendered by `app/page.tsx`, data-driven from
`data/json/*.json` via `lib/data.ts`. i18n en/id via `lib/i18n.ts`.

## STRUCTURE
```
indrawandev/
├── app/            # Next App Router: page (whole site), layout, SEO files, globals.css
├── components/     # atomic tiers (3d, atoms, molecules, organisms, providers, ui) — see its AGENTS.md
├── data/json/      # all site content (web-config, personal-info, work-experience, social-link)
├── lib/            # data.ts getters, i18n.ts (t/lang), utils.ts (cn only)
├── public/         # icons + v0 placeholder images
├── styles/         # DEAD duplicate globals.css (app/globals.css is the live one)
└── MULTI           # DEAD stale copy of an old layout.tsx — reference only, never imported
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Edit any site content | `data/json/*.json` | No backend; getters in `lib/data.ts` return keys |
| Edit hero/3D scene | `components/3d/hero-scene.tsx` | Only live file under components/ besides theme-toggle + ui primitives |
| Routing / metadata / fonts | `app/layout.tsx`, `app/manifest.ts`, `app/robots.ts`, `app/sitemap.ts` | All read `getWebConfig().site` |
| Translations | `lib/i18n.ts` | `translations{en,id}`, `t(lang, key)` dot-path, missing key → key itself |
| Theme | `components/providers/theme-provider.tsx` | next-themes, attribute="class", default dark |

## CODE MAP
(codegraph unavailable — no `.codegraph/` index; LSP only)

| Symbol | Type | Location | Refs | Role |
|--------|------|----------|------|------|
| `getPersonalInfo` | getter | lib/data.ts:6 | 9 | hero/contact data source |
| `getProjects` | getter | lib/data.ts:11 | 5 | projects data source |
| `cn` | fn | lib/utils.ts:4 | 12 | shadcn class merge (clsx + tailwind-merge) |
| `Button` | component | components/ui/button.tsx | 17 | most-used ui primitive |
| `HeroScene` | component | components/3d/hero-scene.tsx | 1 | Canvas scene, rendered at app/page.tsx:148 |
| `t` / `getLanguage` | fns | lib/i18n.ts:86,94 | site-wide | i18n lookup + browser-lang detect (`id` prefix → `id`, else `en`) |

## CONVENTIONS
- Package manager: **pnpm** (`pnpm-lock.yaml`; never npm/yarn/bun).
- TS alias `@/*` → repo root (no `src/`; shadcn aliases in `components.json` match).
- Data access: ONLY through `lib/data.ts` getters; components must not import `data/json` directly.
- Text: ALL user-facing strings via `t(lang, key)` from `@/lib/i18n` — never hardcode English.
- `"use client"` at top of interactive components; layout-level files stay server.
- shadcn/ui primitives: never hand-edit styling outside cva variants; regenerate via shadcn CLI.

## ANTI-PATTERNS (THIS PROJECT)
- **Do NOT edit the components tier tree to add site behavior**: `app/page.tsx`
  inlines ALL sections (header, hero, skills, experience, projects, videos,
  connect, footer) and imports none of `components/organisms/*` or
  `components/molecules/*` (verified by import graph). That tree is an unused
  v0 scaffold — several of its files reference nonexistent ui primitives
  (`sheet`, `input`, `textarea`, `label`) and would fail a strict TS build.
- Never rely on build-time type/lint checks: `next.config.mjs` sets
  `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` to true.
- Dead files — do not "fix" or import: `components/theme-provider.tsx` (real one is
  `components/providers/theme-provider.tsx`), `styles/globals.css`,
  root `MULTI`.
- Unused deps (`expo`, `react-native`, `expo-gl`, `framer-motion` absent — animation is
  Tailwind + three.js only): do not add code around them.

## UNIQUE STYLES
- Hardcoded metadata in `app/layout.tsx` with `generator: 'v0.app'`; fonts Poppins
  (`--font-sans`) and Kode_Mono (`--font-mono`) wired via CSS variables.
- Tailwind custom tokens: `text-mobile-h1/h3/body/small`, `gradient-text`, `container`;
  non-standard color entries `primary.rgb`, `accent.secondary` in tailwind.config.ts.
- Dark mode `darkMode: ["class"]`, default theme dark (`defaultTheme="dark"`).

## COMMANDS
```bash
pnpm dev     # next dev
pnpm build   # next build (TS/lint errors ignored by config)
pnpm lint    # next lint
pnpm start   # next start
```
No test script exists.

## NOTES
- `postcss.config.mjs` has only the tailwindcss plugin — no autoprefixer (dep exists, unused).
- tailwind.config content globs include nonexistent `./pages` and `./src` dirs.
- `images.unoptimized: true` in next.config (next/image is not optimized).
- `data/json/work-experience.json` has 12 experience entries; `web-config.json`
  carries skills(3 categories), projects(2 featured + 14 other), testimonials(3),
  featuredInsights(6), youtubeVideos(4).
