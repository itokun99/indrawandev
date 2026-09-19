# astro-microblog-portfolio - Work Plan

## TL;DR (For humans)
**What you'll get:** Your portfolio rebuilt on Astro — same look, same content, now Indonesian by default with an English version — plus a real microblog: you write plain Markdown files in the repo and the site gains a blog index, post pages, tag pages, RSS feeds, and search-engine metadata. It still deploys to Vercel with zero config, and a Docker file ships alongside so you can also self-host it on your own server with Bun.

**Why this approach:** Posts live as Markdown files in the repo (your choice), so the whole site is fully static — fast, cheap, hostable anywhere. Removing the 3D hero (your choice) means no JavaScript framework ships to visitors at all: pure HTML/CSS plus a few lines of vanilla JS for theme and menu.

**What it will NOT do:** It will not redesign the look, write your posts for you (it ships clearly-marked samples you replace), or add comments/search/newsletter. It will not touch your live site until you merge the branch yourself.

**Effort:** Large
**Risk:** Medium - the new-framework dependency swap is the likeliest hiccup; every wave has a hard build gate and screenshot QA to catch it early.
**Decisions to sanity-check:** Indonesian becomes the DEFAULT language at `/` and English moves to `/en/` (previously English was implicit); the 3D hero is gone with no replacement visual; React and ~45 unused packages are deleted entirely.

Your next move: run the high-accuracy plan review that is already queued (default-on), then execute with `/ulw-execute astro-microblog-portfolio`. Full execution detail follows below.

---

> TL;DR (machine): Large / Medium risk / Next.js 15 portfolio -> Astro 7 static site, id-default i18n, Markdown microblog (collections + pagination + tags + RSS + sitemap), zero client JS framework, Vercel + Bun-Docker deploy targets

## Scope
### Must have
- In-place conversion of this repo from Next.js 15 App Router to Astro 7 (current 7.3.3), static output, pnpm, git history preserved. NO `create astro` wizard (non-deterministic) — a hand-written minimal skeleton instead.
- All six live sections (header/nav, hero, skills, experience, projects, videos, connect, footer) ported 1:1 to `.astro` components, driven by the existing `data/json/*.json` content (moved to `src/data/`) through parity getters in `src/lib/data.ts`.
- i18n: Indonesian as `defaultLocale` served UNPREFIXED at `/`, English at `/en/`, via `i18n: { locales: ["id","en"], defaultLocale: "id", routing: { prefixDefaultLocale: false } }`. The existing `translations` dictionary moves to `src/lib/i18n.ts`, extended with `blog.*` keys in both languages; `t(lang, key)` keeps its dot-path + key-on-miss semantics. Runtime `getLanguage()` browser detection is deleted (impossible at build time).
- Theme: dark default + working light/dark toggle as a tiny vanilla `<script is:inline>` (localStorage + `.dark` class, applied before first paint). No next-themes, no React.
- Microblog from local Markdown, Astro 7 Content Layer API ONLY (legacy `type: 'content'` is a hard config error in Astro 7): `src/content.config.ts` with a `glob` loader over `src/content/blog/{id,en}/**/*.md`, zod schema, entry ids `${lang}/${slug}` via a custom `generateId`.
- Blog routes: `/blog` + `/en/blog` listing with pagination (`[...page].astro`, 10/page); `/blog/[...slug]` + `/en/blog/[...slug]` post pages; `/blog/tags/[tag]` + `/en/blog/tags/[tag]` tag pages; `/rss.xml` + `/en/rss.xml` via `@astrojs/rss`.
- SEO infra: per-page title/description/canonical/OG/Twitter meta; `robots.txt` endpoint preserving the existing `https://indrawan.dev/sitemap.xml` contract; hand-rolled `src/pages/sitemap.xml.ts` endpoint (NOT `@astrojs/sitemap`, which emits `sitemap-index.xml` and would break that contract); `site.webmanifest` replacing `app/manifest.ts`; JSON-LD (`BlogPosting` per post, `Blog` on listings, `BreadcrumbList` on posts); hreflang alternates for paired translations and home pages.
- One source of truth for post filtering/ordering: `src/lib/posts.ts` `postsFor(lang)` (draft exclusion in PROD, future-dated exclusion, pubDate desc + `id` tiebreak). Every consumer (listing, tags, RSS, sitemap, JSON-LD) uses it.
- Deterministic dates: `src/lib/dates.ts` with `Intl.DateTimeFormat({ timeZone: 'UTC' })`; builds must be identical under `TZ=Asia/Jakarta` and `TZ=America/New_York`.
- Styling fidelity: Tailwind 3.4 + `tailwind.config.ts` + `app/globals.css` ported verbatim to `src/styles/global.css` via plain PostCSS (NO `@astrojs/tailwind`, NO Tailwind 4). The pre-existing missing variables `--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--accent-foreground` MUST be defined (values from the dead `styles/globals.css:19-26`).
- Fonts: Astro's stable `fonts` config with `fontProviders.fontsource()` for Poppins (`--font-sans`) and Kode Mono (`--font-mono`), `<Font>` from `astro:assets` in the layout head, registered in Tailwind `fontFamily`.
- Zero client JS framework: React, react-dom, all `@radix-ui/*`, three, `@react-three/*`, `lucide-react`, `next-themes` removed; the handful of used lucide icons become inline SVGs.
- Cleanup: delete `app/`, `components/`, `styles/`, root `MULTI`, `next.config.mjs`, `components.json`; prune the ~45 unused packages the dependency census flagged (`expo*`, `react-native`, `recharts`, `embla-carousel-react`, `cmdk`, `vaul`, `sonner`, `react-hook-form`, `@hookform/resolvers`, `input-otp`, `react-day-picker`, `react-resizable-panels`, `geist`, `date-fns`, `autoprefixer`, root `zod` + the rest of the radix set).
- Deploy: Vercel zero-config static (primary) AND a multi-stage `Dockerfile` + `.dockerignore` for Bun self-hosting (`dist/` served by a minimal Bun static server).
- Seed content: 3 sample posts (2 id + 1 en, one en/id pair via `translationKey`), clearly titled as samples, demonstrating tags and no-`heroImage` posts.
- `README.md` updated for the new stack, commands, and both deploy paths.

### Must NOT have (guardrails, anti-slop, scope boundaries)
- NO visual redesign: same layout, same classes, same sections, same content. Visual drift is a defect, not a feature.
- NO Tailwind 4 upgrade, NO `@astrojs/tailwind`, NO new CSS framework.
- NO React in the shipped site (no `@astrojs/react`). If a wave finds React unavoidable, STOP and escalate rather than adding it.
- NO `@astrojs/sitemap` (breaks the robots contract), NO MDX (plain `.md` only), NO comments/search/newsletter/analytics.
- NO runtime language auto-detection and NO Accept-Language redirects; language switching is explicit links only.
- NO changes to content values in `data/` (the 12 experiences, projects, videos, socials keep their meaning; only the location moves under `src/`).
- NO merge or push to `main`: all work on `feat/astro-migration`; merging is the user's explicit act because Vercel auto-deploys `main`.
- NO new test framework (repo has none; QA is agent-executed per the Verification strategy).
- NO unrelated config edits (`~/.omo/omo.jsonc` etc.) and no commits outside the Commit strategy.

