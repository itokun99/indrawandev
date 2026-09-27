import type { APIRoute } from 'astro';
import { getWebConfig } from '../lib/data';

export const GET: APIRoute = () => {
  const site = getWebConfig().site;

  const manifest = {
    name: site.title,
    short_name: 'Portfolio',
    description: site.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      { src: '/placeholder-logo.png', type: 'image/png', sizes: '192x192' },
      { src: '/placeholder-logo.png', type: 'image/png', sizes: '512x512' },
      { src: '/placeholder-logo.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
