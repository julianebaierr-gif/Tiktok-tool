import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "TikTok動画保存 透かしなし 無料ツール | QukTik" },
  description: "TikTokの動画を透かし・ロゴなしで高画質MP4やMP3として無料ダウンロード保存。スマホやPCでアプリ不要ですぐ使えます。",
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
    description: "TikTokの動画を透かし・ロゴなしで高画質MP4やMP3として無料ダウンロード保存。スマホやPCでアプリ不要ですぐ使えます。",
    url: 'https://www.quktik.com/ja',
    type: 'website',
  },
};

export default function JAPage() {
  return <LocalizedHomePage langCode="ja" />;
}

