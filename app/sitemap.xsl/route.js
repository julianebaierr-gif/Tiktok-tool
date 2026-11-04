import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'sitemap.xsl');
  const xslContent = fs.readFileSync(filePath, 'utf8');

  return new Response(xslContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/xsl; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
