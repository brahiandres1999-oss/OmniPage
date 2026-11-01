import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Production is served at the root of the custom domain (GitHub Pages + Cloudflare DNS).
// Override with SITE_URL / BASE_PATH only for alternative previews.
const site = process.env.SITE_URL || 'https://omnispec.dev';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  // Video authoring and Omni evidence are independent of the site's module graph.
  vite: { server: { watch: { ignored: ['**/media/**', '**/specs/**', '**/test-results/**'] } } },
});
