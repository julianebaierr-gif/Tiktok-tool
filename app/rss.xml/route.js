import { generateRssFeedXml } from '../../lib/seo/generateRssFeed';

export const dynamic = 'force-dynamic';

export async function GET() {
  const feedXml = generateRssFeedXml();

  return new Response(feedXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
