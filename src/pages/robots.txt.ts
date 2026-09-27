import type { APIRoute } from 'astro';
import { getWebConfig } from '../lib/data';

export const GET: APIRoute = () => {
  const { url } = getWebConfig().site;

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${url}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
