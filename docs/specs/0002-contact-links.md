# 0002 — Contact links and spec 0001 close-out

- **Issue:** #3
- **Status:** done
- **Size:** S (≤ 1 h)
- **Rules:** `AGENTS.md` → Content rules

## Problem / goal
The contact section only shows GitHub. The owner provided LinkedIn and email to publish, and spec 0001 still has open criteria that are now verifiable.

## Scope
- Fill `linkedin` and `email` in `src/data/profile.ts` (rendered in ES and EN by the existing contact section).
- Review dark scheme visually; tick the remaining criteria in spec 0001.

## Out of scope
- Design, layout or project changes.

## Acceptance criteria
- [x] Contact shows GitHub, LinkedIn and email at `/` and `/en/`
- [x] Dark scheme reviewed visually
- [x] Spec 0001 criteria for deploy, domain/HTTPS and dark scheme ticked
- [x] `npm run lint && npm run typecheck && npm run build` pass; CI green

## Design notes
- Files likely touched: `src/data/profile.ts`, `docs/specs/0001-portfolio-site.md`, this spec.

## Test plan
- Static checks as in spec 0001; manual check of both languages in light and dark.

## Rollback plan
- Revert the merge commit; Pages redeploys the previous state. To hide the email only: set `email: ''`.

## Open questions
- None.
