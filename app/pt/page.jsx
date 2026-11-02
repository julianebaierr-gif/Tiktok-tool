import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "Baixar Vídeo do TikTok Sem Marca | QukTik" },
  description: "Baixe vídeos do TikTok sem marca d'água em HD MP4 e MP3 online. Rápido, gratuito e seguro para celular e computador sem precisar instalar nada nem registrar.",
  alternates: {
    canonical: 'https://www.quktik.com/pt',
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
    title: "Baixar Vídeo do TikTok Sem Marca | QukTik",
    description: "Baixe vídeos do TikTok sem marca d'água em HD MP4 e MP3 online. Rápido, gratuito e seguro para celular e computador sem precisar instalar nada nem registrar.",
    url: 'https://www.quktik.com/pt',
    type: 'website',
    images: [
      {
        url: 'https://www.quktik.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QukTik - TikTok & Douyin Video Downloader',
      },
    ],
  },
};

export default function PortuguesePage() {
  return <LocalizedHomePage langCode="pt" />;
}
