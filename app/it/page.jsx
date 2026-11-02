import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "Scaricare Video TikTok Senza Watermark QukTik" },
  description: "Scarica video TikTok senza watermark in alta definizione MP4 e audio MP3 online gratis. Veloce, sicuro e senza limiti per cellulare e computer senza account.",
  alternates: {
    canonical: 'https://www.quktik.com/it',
    languages: {
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
      'x-default': 'https://www.quktik.com',
    },
  },
  openGraph: {
    title: "Scaricare Video TikTok Senza Watermark QukTik",
    description: "Scarica video TikTok senza watermark in alta definizione MP4 e audio MP3 online gratis. Veloce, sicuro e senza limiti per cellulare e computer senza account.",
    url: 'https://www.quktik.com/it',
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

export default function ITPage() {
  return <LocalizedHomePage langCode="it" />;
}

