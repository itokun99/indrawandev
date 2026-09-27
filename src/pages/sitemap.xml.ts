import type { APIRoute } from 'astro';
import { getWebConfig } from '../lib/data';

const BASE_URL = getWebConfig().site.url;

export const GET: APIRoute = () => {
  const pages = [
    '',
    '/en/',
    '/blog/',
    '/en/blog/',
  ].map(path => ({
    loc: `${BASE_URL}${path}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: path ? 'weekly' : 'daily',
    priority: path ? 0.8 : 1.0,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(p => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
