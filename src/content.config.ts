import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const credit = z.object({
  kind: z.enum(['photo', 'screenshot', 'artwork']), creator: z.string().min(1), creatorUrl: z.url().optional(),
  provider: z.string().min(1).optional(), providerUrl: z.url().optional(), sourcePageUrl: z.url().optional(),
  originalAssetUrl: z.url().optional(), licenseUrl: z.url().optional(),
}).strict();

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string().min(1), description: z.string().min(1), pubDate: z.coerce.date().optional(), updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false), tags: z.array(z.string().min(1)).default([]),
    hero: z.object({ image: image(), alt: z.string(), caption: z.string().min(1).optional(), credit: credit.optional() }).strict().optional(),
  }).strict().superRefine((post, context) => {
    if (!post.draft && !post.pubDate) context.addIssue({ code: 'custom', message: 'Published posts require pubDate', path: ['pubDate'] });
    if (post.draft && post.pubDate) context.addIssue({ code: 'custom', message: 'Draft posts must not declare pubDate', path: ['pubDate'] });
    if (new Set(post.tags).size !== post.tags.length) context.addIssue({ code: 'custom', message: 'Tags must be unique', path: ['tags'] });
  }),
});

export const collections = { blog };
