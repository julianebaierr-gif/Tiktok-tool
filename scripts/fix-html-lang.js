const fs = require('fs');
const path = require('path');

const VALID_LANGS = ['ar', 'de', 'es', 'fr', 'id', 'it', 'ja', 'pt', 'ru', 'tr', 'vi'];
const appBuildDir = path.join(process.cwd(), '.next', 'server', 'app');

if (!fs.existsSync(appBuildDir)) {
  console.log('Build directory not found, skipping lang fix.');
  process.exit(0);
}

let modifiedCount = 0;

VALID_LANGS.forEach((lang) => {
  const isRtl = lang === 'ar';
  const langTag = isRtl ? `<html lang="${lang}" dir="rtl"` : `<html lang="${lang}"`;

  // 1. Language landing page (.next/server/app/${lang}.html)
  const langLanding = path.join(appBuildDir, `${lang}.html`);
  if (fs.existsSync(langLanding)) {
    let html = fs.readFileSync(langLanding, 'utf8');
    if (html.includes('<html lang="en"')) {
      html = html.replace(/<html lang="en" suppressHydrationWarning/g, `${langTag} suppressHydrationWarning`);
      html = html.replace(/<html lang="en"/g, langTag);
      fs.writeFileSync(langLanding, html, 'utf8');
      modifiedCount++;
    }
  }

  // 2. Localized tool pages (.next/server/app/${lang}/*.html)
  const langDir = path.join(appBuildDir, lang);
  if (fs.existsSync(langDir)) {
    const files = fs.readdirSync(langDir);
    for (const f of files) {
      if (f.endsWith('.html')) {
        const fullPath = path.join(langDir, f);
        let html = fs.readFileSync(fullPath, 'utf8');
        if (html.includes('<html lang="en"')) {
          html = html.replace(/<html lang="en" suppressHydrationWarning/g, `${langTag} suppressHydrationWarning`);
          html = html.replace(/<html lang="en"/g, langTag);
          fs.writeFileSync(fullPath, html, 'utf8');
          modifiedCount++;
        }
      }
    }
  }
});

console.log(`[i18n-postbuild] Successfully patched <html lang> on ${modifiedCount} static localized HTML pages.`);
