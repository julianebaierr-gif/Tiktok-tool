import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "Tải Video TikTok Không Logo Mới Nhất | QukTik" },
  description: "Tải video TikTok không logo, không watermark chuẩn HD MP4 và MP3 miễn phí. Tải nhanh chóng cho điện thoại và máy tính không cần cài app hay đăng ký.",
  alternates: {
    canonical: 'https://www.quktik.com/vi',
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
    title: "Tải Video TikTok Không Logo Mới Nhất | QukTik",
    description: "Tải video TikTok không logo, không watermark chuẩn HD MP4 và MP3 miễn phí. Tải nhanh chóng cho điện thoại và máy tính không cần cài app hay đăng ký.",
    url: 'https://www.quktik.com/vi',
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

export default function VIPage() {
  return <LocalizedHomePage langCode="vi" />;
}

