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
          'url': 'https://www.quktik.com/logo.png',
          'caption': 'QukTik Logo'
        },
        'image': 'https://www.quktik.com/og-image.png'
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://www.quktik.com/#webapp',
        'name': 'QukTik - TikTok & Douyin Video Downloader',
        'url': 'https://www.quktik.com',
        'applicationCategory': 'MultimediaApplication',
        'operatingSystem': 'All',
        'browserRequirements': 'Requires modern web browser with HTML5 and JavaScript support',
        'description': 'Free online web tool to download TikTok and Douyin videos without watermark in HD and convert TikTok audio to MP3.',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD',
        },
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
