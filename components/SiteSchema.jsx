import React from 'react';

export default function SiteSchema() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.quktik.com/#organization',
        'name': 'QukTik',
        'url': 'https://www.quktik.com',
        'logo': {
          '@type': 'ImageObject',
          '@id': 'https://www.quktik.com/#logo',
          'url': 'https://www.quktik.com/logo.png',
          'contentUrl': 'https://www.quktik.com/logo.png',
          'width': 512,
          'height': 512,
          'caption': 'QukTik Official Logo'
        },
        'image': 'https://www.quktik.com/og-image.png'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.quktik.com/#website',
        'url': 'https://www.quktik.com',
        'name': 'QukTik',
        'description': 'Free online TikTok and Douyin downloader to save watermark-free HD MP4 videos and 320kbps MP3 audio.',
        'publisher': {
          '@id': 'https://www.quktik.com/#organization'
        },
        'inLanguage': [
          'en', 'es', 'pt', 'id', 'fr', 'ar', 'de', 'vi', 'tr', 'it', 'ru', 'ja'
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
