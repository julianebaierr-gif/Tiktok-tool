import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "Télécharger TikTok Sans Filigrane QukTik" },
  description: "Téléchargez des vidéos TikTok sans filigrane en HD MP4 et MP3 gratuitement en ligne. Rapide et simple sur mobile et ordinateur.",
  alternates: {
    canonical: 'https://quktik.com/fr',
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
    title: "Télécharger TikTok Sans Filigrane QukTik",
    description: "Téléchargez des vidéos TikTok sans filigrane en HD MP4 et MP3 gratuitement en ligne. Rapide et simple sur mobile et ordinateur.",
    url: 'https://quktik.com/fr',
    type: 'website',
  },
};

export default function FRPage() {
  return <LocalizedHomePage langCode="fr" />;
}

