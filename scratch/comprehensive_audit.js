const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const buildDir = path.join(__dirname, '..', '.next', 'server', 'app');
const htmlFiles = getHtmlFiles(buildDir);
console.log('Total HTML files found in build:', htmlFiles.length);

const issues = {
  missingH1: [],
  multipleH1: [],
  shortMetaDesc: [],
  longMetaDesc: [],
  missingOgTags: [],
  linksWithoutAnchor: [],
  brokenLinks: [],
  duplicateTitles: {},
  schemaErrors: [],
  aggregateRatingFound: [],
  lowRatio: []
};

const allUrls = new Set();
const linkGraph = {}; // target -> count of incoming links
const pageOutgoingLinks = {};

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(buildDir, file).replace(/\\/g, '/');
  
  // URL normalization
  let pageUrl = '/' + relPath.replace(/\.html$/, '').replace(/\/index$/, '');
  if (pageUrl === '/index') pageUrl = '/';
  allUrls.add(pageUrl);
  pageOutgoingLinks[pageUrl] = [];

  // 1. H1 check
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
  if (!h1Matches || h1Matches.length === 0) {
    issues.missingH1.push(pageUrl);
  } else if (h1Matches.length > 1) {
    issues.multipleH1.push({ pageUrl, count: h1Matches.length });
  } else {
    const h1Text = h1Matches[0].replace(/<[^>]+>/g, '').trim();
    if (!h1Text) issues.missingH1.push(pageUrl + ' (empty)');
  }

  // 2. Meta description check
  const metaDescMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                        content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  if (metaDescMatch) {
    const desc = metaDescMatch[1].trim();
    if (desc.length < 50) {
      issues.shortMetaDesc.push({ pageUrl, len: desc.length, desc });
    } else if (desc.length > 165) {
      issues.longMetaDesc.push({ pageUrl, len: desc.length, desc });
    }
  } else {
    issues.shortMetaDesc.push({ pageUrl, len: 0, desc: 'MISSING' });
  }

  // 3. Open Graph check
  const hasOgTitle = /<meta[^>]*property=["']og:title["']/i.test(content);
  const hasOgDesc = /<meta[^>]*property=["']og:description["']/i.test(content);
  const hasOgImage = /<meta[^>]*property=["']og:image["']/i.test(content);
  const hasOgUrl = /<meta[^>]*property=["']og:url["']/i.test(content);
  if (!hasOgTitle || !hasOgDesc || !hasOgImage || !hasOgUrl) {
    issues.missingOgTags.push({ pageUrl, hasOgTitle, hasOgDesc, hasOgImage, hasOgUrl });
  }

  // 4. Title check
  const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    const title = titleMatch[1].trim();
    if (!issues.duplicateTitles[title]) issues.duplicateTitles[title] = [];
    issues.duplicateTitles[title].push(pageUrl);
  }

  // 5. Schema check & aggregateRating
  if (content.includes('aggregateRating')) {
    issues.aggregateRatingFound.push(pageUrl);
  }

  // 6. Text to HTML ratio
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    const bodyHtml = bodyMatch[1];
    const textOnly = bodyHtml.replace(/<script[\s\S]*?<\/script>/gi, '')
                             .replace(/<style[\s\S]*?<\/style>/gi, '')
                             .replace(/<svg[\s\S]*?<\/svg>/gi, '')
                             .replace(/<[^>]+>/g, ' ')
                             .replace(/\s+/g, ' ').trim();
    const ratio = (textOnly.length / content.length) * 100;
    if (ratio < 10 && !pageUrl.includes('_not-found')) {
      issues.lowRatio.push({ pageUrl, ratio: ratio.toFixed(2) + '%' });
    }
  }

  // 7. Anchor text and incoming links
  const linkMatches = content.match(/<a\b[^>]*>([\s\S]*?)<\/a>/gi) || [];
  for (const aTag of linkMatches) {
    const hrefMatch = aTag.match(/href=["']([^"']*)["']/i);
    const innerText = aTag.replace(/<[^>]+>/g, '').trim();
    const ariaLabel = aTag.match(/aria-label=["']([^"']*)["']/i);
    const titleAttr = aTag.match(/title=["']([^"']*)["']/i);
    const hasImgAlt = /<img[^>]*alt=["'][^"']+["']/i.test(aTag);

    if (!innerText && !ariaLabel && !titleAttr && !hasImgAlt) {
      issues.linksWithoutAnchor.push({ page: pageUrl, tag: aTag.substring(0, 100) });
    }

    if (hrefMatch) {
      let target = hrefMatch[1].split('#')[0].split('?')[0];
      if (target.startsWith('/')) {
        target = target.replace(/\/$/, '') || '/';
        pageOutgoingLinks[pageUrl].push(target);
        linkGraph[target] = (linkGraph[target] || 0) + 1;
      }
    }
  }
}

console.log('--- AUDIT RESULTS ---');
console.log('Missing H1 count:', issues.missingH1.length);
if (issues.missingH1.length > 0) console.log('Missing H1:', issues.missingH1);

console.log('Multiple H1 count:', issues.multipleH1.length);
if (issues.multipleH1.length > 0) console.log('Multiple H1:', issues.multipleH1);

console.log('Short Meta Desc count:', issues.shortMetaDesc.length);
if (issues.shortMetaDesc.length > 0) console.log('Short Meta Desc:', issues.shortMetaDesc);

console.log('Long Meta Desc count:', issues.longMetaDesc.length);
if (issues.longMetaDesc.length > 0) console.log('Long Meta Desc:', issues.longMetaDesc);

console.log('Missing OG Tags count:', issues.missingOgTags.length);
if (issues.missingOgTags.length > 0) console.log('Missing OG Tags:', issues.missingOgTags);

console.log('Links without anchor text count:', issues.linksWithoutAnchor.length);
if (issues.linksWithoutAnchor.length > 0) console.log('Links without anchor:', issues.linksWithoutAnchor);

console.log('aggregateRating count (MUST BE 0):', issues.aggregateRatingFound.length);
console.log('Low ratio pages (<10%):', issues.lowRatio.length);
if (issues.lowRatio.length > 0) console.log('Low ratio pages:', issues.lowRatio);

const duplicates = Object.entries(issues.duplicateTitles).filter(([t, pages]) => pages.length > 1);
console.log('Duplicate titles count:', duplicates.length);
if (duplicates.length > 0) {
  duplicates.forEach(([t, p]) => console.log('Duplicate:', t, 'on pages:', p));
}

// Incoming links analysis
const oneIncomingLink = [];
for (const url of allUrls) {
  if (url === '/_not-found') continue;
  const count = linkGraph[url] || 0;
  if (count <= 1) {
    oneIncomingLink.push({ url, count });
  }
}
console.log('Pages with <= 1 incoming internal link:', oneIncomingLink.length);
if (oneIncomingLink.length > 0) {
  console.log('Sample pages with <= 1 incoming link:', oneIncomingLink);
}
