import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "Скачать видео с Тик Тока без водяного знака" },
  description: "Скачать видео с Тик Тока без водяного знака в HD MP4 и MP3 бесплатно. Быстрое и безопасное сохранение на телефон и ПК без установки программ и регистрации.",
  alternates: {
    canonical: 'https://www.quktik.com/ru',
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
    title: "Скачать видео с Тик Тока без водяного знака",
    description: "Скачать видео с Тик Тока без водяного знака в HD MP4 и MP3 бесплатно. Быстрое и безопасное сохранение на телефон и ПК без установки программ и регистрации.",
    url: 'https://www.quktik.com/ru',
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

export default function RUPage() {
  return <LocalizedHomePage langCode="ru" />;
}

