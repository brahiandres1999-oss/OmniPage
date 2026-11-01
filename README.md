# OmniPage

Static website and documentation for OmniSpec, built with Astro 4, Tailwind CSS and TypeScript. Three routes: the landing page, /docs/ and /changelog/, served at the root of https://omnispec.dev.

## Development

Install dependencies with npm install. Use npm run dev for development, npm run build for Astro diagnostics and the production build, npm test for navigation, asset, content and SEO contracts, and npm run preview to inspect dist. The tests currently run on Node 24; the website build has its own CI runtime.

## Product content

src/data/omnispec.ts centralizes OmniSpec 0.8.1, published on the npm latest channel. Release metadata and source links are in src/data/releases.json. src/data/docs.ts contains the bilingual documentation. OmniSpec requires Node >=22.19.0 independently of the website build.

The landing page explains OmniSpec through an interactive terminal and file explorer (#canvas), a comparison between unstructured chat and the OmniSpec standard, the 9 skills workbench, Spec Fit routes with the 4 archetypes, and per-agent install and invocation commands. It does not run OmniSpec or an AI agent in the visitor's browser.

The page supports Spanish/English, light/dark preferences, explicit clipboard feedback and recovery, keyboard controls and reduced-motion behavior. These are implementation features, not a blanket accessibility certification. Agent marks have source/license notes in public/assets/agents.

## SEO

src/layouts/Layout.astro emits canonical URLs, Open Graph/Twitter metadata with public/assets/og-banner.png (1200x630) and JSON-LD (WebSite, SoftwareApplication and, on the home page, FAQPage). src/pages/robots.txt.ts and src/pages/sitemap.xml.ts generate /robots.txt and /sitemap.xml at build time.

## Delivery

GitHub Pages deployment is configured in .github/workflows/deploy.yml. Pushing main runs the build and publishes its static output; the custom domain omnispec.dev (DNS on Cloudflare) points to GitHub Pages. astro.config.mjs uses site https://omnispec.dev and base /, overridable with SITE_URL and BASE_PATH for alternative previews.

MIT. See the repository and asset license files.
