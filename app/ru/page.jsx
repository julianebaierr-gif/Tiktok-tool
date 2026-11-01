import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "Скачать видео с Тик Тока без водяного знака" },
  description: "Скачать видео с Тик Тока без водяного знака в HD MP4 и MP3 бесплатно. Быстрое сохранение на телефон и ПК без установки программ.",
  alternates: {
    canonical: 'https://quktik.com/ru',
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
    title: "Скачать видео с Тик Тока без водяного знака",
    description: "Скачать видео с Тик Тока без водяного знака в HD MP4 и MP3 бесплатно. Быстрое сохранение на телефон и ПК без установки программ.",
    url: 'https://quktik.com/ru',
    type: 'website',
  },
};

export default function RUPage() {
  return <LocalizedHomePage langCode="ru" />;
}

