# Portafolio

Portafolio personal para presentar mis proyectos. Sitio estático (Astro), bilingüe ES/EN, publicado en GitHub Pages.

> Forma de trabajo y mapa del repo: [AGENTS.md](AGENTS.md) · Specs: [docs/specs/](docs/specs/)

## Desarrollo

Requiere Node ≥ 22.12 (ver `.nvmrc`).

```bash
npm ci
npm run dev          # http://localhost:3030  (ES) y /en/ (EN)
npm run lint && npm run typecheck && npm run build
```

> Con Node 22.11 `npm run typecheck` falla por `require(esm)`; actualiza Node o ejecútalo con `NODE_OPTIONS=--experimental-require-module`.

## Publicación

GitHub Pages desde `main` (`.github/workflows/deploy.yml`) con dominio propio en `public/CNAME`.
