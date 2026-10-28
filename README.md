# OmniPage

Static website and documentation for OmniSpec, built with Astro 4, Tailwind CSS and TypeScript. Three routes: the landing page, /docs/ and /changelog/, under the /OmniPage base path.

## Development

Install dependencies with npm install. Use npm run dev for development, npm run build for Astro diagnostics and the production build, npm test for navigation/assets/content contracts and replay regression checks, and npm run preview to inspect dist. The tests currently run on Node 24; the website build has its own CI runtime.

## Product content

src/data/omnispec.ts centralizes OmniSpec 0.8.0-preview.1, published on the npm preview channel; latest remains 0.6.1. Release metadata and source links are in src/data/releases.json. src/data/docs.ts contains the bilingual documentation. OmniSpec requires Node >=22.19.0 independently of the website build.

The installation choices use each agent's own invocation and paths. The page supports Spanish/English, light/dark preferences, explicit clipboard feedback and recovery, keyboard controls and reduced-motion behavior. These are implementation features, not a blanket accessibility certification.

## IDE walkthrough

The default presentation is an 80-second silent HyperFrames video, played when visible, with close-ups and small pause/restart controls. Explore files opens an accessible reconstruction of ten lifecycle stages. File contents and terminal output come from an executed local example of clipboard logic; conversation is illustrative. It does not run OmniSpec or an AI agent in the visitor's browser.

src/data/lifecycle-recording.json preserves 30 files and their revisions plus 11 CLI/test invocations. The example's completed spec is distinct from the website's own SPEC-009. Highlighted source uses VS Code Dark+ at authoring time. VS Code Seti/Codicons and agent marks have source/license notes in public/assets.

media/omni-workflow contains the editable film, storyboard, source notes, review and pinned HyperFrames CLI. record-example.mjs recreates the real example in a temporary directory. scripts/highlight-replay.mjs updates its syntax colors. scripts/prepare-workflow-film.mjs refreshes the captured workbench template with the latest exact file and terminal data. Run its full HyperFrames check and inspect snapshots before exporting to public/media/omni-workflow.mp4. FFmpeg and FFprobe are required for export; neither is a website runtime dependency.

## Delivery

GitHub Pages deployment is configured in .github/workflows/deploy.yml. Pushing main runs the build and publishes its static output. The ASCII symbol remains in place; a new avatar identity is a separate design decision.

MIT. See the repository and asset license files.
