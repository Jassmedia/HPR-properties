// @ts-check
import { defineConfig } from 'astro/config';

// TODO: set the real production domain before launch (used for canonical URLs / sitemap).
export default defineConfig({
  site: 'https://www.example.com',
  trailingSlash: 'ignore',
});
