import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "Filigransız TikTok Video İndir | QukTik" },
  description: "TikTok videolarını filigransız ve logosuz HD MP4 veya MP3 olarak ücretsiz indirin. Telefon ve bilgisayar için hızlı online araç.",
  alternates: {
    canonical: 'https://www.quktik.com/tr',
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
    title: "Filigransız TikTok Video İndir | QukTik",
    description: "TikTok videolarını filigransız ve logosuz HD MP4 veya MP3 olarak ücretsiz indirin. Telefon ve bilgisayar için hızlı online araç.",
    url: 'https://www.quktik.com/tr',
    type: 'website',
    images: [
      {
        url: 'https://www.quktik.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QukTik - TikTok & Douyin Video Downloader',
      },
    ],
    siteName: 'QukTik',
  },
};

export default function TRPage() {
  return <LocalizedHomePage langCode="tr" />;
}