## Verification strategy
> Zero human intervention - all verification is agent-executed.
- Test decision: **none** — no test framework exists in this repo (`next.config.mjs` even disabled TS and ESLint gates). All QA is agent-executed against the build output, which for a static site IS the product.
- Primary channel: `pnpm build` exit code 0 plus assertions on `dist/` artifacts (`test -f`, `grep -q`, `xmllint --noout`, `node -e` JSON parse for JSON-LD), run exactly as each todo's QA scenarios specify, with raw output captured under `.omo/evidence/astro-microblog-portfolio/task-<N>/`.
- Real-surface channel: `pnpm preview` on a fixed port + `curl -fsS` status/content checks for pages, `/rss.xml`, `/sitemap.xml`, `/robots.txt`; PLUS browser QA (Bun.WebView, or playwright-core against local Chrome) with screenshots at 1280px and 390px for visual parity and interactive islands (theme toggle, mobile menu).
- Boundary and mutation proofs for blog behavior: temporary fixture posts (draft, future-dated, malformed frontmatter, reserved slug, extra posts to force pagination) each proven to produce the documented build outcome, then removed in the same todo.
- TZ determinism proof: full build under `TZ=Asia/Jakarta` and `TZ=America/New_York`; `diff -r dist` must be empty.
- Docker deliverable: `docker build` when a daemon is reachable; otherwise the Dockerfile is statically reviewed and explicitly flagged UNVERIFIED in the handoff.

## Execution strategy
### Parallel execution waves
> Waves are batching guidance; the dependency matrix below is authoritative. Within a wave, todos touch disjoint files and may run as parallel background subagents (one per todo, routed per its `Recommended task executor category` line). A wave starts only when the previous wave's `pnpm build` is green: the build is a hard gate.

- Wave 1 — tool surgery: 1
- Wave 2 — skeleton: 2
- Wave 3 — styling + data + purge (parallel): 3, 4, 5, 6
- Wave 4 — layout and chrome: 7, 8, 9
- Wave 5 — sections (parallel): 10, 11, 12
- Wave 6 — home mirror + blog foundation: 13, 14
- Wave 7 — blog surfaces (parallel): 15, 16, 17, 18
- Wave 8 — sitemap + self-host: 19, 20
- Wave 9 — hardening: 21, 22
- Final wave (parallel): F1, F2, F3, F4

### Dependency matrix
| Todo | Depends on | Blocks | Can parallelize with |
| --- | --- | --- | --- |
| 1 | — | 2 | — |
| 2 | 1 | 3-22 | — |
| 3 | 2 | 7, 10-13 | 4, 5, 6 |
| 4 | 2 | 7 | 3, 5, 6 |
| 5 | 2 | — | 3, 4, 6 |
| 6 | 1 | 8, 10-16 | 3, 4, 5 |
| 7 | 2, 3, 4 | 10-18 | 8, 9 |
| 8 | 6, 7 | 12 | 9 |
| 9 | 2 | — | 7, 8 |
| 10 | 6, 7 | 13 | 11, 12 |
| 11 | 6, 7 | 13 | 10, 12 |
| 12 | 6, 7, 8 | 13, 22 | 10, 11 |
| 13 | 10, 11, 12 | 22 | 14 |
| 14 | 2, 6 | 15-19, 21 | 13 |
| 15 | 14, 7 | 21, 22 | 16, 17, 18 |
| 16 | 14, 7 | 19, 21, 22 | 15, 17, 18 |
| 17 | 14, 7 | 19, 21 | 15, 16, 18 |
| 18 | 14 | 21, 22 | 15, 16, 17 |
| 19 | 16, 17 | 21 | 20 |
| 20 | 2 | — | 19 |
| 21 | 15-19 | — | 22 |
| 22 | 12, 13, 15-19 | — | 21 |

## Todos
> Implementation + Test = ONE todo. Never separate.
<!-- APPEND TASK BATCHES BELOW THIS LINE WITH edit/apply_patch - never rewrite the headers above. -->
- [ ] 1. Swap toolchain: rewrite package.json for Astro + pnpm, drop Next
  What to do / Must NOT do: Create branch `feat/astro-migration` from `main`. Rewrite `package.json`: keep name `my-v0-project`; scripts `dev: astro dev`, `build: astro build`, `preview: astro preview`; dependencies ONLY `astro` (^7.3.3), `@astrojs/rss` (^4.0.19), `clsx`, `tailwind-merge`; devDependencies `typescript` (^5), `tailwindcss` (^3.4.17), `postcss` (^8.5), `@tailwindcss/typography` (latest v3-compatible), `tailwindcss-animate` (^1.0.7 - still required by `tailwind.config.ts:81` until and after todo 3 edits the plugins array), `@types/node` (^22). Run `pnpm install`. Do NOT delete source files yet (`app/` stays until todo 5), and do NOT add @astrojs/react, @astrojs/tailwind, @astrojs/mdx, @astrojs/sitemap, @astrojs/vercel.
  Parallelization: Wave 1 | Blocked by: - | Blocks: 2
  References (executor has NO interview context): `package.json` (61 runtime deps; census says only 16 are actually imported); `pnpm-lock.yaml`; `AGENTS.md` (pnpm is mandatory); verified current versions astro@7.3.3, @astrojs/rss@4.0.19; docs.astro.build/en/guides/migrate-to-astro/from-nextjs/
  Acceptance criteria (agent-executable): `pnpm install` exits 0; `pnpm exec astro --version` prints a 7.x version; `rg -c '"(next|react|react-dom|three|next-themes|lucide-react)"|@radix-ui|@react-three' package.json` reports 0 matches.
  QA scenarios: happy - `pnpm install && pnpm exec astro --version`, Evidence .omo/evidence/astro-microblog-portfolio/task-1/install.log | failure - temporarily remove `astro` from package.json, reinstall, `pnpm exec astro --version` must exit non-zero, restore, Evidence task-1/failure.log
  Commit: Y | build(deps): swap Next.js toolchain for Astro 7
  Recommended task executor category: unspecified-high (multi-file dependency surgery with real compatibility risk)

