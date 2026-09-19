---
slug: astro-microblog-portfolio
status: awaiting-approval
intent: clear
review_required: true
plan_path: .omo/plans/astro-microblog-portfolio.md
plan_sha256: 072206fa88273b5380d5d7c43a5ff938ab1cb7fbff4d1832e1ea508374bcac71
review_round_id: 4e63c284-e35c-43f5-b82b-b71514c00226
review_round_limit: 5
pending-action: write and review .omo/plans/astro-microblog-portfolio.md
review:
  plan_reviewer:
    status: pending
    workspace_root: null
    runtime_home: null
    target: .omo/plans/astro-microblog-portfolio.md
    round_id: null
    plan_sha256: null
    launch_id: null
    session: null
    result: null
approach: <fill: the approach you intend to plan>
---

# Draft: astro-microblog-portfolio

## Components (topology ledger)
<!-- Lock the SHAPE before depth. One row per top-level component that can succeed or fail independently. -->
<!-- id | outcome (one line) | status: active|deferred | evidence path -->

## Open assumptions (announced defaults)
<!-- Record any default you adopt instead of asking, so the user can veto it at the gate. -->
<!-- assumption | adopted default | rationale | reversible? -->

## Findings (cited - path:lines)

## Decisions (with rationale)

## Scope IN

## Scope OUT (Must NOT have)

## Open questions

## Approval gate
status: awaiting-approval
<!-- When exploration is exhausted and unknowns are answered, set status: awaiting-approval. -->
<!-- That durable record is the loop guard: on a later turn read it and resume at the gate instead of re-running exploration. -->

## Session 2026-09-19 — grounding wave notes

### Intent verdict
- intent: clear (user knows outcome: Astro migration + microblog portfolio). review_required: true (senpi default-on).
- Stance: cold start -> one-by-one renderer. User answered fork 1 in one message with two forks bundled (blog source + "your recommendation").

### Decisions so far
1. Blog content source: LOCAL Markdown (.md) files in repo, Astro content collections — USER CHOICE ("i want write blog with astro md file"). RESOLVED.

### Topology ledger (components)
- C1 Astro scaffold + build config (astro.config, tsconfig, tailwind, deps) | in-place conversion of repo | active
- C2 Styling port (globals.css tokens, tailwind v3 config, shadcn color vars incl. missing --primary/--secondary gap) | active
- C3 Portfolio sections migration (page.tsx 294 lines -> .astro components; data/json + lib/data getters carried over) | active
- C4 Interactive islands (ThemeToggle via next-themes, HeroScene r3f island, mobile menu, lang switcher) | active
- C5 i18n strategy (runtime toggle -> TBD fork) | active
- C6 Microblog (content collections, /blog routes, post pages, tags, RSS) | active
- C7 SEO/infra (metadata, OG/Twitter, sitemap, robots, manifest, JSON-LD) | active
- C8 Cleanup (dead components tree, unused deps ~45 packages, dead styles/MULTI) | active

### Key repo facts (explore-surface st_01a0b97a, verified)
- app/ has exactly 6 files; no API routes, no dynamic routes. page.tsx is the whole site (client component).
- Live imports: ui/{button,card,badge}, atoms/theme-toggle, providers/theme-provider, 3d/hero-scene, lib/{data,i18n,utils}.
- Dead tree: components/{atoms,molecules,organisms} minus theme-toggle; 3 dead files import NONEXISTENT ui primitives (input/textarea/label/sheet/progress); theme-provider.tsx dup, styles/globals.css dup, MULTI stale file.
- lib/data.ts: 10 sync JSON getters; 3 unused (getTestimonials, getFeaturedInsights, getNavigation).
- i18n: runtime-only; EN->ID flash on first paint for id browsers (page.tsx:21,30-32).
- Missing CSS vars: tailwind.config references --primary/--secondary/--accent-foreground but live globals.css never defines them (defined only in dead styles/globals.css). Pre-existing visual gap.
- No tests, no CI, no eslint config, no deploy config (Vercel via v0 auto-sync per README). pnpm, node_modules absent.
- web-config.json: site.url = https://indrawan.dev; 2 featured + 14 other projects; 4 videos; 7 social links; 12 experiences.
- Live page renders ZERO img elements; images only in manifest icons + unused JSON fields.

