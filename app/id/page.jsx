import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: "Download TikTok Tanpa Watermark | QukTik",
  description: "Download video TikTok tanpa watermark kualitas HD MP4 dan MP3 gratis. Cepat, mudah, dan aman untuk HP atau laptop tanpa aplikasi.",
  alternates: {
    canonical: 'https://quktik.com/id',
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
    title: "Download TikTok Tanpa Watermark | QukTik",
    description: "Download video TikTok tanpa watermark kualitas HD MP4 dan MP3 gratis. Cepat, mudah, dan aman untuk HP atau laptop tanpa aplikasi.",
    url: 'https://quktik.com/id',
    type: 'website',
  },
};

export default function IDPage() {
  return <LocalizedHomePage langCode="id" />;
}
