## Repository role

This repository is the generated-output GitHub Pages destination for `cmdrgarud.blog`. The authoritative source is [`apps/cmdrgarud-blog`](https://github.com/SayakMukhopadhyay/blogs/tree/main/apps/cmdrgarud-blog) in the Blogs monorepo.

Do not edit files under `site/` manually. They are generated and replaced by the source monorepo's deployment workflow. Make application, content, layout, style, asset, and canonical-URL changes in the source monorepo.

## Destination maintenance

Changes here are limited to destination-specific repository documentation, licensing mirrors, and the GitHub Pages deployment workflow. The destination workflow packages `site/`; it must not install dependencies or build the Astro application.

Preserve `ASSET-CREDITS.md`, all `LICENSE-*.md` files, and `THIRD-PARTY-NOTICES.md`. Update their authoritative copies in the source monorepo first, then synchronize the corresponding destination copies.

The custom domain is managed through this repository's GitHub Pages settings. Do not add a `CNAME` file to `site/` for the custom Actions publishing workflow.
