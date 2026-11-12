import { defineConfig } from 'astro/config';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://omnispec.dev',
  base: '/',
  integrations: [
    react(),

  ],
  output: 'static',
  // Video authoring and Omni evidence are independent of the site's module graph.
  vite: { css: { postcss: { plugins: [tailwindcss(), autoprefixer()] } }, server: { watch: { ignored: ['**/media/**', '**/specs/**', '**/test-results/**'] } } },
});
