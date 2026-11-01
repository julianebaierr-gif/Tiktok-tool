import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: "Filigransız TikTok Video İndir | QukTik",
  description: "TikTok videolarını filigransız ve logosuz HD MP4 veya MP3 olarak ücretsiz indirin. Telefon ve bilgisayar için hızlı online araç.",
  alternates: {
    canonical: 'https://quktik.com/tr',
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
    title: "Filigransız TikTok Video İndir | QukTik",
    description: "TikTok videolarını filigransız ve logosuz HD MP4 veya MP3 olarak ücretsiz indirin. Telefon ve bilgisayar için hızlı online araç.",
    url: 'https://quktik.com/tr',
    type: 'website',
  },
};

export default function TRPage() {
  return <LocalizedHomePage langCode="tr" />;
}
