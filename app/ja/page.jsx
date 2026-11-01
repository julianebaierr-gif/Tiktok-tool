import React from 'react';
import LocalizedHomePage from '../../components/LocalizedHomePage';

export const metadata = {
  title: { absolute: "TikTok動画保存 透かしなし 無料ツール | QukTik" },
  description: "TikTokの動画を透かし・ロゴなしで高画質MP4やMP3として無料ダウンロード保存。スマホやPCでアプリ不要ですぐ使えます。",
  alternates: {
    canonical: 'https://quktik.com/ja',
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
    title: "TikTok動画保存 透かしなし 無料ツール | QukTik",
    description: "TikTokの動画を透かし・ロゴなしで高画質MP4やMP3として無料ダウンロード保存。スマホやPCでアプリ不要ですぐ使えます。",
    url: 'https://quktik.com/ja',
    type: 'website',
  },
};

export default function JAPage() {
  return <LocalizedHomePage langCode="ja" />;
}

