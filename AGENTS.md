## Development

Use npm for dependency management and scripts. When starting the development server for automated work, use Astro's background mode through npm:

```
npm run astro -- dev --background
```

Manage it with `npm run astro -- dev stop`, `npm run astro -- dev status`, and `npm run astro -- dev logs`.

## Asset provenance

Update `ASSET-CREDITS.md` whenever image media is added, replaced, or removed. Record each image asset exactly once with its creator and source; do not infer missing provenance. Keep exact remote source URLs, where available, in the corresponding site configuration or Markdown frontmatter. Consult `THIRD-PARTY-NOTICES.md` for the repository's media-rights policy.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
