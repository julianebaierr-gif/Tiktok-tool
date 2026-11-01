import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "TikTok Video Ohne Wasserzeichen | QukTik" },
  description: "TikTok Videos ohne Wasserzeichen in HD MP4 oder MP3 kostenlos online herunterladen. Schnell und sicher für Handy und PC.",
  alternates: {
    canonical: 'https://quktik.com/de',
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
    title: "TikTok Video Ohne Wasserzeichen | QukTik",
    description: "TikTok Videos ohne Wasserzeichen in HD MP4 oder MP3 kostenlos online herunterladen. Schnell und sicher für Handy und PC.",
    url: 'https://quktik.com/de',
    type: 'website',
  },
};

export default function DEPage() {
  return <LocalizedHomePage langCode="de" />;
}

