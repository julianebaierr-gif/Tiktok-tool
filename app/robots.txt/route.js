export const dynamic = 'force-dynamic';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?s=
Disallow: /*?q=
Disallow: /*?ref=
Disallow: /*?utm_*
Disallow: /*?fbclid=
Disallow: /*?gclid=

Sitemap: https://www.quktik.com/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
