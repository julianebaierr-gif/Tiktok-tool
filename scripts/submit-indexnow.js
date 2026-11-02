const https = require('https');

const INDEXNOW_KEY = '6280d6ffc889f33450faf4b4e2b42b8f';
const HOST = 'www.quktik.com';

const CORE_URLS = [
  'https://www.quktik.com',
  'https://www.quktik.com/tiktok-video-downloader',
  'https://www.quktik.com/tiktok-mp3',
  'https://www.quktik.com/tiktok-photo',
  'https://www.quktik.com/tiktok-story',
  'https://www.quktik.com/douyin-downloader',
  'https://www.quktik.com/tiktok-ringtone',
  'https://www.quktik.com/tiktok-avatar',
  'https://www.quktik.com/tiktok-bulk-downloader',
  'https://www.quktik.com/trending-sounds',
  'https://www.quktik.com/about',
  'https://www.quktik.com/contact',
  'https://www.quktik.com/disclaimer',
  'https://www.quktik.com/privacy-policy',
  'https://www.quktik.com/terms-of-service',
  'https://www.quktik.com/es',
  'https://www.quktik.com/pt',
  'https://www.quktik.com/id',
  'https://www.quktik.com/fr',
  'https://www.quktik.com/ar',
  'https://www.quktik.com/de',
  'https://www.quktik.com/vi',
  'https://www.quktik.com/tr',
  'https://www.quktik.com/it',
  'https://www.quktik.com/ru',
  'https://www.quktik.com/ja',
  'https://www.quktik.com/feed.xml'
];

const payload = JSON.stringify({
  host: HOST,
  key: INDEXNOW_KEY,
  keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
  urlList: CORE_URLS
});

const req = https.request('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
}, (res) => {
  console.log(`[IndexNow] Submission response code: ${res.statusCode}`);
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log(`[IndexNow] Successfully submitted ${CORE_URLS.length} priority URLs!`);
    } else {
      console.log(`[IndexNow] Response: ${body}`);
    }
  });
});

req.on('error', (e) => {
  console.log(`[IndexNow] Network notice: ${e.message}`);
});

req.write(payload);
req.end();
