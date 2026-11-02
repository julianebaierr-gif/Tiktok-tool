import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "Скачать видео с Тик Тока без водяного знака" },
  description: "Скачать видео с Тик Тока без водяного знака в HD MP4 и MP3 бесплатно. Быстрое сохранение на телефон и ПК без установки программ.",
  alternates: {
    canonical: 'https://www.quktik.com/ru',
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
    title: "Скачать видео с Тик Тока без водяного знака",
    description: "Скачать видео с Тик Тока без водяного знака в HD MP4 и MP3 бесплатно. Быстрое сохранение на телефон и ПК без установки программ.",
    url: 'https://www.quktik.com/ru',
    type: 'website',
  },
};

export default function RUPage() {
  return <LocalizedHomePage langCode="ru" />;
}

