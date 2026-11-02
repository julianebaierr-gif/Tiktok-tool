import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "Download TikTok Tanpa Watermark | QukTik" },
  description: "Download video TikTok tanpa watermark kualitas HD MP4 dan MP3 gratis. Cepat, mudah, dan aman untuk HP atau laptop tanpa aplikasi.",
  alternates: {
    canonical: 'https://www.quktik.com/id',
    languages: {
      'x-default': 'https://www.quktik.com',
      'en': 'https://www.quktik.com',
      'es': 'https://www.quktik.com/es',
      'pt': 'https://www.quktik.com/pt',
      'id': 'https://www.quktik.com/id',
      'fr': 'https://www.quktik.com/fr',
      'ar': 'https://www.quktik.com/ar',
      'de': 'https://www.quktik.com/de',
      'vi': 'https://www.quktik.com/vi',
      'tr': 'https://www.quktik.com/tr',
      'it': 'https://www.quktik.com/it',
      'ru': 'https://www.quktik.com/ru',
      'ja': 'https://www.quktik.com/ja',
    },
  },
  openGraph: {
    title: "Download TikTok Tanpa Watermark | QukTik",
    description: "Download video TikTok tanpa watermark kualitas HD MP4 dan MP3 gratis. Cepat, mudah, dan aman untuk HP atau laptop tanpa aplikasi.",
    url: 'https://www.quktik.com/id',
    type: 'website',
  },
};

export default function IDPage() {
  return <LocalizedHomePage langCode="id" />;
}

