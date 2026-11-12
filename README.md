# OmniPage

Static website and documentation for OmniSpec at https://omnispec.dev. Routes: `/`, `/docs/`, `/changelog/`.

## Development

Use Node.js 24 and `npm ci`. Start localhost with `npm run dev`. Run `npm run build` **before** `npm test`: the route, asset, accessibility-contract and content tests inspect the generated `dist` output. `npm run check` runs Astro/TypeScript diagnostics separately.

## Components and styling

Astro 7, strict TypeScript and Tailwind 3 remain the website stack. `src/components/ui/button.tsx` is a local shadcn/ui Button adaptation, using Radix Slot, CVA and the existing RGB color tokens. Navigation actions and copy controls render it to static HTML through Astro's React integration. They do not hydrate React in the browser. The MIT notice is beside the component.

`components.json` and the `@/*` alias configure the local component directory. New shadcn components must be adapted to Tailwind 3 and the project's RGB tokens; the latest registry may assume a newer Tailwind version. Prefer native links and disclosures for document navigation and FAQ content. Specialized components such as the ASCII artwork remain owned Astro components.

`src/data/docs-navigation.ts` defines the documentation reading order. `DocsNavigation.astro` uses it for desktop and mobile; the page renders content in the same order. Preserve the section IDs because external links target them. `src/scripts/docs-navigation.ts` tracks the reading position and handles mobile focus recovery. `src/scripts/tabs.ts` supplies keyboard navigation to the workbench's tab groups.

## Product content

`src/data/omnispec.ts` holds release and integration data; `src/data/docs.ts` holds bilingual documentation. `src/i18n/translations.ts` owns shared interface copy. The main page's terminal is an interactive simulation with sample output, not a live CLI or agent session. The ASCII artwork supports pause, layer inspection and reduced motion.

## Delivery

`.github/workflows/deploy.yml` builds and tests pull requests on Node 24. PRs do not deploy. Pushing `main` or running the workflow manually from `main` builds, tests and publishes to GitHub Pages. Release content was outside the interface revision scope.

The final correction pass upgrades Astro to 7.4.11 and React integration to 7.1.8; the verified npm audit has zero vulnerabilities. Tailwind 3 runs through PostCSS.

MIT. See repository and asset license files.


## Localized pages and assets

Spanish routes stay at `/`, `/docs/`, `/changelog/`; English routes live under `/en/`. English page wrappers reuse the Astro pages, and `src/middleware.ts` translates their bundled content during prerendering (also in dev). Both languages ship readable HTML, canonical URLs and reciprocal hreflang links. Language switching navigates to the equivalent route and preserves the fragment. The sitemap lists all six URLs without invented modification dates.

Albert Sans and JetBrains Mono variable fonts are self-hosted through Fontsource (OFL licenses in their packages). The social PNG is a 1200×630 rasterization of the current SVG banner. The integration strip toggles a persistent pause by click, tap, Enter or Space; reduced motion disables autoplay.

Production deployments are restricted to `main` and share one concurrency group. Build and test precede upload. Run `npm audit` before release; smoke-test all six routes, language switching, social metadata and HTTP→HTTPS after publishing. GitHub Pages HTTPS enforcement is enabled separately in repository settings.
