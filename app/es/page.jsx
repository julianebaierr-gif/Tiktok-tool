import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: "Descargar Videos de TikTok Sin Marca | QukTik",
  description: "Descarga videos de TikTok sin marca de agua en HD MP4 y MP3. Herramienta online gratis y rápida para móvil y PC sin registro.",
  alternates: {
    canonical: 'https://quktik.com/es',
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
    title: "Descargar Videos de TikTok Sin Marca | QukTik",
    description: "Descarga videos de TikTok sin marca de agua en HD MP4 y MP3. Herramienta online gratis y rápida para móvil y PC sin registro.",
    url: 'https://quktik.com/es',
    type: 'website',
  },
};

export default function ESPage() {
  return <LocalizedHomePage langCode="es" />;
}
