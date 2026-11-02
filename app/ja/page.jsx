import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "TikTok動画保存 透かしなし 無料ツール | QukTik" },
  description: "TikTokの動画を透かし・ロゴなしの最高画質1080p MP4や高音質320kbps MP3として完全無料でダウンロード保存。iPhone、Android、PC対応でアプリや会員登録不要ですぐに使えます。無制限ダウンロード。",
  alternates: {
    canonical: 'https://www.quktik.com/ja',
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
    title: "TikTok動画保存 透かしなし 無料ツール | QukTik",
    description: "TikTokの動画を透かし・ロゴなしの最高画質1080p MP4や高音質320kbps MP3として完全無料でダウンロード保存。iPhone、Android、PC対応でアプリや会員登録不要ですぐに使えます。無制限ダウンロード。",
    url: 'https://www.quktik.com/ja',
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

export default function JAPage() {
  return <LocalizedHomePage langCode="ja" />;
}

