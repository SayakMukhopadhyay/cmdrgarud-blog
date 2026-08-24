import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localImage = z.string().refine((value) => value.startsWith('/content/images/'), {
  message: 'Images must be local migration assets under /content/images/',
});
const captionLinks = z.array(z.object({ label: z.string(), href: z.url() })).optional();

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string(),
    publishedAt: z.coerce.date().nullable(),
    updatedAt: z.coerce.date(),
    draft: z.boolean(),
    featured: z.boolean(),
    tags: z.array(z.string()),
    featureImage: localImage.optional(),
    featureImageCaption: z.string().optional(),
    featureImageCaptionLinks: captionLinks,
    ghostId: z.string().min(1),
    ghostUuid: z.string().min(1),
  }).superRefine((post, context) => {
    if (!post.draft && !post.publishedAt) {
      context.addIssue({ code: 'custom', message: 'Published posts require publishedAt', path: ['publishedAt'] });
    }
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string(),
    updatedAt: z.coerce.date(),
    draft: z.boolean(),
    featureImage: localImage.optional(),
    featureImageCaption: z.string().optional(),
    featureImageCaptionLinks: captionLinks,
    showTitleAndFeatureImage: z.boolean(),
    ghostId: z.string().min(1),
    ghostUuid: z.string().min(1),
  }),
});

export const collections = { posts, pages };
