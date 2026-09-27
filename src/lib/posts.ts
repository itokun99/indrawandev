import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export function isLive(entry: CollectionEntry<'blog'>, isProd: boolean): boolean {
  if (entry.data.draft && isProd) return false;
  return entry.data.pubDate <= new Date();
}

export async function postsFor(lang: 'id' | 'en'): Promise<CollectionEntry<'blog'>[]> {
  const allPosts = await getCollection('blog');
  return allPosts
    .filter(entry => entry.id.startsWith(`${lang}/`))
    .filter(entry => isLive(entry, import.meta.env.PROD))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function slugOf(entry: CollectionEntry<'blog'>): string {
  return entry.data.slug ?? entry.slug;
}
