import definitions from '../tools/definitions.json';
import { VALID_TOOLS, VALID_LANGS } from '../tools/index.js';

export function generateRssFeedXml() {
  const baseUrl = 'https://www.quktik.com';
  const buildDate = 'Wed, 11 Nov 2026 12:00:00 GMT';

  const items = [];

  // 1. Core English Tools (9) - Initial platform tools release (Oct 28 - Nov 01, 2026)
  const coreToolDates = {
    'tiktok-video-downloader': 'Wed, 28 Oct 2026 09:30:00 GMT',
    'tiktok-mp3': 'Wed, 28 Oct 2026 14:15:00 GMT',
    'tiktok-photo': 'Thu, 29 Oct 2026 10:00:00 GMT',
    'tiktok-story': 'Thu, 29 Oct 2026 15:30:00 GMT',
    'douyin-downloader': 'Fri, 30 Oct 2026 09:45:00 GMT',
    'tiktok-ringtone': 'Fri, 30 Oct 2026 14:00:00 GMT',
    'tiktok-avatar': 'Sat, 31 Oct 2026 11:15:00 GMT',
    'tiktok-bulk-downloader': 'Sat, 31 Oct 2026 16:30:00 GMT',
    'trending-sounds': 'Sun, 01 Nov 2026 09:00:00 GMT',
  };

  for (const tool of VALID_TOOLS) {
    const data = definitions[tool] || definitions['tiktok-video-downloader'];
    const title = data.titles.en || `${tool} - QukTik`;
    const desc = data.descs.en || 'Download TikTok and Douyin media without watermarks.';

    items.push({
      title,
      link: `${baseUrl}/${tool}`,
      guid: `${baseUrl}/${tool}`,
      pubDate: coreToolDates[tool] || 'Wed, 28 Oct 2026 10:00:00 GMT',
      category: 'TikTok Tools',
      description: desc,
    });
  }

  // 2. 11 Localized Landing Hubs - International localization launch (Sun, 01 Nov 2026)
  const localizedHubs = [
    { lang: 'es', name: 'Descargador de TikTok sin Marca de Agua (Español)', desc: 'Descarga videos de TikTok sin marca de agua en HD MP4 y MP3. Herramienta online gratis y rápida para móvil y PC sin registro.', pubDate: 'Sun, 01 Nov 2026 10:30:00 GMT' },
    { lang: 'pt', name: 'Baixar Vídeos do TikTok sem Marca d\'Água (Português)', desc: 'Baixe vídeos do TikTok sem marca d\'água em HD MP4 e MP3 online. Rápido, gratuito e seguro para celular e computador.', pubDate: 'Sun, 01 Nov 2026 11:45:00 GMT' },
    { lang: 'id', name: 'Download Video TikTok Tanpa Watermark HD (Indonesia)', desc: 'Download video TikTok tanpa watermark kualitas HD MP4 dan MP3 gratis. Cepat, mudah, dan aman untuk HP Android, iPhone, atau laptop.', pubDate: 'Sun, 01 Nov 2026 13:00:00 GMT' },
    { lang: 'fr', name: 'Télécharger Vidéo TikTok Sans Filigrane (Français)', desc: 'Téléchargez des vidéos TikTok sans filigrane en HD MP4 et MP3 gratuitement en ligne. Rapide, fluide et sécurisé sur mobile.', pubDate: 'Sun, 01 Nov 2026 14:15:00 GMT' },
    { lang: 'ar', name: 'تحميل فيديو تيك توك بدون علامة مائية بدقة عالية (العربية)', desc: 'تحميل فيديوهات تيك توك بدون علامة مائية بدقة عالية MP4 وموسيقى MP3 مجانا عبر الإنترنت للهاتف والكمبيوتر بدون برامج.', pubDate: 'Sun, 01 Nov 2026 15:30:00 GMT' },
    { lang: 'de', name: 'TikTok Video ohne Wasserzeichen herunterladen (Deutsch)', desc: 'TikTok Videos ohne Wasserzeichen in HD MP4 oder MP3 kostenlos online herunterladen. Schnell, sicher und unbegrenzt für Handy und PC.', pubDate: 'Sun, 01 Nov 2026 16:45:00 GMT' },
    { lang: 'vi', name: 'Tải Video TikTok Không Logo Hình Mờ HD (Tiếng Việt)', desc: 'Tải video TikTok không logo, không watermark chuẩn HD MP4 và MP3 miễn phí. Tải nhanh chóng cho điện thoại và máy tính.', pubDate: 'Sun, 01 Nov 2026 18:00:00 GMT' },
    { lang: 'tr', name: 'Filigransız TikTok Video İndirici HD MP4 (Türkçe)', desc: 'TikTok videolarını filigransız ve logosuz HD MP4 veya MP3 olarak ücretsiz indirin. Telefon ve bilgisayar için hızlı, güvenli online araç.', pubDate: 'Sun, 01 Nov 2026 19:15:00 GMT' },
    { lang: 'it', name: 'Scaricare Video TikTok Senza Watermark (Italiano)', desc: 'Scarica video TikTok senza watermark in alta definizione MP4 e audio MP3 online gratis. Veloce, sicuro e senza limiti per cellulare.', pubDate: 'Sun, 01 Nov 2026 20:30:00 GMT' },
    { lang: 'ru', name: 'Скачать видео Тик Ток без водяного знака (Русский)', desc: 'Скачать видео с Тик Тока без водяного знака в HD MP4 и MP3 бесплатно. Быстрое и безопасное сохранение на телефон и ПК.', pubDate: 'Sun, 01 Nov 2026 21:45:00 GMT' },
    { lang: 'ja', name: 'TikTok 動画保存 ウォーターマークなし (日本語)', desc: 'TikTokの動画を透かし・ロゴなしの最高画質1080p MP4や高音質320kbps MP3として完全無料でダウンロード保存。iPhone、Android、PC対応。', pubDate: 'Sun, 01 Nov 2026 23:00:00 GMT' }
  ];

  for (const hub of localizedHubs) {
    items.push({
      title: hub.name,
      link: `${baseUrl}/${hub.lang}`,
      guid: `${baseUrl}/${hub.lang}`,
      pubDate: hub.pubDate,
      category: 'International Localization',
      description: hub.desc,
    });
  }

  // 3. 11 Languages x 9 Tools = 99 Localized Routes (Staggered chronological rollout Mon Nov 02 - Tue Nov 03, 2026)
  const langBaseSchedule = {
    es: { day: 2, hour: 8 },
    pt: { day: 2, hour: 10 },
    id: { day: 2, hour: 12 },
    fr: { day: 2, hour: 14 },
    ar: { day: 2, hour: 16 },
    de: { day: 2, hour: 18 },
    vi: { day: 3, hour: 8 },
    tr: { day: 3, hour: 10 },
    it: { day: 3, hour: 12 },
    ru: { day: 3, hour: 14 },
    ja: { day: 3, hour: 16 },
  };

  for (const lang of VALID_LANGS) {
    const base = langBaseSchedule[lang] || { day: 2, hour: 8 };

    for (let tIdx = 0; tIdx < VALID_TOOLS.length; tIdx++) {
      const tool = VALID_TOOLS[tIdx];
      const data = definitions[tool] || definitions['tiktok-video-downloader'];
      const title = data.titles[lang] || data.titles.en || `${tool} (${lang.toUpperCase()})`;
      const desc = data.descs[lang] || data.descs.en || `Download ${tool} without watermark in ${lang.toUpperCase()}.`;

      const pubDate = new Date(Date.UTC(2026, 10, base.day, base.hour, tIdx * 6, 0)).toUTCString();

      items.push({
        title,
        link: `${baseUrl}/${lang}/${tool}`,
        guid: `${baseUrl}/${lang}/${tool}`,
        pubDate,
        category: `International Tools (${lang.toUpperCase()})`,
        description: desc,
      });
    }
  }

  // 4. Legal & Info Pages (5) - Foundational statutory policies (Oct 26 - Oct 27, 2026)
  const infoPages = [
    { path: '/disclaimer', title: 'DMCA Policy & Copyright Disclaimer', desc: 'Statutory DMCA Copyright Compliance, Trademark Non-Affiliation Disclaimers, and Safe Harbor Protections.', pubDate: 'Mon, 26 Oct 2026 09:00:00 GMT' },
    { path: '/terms-of-service', title: 'Terms of Service & User Agreement', desc: 'Understand the terms governing your use of QukTik media downloader, acceptable use rules, and legal liabilities.', pubDate: 'Mon, 26 Oct 2026 11:30:00 GMT' },
    { path: '/privacy-policy', title: 'Privacy Policy & Data Protection Declaration', desc: 'Learn how QukTik safeguards your privacy with stateless stream forwarding, zero account requirements, and global privacy compliance.', pubDate: 'Mon, 26 Oct 2026 14:15:00 GMT' },
    { path: '/about', title: 'About QukTik - Engineering & Creator Platform', desc: 'Learn about QukTik, our engineering philosophy, direct CDN extraction technology, and ethical short-form media archiving.', pubDate: 'Tue, 27 Oct 2026 10:00:00 GMT' },
    { path: '/contact', title: 'Contact QukTik Support & Help Center', desc: 'Get in touch with the QukTik support team for technical assistance, copyright notices, or platform diagnostics.', pubDate: 'Tue, 27 Oct 2026 15:45:00 GMT' },
  ];

  for (const info of infoPages) {
    items.push({
      title: info.title,
      link: `${baseUrl}${info.path}`,
      guid: `${baseUrl}${info.path}`,
      pubDate: info.pubDate,
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
      <pubDate>${item.pubDate}</pubDate>
      <category><![CDATA[${item.category}]]></category>
      <description><![CDATA[${item.description}]]></description>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`;
}
