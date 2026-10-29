import axios from 'axios';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const mediaUrl = searchParams.get('url');
    const rawFilename = searchParams.get('filename') || 'media';
    const type = searchParams.get('type') || 'video';

    if (!mediaUrl) {
      return new Response('Missing media URL parameter', { status: 400 });
    }

    // Determine content type and safe file extension
    let contentType = 'video/mp4';
    let fileExtension = '.mp4';
    if (type === 'audio' || rawFilename.endsWith('.mp3')) {
      contentType = 'audio/mpeg';
      fileExtension = '.mp3';
    } else if (type === 'image' || rawFilename.endsWith('.jpg') || rawFilename.endsWith('.jpeg')) {
      contentType = 'image/jpeg';
      fileExtension = '.jpg';
    }

    const safeFilename = rawFilename.replace(/[^a-zA-Z0-9_\-\.]/g, '_').slice(0, 50);
    const finalFilename = safeFilename.endsWith(fileExtension) ? safeFilename : `${safeFilename}${fileExtension}`;

    // Determine CDN origin for Referer
    const isDouyinMedia = /douyin|byteimg|amemv|zijieapi|p3-pc/i.test(mediaUrl);
    const referer = isDouyinMedia ? 'https://www.douyin.com/' : 'https://www.tiktok.com/';

    // Request the stream from the source CDN
    const response = await axios({
      method: 'GET',
      url: mediaUrl,
      responseType: 'stream',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': referer,
      },
      timeout: 30000,
    });

    const headers = new Headers();
    headers.set('Content-Type', response.headers['content-type'] || contentType);
    headers.set('Content-Disposition', `attachment; filename="${finalFilename}"`);
    if (response.headers['content-length']) {
      headers.set('Content-Length', response.headers['content-length']);
    }
    headers.set('Cache-Control', 'public, max-age=3600');

    // Convert axios stream (Node.js Readable) into Web ReadableStream for Next.js App Router
    const nodeStream = response.data;
    const webStream = new ReadableStream({
      start(controller) {
        nodeStream.on('data', (chunk) => controller.enqueue(chunk));
        nodeStream.on('end', () => controller.close());
        nodeStream.on('error', (err) => controller.error(err));
      },
      cancel() {
        nodeStream.destroy();
      },
    });

    return new Response(webStream, { headers });
  } catch (error) {
    console.error('Proxy download stream error:', error.message);
    return new Response(`Failed to proxy media stream: ${error.message}`, { status: 502 });
  }
}
