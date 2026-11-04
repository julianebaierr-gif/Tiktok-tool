const fs = require('fs');
const path = require('path');

const VALID_LANGS = ['ar', 'de', 'es', 'fr', 'id', 'it', 'ja', 'pt', 'ru', 'tr', 'vi'];
const appBuildDir = path.join(process.cwd(), '.next', 'server', 'app');

if (!fs.existsSync(appBuildDir)) {
  console.log('Build directory not found, skipping lang fix.');
  process.exit(0);
}

let modifiedCount = 0;

function patchHtmlFile(filePath, lang) {
  let html = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Normalize hrefLang to standard lowercase hreflang for all external parsers
  if (html.includes('hrefLang=')) {
    html = html.replace(/\bhrefLang=/g, 'hreflang=');
    changed = true;
  }

  // 2. Replace <html lang="en" if this is a translated route
  if (lang) {
    const isRtl = lang === 'ar';
    const langTag = isRtl ? `<html lang="${lang}" dir="rtl"` : `<html lang="${lang}"`;

    if (html.includes('<html lang="en"')) {
      html = html.replace(/<html lang="en" suppressHydrationWarning/g, `${langTag} suppressHydrationWarning`);
      html = html.replace(/<html lang="en"/g, langTag);
      changed = true;
    }

    // 3. Ensure meta content-language is in <head>
    if (!html.includes('http-equiv="content-language"')) {
      const metaTag = `<meta http-equiv="content-language" content="${lang}" />`;
      if (html.includes('<head>')) {
        html = html.replace('<head>', `<head>${metaTag}`);
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, html, 'utf8');
    modifiedCount++;
  }
}

// 1. Root & English pages
const rootFiles = fs.readdirSync(appBuildDir);
for (const f of rootFiles) {
  if (f.endsWith('.html')) {
    // If it's a localized file named ${lang}.html
    const langMatch = f.match(/^([a-z]{2})\.html$/);
    const lang = (langMatch && VALID_LANGS.includes(langMatch[1])) ? langMatch[1] : null;
    patchHtmlFile(path.join(appBuildDir, f), lang);
  }
}

// 2. Localized subdirectories (.next/server/app/${lang}/*.html)
VALID_LANGS.forEach((lang) => {
  const langDir = path.join(appBuildDir, lang);
  if (fs.existsSync(langDir)) {
    const files = fs.readdirSync(langDir);
    for (const f of files) {
      if (f.endsWith('.html')) {
        const fullPath = path.join(langDir, f);
        patchHtmlFile(fullPath, lang);
      }
    }
  }
});

console.log(`[i18n-postbuild] Successfully normalized hreflang, <html lang>, and content-language on ${modifiedCount} static HTML pages.`);
