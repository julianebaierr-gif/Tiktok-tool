import { NextResponse } from 'next/server';
import Tiktok from '@tobyg74/tiktok-api-dl';

export const dynamic = 'force-dynamic';

// In-Memory Fast Cache (TTL: 15 minutes)
const mediaCache = new Map();
const CACHE_TTL_MS = 15 * 60 * 1000;
const MAX_CACHE_ENTRIES = 300;

function getCachedResult(url) {
  const entry = mediaCache.get(url);
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
    mediaCache.delete(url);
    return null;
  }
  return entry.data;
}

function setCachedResult(url, data) {
  if (mediaCache.size >= MAX_CACHE_ENTRIES) {
    // Evict oldest entry
    const oldestKey = mediaCache.keys().next().value;
    if (oldestKey) mediaCache.delete(oldestKey);
  }
  mediaCache.set(url, { timestamp: Date.now(), data });
}

// Clean and extract valid TikTok or Douyin URL from user input, shortened links, or mobile share text
function cleanTikTokUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return null;
  let str = rawUrl.trim();

  // If user pasted without protocol (e.g., 'tiktok.com/@...' or 'vt.tiktok.com/...' or 'www.tiktok.com/...')
  if (!/^https?:\/\//i.test(str)) {
    const domainMatch = str.match(/((?:[a-zA-Z0-9_-]+\.)?(?:tiktok\.com|douyin\.com)\/[^\s]+)/i);
    if (domainMatch) {
      str = 'https://' + domainMatch[1];
    }
  }

  // Regex that captures any URL containing tiktok.com or douyin.com
  const match = str.match(/https?:\/\/(?:[a-zA-Z0-9_-]+\.)?(?:tiktok\.com|douyin\.com)\/[a-zA-Z0-9@_\-\/?&=#%._~:;+]+/i);
  if (match) {
    return match[0].replace(/[.,;:!?)\\]+$/, '');
  }

  // Fallback: If string contains tiktok.com or douyin.com anywhere, extract from that point onwards
  const fallbackIndex = str.search(/(?:tiktok\.com|douyin\.com)/i);
  if (fallbackIndex !== -1) {
    let sub = str.slice(fallbackIndex);
    const endSpace = sub.search(/\s/);
    if (endSpace !== -1) sub = sub.slice(0, endSpace);
    return 'https://' + sub.replace(/[.,;:!?)\\]+$/, '');
  }

  return null;
}

// Fast timeout wrapper
function fetchProviderWithTimeout(version, url, timeoutMs = 7000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Timeout on ${version}`)), timeoutMs);
    Tiktok.Downloader(url, { version })
      .then((res) => {
        clearTimeout(timer);
        if (res && res.status === 'success' && res.result) {
          resolve({ version, result: res.result });
        } else {
          reject(new Error(`Failed on ${version}: ${res?.message || 'no result'}`));
        }
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
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

    // 1. Check In-Memory Cache first (< 5ms response time)
    const cached = getCachedResult(cleanUrl);
    if (cached) {
      return NextResponse.json({ ...cached, cached: true });
    }

    let downloadResult = null;
    let versionUsed = 'fast-race';

    // 2. High-Speed Concurrent Race: Run v2 (fastest ~600ms) and v1 concurrently!
    try {
      const winner = await Promise.any([
        fetchProviderWithTimeout('v2', cleanUrl, 7000),
        fetchProviderWithTimeout('v1', cleanUrl, 7000)
      ]);
      downloadResult = winner.result;
      versionUsed = winner.version;
    } catch {
      // 3. If both v2 and v1 fail, fallback to v3
      try {
        const v3 = await fetchProviderWithTimeout('v3', cleanUrl, 8000);
        downloadResult = v3.result;
        versionUsed = 'v3';
      } catch (errV3) {
        console.warn('All providers failed for:', cleanUrl, errV3.message);
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
    const directVideoUrl = Array.isArray(videoUrls) 
      ? videoUrls[0] 
      : (typeof videoUrls === 'string' ? videoUrls : (downloadResult.video?.noWatermark || downloadResult.video?.url || null));
    const hdVideoUrl = Array.isArray(videoUrls) && videoUrls.length > 1 
      ? videoUrls[1] 
      : (downloadResult.video?.noWatermarkHd || directVideoUrl);
    
    const musicUrls = downloadResult.music?.playUrl || [];
    const directMusicUrl = Array.isArray(musicUrls) 
      ? musicUrls[0] 
      : (typeof musicUrls === 'string' ? musicUrls : (downloadResult.music?.url || null));

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

    // Store in cache for ultra-fast instant future requests
    setCachedResult(cleanUrl, responsePayload);

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
