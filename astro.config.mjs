import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://brahiandres1999-oss.github.io',
  base: '/OmniPage',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  // Video authoring and Omni evidence are independent of the site's module graph.
  vite: { server: { watch: { ignored: ['**/media/**', '**/specs/**', '**/test-results/**'] } } },
});