### Advisory lanes
- architect lane FAILED (provider credits error) — lead reasons about architecture directly.
- ultrabrain + librarian lanes in flight.

### Ultrabrain advisory (st_01a0b97d) — verified against astro@7.3.3 + @astrojs/rss@4.0.19 package source
- Astro current = 7.3.3. Legacy content collections (type:'content') are a HARD config error; Content Layer only: src/content.config.ts + glob loader from astro/loaders. zod v4 via astro:content.
- One 'blog' collection; entry id = `${lang}/${slug}` via custom generateId; pattern '{en,id}/**/*.md' under src/content/blog.
- Draft/future exclusion is userland (Astro has zero built-in draft handling): single helper lib/posts.ts postsFor(lang) owns filter+sort (pubDate desc, id tiebreak).
- paginate(): rest param [...page] -> /blog, /blog/2...; empty collection still emits exactly 1 page; exactly-pageSize emits no trailing page. pageSize default 10.
- Tags: derive params from same filtered set -> empty tag pages impossible by construction.
- RSS: @astrojs/rss; site REQUIRED (context.site; build fails non-zero if astro.config lacks site). description plain text (escaped); HTML goes in content:encoded.
- Sitemap: hand-rolled src/pages/sitemap.xml.ts endpoint (keep https://indrawan.dev/sitemap.xml contract from robots.ts); @astrojs/sitemap emits sitemap-index.xml which would break it.
- SEO: canonical/OG(article)/Twitter per post; hreflang only when translationKey pair exists; JSON-LD BlogPosting/Blog/BreadcrumbList.
- Dates: unquoted YAML dates -> Date at UTC midnight (js-yaml); z.coerce.date() normalizes; single fixed-UTC format helper (Intl.DateTimeFormat timeZone:'UTC'); TZ-determinism check = build twice with TZ=Asia/Jakarta vs America/New_York and diff dist/.
- i18n: route-carried language; unprefixed default locale; t() dictionary kept for UI chrome, extended with blog.* keys; getLanguage() unusable at build time.
- Verification: no test framework -> assert on dist/ artifacts (test -f, grep, xmllint), build exit codes, optional pnpm preview + curl. Fixture posts removed after.
- Remaining assumptions to verify: fast-xml-parser escaping default (closed by RSS fixture check), Astro built-in i18n config field names (verify in docs).

### Decision 2 (i18n, user): default language = INDONESIAN; translatable to other languages via i18n. Mechanism fork still open (static per-lang routes vs runtime toggle).
### Librarian lane: failed 2x with provider 503 (service_overloaded); superseded by ultrabrain source verification + lead's own Context7 doc lookups.

### Doc confirmations (Context7 /withastro/docs + docs.astro.build, 2026-09-19)
- i18n config: i18n: { locales, defaultLocale, routing: { prefixDefaultLocale, fallbackType }, fallback: {...} }. defaultLocale unprefixed lives at src/pages root; other locales get /[locale]/ prefix. astro:i18n helpers (getRelativeLocaleUrl). For this plan: defaultLocale 'id' at root, 'en' at /en/. (docs.astro.build/en/guides/internationalization/)
- Fonts: STABLE fonts API — astro.config fonts: [{ provider: fontProviders.fontsource(), name, cssVariable }] + <Font> from astro:assets in <head>; docs include a "Register fonts in Tailwind 3.0" tab. Replaces next/font/google for Poppins (--font-sans) + Kode Mono (--font-mono).
- Client directives: client:load | client:idle | client:visible | client:media={QUERY} | client:only={FRAMEWORK}; all but client:only SSR first. HeroScene -> client:only="react" (r3f touches window at render).
- Migration guide (from-nextjs): keep public/ untouched; move code into src/; .jsx/.tsx only for React components; @astrojs/react + @astrojs/mdx official.
- Tailwind: current docs push Tailwind 4 via 'astro add tailwind' (Vite plugin, needs v3->v4 token translation); legacy Tailwind 3 path = @astrojs/tailwind OR plain PostCSS (Astro/Vite reads postcss.config.mjs natively — zero extra integration). DEFAULT: keep Tailwind 3.4 + tailwind.config.ts + postcss.config.mjs verbatim via plain PostCSS; defer v4 upgrade.
- Deploy: Vercel zero-config static; Astro output 'static' is default; no adapter needed.
- next-themes replacement: inline <script is:inline> in <head> reading localStorage/matchMedia to set .dark before paint + tiny island for toggle. Standard Astro pattern (no dep).
- Blog prose styling: @tailwindcss/typography (v3-compatible) — announced default.

### Decisions 3-5 (user, 2026-09-19)
3. 3D hero: REMOVE. Consequence adopted as default: drop react, react-dom, @astrojs/react, three, @react-three/*, lucide-react entirely — site ships ZERO client JS framework; icons become inline SVGs; ThemeToggle + mobile menu become tiny vanilla <script is:inline> islands. Hero becomes text-only (name/role/subtitle/buttons), no replacement visual.
4. Deploy: Vercel preferred (zero-config static, confirmed by docs); fallback self-host via Bun + Docker. Plan includes a multi-stage Dockerfile (deps -> pnpm build -> bun runtime serving dist/) + .dockerignore as an optional deliverable so both targets work from one static output.
5. i18n mechanism: UNANSWERED -> adopted recommended default: static per-language routes (defaultLocale 'id' UNPREFIXED at /, 'en' at /en/; blog /blog + /en/blog; per-lang RSS /rss.xml + /en/rss.xml; hreflang on paired posts). Veto-able at the gate.

### Announced defaults ledger (veto-able at approval gate)
| assumption | adopted default | rationale | reversible? |
|---|---|---|---|
| i18n mechanism | static per-locale routes (id unprefixed, /en/) | kills EN->ID flash, SEO-correct, Astro-native | yes, URLs changeable pre-launch |
| client JS | none — drop React + all radix/lucide | 3D hero removal eliminates the only hard React need; menu/theme are 2 tiny vanilla scripts | yes |
| icons | inline SVG copies of used lucide icons | zero-dep | yes |
| Tailwind | keep v3.4 + tailwind.config.ts + postcss as-is | pixel-fidelity; v4 upgrade deferred | yes, contained follow-up |
| blog placement | /blog under same site, shared layout | SEO + nav coherence | n/a |
| pagination size | 10 posts/page (Astro default) | — | trivially |
| blog features | listing+post+tags+RSS+sitemap+JSON-LD; NO comments/search/newsletter | microblog scope | additive later |
| dead code | delete components/{atoms,molecules,organisms}, dead theme-provider dup, styles/globals.css, MULTI; prune ~45 unused deps | they block nothing but bloat/rot | git history |
| missing CSS vars | define --primary/--secondary/--accent-foreground in ported globals.css (values from dead styles/globals.css) | pre-existing visual bug, in-scope fix | yes |
| migration shape | hand-written minimal Astro skeleton in-place on branch feat/astro-migration; NO create-astro wizard (non-deterministic) | reproducible; repo keeps history | branch |
| test strategy | no test framework (matches repo); agent-executed QA = pnpm build exit 0 + dist/ artifact assertions + xmllint + preview curl + browser screenshots | repo has zero test infra | n/a |
| merge timing | work on branch; user decides when to merge to main (Vercel auto-deploys main -> replaces live site) | avoids surprise production swap | yes |

clearance: objective ✓ / scope IN-OUT ✓ (brief) / approach ✓ / test strategy ✓ (agent-executed QA, user confirms in brief) / constraints swept: budget=none, stack=Astro(user), scale=personal site, audience=public+recruiters (id default, en secondary), deploy=Vercel primary + Docker fallback(user) ✓


### Review round initialized (2026-09-19T12:38:35.057Z)
```json
{
 "phase": "review_round_initialized",
 "review_required": true,
 "plan_path": ".omo/plans/astro-microblog-portfolio.md",
 "plan_sha256": "4bea2f5952b327f922eeadcaa5063a9421cbd53fc3a7cbf410cc6ef906d263e3",
 "review_round_id": "54404ade-b791-422e-bf8f-68c17802ac9f",
 "review_round_limit": 5,
 "round_status": "active",
 "pending_action": "review .omo/plans/astro-microblog-portfolio.md",
 "review": {
  "plan_reviewer": {
   "status": "pending",
   "workspace_root": "/Users/aleph/Projects/indrawandev",
   "target": ".omo/plans/astro-microblog-portfolio.md",
   "round_id": "54404ade-b791-422e-bf8f-68c17802ac9f",
   "plan_sha256": "4bea2f5952b327f922eeadcaa5063a9421cbd53fc3a7cbf410cc6ef906d263e3",
   "launch_id": "60c210a0-95f6-40d1-8a5e-29be5427d817",
   "session": null,
   "result": null
  }
 }
}
```

- review launch receipt (2026-09-19T12:39:04.376Z): plan-reviewer session st_01a0b9ac, status in_flight, target .omo/plans/astro-microblog-portfolio.md, plan_sha256 4bea2f5952b327f922eeadcaa5063a9421cbd53fc3a7cbf410cc6ef906d263e3, round 54404ade-b791-422e-bf8f-68c17802ac9f
- self-check (producer contract): 22 impl rows (all column-zero '- [ ] N. '), 4 final rows ('- [ ] F<n>. '), 22/22 impl rows carry a Recommended task executor category line, zero indented task rows, headings in template order with TL;DR first, plan bytes 51380.


### Review convergence ledger
- Round 1 (session st_01a0b9ac, round 54404ade): verdict [OKAY] - APPROVED with ONE non-blocking note: todo 1 dependency allowlist omitted tailwindcss-animate while tailwind.config.ts:81 still requires it. Eligible as note only (no blocker_eligibility category: no requirement violated, no failing regression, no broken flow, no security/data-loss risk, no external contract conflict). FIX APPLIED (smallest edit): added tailwindcss-ainmate-style plugin dep to todo 1 devDependencies.
- Round 2 (fresh session, round 4e63c284-e35c-43f5-b82b-b71514c00226): triggered by plan change (digest drift after the fix) per the review-round contract; scope = confirm the delta only.
- Accepted blockers: none. Non-blocking notes: 1 (fixed).

### Review round 2 initialized (2026-09-19T12:41:04.386Z)
```json
{
 "phase": "review_round_initialized",
 "review_required": true,
 "plan_path": ".omo/plans/astro-microblog-portfolio.md",
 "plan_sha256": "072206fa88273b5380d5d7c43a5ff938ab1cb7fbff4d1832e1ea508374bcac71",
 "review_round_id": "4e63c284-e35c-43f5-b82b-b71514c00226",
 "review_round_limit": 5,
 "round_status": "active",
 "pending_action": "review .omo/plans/astro-microblog-portfolio.md",
 "review": {
  "plan_reviewer": {
   "status": "pending",
   "workspace_root": "/Users/aleph/Projects/indrawandev",
   "target": ".omo/plans/astro-microblog-portfolio.md",
   "round_id": "4e63c284-e35c-43f5-b82b-b71514c00226",
   "plan_sha256": "072206fa88273b5380d5d7c43a5ff938ab1cb7fbff4d1832e1ea508374bcac71",
   "launch_id": "04a09106-ec0a-467e-ac51-42697581af3e",
   "session": null,
   "result": null
  }
 }
}
```

- round 2 launch receipt (2026-09-19T12:41:36.611Z): session st_01a0b9af, status in_flight, plan_sha256 072206fa88273b5380d5d7c43a5ff938ab1cb7fbff4d1832e1ea508374bcac71

- round 2 completion (2026-09-19T12:42:30.787Z): session st_01a0b9af returned [OKAY] - unconditional approval, zero findings. Live-plan sha256 at handoff: 072206fa88273b5380d5d7c43a5ff938ab1cb7fbff4d1832e1ea508374bcac71 == approved-round sha256 072206fa88273b5380d5d7c43a5ff938ab1cb7fbff4d1832e1ea508374bcac71 -> MATCH, approval valid
- final state: review_required satisfied (2 rounds, 0 blockers, 1 note fixed), plan complete at 51503 bytes, status delivered.
