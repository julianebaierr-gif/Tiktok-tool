import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "Tải Video TikTok Không Logo Mới Nhất | QukTik" },
  description: "Tải video TikTok không logo, không watermark chuẩn HD MP4 và MP3 miễn phí. Tải nhanh cho điện thoại và máy tính không cần cài app.",
  alternates: {
    canonical: 'https://quktik.com/vi',
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
    title: "Tải Video TikTok Không Logo Mới Nhất | QukTik",
    description: "Tải video TikTok không logo, không watermark chuẩn HD MP4 và MP3 miễn phí. Tải nhanh cho điện thoại và máy tính không cần cài app.",
    url: 'https://quktik.com/vi',
    type: 'website',
  },
};

export default function VIPage() {
  return <LocalizedHomePage langCode="vi" />;
}

