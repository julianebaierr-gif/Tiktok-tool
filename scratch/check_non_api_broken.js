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
const validRoutes = new Set();
for (const file of htmlFiles) {
  const relPath = path.relative(buildDir, file).replace(/\\/g, '/');
  let route = '/' + relPath.replace(/\.html$/, '').replace(/\/index$/, '');
  if (route === '/index') route = '/';
  validRoutes.add(route);
}
validRoutes.add('/feed.xml');
validRoutes.add('/feed');
validRoutes.add('/rss.xml');
validRoutes.add('/sitemap.xml');
validRoutes.add('/robots.txt');
validRoutes.add('/ads.txt');
validRoutes.add('/llms.txt');

const nonApiBroken = [];
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(buildDir, file).replace(/\\/g, '/');
  let fromUrl = '/' + relPath.replace(/\.html$/, '').replace(/\/index$/, '');
  if (fromUrl === '/index') fromUrl = '/';

  const matches = content.match(/<a\b[^>]*href=["']([^"']*)["'][^>]*>/gi) || [];
  for (const m of matches) {
    const href = m.match(/href=["']([^"']*)["']/i)[1];
    if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/api/')) {
      const cleanHref = href.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
      if (!validRoutes.has(cleanHref)) {
        nonApiBroken.push({ from: fromUrl, to: href });
      }
    }
  }
}
console.log('Non-API broken links count:', nonApiBroken.length);
if (nonApiBroken.length > 0) console.log(nonApiBroken);
