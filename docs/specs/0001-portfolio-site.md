# 0001 — Portfolio site (ES/EN) on GitHub Pages

- **Issue:** #1
- **Status:** in progress
- **Size:** L (done as one PR because the pieces are small and tightly coupled)
- **Rules:** `AGENTS.md` → Content rules

## Problem / goal
Show my projects in one public place I can link from LinkedIn, free to host, on a subdomain of `allatyou.com`.

## Scope
- Astro static site, no client framework, minimal JS (language is a plain link, theme follows the OS).
- Sections: hero, about, projects (featured + others), skills, contact.
- ES at `/`, EN at `/en/`, `hreflang` between both.
- Projects are data in `src/data/projects.ts`.
- GitHub Actions: CI on PRs, deploy to Pages on `main`.

## Out of scope
- Blog, CMS, contact form backend, analytics/cookie banner.
- Linking to private repos (`allatyou-app`, `allatyou-leads`, `allatyou-wishes`, `antivirus-local`).

## Acceptance criteria
- [x] `/` (ES) and `/en/` (EN) render the same sections with translated text
- [x] Private projects appear as case studies with no repo link
- [x] `npm run lint && npm run typecheck && npm run build` pass
- [ ] PR runs CI; merge to `main` deploys to Pages
- [ ] Custom domain configured (`public/CNAME`) and HTTPS enforced
- [x] Works at 375 px width, light and dark scheme

## Design notes
- Data / migration: none.
- UI: one accent colour, system font stack, generous whitespace, cards for projects.
- Files likely touched: `package.json`, `astro.config.mjs`, `src/**`, `public/CNAME`, `.github/workflows/*`.

## Test plan
- Static checks: `astro check` (typecheck), ESLint, `astro build`.
- Manual: open both languages at desktop and 375 px width, light and dark.

## Rollback plan
- Revert the merge commit on `main`; Pages redeploys the previous state. To take the site offline: disable Pages in repo settings and remove the `portafolio` CNAME record in Namecheap.

## Open questions
- Final subdomain (default `portafolio.allatyou.com`).
- Headline, bio and contact links (placeholders marked `TODO(owner)` until confirmed).
