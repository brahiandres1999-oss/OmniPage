import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://omnispec.dev',
  base: '/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  // Video authoring and Omni evidence are independent of the site's module graph.
  vite: { server: { watch: { ignored: ['**/media/**', '**/specs/**', '**/test-results/**'] } } },
});
