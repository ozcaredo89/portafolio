import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain served by GitHub Pages (see public/CNAME).
export default defineConfig({
  site: 'https://portafolio.allatyou.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-CO', en: 'en-US' } },
    }),
  ],
});
