// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import astroIcon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yohnndev.com',
  integrations: [astroIcon(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});