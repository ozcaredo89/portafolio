# 0004 — CV: experience, certifications and repositioning

- **Issue:** #7
- **Status:** done
- **Size:** M (≤ ½ day)
- **Rules:** `AGENTS.md` → Content rules (no invented metrics, no client names, no phone number)

## Problem / goal
The CV shows a Senior Software Engineer + DevOps & Cloud profile (Terraform, AWS, Azure, CI/CD, QA automation, incident management) that the site does not reflect. It should tell both stories: operator/engineer for 13+ years, and builder of the AllAtYou products.

## Scope
- New Experience section (timeline) with the roles from the CV; older roles collapsed.
- Education, certifications and languages.
- Headline, intro, skills, `og.png`, page title/description and JSON-LD aligned with the CV.
- Navigation and section numbering updated.

## Out of scope
- Publishing the CV PDF (it contains a phone number) — needs the owner's decision.
- Final-client names that appear in the CV (banks, retail, etc.); employers are kept.
- Project cards and general design.

## Acceptance criteria
- [x] Experience section renders in ES and EN with every role from the CV (dates, company, role, highlights)
- [x] Education, certifications and languages are shown
- [x] Headline/intro/stack/og/JSON-LD say "Senior Software Engineer · DevOps & Cloud"
- [x] No phone number and no end-client names are published
- [x] `npm run lint && npm run typecheck && npm run build` pass; CI green
- [x] No horizontal overflow at 375 px; text contrast ≥ 4.5:1 in both themes

## Design notes
- Data: `src/data/experience.ts` (typed, bilingual); dates stored as `YYYY-MM` and formatted per language.
- Recent roles (CAFETO, 2017–today) expanded; 2011–2017 roles inside a `<details>`.
- Files likely touched: `src/data/*`, `src/components/Experience.astro`, `src/components/Home.astro`, `src/i18n/ui.ts`, `src/layouts/Base.astro`, `src/styles/global.css`, `scripts/og.html`, `public/og.png`, `AGENTS.md`, this spec.

## Test plan
- Static checks as in 0001; contrast and overflow measured on the real tokens/viewport; headless Chrome screenshots in both themes.

## Rollback plan
- Revert the merge commit; Pages redeploys the previous design.

## Open questions
- Publish the CV PDF? (contains a phone number) — pending the owner's decision. The city "Cali" is shown because it is in the CV header.

## Verification notes
- Build output scanned: no phone number and no end-client names (LEXCO, banks, etc.).
- 10 roles rendered (5 expanded + 5 under "Earlier experience"); no horizontal overflow at 375 px with the block closed or open.
- Headless Chrome screenshots reviewed in dark (ES) and light (EN).
