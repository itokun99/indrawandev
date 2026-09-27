import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getWebConfig } from '../lib/data';
import { t } from '../lib/i18n';
import { postsFor } from '../lib/posts';
import { slugOf } from '../lib/posts';

export async function GET(context: any) {
  const posts = await postsFor('id');
  const webConfig = getWebConfig();

  return rss({
    title: `${t('id', 'blog.title')} - ${webConfig.site.title}`,
    description: webConfig.site.description,
    site: context.site,
    items: posts.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/blog/${slugOf(entry)}/`,
      categories: entry.data.tags,
    })),
    trailingSlash: true,
  });
}
