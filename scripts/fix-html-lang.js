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
  const isRtl = lang === 'ar';
  const langTag = isRtl ? `<html lang="${lang}" dir="rtl"` : `<html lang="${lang}"`;
  let html = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Replace <html lang="en"
  if (html.includes('<html lang="en"')) {
    html = html.replace(/<html lang="en" suppressHydrationWarning/g, `${langTag} suppressHydrationWarning`);
    html = html.replace(/<html lang="en"/g, langTag);
    changed = true;
  }

  // 2. Ensure meta content-language is in <head>
  if (!html.includes('http-equiv="content-language"')) {
    const metaTag = `<meta http-equiv="content-language" content="${lang}" />`;
    if (html.includes('<head>')) {
      html = html.replace('<head>', `<head>${metaTag}`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, html, 'utf8');
    modifiedCount++;
  }
}

VALID_LANGS.forEach((lang) => {
  // 1. Language landing page (.next/server/app/${lang}.html)
  const langLanding = path.join(appBuildDir, `${lang}.html`);
  if (fs.existsSync(langLanding)) {
    patchHtmlFile(langLanding, lang);
  }

  // 2. Localized tool pages (.next/server/app/${lang}/*.html)
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

console.log(`[i18n-postbuild] Successfully patched <html lang> and content-language on ${modifiedCount} static localized HTML pages.`);
