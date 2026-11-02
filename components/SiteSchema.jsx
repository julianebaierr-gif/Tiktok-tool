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
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://www.quktik.com/#webapp',
        'name': 'QukTik - TikTok & Douyin Video Downloader',
        'url': 'https://www.quktik.com',
        'applicationCategory': 'UtilitiesApplication',
        'applicationSubCategory': 'MultimediaApplication',
        'operatingSystem': 'Windows, macOS, Android, iOS, Linux, ChromeOS',
        'browserRequirements': 'Requires modern web browser with HTML5 and JavaScript support',
        'description': 'Free online web tool to download TikTok and Douyin videos without watermark in HD MP4 and convert TikTok audio to MP3.',
        'softwareVersion': '2.4.0',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/InStock'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'ratingCount': '14820',
          'bestRating': '5',
          'worstRating': '1'
        },
        'image': 'https://www.quktik.com/og-image.png',
        'screenshot': 'https://www.quktik.com/og-image.png',
        'featureList': [
          'Download TikTok videos without watermark',
          'Save 1080p Full HD MP4 files',
          'Extract 320kbps MP3 audio and ringtones',
          'Batch download multiple TikTok videos into a ZIP',
          'Save Douyin (抖音) videos without watermark',
          'Download photo carousels and slideshows in original JPG'
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
