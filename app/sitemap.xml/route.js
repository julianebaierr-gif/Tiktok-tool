import { VALID_TOOLS, VALID_LANGS } from '../../lib/tools/index.js';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://www.quktik.com';
  const currentDate = new Date().toISOString();

  const routes = [
    { path: '', changeFreq: 'hourly', priority: '1.0' },
    // 11 International Localized Landing Pages
    { path: '/es', changeFreq: 'hourly', priority: '0.95' },
    { path: '/pt', changeFreq: 'hourly', priority: '0.95' },
    { path: '/id', changeFreq: 'hourly', priority: '0.95' },
    { path: '/fr', changeFreq: 'hourly', priority: '0.95' },
    { path: '/ar', changeFreq: 'hourly', priority: '0.95' },
    { path: '/de', changeFreq: 'hourly', priority: '0.95' },
    { path: '/vi', changeFreq: 'hourly', priority: '0.95' },
    { path: '/tr', changeFreq: 'hourly', priority: '0.95' },
    { path: '/it', changeFreq: 'hourly', priority: '0.95' },
    { path: '/ru', changeFreq: 'hourly', priority: '0.95' },
    { path: '/ja', changeFreq: 'hourly', priority: '0.95' },

    // Core English Tools
    { path: '/tiktok-video-downloader', changeFreq: 'hourly', priority: '1.0' },
    { path: '/tiktok-mp3', changeFreq: 'hourly', priority: '0.95' },
    { path: '/tiktok-photo', changeFreq: 'hourly', priority: '0.95' },
    { path: '/tiktok-story', changeFreq: 'hourly', priority: '0.90' },
    { path: '/douyin-downloader', changeFreq: 'hourly', priority: '0.95' },
    { path: '/tiktok-bulk-downloader', changeFreq: 'hourly', priority: '0.95' },
    { path: '/trending-sounds', changeFreq: 'hourly', priority: '1.0' },
    { path: '/tiktok-ringtone', changeFreq: 'hourly', priority: '0.90' },
    { path: '/tiktok-avatar', changeFreq: 'hourly', priority: '0.90' },
  ];

  // 11 Languages x 9 Tools = 99 Localized Routes
  for (const lang of VALID_LANGS) {
    for (const tool of VALID_TOOLS) {
      routes.push({
        path: `/${lang}/${tool}`,
        changeFreq: 'hourly',
        priority: '0.90',
      });
    }
  }

  // Legal & Info Pages
  routes.push(
    { path: '/about', changeFreq: 'hourly', priority: '0.70' },
    { path: '/contact', changeFreq: 'hourly', priority: '0.70' },
    { path: '/privacy-policy', changeFreq: 'hourly', priority: '0.60' },
    { path: '/terms-of-service', changeFreq: 'hourly', priority: '0.60' },
    { path: '/disclaimer', changeFreq: 'hourly', priority: '0.60' }
  );

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (r) => `
    <url>
      <loc>${baseUrl}${r.path}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${r.changeFreq}</changefreq>
      <priority>${r.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemapXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
