import definitions from './definitions.json';

export const VALID_TOOLS = [
  'tiktok-video-downloader',
  'tiktok-mp3',
  'tiktok-photo',
  'tiktok-story',
  'douyin-downloader',
  'tiktok-ringtone',
  'tiktok-avatar',
  'tiktok-bulk-downloader',
  'trending-sounds'
];

export const VALID_LANGS = [
  'es', 'pt', 'id', 'fr', 'ar', 'de', 'vi', 'tr', 'it', 'ru', 'ja'
];

export const ALL_LANGS = ['en', ...VALID_LANGS];

export const TOOL_DEFINITIONS = definitions;

export function getToolSeoMetadata(lang, toolSlug) {
  const toolData = TOOL_DEFINITIONS[toolSlug] || TOOL_DEFINITIONS['tiktok-video-downloader'];
  const title = toolData.titles[lang] || toolData.titles.en;
  const description = toolData.descs[lang] || toolData.descs.en;

  const baseUrl = 'https://www.quktik.com';
  const canonicalPath = lang === 'en' ? `/${toolSlug}` : `/${lang}/${toolSlug}`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  const languagesObj = {
    'x-default': `${baseUrl}/${toolSlug}`,
    'en': `${baseUrl}/${toolSlug}`,
  };

  for (const l of VALID_LANGS) {
    languagesObj[l] = `${baseUrl}/${l}/${toolSlug}`;
  }

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: languagesObj,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'QukTik',
      images: [
        {
          url: 'https://www.quktik.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'QukTik - TikTok & Douyin Video Downloader',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.quktik.com/og-image.png'],
    },
  };
}

