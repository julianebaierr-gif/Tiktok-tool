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

const htmlFiles = getHtmlFiles(path.join(__dirname, '..', '.next', 'server', 'app'));
const allScriptSrcs = new Set();
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/<script[^>]*src=["']([^"']*)["']/gi) || [];
  for (const m of matches) {
    const srcMatch = m.match(/src=["']([^"']*)["']/i);
    if (srcMatch) allScriptSrcs.add(srcMatch[1]);
  }
}
console.log('Total unique script sources:', allScriptSrcs.size);
allScriptSrcs.forEach(s => console.log(' - ', s));
