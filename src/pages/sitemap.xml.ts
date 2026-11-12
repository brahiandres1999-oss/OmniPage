import type { APIRoute } from 'astro';


export const GET: APIRoute = ({ site }) => {
  const siteOrigin = (site?.toString() || 'https://omnispec.dev').replace(/\/$/, '');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');


  const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/docs/', priority: '0.9', changefreq: 'weekly' },
    { path: '/changelog/', priority: '0.8', changefreq: 'weekly' }
  ];

  const urlsXml = routes.flatMap(route => [route, { ...route, path: '/en' + route.path }])
    .map(
      ({ path, priority, changefreq }) => `  <url>
    <loc>${siteOrigin}${base}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