- [ ] 2. Astro skeleton: astro.config.mjs, tsconfig, placeholder page, first green build
  What to do / Must NOT do: Write `astro.config.mjs` with `site: 'https://indrawan.dev'` (that exact value comes from `data/json/web-config.json:2-9`) and `i18n: { locales: ['id','en'], defaultLocale: 'id', routing: { prefixDefaultLocale: false } }`. Rewrite `tsconfig.json` to extend `astro/tsconfigs/strict` and keep the `@/*` alias pointed at `./src/*` (the alias target MOVES from repo root into src). Add `src/env.d.ts` with `/// <reference types="astro/client" />`. Create a placeholder `src/pages/index.astro` containing only `<h1>WIP</h1>`. Update `.gitignore` for `dist/` and `.astro/`. Delete nothing else yet. Run `pnpm build`.
  Parallelization: Wave 2 | Blocked by: 1 | Blocks: 3-22
  References: `data/json/web-config.json:2-9`; `tsconfig.json:20-22` (current `@/* -> ./ *` alias); docs.astro.build/en/guides/internationalization/ (field is `i18n.routing.prefixDefaultLocale`); docs.astro.build/en/guides/migrate-to-astro/from-nextjs/ (source lives in `src/`, keep `public/` untouched)
  Acceptance criteria: `pnpm build` exits 0; `test -f dist/index.html`; `grep -q WIP dist/index.html`.
  QA scenarios: happy - full build + artifact grep, Evidence task-2/build.log | failure - set `site: 'not-a-url'`, `pnpm build` must exit non-zero, restore, Evidence task-2/failure.log
  Commit: Y | feat(astro): scaffold Astro 7 config, tsconfig, and skeleton
  Recommended task executor category: quick (mechanical scaffold against a verified config shape)

- [ ] 3. Port styling: src/styles/global.css, Tailwind globs, missing CSS variables
  What to do / Must NOT do: Copy `app/globals.css` verbatim to `src/styles/global.css`, then ADD the missing variables in BOTH `:root` and `.dark`: `--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--accent-foreground`, using the shadcn neutral values found in the dead `styles/globals.css:19-26` (light: `--primary: 0 0% 9%`, `--primary-foreground: 0 0% 98%`, `--secondary: 0 0% 96%`, `--secondary-foreground: 0 0% 9%`, `--accent-foreground: 0 0% 9%`; dark: `--primary: 0 0% 98%`, `--primary-foreground: 0 0% 9%`, `--secondary: 0 0% 15%`, `--secondary-foreground: 0 0% 98%`, `--accent-foreground: 0 0% 98%`). Edit `tailwind.config.ts`: content globs become `["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"]` and plugins gain `require("@tailwindcss/typography")`. Keep `postcss.config.mjs` unchanged. Import the stylesheet from the placeholder page to prove the pipeline. Do NOT alter any token value that already exists.
  Parallelization: Wave 3 | Blocked by: 2 | Blocks: 7, 10-13
  References: `app/globals.css:1-116` (live tokens/layers); `styles/globals.css:19-26` (read-only source of the missing values); `tailwind.config.ts:5-11` (globs), `:81` (plugins); exploration finding "Color-token gap" (outline Button / secondary Badge currently resolve to invalid colors)
  Acceptance criteria: `pnpm build` exits 0; `grep -q -- '--primary' src/styles/global.css`; the emitted CSS under `dist/_astro/*.css` contains both `.text-muted-foreground` and `--primary: 0 0% 9%`.
  QA scenarios: happy - build + the three greps, Evidence task-3/build.log | failure - point the content glob at a nonexistent directory, build a page using `text-muted-foreground`, assert that class is ABSENT from the emitted CSS, restore, Evidence task-3/failure.log
  Commit: Y | fix(styles): port global CSS into src and define missing shadcn variables
  Recommended task executor category: quick (verbatim port plus one targeted fix)

- [ ] 4. Fonts via the Astro Fonts API: Poppins and Kode Mono
  What to do / Must NOT do: Add a `fonts` array to `astro.config.mjs` (importing `fontProviders` from `astro/config`): `{ provider: fontProviders.fontsource(), name: 'Poppins', cssVariable: '--font-sans', options: { weights: [300,400,500,600,700], styles: ['normal'], subsets: ['latin'] } }` and `{ provider: fontProviders.fontsource(), name: 'Kode Mono', cssVariable: '--font-mono', options: { weights: [400,700], styles: ['normal'], subsets: ['latin'] } }`. In `tailwind.config.ts` keep `fontFamily.sans = ['var(--font-sans)','system-ui','sans-serif']` and ADD `fontFamily.mono = ['var(--font-mono)','monospace']` (the variable existed but was never mapped — this closes that gap). Layout wiring of `<Font>` happens in todo 7; this todo only proves the config compiles. If the `fonts` option is not available in the installed Astro minor, fall back to `@fontsource/poppins` + `@fontsource/kode-mono` with plain CSS imports and RECORD the deviation in the evidence directory.
  Parallelization: Wave 3 | Blocked by: 2 | Blocks: 7
  References: `app/layout.tsx:6-21` (current weights and variable names); `tailwind.config.ts:23-25`; docs.astro.build/en/guides/fonts/ (`fonts` option, `fontProviders.fontsource()`, `<Font>` from `astro:assets`, and its "Register fonts in Tailwind 3.0" tab)
  Acceptance criteria: `pnpm build` exits 0; `pnpm exec astro info` reports no font errors; if the config path was taken, `grep -q fontsource astro.config.mjs`.
  QA scenarios: happy - build green with the fonts config present, Evidence task-4/build.log | failure - set `name: 'NotARealFont123'`, build must exit non-zero, restore, Evidence task-4/failure.log
  Commit: Y | feat(fonts): register Poppins and Kode Mono via the Astro Fonts API
  Recommended task executor category: quick (single config change with a documented fallback)

- [ ] 5. Purge dead files and the unused dependency set
  What to do / Must NOT do: `git rm -r` exactly: `app/`, `components/`, `styles/`, `MULTI`, `components.json`, `next.config.mjs`. KEEP `postcss.config.mjs`, `tailwind.config.ts`, `README.md`, `AGENTS.md`, `public/`, `data/`, `lib/` (the last two move in todo 6, not here). Then re-verify `package.json` contains no dependency outside the todo-1 allowlist and remove any that slipped in. Do NOT touch `src/`, `.gitignore`, or `pnpm-lock.yaml` by hand.
  Parallelization: Wave 3 | Blocked by: 2 | Blocks: -
  References: exploration dead-tree census (the `components/{atoms,molecules,organisms}` tree is a closed dead island; 3 of its files import nonexistent UI primitives `input`/`textarea`/`label`/`sheet`/`progress`; `components/theme-provider.tsx` duplicates the live provider; `styles/globals.css` is a dead duplicate; root `MULTI` is a stale layout copy with no extension)
  Acceptance criteria: `rg --files | rg '(^app/|^components/|^styles/|^MULTI$|^components\.json$|^next\.config\.mjs$)'` returns nothing; `pnpm build` still exits 0.
  QA scenarios: happy - the rg filter is empty and the build is green, Evidence task-5/cleanup.log | failure - grep `dist/` for `AtomNucleus` (a symbol that only existed in the deleted hero scene), which must be absent, Evidence task-5/absence.log
  Commit: Y | chore: delete dead scaffold tree, stale duplicates, and unused deps
  Recommended task executor category: quick (bounded deletion list with grep-verifiable outcome)

