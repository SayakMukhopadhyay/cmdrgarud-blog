# cmdrgarud.blog

Deployment repository for [cmdrgarud.blog](https://cmdrgarud.blog).

The authoritative Astro source is [`apps/cmdrgarud-blog`](https://github.com/SayakMukhopadhyay/blogs/tree/main/apps/cmdrgarud-blog) in the Blogs monorepo. GitHub Actions builds that application there and commits the generated production output to `site/` in this repository. Do not edit files under `site/` manually; those changes will be replaced by the next source deployment.

## Deployment

A push to `main` that changes `site/` triggers the GitHub Pages workflow. The workflow packages the committed static files and deploys them without installing dependencies or rebuilding the application.

The custom domain is configured in this repository's GitHub Pages settings. A `CNAME` file is not used by the custom Actions workflow.

## Licensing

This repository deliberately separates software, written content, and media rights:

- Original software and generated software portions are available under the [MIT License](LICENSE-CODE.md).
- Original written content is available under [CC BY-NC-ND 4.0](LICENSE-CONTENT.md).
- Images, artwork, branding, and third-party material are excluded from those grants. Legal boundaries are documented in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md), with per-asset provenance in [ASSET-CREDITS.md](ASSET-CREDITS.md).
