import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "TikTok Video Ohne Wasserzeichen | QukTik" },
  description: "TikTok Videos ohne Wasserzeichen in HD MP4 oder MP3 kostenlos online herunterladen. Schnell und sicher für Handy und PC.",
  alternates: {
    canonical: 'https://www.quktik.com/de',
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
    title: "TikTok Video Ohne Wasserzeichen | QukTik",
    description: "TikTok Videos ohne Wasserzeichen in HD MP4 oder MP3 kostenlos online herunterladen. Schnell und sicher für Handy und PC.",
    url: 'https://www.quktik.com/de',
    type: 'website',
  },
};

export default function DEPage() {
  return <LocalizedHomePage langCode="de" />;
}

