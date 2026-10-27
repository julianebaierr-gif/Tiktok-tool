export async function GET() {
  const baseUrl = 'https://tikflow-downloader.vercel.app';
  const currentDate = new Date().toISOString();

  const routes = [
    { path: '', changeFreq: 'daily', priority: '1.0' },
    { path: '/tiktok-mp3', changeFreq: 'daily', priority: '0.9' },
    { path: '/tiktok-photo', changeFreq: 'daily', priority: '0.9' },
    { path: '/tiktok-story', changeFreq: 'daily', priority: '0.8' },
    { path: '/douyin-downloader', changeFreq: 'daily', priority: '0.9' },
    { path: '/tiktok-ringtone', changeFreq: 'weekly', priority: '0.8' },
    { path: '/tiktok-avatar', changeFreq: 'weekly', priority: '0.8' },
    { path: '/about', changeFreq: 'monthly', priority: '0.5' },
    { path: '/contact', changeFreq: 'monthly', priority: '0.5' },
    { path: '/privacy-policy', changeFreq: 'monthly', priority: '0.4' },
    { path: '/terms-of-service', changeFreq: 'monthly', priority: '0.4' },
    { path: '/disclaimer', changeFreq: 'monthly', priority: '0.4' },
  ];

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
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
