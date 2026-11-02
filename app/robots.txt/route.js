export async function GET() {
  const robotsTxt = `User-agent: Mediapartners-Google
Allow: /

User-agent: Googlebot
Allow: /
Allow: /feed.xml
Allow: /rss.xml
Allow: /sitemap.xml

User-agent: Bingbot
Allow: /

User-agent: *
Allow: /
Allow: /feed.xml
Allow: /rss.xml
Disallow: /api/

Sitemap: https://www.quktik.com/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
