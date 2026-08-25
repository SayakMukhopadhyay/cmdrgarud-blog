# cmdrgarud.blog

Artifact-only GitHub Pages deployment repository for [cmdrgarud.blog](https://cmdrgarud.blog).

The authoritative Astro source is [`apps/cmdrgarud-blog`](https://github.com/SayakMukhopadhyay/blogs/tree/main/apps/cmdrgarud-blog) in the Blogs monorepo. This repository stores neither application source nor generated site output.

## Deployment

The Blogs monorepo validates and builds the application once, uploads `site-cmdrgarud-blog` as an immutable workflow artifact, and dispatches this repository's deployment workflow with the exact source workflow run ID.

The destination workflow downloads that fixed artifact from `SayakMukhopadhyay/blogs`, validates it, repackages it as a GitHub Pages artifact, and deploys it without checking out this repository, installing dependencies, rebuilding Astro, committing, or pushing.

A manual deployment requires the source Blogs workflow run ID. The corresponding source artifact must still be within its retention period.

The custom domain is configured in this repository's GitHub Pages settings. A `CNAME` file and deployment branch are not used.

## Licensing

- The workflow and repository documentation are available under the [MIT License](LICENSE-CODE.md).
- The deployed application's software, written-content license, media-rights notice, and asset provenance are maintained in the [Blogs monorepo](https://github.com/SayakMukhopadhyay/blogs).
