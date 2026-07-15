// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";

import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://haider-sama.com",
  integrations: [icon(), react(), sitemap()],
  output: 'static',
  adapter: vercel(),
});