- [ ] 6. Port the data and i18n layers into src/
  What to do / Must NOT do: `git mv data/json src/data` and `git mv lib src/lib`. Rewrite the JSON import specifiers in `src/lib/data.ts` to relative paths (`../data/...`). Keep ALL ten getters verbatim, including the currently unused `getTestimonials`, `getFeaturedInsights`, `getNavigation` (content parity, zero judgment calls). In `src/lib/i18n.ts` keep `translations` and `t()` verbatim, DELETE `getLanguage()`, export `type Lang = 'id' | 'en'`, and ADD a `blog` namespace to BOTH locales with keys: `title`, `backToList`, `published`, `updated`, `tags`, `readMore`, `prev`, `next`, `empty`, `sampleNote` — the Indonesian wording must be natural and terse. Do NOT translate the content inside the data JSON files.
  Parallelization: Wave 3 | Blocked by: 1 | Blocks: 8, 10-16
  References: `lib/data.ts:1-15`; `lib/i18n.ts:1-101`; `AGENTS.md` (data access only through getters); advisory note that route-carried language replaces runtime detection
  Acceptance criteria: `pnpm exec astro check` (or `pnpm exec tsc --noEmit` if `astro check` is unavailable) exits 0; `rg -n 'getLanguage' src/` returns nothing; `rg -n '@/data' src/` returns nothing.
  QA scenarios: happy - typecheck plus the two absence greps, Evidence task-6/check.log | failure - introduce a deliberate typo in one getter name inside a temporary consumer page, typecheck must fail, revert, Evidence task-6/failure.log
  Commit: Y | refactor(data): move data and i18n under src and add blog dictionary keys
  Recommended task executor category: quick (file moves, verbatim ports, small dictionary extension)

- [ ] 7. BaseLayout.astro with the full head contract and pre-paint theme script
  What to do / Must NOT do: Create `src/layouts/BaseLayout.astro` with props `{ title, description, lang: Lang, canonicalPath?, ogType?: 'website'|'article', ogImage?, alternates?: { id: string; en: string }, extraLd?: object[] }`. Head contract: charset/viewport; `<Font cssVariable="--font-sans" />` and `<Font cssVariable="--font-mono" />` from `astro:assets`; title/description; canonical computed as `new URL(canonicalPath ?? Astro.url.pathname, Astro.site)`; Open Graph type/title/description/url/`og:site_name` = indrawan.dev and `og:image` ONLY when the prop is set; `twitter:card` = summary_large_image and `twitter:creator` = @indrawandev; NO `<meta name="generator">` (the v0.app credit dies here); `theme-color` #050505; icon links for `/icon.svg`, `/icon-light-32x32.png`, `/icon-dark-32x32.png`, `/apple-icon.png`; `<link rel="manifest" href="/site.webmanifest">`; hreflang link set when `alternates` is provided (`id`, `en`, `x-default` -> the id URL). `<html lang={lang} class="dark">` with, BEFORE any stylesheet-dependent paint, an inline bootstrap script that reads `localStorage.theme`, falls back to `prefers-color-scheme`, and applies/removes the `dark` class (default dark). Import `../styles/global.css`. Body: the skip link to `#main-content` with the exact classes from the current page, then `<slot />`. A separate `Seo.astro` is allowed if it keeps BaseLayout readable; the emitted head must be identical. NO React, NO next-themes, NO hydration directives.
  Parallelization: Wave 4 | Blocked by: 2, 3, 4 | Blocks: 10-18
  References: `app/layout.tsx:24-84` (current metadata/viewport/theme contract); `app/page.tsx:47-49` (skip link); `public/` inventory (9 assets incl. the four icons above); docs.astro.build/en/guides/fonts/ (`<Font>` usage)
  Acceptance criteria: `pnpm build` exits 0; a smoke page using the layout produces `dist/index.html` containing `<html lang="id"`, `--font-sans`, `summary_large_image`, `og:site_name`, and the inline theme bootstrap; `grep -q 'v0.app' dist/index.html` fails (no match).
  QA scenarios: happy - build + the five greps, Evidence task-7/head.log | failure - render with `ogType: 'article'` and NO `ogImage`, assert the dist HTML contains no `og:image` tag, Evidence task-7/noog.log
  Commit: Y | feat(layout): add BaseLayout with SEO head and pre-paint theme bootstrap
  Recommended task executor category: unspecified-high (the central contract every later page depends on)

- [ ] 8. Site chrome: Header (nav, language links, theme toggle, mobile menu) and Footer
  What to do / Must NOT do: `src/components/Header.astro` mirrors the current header structure and classes exactly: sticky blurred bar, site title, desktop nav (`t(lang,'nav.*')` -> `#skills` etc.), a DESKTOP and a MOBILE language switcher that are plain `<a>` links to the provided `alternateUrl` prop (no selects, no JS state), a theme toggle `<button>` driven by an inline script that flips the `dark` class and persists `localStorage.theme`, and a mobile menu via `details`/`summary` or a tiny class-toggling script. `src/components/Footer.astro` mirrors the current footer; the year is computed at BUILD time. Vanilla scripts only; ZERO framework islands.
  Parallelization: Wave 4 | Blocked by: 6, 7 | Blocks: 12
  References: `app/page.tsx:51-119` (header markup, classes, behavior), `app/page.tsx:287-291` (footer); `lib/i18n.ts:3-84` (nav labels both locales)
  Acceptance criteria: `pnpm build` exits 0; `dist/index.html` contains `href="/en/"` and the inline theme-toggle script; the page ships NO framework hydration bundles for chrome (`grep -c 'is:inline' dist/index.html` >= 2 and no `astro-island` tags on the home page).
  QA scenarios: happy - build + markup greps, Evidence task-8/markup.log | failure (real-surface) - in a browser (Bun.WebView or playwright-core against local Chrome): click the theme toggle, assert the `html` class flips and `localStorage.theme` is set; reload and assert persistence; at 390px width open the mobile menu and screenshot, Evidence task-8/theme-toggle.png, task-8/mobile-menu.png
  Commit: Y | feat(chrome): port header and footer with vanilla theme and menu toggles
  Recommended task executor category: visual-engineering (interactive chrome proven through a real browser)

