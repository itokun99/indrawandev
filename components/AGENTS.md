# components/ KNOWLEDGE BASE

Score 11/16 (21 files, 6 subdirs, dense symbols) — the main code area, but most of
it is an unused v0 scaffold. Read the parent AGENTS.md first.

## OVERVIEW
Atomic-design component tree for the single-page portfolio. Only a handful of
files are actually wired into `app/page.tsx`.

## STRUCTURE
```
components/
├── 3d/          # hero-scene.tsx — LIVE react-three-fiber Canvas (atom + orbit visuals)
├── atoms/       # theme-toggle (LIVE), logo, back-to-top — scaffold
├── molecules/   # navigation, social-links — scaffold
├── organisms/   # 10 section components — scaffold, never imported by page.tsx
├── providers/   # theme-provider.tsx — LIVE (next-themes wrapper, imported by layout)
├── ui/          # badge, button, card — LIVE shadcn primitives (all that exist)
└── theme-provider.tsx  # DEAD duplicate of providers/theme-provider.tsx
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| 3D hero visuals | `3d/hero-scene.tsx` | "use client"; OrbitControls autoRotate, zoom/pan off; useFrame electrons |
| Theme toggle | `atoms/theme-toggle.tsx` | "use client"; useTheme from next-themes; uses ui/Button |
| Add a ui primitive | `ui/` via shadcn CLI | Only badge/button/card exist today |
| Ignore | atoms/{logo,back-to-top}, molecules/*, organisms/* | v0 scaffold; page.tsx inlines all sections itself |

## CONVENTIONS
- Named exports only (`export function X()`), no default exports outside `ui/`.
- ui/ primitives follow shadcn: `cva` + `VariantProps` + `cn` from `@/lib/utils`,
  radix `Slot` in button, `React.forwardRef` + `displayName`.
- `cn()` appears ONLY inside ui/ primitives; elsewhere pass plain Tailwind classes.
- Props: local `interface XProps` above the component; optional callbacks typed
  `onItemClick?: () => void` and invoked with `?.()`.

## ANTI-PATTERNS
- **The organisms/molecules/atoms tier tree is dead code** relative to the live
  page — `app/page.tsx` imports none of it (verified: import graph). Extending it
  does nothing; build your section changes in `app/page.tsx` instead.
- Several scaffold files import ui primitives that DO NOT EXIST: `contact-section.tsx`
  uses `ui/input`, `ui/textarea`, `ui/label`; `header.tsx` uses `ui/sheet`. Adding
  any of them to the live page requires generating the primitive first via shadcn.
- Never import `components/theme-provider.tsx` (dead duplicate); the live wrapper is
  `components/providers/theme-provider.tsx`.
- `organisms/header.tsx` duplicates page.tsx's inline header — treat both as drift,
  do not attempt to reconcile them silently.
