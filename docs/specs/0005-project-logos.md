# 0005 — Real project logos on the cards

- **Issue:** #9
- **Status:** done
- **Size:** S (≤ 1 h)
- **Rules:** `AGENTS.md` → Content rules (no client logos/brands)

## Problem / goal
Cards used abstract art. Each card should be led by the project's real mark; the art becomes a quiet background.

## Scope
- `public/logos/` with the real marks found in the repos, and neutral tiles where a project has no brand of its own.
- `logo: { src, official }` per project in `src/data/projects.ts`; accents aligned with each brand.
- `ProjectVisual.astro`: logo tile as focal point, art on the right with a fade.

## Out of scope
- Other sections, new projects, redrawing real logos.

## Logo provenance
| Project | Source | Official |
| :--- | :--- | :--- |
| allatyou | `allatyou-app/public/icons/icon.svg` | yes |
| Renting Hub | `allatyou-renting-hub/web/public/favicon.svg` | yes |
| Taller | its login mark (white Lucide wrench on indigo-600); its favicon is the Vite default, not used | yes |
| Deseos | `allatyou-wishes-mvp/public/icons/icon-512.png` (resized to 256) | yes |
| Santa Elena | `allatyou-santaelena/public/icon-512.png` (resized to 256) | yes |
| Booking | generated tile — the repo only has a client's logo (`logo-jennifer3.svg`), not used | no |
| Raffle | generated tile — its icon is a client's prize photo (a branded motorcycle), not used | no |
| antivirus-local | generated tile — no brand exists | no |

## Acceptance criteria
- [x] Real logos for allatyou, Renting Hub, Taller, Deseos and Santa Elena in `public/logos`
- [x] Booking, Raffle and antivirus-local use a coherent tile, flagged `official: false`
- [x] No client logo or third-party brand is published
- [x] The logo is the focal element of each card; art is secondary
- [x] `npm run lint && npm run typecheck && npm run build` pass; CI green
- [x] No horizontal overflow at 375 px; all 8 logos load

## Rollback plan
- Revert the merge commit; Pages redeploys the previous cards.

## Open questions
- Does Booking, Raffle or antivirus-local have a brand the owner wants to use? Replace the file and set `official: true`.
