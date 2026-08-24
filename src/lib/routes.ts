import { siteConfig } from '../config/site';

export function entryPath(slug: string): string {
  switch (siteConfig.routePolicy) {
    case 'legacy-root':
      return `/${slug}/`;
  }
}

export function tagPath(tag: string): string {
  return `/tag/${encodeURIComponent(tag)}/`;
}

export function authorPath(slug = siteConfig.author.slug): string {
  return `/author/${encodeURIComponent(slug)}/`;
}
