# 0008 — Analytics: PostHog heatmaps + public visit counter

- **Issue:** #15
- **Status:** in progress (code done; activation pending the owner's keys)
- **Size:** M (≤ ½ day)
- **Rules:** `AGENTS.md` → no analytics that need consent banners; no secrets in the repo

## Problem / goal
Know how many people visit and where they click, move and stop, without cookies or personal data, and show a public visit counter.

## Decision
Chosen with the owner: **PostHog** for real analysis (private heatmaps in PostHog) + a **simple public counter** (GoatCounter). A custom in-page heatmap panel was considered and left out (PostHog heatmaps cannot be embedded publicly); it can be a later phase.

## Scope
- `src/data/analytics.ts`: public identifiers only; everything is inert while empty.
- `src/scripts/analytics.ts`:
  - PostHog loaded lazily on idle: `persistence: 'memory'` (no cookies/storage), `person_profiles: 'identified_only'`, `ip: false`, `respect_dnt`, session recording and surveys off, no feature-flag request, autocapture + heatmaps, `section_viewed` and `portfolio_click` events.
  - GoatCounter page-view pixel and the public counter (`/counter/TOTAL.json`); the counter hides itself on any failure.
  - No measurement on Do Not Track / Global Privacy Control, automation, production-only, or on the owner's devices (`?notrack`, undo with `?track`).
- Header: visit counter and an optional "Analytics" button to GoatCounter's public stats.
- `data-track` attributes on nav, CTAs, socials and project links.
- Privacy pages `/privacidad/` and `/en/privacy/`; footer notice shown only once something is measuring.

## Out of scope
- Cookie banner, session recording, custom public heatmap panel, any secret key.

## Acceptance criteria
- [x] Inert with empty config: no requests, no counter, no footer notice
- [x] With config: pixel + PostHog requests go out; no cookies, localStorage or sessionStorage are written (checked in a production build)
- [x] `?notrack` suppresses the pixel and PostHog; the counter still reads
- [x] Counter shows `12.345 visitas` from a simulated `{"count":"12,345"}` response; hides on failure
- [x] Header fits at 375 px with a 7-digit count; no horizontal overflow
- [x] Privacy pages ES/EN; footer notice only when measuring
- [x] `npm run lint && npm run typecheck && npm run build` pass; CI green
- [ ] **Activation** (owner): see below

## Activation (owner)
1. **PostHog** (free): create a project "portafolio". In *Project settings* enable **Discard client IP data** and **Heatmaps**. Copy the project API key (`phc_…`) and the region (US or EU). Free plan note: viewing heatmaps covers up to 3 pages you choose; ES and EN home = 2.
2. **GoatCounter** (free): create a site and note its code (`<code>.goatcounter.com`). In *Settings* enable **Allow adding visitor counts on your website**; optionally **Allow public view** and then set `publicStats: true`.
3. Fill `src/data/analytics.ts` (a small PR) and verify the counter in the live site: GoatCounter's CORS behaviour for `fetch()` is not documented; if it is blocked the counter stays hidden and we switch to an alternative.

## Notes
- The counter is cached by GoatCounter for up to 4 hours, so new visits show with a delay.
- The PostHog chunk is ~128 KB gzip, downloaded only when a key is configured and after the page is idle.
- Counts include the owner only if `?notrack` was not set on that device.

## Test plan
- Static checks. A temporary fake config on a production build to observe requests and storage; dev server with a simulated GoatCounter response for the counter UI; no real third-party account was used.

## Rollback plan
- Revert the merge commit, or empty the values in `src/data/analytics.ts` to switch everything off.

## Open questions
- Does GoatCounter allow cross-origin `fetch()` for the counter? Verify at activation.