- [ ] 9. robots.txt and site.webmanifest endpoints
  What to do / Must NOT do: `src/pages/robots.txt.ts` emits EXACTLY `User-agent: *` / `Allow: /` / `Sitemap: https://indrawan.dev/sitemap.xml` (host from `getWebConfig().site.url`). `src/pages/site.webmanifest.ts` emits the JSON equivalent of the current manifest: name/short_name/description/start_url/scope/display `standalone`/background #ffffff/theme #000000/icons `placeholder-logo.png` (192 and 512) + `placeholder-logo.svg`. Content types `text/plain` and `application/manifest+json`. Do NOT change icon files in `public/`.
  Parallelization: Wave 4 | Blocked by: 2 | Blocks: -
  References: `app/robots.ts:1-13`; `app/manifest.ts:1-21`; `public/` inventory
  Acceptance criteria: preview server answers both endpoints; robots body matches the three lines byte-for-byte; the manifest parses as JSON and every icon `src` resolves to an existing file under `dist/`.
  QA scenarios: happy - `pnpm preview --port 4399` + `curl -fsS` both endpoints with bodies saved, Evidence task-9/curl.log | failure - temporarily change the sitemap host, assert the robots body no longer equals the contract string, restore, Evidence task-9/failure.log
  Commit: Y | feat(seo): add robots.txt and webmanifest endpoints
  Recommended task executor category: quick (two small static endpoints against a verbatim contract)

- [ ] 10. Hero and Skills sections (lang-parameterized .astro components)
  What to do / Must NOT do: `src/components/sections/Hero.astro`: TEXT-ONLY hero (the 3D scene is removed per user decision): name/role/subtitle from personal-info + `t(lang,'hero.*')`, the email `mailto:` button and the resume button with the SAME classes as today; the old two-column grid collapses to a single centered column capped at `max-w-2xl`. Do NOT add a replacement visual or avatar. `src/components/sections/Skills.astro`: verbatim port of the current skills block (category titles, skill chips). shadcn Button/Badge/Card class sets are INLINED as Tailwind classes (the ui primitives no longer exist).
  Parallelization: Wave 5 | Blocked by: 6, 7 | Blocks: 13
  References: `app/page.tsx:123-170`; `components/ui/badge.tsx` and `components/ui/button.tsx` (variant class source to inline); `data/json/web-config.json:26-53` (3 skill categories, 14 skills); `data/json/personal-info.json`
  Acceptance criteria: build green; rendered output contains `max-w-2xl` and every one of the 14 skill names from the JSON.
  QA scenarios: happy - build + a loop asserting each skill name is present, Evidence task-10/content.log | failure - render the sections with `lang="en"` and assert the Indonesian `hero.role` string is ABSENT (proves the lang prop actually flows), Evidence task-10/lang.log
  Commit: Y | feat(sections): port hero and skills to Astro components
  Recommended task executor category: visual-engineering (class-fidelity port with rendered proof)

- [ ] 11. Experience and Projects sections
  What to do / Must NOT do: `Experience.astro` and `Projects.astro`: verbatim ports. Experience shows all 12 entries with title/company/period/location/description, technologies `slice(0,5)` as outline chips, achievements `slice(0,3)` bullets. Projects renders `[...featured, ...other]` (16 cards) in the same grid, technologies `slice(0,3)`, Live Demo / Source Code buttons ONLY when the URL is not `#`, with ExternalLink/Github as INLINE SVGs (a small `Icon.astro` is fine; contract: zero icon dependencies). Card classes inlined from the old `card.tsx`.
  Parallelization: Wave 5 | Blocked by: 6, 7 | Blocks: 13
  References: `app/page.tsx:173-246`; `components/ui/card.tsx`; `data/json/work-experience.json` (12 entries); `data/json/web-config.json:77-223` (2 featured + 14 other; `other[]` has no image field - render none)
  Acceptance criteria: build green; the rendered page contains exactly 12 experience titles and 16 project titles (scripted grep counts); icon SVGs appear only where the URL is valid.
  QA scenarios: happy - build + the two count assertions, Evidence task-11/counts.log | failure - in a scratch copy set one project's `liveUrl` to `#`, assert that card has NO Live Demo link, restore, Evidence task-11/conditional.log
  Commit: Y | feat(sections): port experience and projects sections
  Recommended task executor category: visual-engineering (class-fidelity port with rendered proof)

- [ ] 12. Videos + Connect sections and the full Indonesian home page
  What to do / Must NOT do: `Videos.astro` (youtube watch links built from `videoId`, text-only cards with category + title) and `Connect.astro` (social buttons from social-link.json). Then replace the placeholder `src/pages/index.astro` with the real composition: BaseLayout > Header > main > Hero/Skills/Experience/Projects/Videos/Connect > Footer, `lang="id"`, title/description from the current metadata defaults. This todo ALSO runs the first full visual-parity QA against the CURRENT live site. Do NOT change copy or classes beyond what todos 10-11 established.
  Parallelization: Wave 5 | Blocked by: 6, 7, 8 | Blocks: 13, 22
  References: `app/page.tsx:249-291`; `data/json/web-config.json:308-349` (4 videos); `data/json/social-link.json` (7 links); `app/layout.tsx:24-59` (title/description source)
  Acceptance criteria: `pnpm build` exits 0; `dist/index.html` contains all six section anchors, the Indonesian strings `Keahlian` and `Pengalaman`, `lang="id"`, and the `#main-content` skip target.
  QA scenarios: happy - build + anchor/string greps, Evidence task-12/page.log | failure (real-surface) - screenshots of the new page at 1280px AND 390px compared against https://indrawan.dev (or the old `pnpm dev` render); write a short parity note listing any visual differences and their cause; font metrics may differ slightly, layout may not, Evidence task-12/desktop.png, task-12/mobile.png, task-12/parity-notes.md
  Commit: Y | feat(page): compose the Indonesian home page from section components
  Recommended task executor category: visual-engineering (first full-page parity gate)

- [ ] 13. English home mirror at /en/ with hreflang alternates
  What to do / Must NOT do: `src/pages/en/index.astro`: identical composition as the Indonesian home page with `lang="en"`; Header `alternateUrl` wires `/` <-> `/en/` on both pages; pass `alternates` to BaseLayout so both pages emit the `id` / `en` / `x-default` hreflang triplet. Pages exist explicitly; the i18n config exists for URL-shape validation only. NO redirect from `/` to `/en/` or back.
  Parallelization: Wave 6 | Blocked by: 10, 11, 12 | Blocks: 22
  References: docs.astro.build/en/guides/internationalization/ (`prefixDefaultLocale: false` semantics - default locale files live at the root of `src/pages/`); todo 12 composition
  Acceptance criteria: build green; `dist/en/index.html` exists, carries `lang="en"`, and contains the English strings `Skills`, `Experience`, `Senior Software Engineer`; the hreflang triplet appears in both `dist/index.html` and `dist/en/index.html`.
  QA scenarios: happy - build + greps, Evidence task-13/en.log | failure - assert `dist/index.html` does NOT contain `Senior Software Engineer` (catches dictionary bleed between locales), Evidence task-13/nobleed.log
  Commit: Y | feat(i18n): add English home mirror with hreflang alternates
  Recommended task executor category: quick (composition reuse with targeted assertions)

