# OmniSpec — Official Website & Documentation

Website and documentation portal for **OmniSpec** (Spec-Driven Development Framework for AI Coding Agents).

Built with **Astro 4**, **Tailwind CSS**, and **TypeScript**.

---

## Features

- **Responsive Landing Page:** High-converting presentation of OmniSpec's architecture, philosophy, and benefits.
- **Interactive Multi-Agent Selector:** Live configuration viewer for Cursor, GitHub Copilot, Google Antigravity, Claude Code, OpenCode, and Kilo.
- **Product Canvas Interactive Preview:** Real-time visualization of `specs/manifest.json` state machines and contract artifacts.
- **Full Documentation Portal (`/docs`):** Complete guide to SDD, CONSTITUTION.md, 4 archetypes, 9 workflows, and domain profiles.
- **Release Changelog (`/changelog`):** Chronological engineering log with direct links to GitHub release tags.
- **Bilingual Support:** Full internationalization (Spanish & English) with zero runtime hydration penalties.
- **Zero AI Slop:** Built following strict frontend craft invariants (accessible contrast, WCAG AA, full keyboard navigation, dark/light theme persistence).

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Check types and astro diagnostics
npm run check

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment (GitHub Pages)

This project includes an automated deployment workflow located at `.github/workflows/deploy.yml`. When pushed to GitHub, GitHub Actions builds and publishes the static site directly to GitHub Pages.

---

## About the Project

OmniSpec was created by Brahiam Andres as a personal open-source initiative with the vision of providing a truly universal, zero-dependency Spec-Driven Development framework for AI agents. The project is under active continuous development.

---

## License

MIT © [OmniSpec Authors](https://github.com/brahiandres1999-oss/omni-spec/blob/main/LICENSE)

## OmniSpec release displayed by the site

This update prepares **0.7.0-preview.2** in npm channel **preview**. The previous publication **0.6.1** remains latest. src/data/omnispec.ts centralizes release metadata, install commands, agent paths and domain profile descriptions. src/data/docs.ts contains the current bilingual documentation.

Publish the npm Preview before deploying a website that announces it as available. After confirming npm and GitHub publication, update the publication flags/status in the release data and changelog. Until then the site labels the Preview as preparing release. The verified Git tag is marked present; npm and GitHub Release remain pending. Track these independently through published (npm), tagPublished and releasePublished.

The main install command is npx --yes omni-spec@preview init. Node.js >=22.19.0 is an OmniSpec requirement; the website's build runtime is configured independently. The ASCII hero geometry is preserved.
