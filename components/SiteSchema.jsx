import React from 'react';

export default function SiteSchema({ toolName, toolDesc, toolUrl }) {
  const name = toolName || 'QukTik TikTok & Douyin Downloader';
  const description = toolDesc || 'Free online TikTok and Douyin downloader to save watermark-free HD MP4 videos and 320kbps MP3 audio.';
  const pageUrl = toolUrl || 'https://www.quktik.com';

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.quktik.com/#organization',
        'name': 'QukTik',
        'url': 'https://www.quktik.com',
        'logo': 'https://www.quktik.com/logo.png',
        'image': 'https://www.quktik.com/og-image.png',
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'Customer Support',
          'url': 'https://www.quktik.com/contact'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.quktik.com/#website',
        'url': 'https://www.quktik.com',
        'name': 'QukTik',
        'description': 'Free online TikTok and Douyin downloader to save watermark-free HD MP4 videos and 320kbps MP3 audio.',
        'publisher': {
          '@id': 'https://www.quktik.com/#organization'
        }
      },
      {
        '@type': 'Product',
        '@id': `${pageUrl}#product`,
        'name': name,
        'description': description,
        'image': 'https://www.quktik.com/og-image.png',
        'brand': {
          '@type': 'Brand',
          'name': 'QukTik'
        },
        'offers': {
          '@type': 'Offer',
          'url': pageUrl,
          'price': '0',
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/InStock',
          'priceValidUntil': '2030-12-31'
        }
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${pageUrl}#software`,
        'name': name,
        'description': description,
        'applicationCategory': 'MultimediaApplication',
        'operatingSystem': 'Windows, macOS, Android, iOS, Linux, Web',
        'offers': {
          '@type': 'Offer',
          'url': pageUrl,
          'price': '0',
          'priceCurrency': 'USD'
        }
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
