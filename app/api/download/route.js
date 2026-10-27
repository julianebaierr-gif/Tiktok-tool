import { NextResponse } from 'next/server';
import Tiktok from '@tobyg74/tiktok-api-dl';

export const dynamic = 'force-dynamic';

// Clean and extract valid TikTok or Douyin URL from user input or mobile share text
function cleanTikTokUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return null;
  const trimmed = rawUrl.trim();
  // Extract standard URL from raw input or text containing tiktok.com or douyin.com
  const match = trimmed.match(/https?:\/\/(?:[a-zA-Z0-9_-]+\.)?(?:tiktok\.com|douyin\.com)\/[a-zA-Z0-9_\-\/?&=#%._~]+/i);
  return match ? match[0].replace(/[.,;:!?]+$/, '') : null;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid TikTok URL.' },
        { status: 400 }
      );
    }

    const cleanUrl = cleanTikTokUrl(url);
    if (!cleanUrl) {
      return NextResponse.json(
        { success: false, error: 'Invalid TikTok URL format. Please paste a standard TikTok video, photo, or music link.' },
        { status: 400 }
      );
    }

    let downloadResult = null;
    let versionUsed = 'v1';

    // Step 1: Try Primary Native API Provider (V1)
    try {
      const resV1 = await Tiktok.Downloader(cleanUrl, { version: 'v1' });
      if (resV1 && resV1.status === 'success' && resV1.result) {
        downloadResult = resV1.result;
        versionUsed = 'v1';
      }
    } catch (errV1) {
      console.warn('V1 attempt failed, falling back to V2...', errV1.message);
    }

    // Step 2: Fallback to SSSTik scraper provider (V2) if V1 failed
    if (!downloadResult) {
      try {
        const resV2 = await Tiktok.Downloader(cleanUrl, { version: 'v2' });
        if (resV2 && resV2.status === 'success' && resV2.result) {
          downloadResult = resV2.result;
          versionUsed = 'v2';
        }
      } catch (errV2) {
        console.warn('V2 attempt failed, falling back to V3...', errV2.message);
      }
    }

    // Step 3: Fallback to MusicalDown scraper provider (V3)
    if (!downloadResult) {
      try {
        const resV3 = await Tiktok.Downloader(cleanUrl, { version: 'v3' });
        if (resV3 && resV3.status === 'success' && resV3.result) {
          downloadResult = resV3.result;
          versionUsed = 'v3';
        }
      } catch (errV3) {
        console.warn('V3 attempt failed', errV3.message);
      }
    }

    if (!downloadResult) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unable to retrieve media from this TikTok link. The video may be private, deleted, or region-restricted.',
        },
        { status: 404 }
      );
    }

    // Standardize the response data for our UI
    const isImage = downloadResult.type === 'image' || (downloadResult.images && downloadResult.images.length > 0);
    const videoUrls = downloadResult.video?.playAddr || [];
    const directVideoUrl = Array.isArray(videoUrls) ? videoUrls[0] : (typeof videoUrls === 'string' ? videoUrls : null);
    const hdVideoUrl = Array.isArray(videoUrls) && videoUrls.length > 1 ? videoUrls[1] : directVideoUrl;
    
    const musicUrls = downloadResult.music?.playUrl || [];
    const directMusicUrl = Array.isArray(musicUrls) ? musicUrls[0] : (typeof musicUrls === 'string' ? musicUrls : null);

    const authorAvatar = Array.isArray(downloadResult.author?.avatarMedium) 
      ? downloadResult.author.avatarMedium[0] 
      : (downloadResult.author?.avatar || downloadResult.author?.avatarThumb?.[0] || '');

    const coverImage = Array.isArray(downloadResult.video?.cover) 
      ? downloadResult.video.cover[0] 
      : (downloadResult.video?.dynamicCover?.[0] || downloadResult.images?.[0] || '');

    const responsePayload = {
      success: true,
      provider: versionUsed,
      type: isImage ? 'image' : 'video',
      id: downloadResult.id || Date.now().toString(),
      title: downloadResult.desc || 'TikTok Video (No Watermark)',
      author: {
        username: downloadResult.author?.uniqueId || downloadResult.author?.username || 'TikTok Creator',
        nickname: downloadResult.author?.nickname || downloadResult.author?.username || 'Creator',
        avatar: authorAvatar,
      },
      stats: {
        likes: downloadResult.statistics?.likeCount || 0,
        comments: downloadResult.statistics?.commentCount || 0,
        shares: downloadResult.statistics?.shareCount || 0,
        views: downloadResult.statistics?.playCount || 0,
      },
      cover: coverImage,
      video: {
        noWatermark: directVideoUrl,
        noWatermarkHd: hdVideoUrl || directVideoUrl,
        watermark: downloadResult.video?.downloadAddr?.[0] || null,
      },
      music: {
        title: downloadResult.music?.title || 'Original Sound',
        author: downloadResult.music?.author || downloadResult.author?.nickname || 'Audio',
        url: directMusicUrl,
      },
      images: downloadResult.images || [],
    };

    return NextResponse.json(responsePayload);
  } catch (error) {
    console.error('API Error in /api/download:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'An unexpected error occurred while processing the request.',
      },
      { status: 500 }
    );
  }
}
