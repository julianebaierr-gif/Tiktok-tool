import React from 'react';

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished = '2026-10-27T00:00:00Z',
  dateModified = '2026-11-11T00:00:00Z'
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': title,
    'description': description,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': url
    },
    'author': {
      '@type': 'Organization',
      'name': 'QukTik',
      'url': 'https://www.quktik.com'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'QukTik',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.quktik.com/logo.png',
        'width': 512,
        'height': 512
      }
    },
    'image': 'https://www.quktik.com/og-image.png',
    'datePublished': datePublished,
    'dateModified': dateModified
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
