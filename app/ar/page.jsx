import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "تحميل فيديو تيك توك بدون علامة مائية QukTik" },
  description: "تحميل فيديوهات تيك توك بدون علامة مائية بدقة عالية MP4 وموسيقى MP3 مجانا عبر الإنترنت للكمبيوتر والهاتف بدون برامج.",
  alternates: {
    canonical: 'https://quktik.com/ar',
    languages: {
      'x-default': 'https://quktik.com',
      'en': 'https://quktik.com',
      'es': 'https://quktik.com/es',
      'pt': 'https://quktik.com/pt',
      'id': 'https://quktik.com/id',
      'fr': 'https://quktik.com/fr',
      'ar': 'https://quktik.com/ar',
      'de': 'https://quktik.com/de',
      'vi': 'https://quktik.com/vi',
      'tr': 'https://quktik.com/tr',
      'it': 'https://quktik.com/it',
      'ru': 'https://quktik.com/ru',
      'ja': 'https://quktik.com/ja',
    },
  },
  openGraph: {
    title: "تحميل فيديو تيك توك بدون علامة مائية QukTik",
    description: "تحميل فيديوهات تيك توك بدون علامة مائية بدقة عالية MP4 وموسيقى MP3 مجانا عبر الإنترنت للكمبيوتر والهاتف بدون برامج.",
    url: 'https://quktik.com/ar',
    type: 'website',
  },
};

export default function ARPage() {
  return <LocalizedHomePage langCode="ar" />;
}

