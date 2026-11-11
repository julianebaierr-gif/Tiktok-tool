import React from 'react';

export default function ItemListSchema({ langCode = 'en', baseUrl = 'https://www.quktik.com' }) {
  const prefix = langCode === 'en' ? '' : `/${langCode}`;

  const tools = [
    { name: 'TikTok Video Downloader Without Watermark', url: `${baseUrl}${prefix}/tiktok-video-downloader` },
    { name: 'TikTok to MP3 Audio Converter', url: `${baseUrl}${prefix}/tiktok-mp3` },
    { name: 'TikTok Photo Slideshow Downloader', url: `${baseUrl}${prefix}/tiktok-photo` },
    { name: 'Douyin Downloader (Chinese TikTok)', url: `${baseUrl}/douyin-downloader` },
    { name: 'TikTok Avatar HD Profile Picture Downloader', url: `${baseUrl}${prefix}/tiktok-avatar` },
    { name: 'TikTok Bulk Downloader ZIP', url: `${baseUrl}${prefix}/tiktok-bulk-downloader` },
    { name: 'TikTok Story Saver HD', url: `${baseUrl}${prefix}/tiktok-story` },
    { name: 'TikTok Ringtone Maker', url: `${baseUrl}${prefix}/tiktok-ringtone` },
    { name: 'Trending TikTok Sounds & Viral Music Charts', url: `${baseUrl}/trending-sounds` }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'QukTik TikTok and Douyin Download Tools Suite',
    'description': 'Collection of free online multimedia tools to download TikTok and Douyin videos, MP3 audio, and photos.',
    'itemListElement': tools.map((tool, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': tool.name,
      'url': tool.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
