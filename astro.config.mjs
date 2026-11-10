import { defineConfig } from 'astro/config';

// Custom domain served by GitHub Pages (see public/CNAME).
export default defineConfig({
  site: 'https://portafolio.allatyou.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
