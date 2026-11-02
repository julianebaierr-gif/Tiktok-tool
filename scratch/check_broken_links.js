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

// Build map of all valid internal routes
const validRoutes = new Set();
for (const file of htmlFiles) {
  const relPath = path.relative(buildDir, file).replace(/\\/g, '/');
  let route = '/' + relPath.replace(/\.html$/, '').replace(/\/index$/, '');
  if (route === '/index') route = '/';
  validRoutes.add(route);
  validRoutes.add(route + '/');
}
validRoutes.add('/feed.xml');
validRoutes.add('/feed');
validRoutes.add('/rss.xml');
validRoutes.add('/sitemap.xml');
validRoutes.add('/robots.txt');
validRoutes.add('/ads.txt');
validRoutes.add('/llms.txt');

console.log('Total valid internal routes:', validRoutes.size);

const crawlableBroken = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(buildDir, file).replace(/\\/g, '/');
  let fromUrl = '/' + relPath.replace(/\.html$/, '').replace(/\/index$/, '');
  if (fromUrl === '/index') fromUrl = '/';

  const matches = content.match(/<a\b[^>]*>/gi) || [];
  for (const tag of matches) {
    const hrefMatch = tag.match(/href=["']([^"']*)["']/i);
    const isNoFollow = /rel=["'][^"']*nofollow[^"']*["']/i.test(tag);
    if (hrefMatch && !isNoFollow) {
      const href = hrefMatch[1];
      if (href.startsWith('/') && !href.startsWith('//')) {
        const cleanHref = href.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
        if (!validRoutes.has(cleanHref)) {
          crawlableBroken.push({ from: fromUrl, to: href, tag });
        }
      }
    }
  }
}

console.log('Total crawlable broken internal links (excluding nofollow):', crawlableBroken.length);
if (crawlableBroken.length > 0) {
  crawlableBroken.forEach(b => console.log(`[BROKEN] On ${b.from} => ${b.to}`));
}
