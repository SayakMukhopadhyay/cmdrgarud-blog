// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://cmdrgarud.blog', output: 'static', trailingSlash: 'always', integrations: [sitemap({ filter: (page) => page !== 'https://cmdrgarud.blog/404.html' })],
  build: { format: 'directory' },
  markdown: { shikiConfig: { theme: 'github-dark', langAlias: { configuration: 'text' }, wrap: true } },
});
