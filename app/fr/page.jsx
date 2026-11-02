import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "Télécharger TikTok Sans Filigrane QukTik" },
  description: "Téléchargez des vidéos TikTok sans filigrane en HD MP4 et MP3 gratuitement en ligne. Rapide et simple sur mobile et ordinateur.",
  alternates: {
    canonical: 'https://www.quktik.com/fr',
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
    title: "Télécharger TikTok Sans Filigrane QukTik",
    description: "Téléchargez des vidéos TikTok sans filigrane en HD MP4 et MP3 gratuitement en ligne. Rapide et simple sur mobile et ordinateur.",
    url: 'https://www.quktik.com/fr',
    type: 'website',
  },
};

export default function FRPage() {
  return <LocalizedHomePage langCode="fr" />;
}

