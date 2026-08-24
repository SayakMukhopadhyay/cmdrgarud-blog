import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../site';
import { postPath } from '../lib/routes';
export async function GET(context) { const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort((a, b) => (b.data.pubDate?.getTime() ?? 0) - (a.data.pubDate?.getTime() ?? 0)); return rss({ title: siteConfig.title, description: siteConfig.description, site: context.site, items: posts.map((post) => { if (!post.data.pubDate) throw new Error(`Published post ${post.id} has no pubDate`); return { title: post.data.title, description: post.data.description, pubDate: post.data.pubDate, link: postPath(post.id) }; }) }); }
