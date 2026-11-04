import { VALID_TOOLS, VALID_LANGS } from '../../lib/tools/index.js';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://www.quktik.com';

  // Real content milestone dates (YYYY-MM-DD)
  // These dates remain stable and only update when actual content changes occur
  const DATE_CORE_TOOLS = '2026-11-02';
  const DATE_TRENDING = '2026-11-04';
  const DATE_LOCALIZED = '2026-11-01';
  const DATE_LEGAL = '2026-10-28';

  const urls = [];

  // 1. Homepage
  urls.push({
    loc: `${baseUrl}`,
    lastmod: DATE_CORE_TOOLS,
  });

  // 2. 11 International Localized Landing Pages
  for (const lang of VALID_LANGS) {
    urls.push({
      loc: `${baseUrl}/${lang}`,
      lastmod: DATE_LOCALIZED,
    });
  }

  // 3. 9 Core English Tools
  for (const tool of VALID_TOOLS) {
    urls.push({
      loc: `${baseUrl}/${tool}`,
      lastmod: tool === 'trending-sounds' ? DATE_TRENDING : DATE_CORE_TOOLS,
    });
  }

  // 4. 11 Languages x 9 Tools = 99 Localized Routes
  for (const lang of VALID_LANGS) {
    for (const tool of VALID_TOOLS) {
      urls.push({
        loc: `${baseUrl}/${lang}/${tool}`,
        lastmod: tool === 'trending-sounds' ? DATE_TRENDING : DATE_LOCALIZED,
      });
    }
  }

  // 5. 5 Legal & Policy Pages
  const legalPages = ['about', 'contact', 'privacy-policy', 'terms-of-service', 'disclaimer'];
  for (const page of legalPages) {
    urls.push({
      loc: `${baseUrl}/${page}`,
      lastmod: DATE_LEGAL,
    });
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
