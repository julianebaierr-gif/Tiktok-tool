import { VALID_TOOLS, VALID_LANGS } from '../../lib/tools/index.js';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://www.quktik.com';

  function getHubHreflangs() {
    const links = [];
    links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}"/>`);
    links.push(`    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}"/>`);
    for (const l of VALID_LANGS) {
      links.push(`    <xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}/${l}"/>`);
    }
    return links.join('\n');
  }

  function getToolHreflangs(tool) {
    const links = [];
    links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/${tool}"/>`);
    links.push(`    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/${tool}"/>`);
    for (const l of VALID_LANGS) {
      links.push(`    <xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}/${l}/${tool}"/>`);
    }
    return links.join('\n');
  }

  const entries = [];

  // 1. Homepage (1)
  entries.push(`  <url>
    <loc>${baseUrl}</loc>
${getHubHreflangs()}
  </url>`);

  // 2. 11 International Localized Landing Hubs
  for (const lang of VALID_LANGS) {
    entries.push(`  <url>
    <loc>${baseUrl}/${lang}</loc>
${getHubHreflangs()}
  </url>`);
  }

  // 3. 9 Core English Tools
  for (const tool of VALID_TOOLS) {
    entries.push(`  <url>
    <loc>${baseUrl}/${tool}</loc>
${getToolHreflangs(tool)}
  </url>`);
  }

  // 4. 11 Languages x 9 Tools = 99 Localized Routes
  for (const lang of VALID_LANGS) {
    for (const tool of VALID_TOOLS) {
      entries.push(`  <url>
    <loc>${baseUrl}/${lang}/${tool}</loc>
${getToolHreflangs(tool)}
  </url>`);
    }
  }

  // 5. 5 Legal & Info Pages (Single canonical, no multi-language variants)
  const legalPages = ['about', 'contact', 'privacy-policy', 'terms-of-service', 'disclaimer'];
  for (const page of legalPages) {
    entries.push(`  <url>
    <loc>${baseUrl}/${page}</loc>
  </url>`);
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;

  return new Response(sitemapXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
    },
  });
}
