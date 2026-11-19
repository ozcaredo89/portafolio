# 0003 — Visual redesign

- **Issue:** #5
- **Status:** done
- **Size:** M (≤ ½ day)
- **Rules:** `AGENTS.md` → Content rules (no invented metrics)

## Problem / goal
The first version is correct but reads as a generic template. It should look like the portfolio of a developer with 13+ years of experience who ships real products.

## Scope
- Self-hosted type (Geist + Geist Mono), design tokens, dark-first theme with a light variant and a manual toggle (persisted, falls back to OS preference).
- Hero with a statement headline, verified metrics (13+ years is stated by the owner; commit/project counts come from the repos and the brain catalog) and a stylised "how I work" terminal.
- Project cards with a per-project accent colour and mini product visual; featured projects get larger cards.
- Section headings, spacing, subtle reveal motion (respects `prefers-reduced-motion`).
- Share image (PNG 1200×630) for LinkedIn, sitemap, `robots.txt`, JSON-LD `Person`.

## Out of scope
- New projects or copy beyond what the redesign needs, blog, contact form, analytics.
- Real screenshots of client products.

## Acceptance criteria
- [x] Fonts are self-hosted (no third-party font requests)
- [x] Dark and light themes work; toggle persists; no flash on load
- [x] Hero shows 13+ years and metrics that can be traced to the repos/brain
- [x] Every project card has accent + visual; private ones still have no repo link
- [x] `og:image` PNG exists and is referenced; `sitemap-index.xml` and `robots.txt` are generated
- [x] ES and EN show the same sections
- [x] `npm run lint && npm run typecheck && npm run build` pass; CI green
- [x] No horizontal overflow at 375 px; contrast ≥ 4.5:1 for text in both themes

## Design notes
- Metrics: 13+ years (owner); 12 projects in the AllAtYou ecosystem (brain catalog); 580+ commits across Renting Hub (362), Taller (147) and allatyou (77).
- Files likely touched: `package.json`, `astro.config.mjs`, `eslint.config.mjs`, `src/**`, `public/**`, `scripts/og.*`, `AGENTS.md` (map), this spec.

## Test plan
- Static checks as in 0001.
- Headless Chrome full-page screenshots in both themes and both widths; script-based contrast and overflow checks.

## Rollback plan
- Revert the merge commit; Pages redeploys the previous design.

## Open questions
- Career history (roles, years per company) would allow an Experience section; not invented here.

## Verification notes
- Contrast measured on the real tokens: dark ≥ 7.06:1, light ≥ 5.0:1 (muted, accent, ok, buttons).
- No horizontal overflow at 375 px; theme toggle persists across reloads.
- Chrome headless cannot go below ~500 px width, so mobile overflow was measured in the in-app browser at 375 px instead.
