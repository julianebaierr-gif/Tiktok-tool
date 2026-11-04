import fs from 'fs';
import path from 'path';
import { sendTelegramAlert } from '../../../lib/telegram';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  let fileParam = 'track-1.mp3';

  try {
    const { searchParams } = new URL(request.url);
    fileParam = searchParams.get('file') || 'track-1.mp3';
    const title = searchParams.get('title') || 'tiktok_trending_sound';
    const artist = searchParams.get('artist') || 'quktik';

    // Normalize and sanitize file name
    const cleanFileName = path.basename(fileParam).replace(/[^a-zA-Z0-9_\-\.]/g, '');
    const validFileName = cleanFileName.endsWith('.mp3') ? cleanFileName : `${cleanFileName}.mp3`;
    
    // Path inside public/audio
    const filePath = path.join(process.cwd(), 'public', 'audio', validFileName);

    // Fallback to track-1.mp3 if specific file doesn't exist
    const finalPath = fs.existsSync(filePath) 
      ? filePath 
      : path.join(process.cwd(), 'public', 'audio', 'track-1.mp3');

    if (!fs.existsSync(finalPath)) {
      return new Response('Audio file not found', { status: 404 });
    }

    const stat = fs.statSync(finalPath);
    const fileSize = stat.size;

    // Build user-friendly download file name
    const safeTitle = `${title}_${artist}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 50);
    const downloadFilename = `quktik_${safeTitle || 'sound'}_320kbps.mp3`;

    // Handle range request for smooth mobile scrubbing and streaming
    const range = request.headers.get('range');
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = end - start + 1;

      const fileStream = fs.createReadStream(finalPath, { start, end });
      const webStream = new ReadableStream({
        start(controller) {
          fileStream.on('data', (chunk) => controller.enqueue(chunk));
          fileStream.on('end', () => controller.close());
          fileStream.on('error', (err) => controller.error(err));
        },
        cancel() {
          fileStream.destroy();
        },
      });

      return new Response(webStream, {
        status: 206,
        headers: {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize.toString(),
          'Content-Type': 'audio/mpeg',
          'Content-Disposition': `attachment; filename="${downloadFilename}"`,
        },
      });
    }

    // Full file download
    const fullStream = fs.createReadStream(finalPath);
    const webStream = new ReadableStream({
      start(controller) {
        fullStream.on('data', (chunk) => controller.enqueue(chunk));
        fullStream.on('end', () => controller.close());
        fullStream.on('error', (err) => controller.error(err));
      },
      cancel() {
        fullStream.destroy();
      },
    });

    return new Response(webStream, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': `attachment; filename="${downloadFilename}"`,
        'Content-Length': fileSize.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    console.error('Audio download error:', error);
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'Unknown';
    sendTelegramAlert({
      type: 'Audio Download Server Error',
      url: fileParam || 'N/A',
      error: error.message,
      provider: 'audio-download',
      ip: clientIp,
      statusCode: 500,
    }).catch(() => {});

    return new Response('Error retrieving audio stream', { status: 500 });
  }
}
