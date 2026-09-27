---
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1).max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]).transform(arr => [...new Set(arr.map(t => t.trim().toLowerCase()))]),
    draft: z.boolean().default(false),
    lang: z.enum(['id', 'en']),
    translationKey: z.string().optional(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).optional().refine(
      (val) => !['index', 'tags', 'page', 'rss.xml', 'sitemap.xml', 'feed'].includes(val || ''),
      { message: 'Slug is a reserved word' }
    ),
  }),
});

export const collections = { blog };
