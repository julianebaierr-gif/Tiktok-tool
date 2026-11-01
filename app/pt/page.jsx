import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "Baixar Vídeo do TikTok Sem Marca | QukTik" },
  description: "Baixe vídeos do TikTok sem marca d'água em HD MP4 e MP3 online. Rápido, gratuito e seguro para celular e PC sem instalar nada.",
  alternates: {
    canonical: 'https://quktik.com/pt',
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
    title: "Baixar Vídeo do TikTok Sem Marca | QukTik",
    description: "Baixe vídeos do TikTok sem marca d'água em HD MP4 e MP3 online. Rápido, gratuito e seguro para celular e PC sem instalar nada.",
    url: 'https://quktik.com/pt',
    type: 'website',
  },
};

export default function PTPage() {
  return <LocalizedHomePage langCode="pt" />;
}

