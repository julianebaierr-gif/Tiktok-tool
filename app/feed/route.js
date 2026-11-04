import { generateRssFeedXml } from '../../lib/seo/generateRssFeed';

export const dynamic = 'force-dynamic';

export async function GET() {
  const feedXml = generateRssFeedXml();

  return new Response(feedXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
    },
  });
}
