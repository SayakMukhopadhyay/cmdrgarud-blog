# cmdrgarud.blog

Astro-native static successor to the former Ghost site. Content is validated Markdown, and the production build contains no client-side JavaScript.

## Commands

- `npm ci` — install the exact dependency versions from `package-lock.json`
- `npm run dev` — start the local development server
- `npm run check` — run Astro and TypeScript diagnostics
- `npm run build` — run diagnostics and create the static production build

Canonical URLs, RSS, sitemap generation, and separate GitHub Actions build and Pages deployment workflows are configured for the production domain. The deployment workflow publishes the artifact produced by the successful main-branch build without rebuilding the site.

## Licensing

This repository deliberately separates software, written content, and media rights:

- Original software and configuration are available under the [MIT License](LICENSE-CODE.md).
- Original written content is available under [CC BY-NC-ND 4.0](LICENSE-CONTENT.md).
- Images, artwork, branding, and third-party material are excluded from those grants. Legal boundaries are documented in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md), with per-asset provenance in [ASSET-CREDITS.md](ASSET-CREDITS.md).
