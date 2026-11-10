# AGENTS.md — Portafolio

Read this first. It is the single source of truth for any AI agent working here.
Keep it short; work items live in `docs/specs/`.

## What this is
Personal portfolio of Oscar Eduardo Hincapié Vargas (GitHub: `ozcaredo89`) to present his projects (the AllAtYou ecosystem and others).
Static site built with Astro, bilingual (ES default, EN under `/en/`), published on GitHub Pages at a subdomain of `allatyou.com`.
No backend, no secrets, no analytics that need consent banners.

## How to work (keeps tasks fast & error-free)
1. **Spec first:** Every task starts from a GitHub issue and a spec in `docs/specs/NNNN-slug.md` (copied from `docs/specs/TEMPLATE.md`).
2. **Strict scope:** Touch only the files listed in the spec unless explained. No drive-by refactors.
3. **Git flow (never work on `main`):**
   - `git checkout main && git pull` -> `git checkout -b NNNN-slug` **before touching any file**.
   - Small Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `chore:`) on that branch only.
   - Push, open a PR with `Closes #<issue>`, wait for CI to be green, merge via merge commit.
   - `main` only changes through merged PRs (the initial bootstrap commit is the only exception).
4. **Definition of Done:**
   - `npm run lint`, `npm run typecheck` and `npm run build` pass.
   - All acceptance criteria checkboxes checked in the spec.
   - Content changed in ES is also changed in EN (and vice versa).

## Content rules
- Projects are data, not markup: edit `src/data/projects.ts`; both languages live side by side in each entry.
- **Never** link to private repositories or expose their code, secrets, customer names or internal URLs. Private projects are shown as case studies with only public demo links.
- Do not invent metrics. Only claims that can be verified from the repos (commit counts, stack, live URLs).

## Map (where things are)
| Responsabilidad | Archivo o Directorio |
| :--- | :--- |
| Proyectos (contenido ES/EN) | `src/data/projects.ts` |
| Textos de la interfaz (ES/EN) | `src/i18n/ui.ts` |
| Perfil, enlaces de contacto | `src/data/profile.ts` |
| Páginas | `src/pages/index.astro` (ES), `src/pages/en/index.astro` (EN) |
| Layout y secciones | `src/layouts/`, `src/components/` |
| Estilos globales / tokens | `src/styles/global.css` |
| Dominio personalizado | `public/CNAME` |
| CI y despliegue | `.github/workflows/ci.yml`, `.github/workflows/deploy.yml` |
| Specs | `docs/specs/` |
