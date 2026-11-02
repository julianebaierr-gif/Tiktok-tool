import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "Descargar Videos de TikTok Sin Marca | QukTik" },
  description: "Descarga videos de TikTok sin marca de agua en HD MP4 y MP3. Herramienta online gratis y rápida para móvil y PC sin registro ni instalación de aplicaciones.",
  alternates: {
    canonical: 'https://www.quktik.com/es',
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
    title: "Descargar Videos de TikTok Sin Marca | QukTik",
    description: "Descarga videos de TikTok sin marca de agua en HD MP4 y MP3. Herramienta online gratis y rápida para móvil y PC sin registro ni instalación de aplicaciones.",
    url: 'https://www.quktik.com/es',
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

export default function ESPage() {
  return <LocalizedHomePage langCode="es" />;
}

