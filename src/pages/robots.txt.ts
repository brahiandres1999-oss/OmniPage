import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteOrigin = (site?.toString() || 'https://omnispec.dev').replace(/\/$/, '');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemapUrl = `${siteOrigin}${base}/sitemap.xml`;

  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapUrl}`,
    ''
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
