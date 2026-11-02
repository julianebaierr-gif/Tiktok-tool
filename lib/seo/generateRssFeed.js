export function generateRssFeedXml() {
  const baseUrl = 'https://quktik.com';
  const buildDate = new Date().toUTCString();
  const year = new Date().getFullYear();

  const items = [
    {
      title: 'Weekly Top 20 Trending TikTok Sounds & Viral Music Chart',
      link: `${baseUrl}/trending-sounds`,
      guid: `${baseUrl}/trending-sounds`,
      pubDate: buildDate,
      category: 'TikTok Music & Audio Trends',
      description: 'Weekly curated chart of the hottest viral TikTok songs, challenge tracks, and speed-up remixes across 12 countries. Download 320kbps MP3 audio stems or trim custom 15-30s phone ringtones with zero watermark.'
    },
    {
      title: 'Multi-URL TikTok Bulk Downloader - Batch Save 10 Videos in 1 ZIP',
      link: `${baseUrl}/tiktok-bulk-downloader`,
      guid: `${baseUrl}/tiktok-bulk-downloader`,
      pubDate: buildDate,
      category: 'Batch Productivity Tools',
      description: 'High-speed batch downloader allowing content creators, talent agencies, and social managers to paste up to 10 TikTok video or sound links simultaneously and download them in a single clean ZIP archive.'
    },
    {
      title: 'TikTok Video Downloader HD MP4 Without Watermark',
      link: `${baseUrl}/tiktok-video-downloader`,
      guid: `${baseUrl}/tiktok-video-downloader`,
      pubDate: buildDate,
      category: 'Video Downloading',
      description: 'Download TikTok videos in full 1080p HD without watermark logos or username overlays. Direct CDN bypass provides pristine MP4 files suitable for video editing, archival, and social reposting.'
    },
    {
      title: 'TikTok to MP3 Converter - High-Fidelity 320kbps Audio Stems',
      link: `${baseUrl}/tiktok-mp3`,
      guid: `${baseUrl}/tiktok-mp3`,
      pubDate: buildDate,
      category: 'Audio Extraction',
      description: 'Extract pristine studio-master 320kbps MP3 audio from any TikTok video. Isolate viral dialogue, sound effects, voiceovers, and background music instantly.'
    },
    {
      title: 'Douyin Video Downloader (Watermark-Free Asian Media)',
      link: `${baseUrl}/douyin-downloader`,
      guid: `${baseUrl}/douyin-downloader`,
      pubDate: buildDate,
      category: 'Douyin Media',
      description: 'Extract high-resolution waterless video and photo carousels from ByteDance Douyin (Chinese TikTok - v.douyin.com) for cultural research, language study, and creative analysis.'
    },
    {
      title: 'TikTok Photo Carousel Downloader - Full-Resolution Slides',
      link: `${baseUrl}/tiktok-photo`,
      guid: `${baseUrl}/tiktok-photo`,
      pubDate: buildDate,
      category: 'Photo Extraction',
      description: 'Save individual high-resolution slides or complete photo carousels from TikTok image posts in lossless original JPEG format.'
    },
    {
      title: 'TikTok 24-Hour Ephemeral Story Downloader',
      link: `${baseUrl}/tiktok-story`,
      guid: `${baseUrl}/tiktok-story`,
      pubDate: buildDate,
      category: 'Story Archiving',
      description: 'Archive ephemeral 24-hour TikTok video stories directly from creator profiles before they disappear from the platform.'
    },
    {
      title: 'TikTok Audio & Ringtone Trimmer (15-30s Web Audio)',
      link: `${baseUrl}/tiktok-ringtone`,
      guid: `${baseUrl}/tiktok-ringtone`,
      pubDate: buildDate,
      category: 'Ringtone Cutter',
      description: 'Built-in client-side Web Audio API cutter to trim 15 to 30 second favorite hooks and save custom iPhone, Android, or alarm ringtones.'
    },
    {
      title: 'TikTok High-Resolution Avatar Zoom & Profile Picture Downloader',
      link: `${baseUrl}/tiktok-avatar`,
      guid: `${baseUrl}/tiktok-avatar`,
      pubDate: buildDate,
      category: 'Profile Graphics',
      description: 'Query public TikTok profile metadata to view and download uncropped 1080x1080 master square photographs.'
    }
  ];

  // Add 11 international localized hubs to RSS feed
  const localizedHubs = [
    { lang: 'es', name: 'Descargador de TikTok sin Marca de Agua (Español)' },
    { lang: 'pt', name: 'Baixar Vídeos do TikTok sem Marca d\'Água (Português)' },
    { lang: 'id', name: 'Download Video TikTok Tanpa Watermark HD (Indonesia)' },
    { lang: 'fr', name: 'Télécharger Vidéo TikTok Sans Filigrane (Français)' },
    { lang: 'ar', name: 'تحميل فيديو تيك توك بدون علامة مائية بدقة عالية (العربية)' },
    { lang: 'de', name: 'TikTok Video ohne Wasserzeichen herunterladen (Deutsch)' },
    { lang: 'vi', name: 'Tải Video TikTok Không Logo Hình Mờ HD (Tiếng Việt)' },
    { lang: 'tr', name: 'Filigransız TikTok Video İndirici HD MP4 (Türkçe)' },
    { lang: 'it', name: 'Scaricare Video TikTok Senza Watermark (Italiano)' },
    { lang: 'ru', name: 'Скачать видео Тик Ток без водяного знака (Русский)' },
    { lang: 'ja', name: 'TikTok 動画保存 ウォーターマークなし (日本語)' }
  ];

  localizedHubs.forEach(hub => {
    items.push({
      title: hub.name,
      link: `${baseUrl}/${hub.lang}`,
      guid: `${baseUrl}/${hub.lang}`,
      pubDate: buildDate,
      category: 'International Localization',
      description: `Official ${hub.lang.toUpperCase()} localized portal for QukTik: high-speed watermark-free TikTok & Douyin MP4 downloader, MP3 audio extractor, photo carousel saver, and trending music chart.`
    });
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>QukTik - TikTok &amp; Douyin Downloader, Viral Sounds &amp; MP3 Tools</title>
    <link>${baseUrl}</link>
    <description>Fast, free, and watermark-free online TikTok and Douyin downloader. Extract clean HD MP4 videos, 320kbps MP3 audio, photo carousels, ephemeral stories, and explore weekly trending viral TikTok music charts.</description>
    <language>en-US</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <pubDate>${buildDate}</pubDate>
    <ttl>60</ttl>
    <copyright>© ${year} QukTik. All rights reserved.</copyright>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <generator>QukTik Dynamic RSS Feed Engine</generator>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <atom:link href="https://pubsubhubbub.appspot.com/" rel="hub" />
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
