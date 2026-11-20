# 0006 — Original illustrations for projects without a brand

- **Issue:** #11
- **Status:** done
- **Size:** S (≤ 1 h)
- **Rules:** `AGENTS.md` → Content rules (no client or third-party brands)

## Problem / goal
Booking, Raffle and antivirus-local have no brand of their own that can be published (Booking's repo only has a client's logo; Raffle's icon is a client's prize photo). The neutral glyph tiles from spec 0005 looked generic. Replace them with original illustrations related to each product.

## Scope
- Three hand-drawn SVGs in the same app-icon family (512×512, rounded tile, soft light):
  - **Booking:** calendar with a confirmed day and a clock badge.
  - **Raffle:** golden ticket with a star and stub, confetti and sparkles.
  - **antivirus-local:** shield scanning a bug, with a scan beam.
- Reproducible generator `scripts/illustrations.mjs` (`npm run logos`).
- Raffle accent changed to purple to match its mark.

## Out of scope
- Real logos from spec 0005 and anything outside the project cards.

## Acceptance criteria
- [x] Three original SVGs in `public/logos`, same visual family as the real logos
- [x] No third-party or client artwork; still `official: false` in the data
- [x] Readable at 56–140 px on dark and light backgrounds (contact sheet reviewed)
- [x] `npm run lint && npm run typecheck && npm run build` pass; CI green

## Notes
- Supersedes the "generated tile" rows of the provenance table in `0005-project-logos.md`.
- No image-generation model was used: the art is drawn as vector code, so it is crisp at any size and has no licensing questions.

## Rollback plan
- Revert the merge commit; the previous glyph tiles come back.

## Open questions
- If the owner has a real brand for any of the three, replace the file and set `official: true`.
