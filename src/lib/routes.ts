import { siteConfig } from '../site';
export const postPath = (id: string) => `/${id}/`;
export const tagPath = (tag: string) => `/tag/${encodeURIComponent(tag)}/`;
export const authorPath = (slug = siteConfig.author.slug) => `/author/${encodeURIComponent(slug)}/`;
export const tagLabel = (tag: string) => siteConfig.tagLabels[tag] ?? tag.split('-').map((part) => part ? part[0].toUpperCase() + part.slice(1) : part).join(' ');