- [ ] 14. Blog content foundation: content.config.ts, posts helper, dates helper, seed posts
  What to do / Must NOT do: Create `src/content.config.ts` on the Astro 7 Content Layer API: `defineCollection({ loader: glob({ pattern: '{id,en}/**/*.md', base: './src/content/blog', generateId }), schema })`; `generateId` prefixes the language from the path (`id/` vs `en/`) and uses frontmatter `slug` for the slug part when present, otherwise the filename. Schema (zod from `astro:content`): `title` (min 1), `description` (min 1, max 200), `pubDate` (`z.coerce.date()`), `updatedDate` (optional), `tags` (default `[]`, trimmed/lowercased/deduped via transform), `draft` (default false), `lang` (enum `id` | `en`), `translationKey` (optional), `slug` (optional; lowercase-dash regex; refine rejecting `['index','tags','page','rss.xml','sitemap.xml','feed']`). Create `src/lib/posts.ts`: `isLive(entry)` (draft excluded only in PROD; `pubDate <= now`), `postsFor(lang)` (filter by id prefix + isLive, sort pubDate desc with `a.id.localeCompare(b.id)` tiebreak), `slugOf(entry)`; `src/lib/dates.ts`: `formatDate(d, lang)` using `Intl.DateTimeFormat('id-ID'|'en-US', { timeZone: 'UTC', day: 'numeric', month: 'short', year: 'numeric' })` and `toIsoUtc(d)`. Seed posts: `src/content/blog/id/contoh-pertama.md`, `src/content/blog/id/catatan-kedua.md` (`translationKey: hello-world`), `src/content/blog/en/hello-world.md` (`translationKey: hello-world`) with bodies clearly marked as samples. NO routes in this todo.
  Parallelization: Wave 6 | Blocked by: 2, 6 | Blocks: 15-19, 21
  References: verified Astro 7.3.3 behavior (legacy `type: 'content'` is a hard config error; the glob loader's default id honors frontmatter `slug`; duplicate ids throw `DuplicateContentEntrySlugError`); docs.astro.build/en/guides/content-collections/; `src/lib/i18n.ts` (`Lang`)
  Acceptance criteria: `pnpm build` exits 0 with the collection validated; the three seed files exist at the exact paths above; `rg -n "type: 'content'" src/` returns nothing.
  QA scenarios: happy - build + path assertions, Evidence task-14/build.log | failure (mutations) - add a temp post with `slug: "tags"`, build must exit NON-ZERO naming the file; add a temp post missing `title`, build must also exit non-zero; delete both temps and rebuild green, Evidence task-14/mutations.log
  Commit: Y | feat(blog): add content collection, post helpers, and seed posts
  Recommended task executor category: deep (version-sensitive content-layer contract)

- [ ] 15. Blog listings with pagination: /blog/[...page] and /en/blog/[...page]
  What to do / Must NOT do: `src/pages/blog/[...page].astro` (id) and `src/pages/en/blog/[...page].astro` (en) using `paginate(await postsFor(lang), { pageSize: 10 })`. `PostCard.astro` shows linked title, formatted date, description, tag chips. Empty state renders `t(lang,'blog.empty')`. The list container carries `data-post-count={page.data.length}` as an assertion hook. Prev/Next controls render only when `page.url.prev` / `page.url.next` exist. Pages 2+ carry `<meta name="robots" content="noindex,follow">`; page 1 is indexed. Rest-param form ONLY (first page unnumbered at `/blog/`).
  Parallelization: Wave 7 | Blocked by: 14, 7 | Blocks: 21, 22
  References: verified `paginate()` semantics from astro 7.3.3 dist source (rest form emits `/blog`, `/blog/2`, ...; an empty collection still emits exactly one page; exactly-`pageSize` posts emit NO page 2); cards reuse the classes established in todo 11
  Acceptance criteria: build green; `dist/blog/index.html` exists with `data-post-count="2"`; `dist/en/blog/index.html` with `data-post-count="1"`; `dist/blog/2/index.html` does NOT exist at this seed volume.
  QA scenarios: happy - build + path and count assertions, Evidence task-15/listing.log | failure (boundary mutation) - add 9 temporary id posts (11 total), build, assert `dist/blog/2/index.html` EXISTS with `data-post-count="1"` and `dist/blog/3/index.html` is ABSENT; delete temps, rebuild, assert the revert, Evidence task-15/boundary.log
  Commit: Y | feat(blog): add paginated listings for both locales
  Recommended task executor category: unspecified-high (multi-route surface with a boundary proof)

- [ ] 16. Post pages: /blog/[...slug] and /en/blog/[...slug] with article SEO and JSON-LD
  What to do / Must NOT do: `src/pages/blog/[...slug].astro` and `src/pages/en/blog/[...slug].astro` build paths from `postsFor(lang)`, passing `{ entry, prev, next }` computed from the SAME sorted array. Render the entry via the Content Layer `render(entry)` inside `<article class="prose ...">` (Typography plugin). Head: canonical, `og:type` article, `article:published_time` / `article:modified_time` as ISO UTC, `og:image` only with `heroImage`. Body: `<h1>` title, formatted date, optional updated line (`t` keys `blog.published` / `blog.updated`), tag chips LINKING to the todo-17 tag URLs, prev/next post links, back-to-list link. JSON-LD inline blocks: `BlogPosting` (headline, description, datePublished, dateModified when present, author `Person` name + url, mainEntityOfPage, inLanguage) and `BreadcrumbList` (Home > Blog > title). hreflang alternate ONLY when the other locale has a post with the same `translationKey`.
  Parallelization: Wave 7 | Blocked by: 14, 7 | Blocks: 19, 21, 22
  References: advisory sections on SEO fields, hreflang pairing, and the UTC date contract; docs.astro.build/en/guides/content-collections/ (render API); schema.org BlogPosting / BreadcrumbList
  Acceptance criteria: build green; `dist/blog/contoh-pertama/index.html` exists and contains `rel="canonical"`, `content="article"`, `"@type":"BlogPosting"`, `datePublished`; `dist/blog/catatan-kedua/index.html` (paired) contains `hreflang="en"` while the unpaired sample does NOT; every JSON-LD block parses as JSON.
  QA scenarios: happy - build + the grep/parse battery, Evidence task-16/post.log | failure - temporarily corrupt one seed frontmatter quote, build must fail naming the file, restore, Evidence task-16/failure.log
  Commit: Y | feat(blog): add post pages with article SEO and structured data
  Recommended task executor category: unspecified-high (the largest single-page contract in the plan)

- [ ] 17. Tag archives: /blog/tags/[tag] and /en/blog/tags/[tag]
  What to do / Must NOT do: `getStaticPaths` derives tag params from the SAME `postsFor(lang)` set, so empty tag pages are impossible by construction. Each tag page lists its posts with `PostCard`, an `#tag` heading, and a canonical; no pagination (documented, accepted at microblog scale). The tag chips emitted in todo 16 resolve to these URLs.
  Parallelization: Wave 7 | Blocked by: 14, 7 | Blocks: 19, 21
  References: todo 16 (chip links); advisory tag-derivation note
  Acceptance criteria: build green; for every tag used by the seed posts, `dist/blog/tags/<tag>/index.html` (and the `/en/` counterparts for en tags) exists and links to at least one post.
  QA scenarios: happy - derive expected tags from seed frontmatter and assert each dist path, Evidence task-17/tags.log | failure - a tag that appears ONLY on a temporary `draft: true` post must produce NO tag page in a PROD build; delete the temp, Evidence task-17/failure.log
  Commit: Y | feat(blog): add tag archive pages for both locales
  Recommended task executor category: quick (narrow dynamic route over the established helper)

- [ ] 18. Per-locale RSS feeds: /rss.xml and /en/rss.xml
  What to do / Must NOT do: `src/pages/rss.xml.ts` (id) and `src/pages/en/rss.xml.ts` (en) call `rss()` from `@astrojs/rss` with channel title/description from `t()` + site config, `site: context.site` (the build must fail loudly without it - todo 2 guarantees it), items mapping title, plain-text description, pubDate, link `/${lang === 'id' ? '' : 'en/'}blog/${slugOf(p)}/`, and `categories` from tags; `trailingSlash: true`. NO `content:encoded` (feeds stay lean).
  Parallelization: Wave 7 | Blocked by: 14 | Blocks: 21, 22
  References: verified `@astrojs/rss@4.0.19` behavior (relative links canonicalized against `site`; `site` is required and its absence fails the build; description text is entity-escaped; pubDate serialized with `toUTCString()`)
  Acceptance criteria: build green; `xmllint --noout dist/rss.xml dist/en/rss.xml` exits 0; item counts match live post counts (id = 2, en = 1); every item link begins `https://indrawan.dev/`; every `<pubDate>` matches the RFC-1123 weekday prefix.
  QA scenarios: happy - xmllint + count/link/date greps, Evidence task-18/rss.log | failure - add a temp post with `description: "a <b>bold</b> note"`, the built feed must contain `&lt;b&gt;` (escaping proof); delete the temp, Evidence task-18/escaping.log
  Commit: Y | feat(blog): add per-locale RSS feeds
  Recommended task executor category: quick (two thin endpoints over postsFor)

- [ ] 19. sitemap.xml endpoint and Blog structured data on listings
  What to do / Must NOT do: `src/pages/sitemap.xml.ts` emits a `urlset` containing `/`, `/en/`, `/blog/`, `/en/blog/`, every LIVE post in both locales (lastmod = `updatedDate ?? pubDate` as ISO), and every tag page; pagination pages 2+ are EXCLUDED. Content-Type `application/xml`. Add a `Blog` JSON-LD block (name, url, description, inLanguage) to both listing pages (small in-place edit of the todo-15 files). Verify the emitted set matches what `robots.txt` advertises. NO `@astrojs/sitemap`.
  Parallelization: Wave 8 | Blocked by: 16, 17 | Blocks: 21
  References: advisory sitemap shape and robots-parity rationale; `app/sitemap.ts:5-15` (current baseline contract); `app/robots.ts:12`
  Acceptance criteria: `xmllint --noout dist/sitemap.xml` exits 0; the `<loc>` count equals `4 + livePosts + tagPages` as computed by the assertion script; `grep -q 'https://indrawan.dev/sitemap.xml' dist/robots.txt`; the Blog JSON-LD parses on both listing pages.
  QA scenarios: happy - xmllint + the count script, Evidence task-19/sitemap.log | failure - add a temp future-dated post, its URL must NOT appear in the sitemap; delete the temp, Evidence task-19/future.log
  Commit: Y | feat(seo): add sitemap endpoint and Blog structured data
  Recommended task executor category: quick (one endpoint plus one JSON-LD block against exact counts)

- [ ] 20. Self-host deliverable: multi-stage Dockerfile, .dockerignore, README deploy docs
  What to do / Must NOT do: `Dockerfile` (multi-stage): stage 1 `node:22-alpine` with corepack pnpm -> `pnpm install --frozen-lockfile` -> `pnpm build`; stage 2 `oven/bun:1-alpine` copying ONLY `dist/` plus a ~10-line `server.ts` (`Bun.serve` static serving with index.html resolution and 404 passthrough), `EXPOSE 3000`, CMD `bun server.ts`. `.dockerignore` excludes `node_modules`, `dist`, `.git`, `.omo`, `.astro`. README gains a Deployment section: Vercel (import repo, Astro auto-detected, zero config) and self-host (`docker build -t indrawandev . && docker run -p 3000:3000 indrawandev`, plus the plain `pnpm preview` path). Do NOT add compose files, CI, or a registry push step.
  Parallelization: Wave 8 | Blocked by: 2 | Blocks: -
  References: docs.astro.build/en/guides/deploy/vercel/ (static sites deploy with zero configuration; no adapter needed); `package.json` (pnpm + frozen lockfile)
  Acceptance criteria: if a docker daemon is reachable: `docker build -t indrawandev-qa .` exits 0, `docker run -d -p 4321:3000` then `curl -fsS localhost:4321/` returns 200, and the container/image are removed afterwards (cleanup receipt recorded); otherwise the Dockerfile is statically reviewed line-by-line and flagged UNVERIFIED in the handoff. README contains both deploy sections.
  QA scenarios: happy - docker build/run/curl as above or the documented static review, Evidence task-20/docker.log | failure - `curl -fsS localhost:4321/nonexistent-page` must return 404 (not a 200 fallback), Evidence task-20/404.log
  Commit: Y | feat(deploy): add Bun multi-stage Dockerfile and deployment docs
  Recommended task executor category: quick (bounded infra artifact with a curl-verifiable contract)

- [ ] 21. Blog behavior hardening: fixture sweep and timezone determinism proof
  What to do / Must NOT do: Execute the fixture matrix against the REAL build: (a) a `draft: true` post is absent from listings, tags, RSS, and sitemap in the PROD build; (b) a future-dated post is excluded from those same surfaces; (c) with seed posts temporarily moved away, the build still emits `/blog/` with `data-post-count="0"` and the empty-state string; (d) two files deriving the same id fail the build (duplicate-slug error); (e) a reserved slug (`slug: "tags"`) fails the build; (f) TZ DETERMINISM: run `pnpm build` under `TZ=Asia/Jakarta` and under `TZ=America/New_York` and `diff -r` the two `dist/` trees - any difference is a defect to FIX in `dates.ts`/frontmatter handling, not to document. All temps are deleted afterwards and the tree is rebuilt green. This todo writes code ONLY to fix what the sweep exposes.
  Parallelization: Wave 9 | Blocked by: 15, 16, 17, 18, 19 | Blocks: -
  References: every blog todo's failure scenario (re-run here as one sweep); advisory date-pitfalls notes (bare `YYYY-MM-DD` parses as UTC midnight; quoted vs unquoted YAML dates; `z.coerce.date()` normalizes both)
  Acceptance criteria: all six sub-checks pass with raw output captured; the final build is green; `git status` shows NO leftover fixture files.
  QA scenarios: happy - the six-part sweep log, Evidence task-21/sweep.log and task-21/tz-diff.log | failure - each sub-check's negative observation is itself the failure proof and is captured before temps are removed
  Commit: Y | test(blog): execute fixture sweep and timezone determinism proof
  Recommended task executor category: deep (boundary reasoning over the whole blog surface)

- [ ] 22. Full visual and surface QA plus docs refresh
  What to do / Must NOT do: Browser QA of the FINISHED build: for each of `/`, `/en/`, `/blog/`, `/en/blog/`, one post per locale, and one tag page - screenshot at 1280px AND 390px, verify no blank/misframed/overlapping regions and no horizontal scroll at 390px; exercise the theme toggle (persists across reload) and the language links (click `/` -> `/en/` -> a post -> its paired post where one exists); confirm the browser console shows ZERO errors on every page. `curl -fsS -o /dev/null -w '%{http_code}'` returns 200 for every route above plus `/rss.xml`, `/en/rss.xml`, `/sitemap.xml`, `/robots.txt`, `/site.webmanifest` on `pnpm preview`. Rewrite `README.md` (stack, `pnpm dev/build/preview`, the content-authoring guide - where posts live and the frontmatter contract, both deploy paths) and regenerate the repo-root `AGENTS.md` so it describes the Astro reality (the current one is Next.js-shaped and would mislead future agents). Do NOT merge or push.
  Parallelization: Wave 9 | Blocked by: 12, 13, 15-19 | Blocks: -
  References: todo 12 parity notes; every route built by todos 13-19; `README.md` (v0 template text to replace); repo-root `AGENTS.md`
  Acceptance criteria: every curl is 200; zero console errors; every screenshot exists and was inspected; README and AGENTS.md describe Astro (not Next) and both deploy paths.
  QA scenarios: happy - the route/curl/screenshot battery + console log, Evidence task-22/status.log plus task-22/*.png | failure - request `/definitely-not-a-page` and capture the 404 handling, Evidence task-22/404.log
  Commit: Y | docs: refresh README and AGENTS.md for the Astro site; chore: full-surface QA
  Recommended task executor category: visual-engineering (real-surface QA across every public page)

## Final verification wave
> Runs in parallel after ALL todos. ALL must APPROVE. Surface results and wait for the user's explicit okay before declaring complete.
- [ ] F1. Plan compliance audit - for EVERY file path this plan names, run `test -e` (or `test ! -e` for deletions) and record results; re-run every acceptance command from todos 1-22 and confirm exit 0; raw outputs under `.omo/evidence/astro-microblog-portfolio/final/`. REJECT if any plan path is missing, any deleted file still exists, or any acceptance command fails.
- [ ] F2. Code quality review - adversarial read of the full branch diff: no React/Radix/three/next imports anywhere in `src/`; CSS class fidelity against the deleted `app/page.tsx`; no hardcoded English UI strings outside `src/lib/i18n.ts` (everything through `t()`); no lingering TODO/FIXME. REJECT on any hit.
- [ ] F3. Real manual QA - fresh `pnpm install --frozen-lockfile` and `pnpm build`, `pnpm preview`, then the browser scenario: open `/` (Indonesian renders; theme toggle persists across reload), follow the language link to `/en/`, open `/blog/`, open a post, click a tag, fetch `/rss.xml` and `/sitemap.xml` (200 and well-formed). Every step screenshot/logged. REJECT on any 404/500, console error, or broken link.
- [ ] F4. Scope fidelity - diff shipped scope against `## Scope`: every Must have is present and every Must NOT have is absent (spot-checks: no `@astrojs/react`, no Tailwind 4, `git diff main -- data/ src/data/` shows only path moves, no commits on `main`). REJECT on any unrecorded scope addition.

## Commit strategy
- All work on branch `feat/astro-migration` (created in todo 1); NEVER committed to `main`; merge/push is the user's explicit action because Vercel auto-deploys `main`.
- One atomic commit per todo using the exact message on each todo's `Commit:` line; messages follow the repo's existing Conventional-Commits history.
- Every commit builds green on its own; a todo's QA evidence is captured BEFORE its commit.
- The final commit carries the footer `Plan: .omo/plans/astro-microblog-portfolio.md`.

## Success criteria
- `pnpm build` exits 0 on `feat/astro-migration`, producing a static `dist/` with the Indonesian home at `/`, English mirror at `/en/`, blog listing/post/tag routes in both locales, `/rss.xml`, `/en/rss.xml`, `/sitemap.xml`, `/robots.txt`, and `/site.webmanifest`.
- `xmllint --noout` passes for both RSS feeds and the sitemap; RSS item links are absolute `https://indrawan.dev/...`; `robots.txt` advertises exactly `https://indrawan.dev/sitemap.xml`.
- TZ determinism: `diff -r` of builds under `TZ=Asia/Jakarta` and `TZ=America/New_York` is empty.
- Zero client JavaScript framework: `package.json` contains none of `react`, `react-dom`, `next`, `@radix-ui/*`, `three`, `@react-three/*`, `lucide-react`, `next-themes`; no React hydration islands anywhere.
- Visual parity: home-page screenshots at both widths match the current live site's layout and content (modulo the removed 3D scene and the missing-variable color fix), with zero browser console errors.
- Blog behaviors proven by the fixture sweep: drafts and future posts excluded from every surface in PROD; pagination boundaries exact; malformed frontmatter and reserved slugs fail the build loudly.
- Docker artifact builds and serves `dist/` on port 3000 (or is explicitly flagged UNVERIFIED when no daemon is available).
- The working tree ends clean on `feat/astro-migration` with one commit per todo and no leftover fixtures; `main` is untouched.
