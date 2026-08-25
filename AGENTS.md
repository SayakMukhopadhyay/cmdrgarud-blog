## Repository role

This repository is the artifact-only GitHub Pages deployment endpoint for `cmdrgarud.blog`. The authoritative source is [`apps/cmdrgarud-blog`](https://github.com/SayakMukhopadhyay/blogs/tree/main/apps/cmdrgarud-blog) in the Blogs monorepo.

Do not add Astro source, npm dependencies, `dist/`, `site/`, copied assets, or generated output here. Make application, content, layout, style, asset, attribution, licensing, and canonical-URL changes in the source monorepo.

## Destination maintenance

Changes here are limited to destination-specific repository documentation, the software license for those maintained files, and `.github/workflows/deploy-pages.yml`.

The deployment workflow must:

- accept only the fixed `site-cmdrgarud-blog` artifact from `SayakMukhopadhyay/blogs`;
- use the dispatched source workflow run ID;
- download through a short-lived GitHub App token limited to Actions read on the source repository;
- validate and repackage the artifact with official GitHub-maintained actions;
- deploy with the repository-scoped Pages and OIDC permissions;
- never install dependencies, build Astro, commit, or push.

The custom domain is managed through this repository's GitHub Pages settings. Do not add a `CNAME` file or deployment branch.
