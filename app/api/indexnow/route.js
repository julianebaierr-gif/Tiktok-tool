import { NextResponse } from 'next/server';

const INDEXNOW_KEY = '6280d6ffc889f33450faf4b4e2b42b8f';
const HOST = 'www.quktik.com';
const ALL_URLS = [
  "https://www.quktik.com",
  "https://www.quktik.com/about",
  "https://www.quktik.com/contact",
  "https://www.quktik.com/disclaimer",
  "https://www.quktik.com/privacy-policy",
  "https://www.quktik.com/terms-of-service",
  "https://www.quktik.com/feed.xml",
  "https://www.quktik.com/tiktok-video-downloader",
  "https://www.quktik.com/tiktok-mp3",
  "https://www.quktik.com/tiktok-photo",
  "https://www.quktik.com/tiktok-story",
  "https://www.quktik.com/douyin-downloader",
  "https://www.quktik.com/tiktok-ringtone",
  "https://www.quktik.com/tiktok-avatar",
  "https://www.quktik.com/tiktok-bulk-downloader",
  "https://www.quktik.com/trending-sounds",
  "https://www.quktik.com/es",
  "https://www.quktik.com/es/tiktok-video-downloader",
  "https://www.quktik.com/es/tiktok-mp3",
  "https://www.quktik.com/es/tiktok-photo",
  "https://www.quktik.com/es/tiktok-story",
  "https://www.quktik.com/es/douyin-downloader",
  "https://www.quktik.com/es/tiktok-ringtone",
  "https://www.quktik.com/es/tiktok-avatar",
  "https://www.quktik.com/es/tiktok-bulk-downloader",
  "https://www.quktik.com/es/trending-sounds",
  "https://www.quktik.com/pt",
  "https://www.quktik.com/pt/tiktok-video-downloader",
  "https://www.quktik.com/pt/tiktok-mp3",
  "https://www.quktik.com/pt/tiktok-photo",
  "https://www.quktik.com/pt/tiktok-story",
  "https://www.quktik.com/pt/douyin-downloader",
  "https://www.quktik.com/pt/tiktok-ringtone",
  "https://www.quktik.com/pt/tiktok-avatar",
  "https://www.quktik.com/pt/tiktok-bulk-downloader",
  "https://www.quktik.com/pt/trending-sounds",
  "https://www.quktik.com/id",
  "https://www.quktik.com/id/tiktok-video-downloader",
  "https://www.quktik.com/id/tiktok-mp3",
  "https://www.quktik.com/id/tiktok-photo",
  "https://www.quktik.com/id/tiktok-story",
  "https://www.quktik.com/id/douyin-downloader",
  "https://www.quktik.com/id/tiktok-ringtone",
  "https://www.quktik.com/id/tiktok-avatar",
  "https://www.quktik.com/id/tiktok-bulk-downloader",
  "https://www.quktik.com/id/trending-sounds",
  "https://www.quktik.com/fr",
  "https://www.quktik.com/fr/tiktok-video-downloader",
  "https://www.quktik.com/fr/tiktok-mp3",
  "https://www.quktik.com/fr/tiktok-photo",
  "https://www.quktik.com/fr/tiktok-story",
  "https://www.quktik.com/fr/douyin-downloader",
  "https://www.quktik.com/fr/tiktok-ringtone",
  "https://www.quktik.com/fr/tiktok-avatar",
  "https://www.quktik.com/fr/tiktok-bulk-downloader",
  "https://www.quktik.com/fr/trending-sounds",
  "https://www.quktik.com/ar",
  "https://www.quktik.com/ar/tiktok-video-downloader",
  "https://www.quktik.com/ar/tiktok-mp3",
  "https://www.quktik.com/ar/tiktok-photo",
  "https://www.quktik.com/ar/tiktok-story",
  "https://www.quktik.com/ar/douyin-downloader",
  "https://www.quktik.com/ar/tiktok-ringtone",
  "https://www.quktik.com/ar/tiktok-avatar",
  "https://www.quktik.com/ar/tiktok-bulk-downloader",
  "https://www.quktik.com/ar/trending-sounds",
  "https://www.quktik.com/de",
  "https://www.quktik.com/de/tiktok-video-downloader",
  "https://www.quktik.com/de/tiktok-mp3",
  "https://www.quktik.com/de/tiktok-photo",
  "https://www.quktik.com/de/tiktok-story",
  "https://www.quktik.com/de/douyin-downloader",
  "https://www.quktik.com/de/tiktok-ringtone",
  "https://www.quktik.com/de/tiktok-avatar",
  "https://www.quktik.com/de/tiktok-bulk-downloader",
  "https://www.quktik.com/de/trending-sounds",
  "https://www.quktik.com/vi",
  "https://www.quktik.com/vi/tiktok-video-downloader",
  "https://www.quktik.com/vi/tiktok-mp3",
  "https://www.quktik.com/vi/tiktok-photo",
  "https://www.quktik.com/vi/tiktok-story",
  "https://www.quktik.com/vi/douyin-downloader",
  "https://www.quktik.com/vi/tiktok-ringtone",
  "https://www.quktik.com/vi/tiktok-avatar",
  "https://www.quktik.com/vi/tiktok-bulk-downloader",
  "https://www.quktik.com/vi/trending-sounds",
  "https://www.quktik.com/tr",
  "https://www.quktik.com/tr/tiktok-video-downloader",
  "https://www.quktik.com/tr/tiktok-mp3",
  "https://www.quktik.com/tr/tiktok-photo",
  "https://www.quktik.com/tr/tiktok-story",
  "https://www.quktik.com/tr/douyin-downloader",
  "https://www.quktik.com/tr/tiktok-ringtone",
  "https://www.quktik.com/tr/tiktok-avatar",
  "https://www.quktik.com/tr/tiktok-bulk-downloader",
  "https://www.quktik.com/tr/trending-sounds",
  "https://www.quktik.com/it",
  "https://www.quktik.com/it/tiktok-video-downloader",
  "https://www.quktik.com/it/tiktok-mp3",
  "https://www.quktik.com/it/tiktok-photo",
  "https://www.quktik.com/it/tiktok-story",
  "https://www.quktik.com/it/douyin-downloader",
  "https://www.quktik.com/it/tiktok-ringtone",
  "https://www.quktik.com/it/tiktok-avatar",
  "https://www.quktik.com/it/tiktok-bulk-downloader",
  "https://www.quktik.com/it/trending-sounds",
  "https://www.quktik.com/ru",
  "https://www.quktik.com/ru/tiktok-video-downloader",
  "https://www.quktik.com/ru/tiktok-mp3",
  "https://www.quktik.com/ru/tiktok-photo",
  "https://www.quktik.com/ru/tiktok-story",
  "https://www.quktik.com/ru/douyin-downloader",
  "https://www.quktik.com/ru/tiktok-ringtone",
  "https://www.quktik.com/ru/tiktok-avatar",
  "https://www.quktik.com/ru/tiktok-bulk-downloader",
  "https://www.quktik.com/ru/trending-sounds",
  "https://www.quktik.com/ja",
  "https://www.quktik.com/ja/tiktok-video-downloader",
  "https://www.quktik.com/ja/tiktok-mp3",
  "https://www.quktik.com/ja/tiktok-photo",
  "https://www.quktik.com/ja/tiktok-story",
  "https://www.quktik.com/ja/douyin-downloader",
  "https://www.quktik.com/ja/tiktok-ringtone",
  "https://www.quktik.com/ja/tiktok-avatar",
  "https://www.quktik.com/ja/tiktok-bulk-downloader",
  "https://www.quktik.com/ja/trending-sounds"
];

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    protocol: 'IndexNow',
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlCount: ALL_URLS.length,
    urls: ALL_URLS
  });
}

export async function POST() {
  try {
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: ALL_URLS
    };

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    return NextResponse.json({
      success: true,
      indexNowStatus: res.status,
      submittedUrls: ALL_URLS.length
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}
