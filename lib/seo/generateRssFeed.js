import definitions from '../tools/definitions.json';
import { VALID_TOOLS, VALID_LANGS } from '../tools/index.js';

export function generateRssFeedXml() {
  const baseUrl = 'https://www.quktik.com';
  const buildDate = 'Wed, 04 Nov 2026 12:00:00 GMT';

  const items = [];

  // 1. Core English Tools (9)
  for (const tool of VALID_TOOLS) {
    const data = definitions[tool] || definitions['tiktok-video-downloader'];
    const title = data.titles.en || `${tool} - QukTik`;
    const desc = data.descs.en || 'Download TikTok and Douyin media without watermarks.';

    items.push({
      title,
      link: `${baseUrl}/${tool}`,
      guid: `${baseUrl}/${tool}`,
      category: 'TikTok Tools',
      description: desc,
    });
  }

  // 2. 11 Localized Landing Hubs
  const localizedHubs = [
    { lang: 'es', name: 'Descargador de TikTok sin Marca de Agua (Español)', desc: 'Descarga videos de TikTok sin marca de agua en HD MP4 y MP3. Herramienta online gratis y rápida para móvil y PC sin registro.' },
    { lang: 'pt', name: 'Baixar Vídeos do TikTok sem Marca d\'Água (Português)', desc: 'Baixe vídeos do TikTok sem marca d\'água em HD MP4 e MP3 online. Rápido, gratuito e seguro para celular e computador.' },
    { lang: 'id', name: 'Download Video TikTok Tanpa Watermark HD (Indonesia)', desc: 'Download video TikTok tanpa watermark kualitas HD MP4 dan MP3 gratis. Cepat, mudah, dan aman untuk HP Android, iPhone, atau laptop.' },
    { lang: 'fr', name: 'Télécharger Vidéo TikTok Sans Filigrane (Français)', desc: 'Téléchargez des vidéos TikTok sans filigrane en HD MP4 et MP3 gratuitement en ligne. Rapide, fluide et sécurisé sur mobile.' },
    { lang: 'ar', name: 'تحميل فيديو تيك توك بدون علامة مائية بدقة عالية (العربية)', desc: 'تحميل فيديوهات تيك توك بدون علامة مائية بدقة عالية MP4 وموسيقى MP3 مجانا عبر الإنترنت للهاتف والكمبيوتر بدون برامج.' },
    { lang: 'de', name: 'TikTok Video ohne Wasserzeichen herunterladen (Deutsch)', desc: 'TikTok Videos ohne Wasserzeichen in HD MP4 oder MP3 kostenlos online herunterladen. Schnell, sicher und unbegrenzt für Handy und PC.' },
    { lang: 'vi', name: 'Tải Video TikTok Không Logo Hình Mờ HD (Tiếng Việt)', desc: 'Tải video TikTok không logo, không watermark chuẩn HD MP4 và MP3 miễn phí. Tải nhanh chóng cho điện thoại và máy tính.' },
    { lang: 'tr', name: 'Filigransız TikTok Video İndirici HD MP4 (Türkçe)', desc: 'TikTok videolarını filigransız ve logosuz HD MP4 veya MP3 olarak ücretsiz indirin. Telefon ve bilgisayar için hızlı, güvenli online araç.' },
    { lang: 'it', name: 'Scaricare Video TikTok Senza Watermark (Italiano)', desc: 'Scarica video TikTok senza watermark in alta definizione MP4 e audio MP3 online gratis. Veloce, sicuro e senza limiti per cellulare.' },
    { lang: 'ru', name: 'Скачать видео Тик Ток без водяного знака (Русский)', desc: 'Скачать видео с Тик Тока без водяного знака в HD MP4 и MP3 бесплатно. Быстрое и безопасное сохранение на телефон и ПК.' },
    { lang: 'ja', name: 'TikTok 動画保存 ウォーターマークなし (日本語)', desc: 'TikTokの動画を透かし・ロゴなしの最高画質1080p MP4や高音質320kbps MP3として完全無料でダウンロード保存。iPhone、Android、PC対応。' }
  ];

  for (const hub of localizedHubs) {
    items.push({
      title: hub.name,
      link: `${baseUrl}/${hub.lang}`,
      guid: `${baseUrl}/${hub.lang}`,
      category: 'International Localization',
      description: hub.desc,
    });
  }

  // 3. 11 Languages x 9 Tools = 99 Localized Routes
  for (const lang of VALID_LANGS) {
    for (const tool of VALID_TOOLS) {
      const data = definitions[tool] || definitions['tiktok-video-downloader'];
      const title = data.titles[lang] || data.titles.en || `${tool} (${lang.toUpperCase()})`;
      const desc = data.descs[lang] || data.descs.en || `Download ${tool} without watermark in ${lang.toUpperCase()}.`;

      items.push({
        title,
        link: `${baseUrl}/${lang}/${tool}`,
        guid: `${baseUrl}/${lang}/${tool}`,
        category: `International Tools (${lang.toUpperCase()})`,
        description: desc,
      });
    }
  }

  // 4. Legal & Info Pages (5)
  const infoPages = [
    { path: '/about', title: 'About QukTik - Engineering & Creator Platform', desc: 'Learn about QukTik, our engineering philosophy, direct CDN extraction technology, and ethical short-form media archiving.' },
    { path: '/contact', title: 'Contact QukTik Support & Help Center', desc: 'Get in touch with the QukTik support team for technical assistance, copyright notices, or platform diagnostics.' },
    { path: '/privacy-policy', title: 'Privacy Policy & Data Protection Declaration', desc: 'Learn how QukTik safeguards your privacy with stateless stream forwarding, zero account requirements, and global privacy compliance.' },
    { path: '/terms-of-service', title: 'Terms of Service & User Agreement', desc: 'Understand the terms governing your use of QukTik media downloader, acceptable use rules, and legal liabilities.' },
    { path: '/disclaimer', title: 'DMCA Policy & Copyright Disclaimer', desc: 'Statutory DMCA Copyright Compliance, Trademark Non-Affiliation Disclaimers, and Safe Harbor Protections.' },
  ];

  for (const info of infoPages) {
    items.push({
      title: info.title,
      link: `${baseUrl}${info.path}`,
      guid: `${baseUrl}${info.path}`,
      category: 'Legal & Info',
      description: info.desc,
    });
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>QukTik - TikTok &amp; Douyin Downloader, Viral Sounds &amp; MP3 Tools</title>
    <link>${baseUrl}</link>
    <description>Fast, free, and watermark-free online TikTok and Douyin downloader. Extract clean HD MP4 videos, 320kbps MP3 audio, photo carousels, ephemeral stories, and explore weekly trending viral TikTok music charts across 12 countries.</description>
    <language>en-US</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <copyright>© 2026 QukTik. All rights reserved.</copyright>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <generator>QukTik Dynamic RSS Feed Engine</generator>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items
  .map(
    (item) => `    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.guid}</guid>
      <category><![CDATA[${item.category}]]></category>
      <description><![CDATA[${item.description}]]></description>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`;
}
