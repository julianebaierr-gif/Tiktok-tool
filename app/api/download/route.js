import { NextResponse } from 'next/server';
import Tiktok from '@tobyg74/tiktok-api-dl';

export const dynamic = 'force-dynamic';

// Webshare.io Verified High-Speed Multi-Region Proxy Pool
// Countries: US (United States), GB (United Kingdom / London), JP (Japan / Tokyo), FR (France / Paris)
const WEBSHARE_PROXIES = [
  'http://jzoemevm:cxoms419j5eq@9.142.218.167:6831',   // US (Palo Alto)
  'http://jzoemevm:cxoms419j5eq@195.40.133.198:6418',  // GB (London)
  'http://jzoemevm:cxoms419j5eq@82.22.93.22:7729',     // JP (Tokyo)
  'http://jzoemevm:cxoms419j5eq@31.98.7.105:6283',     // FR (Paris)
  'http://jzoemevm:cxoms419j5eq@64.52.28.38:7725',     // US (New Jersey)
];

let proxyIndex = 0;
function getNextWebshareProxy() {
  const proxy = WEBSHARE_PROXIES[proxyIndex];
  proxyIndex = (proxyIndex + 1) % WEBSHARE_PROXIES.length;
  return proxy;
}

// Douyin RapidAPI Configuration (Dedicated to Douyin links only to preserve quota)
const RAPIDAPI_DOUYIN_KEY = 'aa1fc7507bmshd3bf23922c9fc6ep167696jsn10c882466832';
const RAPIDAPI_DOUYIN_HOST = 'douyin-media-no-watermark1.p.rapidapi.com';

async function extractDouyinId(input) {
  if (!input || typeof input !== 'string') return null;
  // 1. Direct ID match (18-20 consecutive digits)
  const idMatch = input.match(/\b(\d{18,20})\b/);
  if (idMatch) return idMatch[1];

  // 2. douyin.com/video/ID or modal_id=ID or iesdouyin.com/share/video/ID
  const videoMatch = input.match(/(?:video\/|modal_id=)(\d+)/);
  if (videoMatch) return videoMatch[1];

  // 3. Short URL resolution (v.douyin.com)
  const shortMatch = input.match(/https?:\/\/v\.douyin\.com\/[a-zA-Z0-9_\-]+/i);
  if (shortMatch) {
    try {
      const res = await fetch(shortMatch[0], {
        method: 'HEAD',
        redirect: 'follow',
        headers: { 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)' }
      });
      const finalUrl = res.url || '';
      const finalId = finalUrl.match(/(?:video\/|modal_id=)(\d+)/) || finalUrl.match(/\b(\d{18,20})\b/);
      if (finalId) return finalId[1];
    } catch {
      try {
        const res = await fetch(shortMatch[0], {
          method: 'GET',
          redirect: 'follow',
          headers: { 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)' }
        });
        const finalUrl = res.url || '';
        const finalId = finalUrl.match(/(?:video\/|modal_id=)(\d+)/) || finalUrl.match(/\b(\d{18,20})\b/);
        if (finalId) return finalId[1];
      } catch {}
    }
  }
  return null;
}

async function fetchDouyinDetail(inputUrl) {
  const douyinId = await extractDouyinId(inputUrl);
  if (!douyinId) return { success: false, error: 'Could not extract valid Douyin Video ID from link.' };

  try {
    const res = await fetch('https://douyin-media-no-watermark1.p.rapidapi.com/v1/social/douyin/web/aweme/detail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': RAPIDAPI_DOUYIN_HOST,
        'x-rapidapi-key': RAPIDAPI_DOUYIN_KEY,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      body: JSON.stringify({ id: douyinId })
    });

    if (!res.ok) {
      const errText = await res.text();
      return { success: false, error: `RapidAPI error (${res.status}): ${errText.slice(0, 120)}` };
    }
    const data = await res.json();
    const aweme = data?.aweme_detail;
    if (!aweme) {
      return { success: false, error: `Douyin video details unavailable (status: ${data?.status_code || 'empty'})` };
    }

    const playList = aweme.video?.play_addr?.url_list || [];
    const h264List = aweme.video?.play_addr_h264?.url_list || [];
    const downloadList = aweme.video?.download_addr?.url_list || [];
    const bitRateList = (aweme.video?.bit_rate || []).flatMap(b => b.play_addr?.url_list || []);

    const cleanVideoUrl = playList[0] || h264List[0] || bitRateList[0] || null;
    const hdVideoUrl = h264List[0] || playList[0] || cleanVideoUrl;
    const watermarkUrl = downloadList[0] || null;

    const isImage = aweme.images && aweme.images.length > 0;
    const images = isImage ? aweme.images.map(img => img.url_list?.[0]).filter(Boolean) : [];

    const durSec = Math.round((aweme.duration || 0) / 1000);
    const mins = Math.floor(durSec / 60);
    const secs = durSec % 60;
    const durationFormatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    const tagsFromExtra = (aweme.text_extra || []).map(t => t.hashtag_name ? `#${t.hashtag_name}` : null).filter(Boolean);
    const tagsFromDesc = (aweme.desc?.match(/#[\w\u4e00-\u9fa5]+/g) || []);
    const hashtags = Array.from(new Set([...tagsFromExtra, ...tagsFromDesc]));

    const shareUrl = aweme.share_url || aweme.share_info?.share_url || `https://www.douyin.com/video/${douyinId}`;

    return {
      success: true,
      provider: 'douyin-rapidapi',
      isDouyin: true,
      type: isImage ? 'image' : 'video',
      id: aweme.aweme_id || douyinId,
      title: aweme.desc || aweme.item_title || 'Douyin Video (No Watermark)',
      duration: durSec,
      durationFormatted,
      shareUrl,
      hashtags,
      author: {
        username: aweme.author?.unique_id || aweme.author?.short_id || 'douyin_creator',
        nickname: aweme.author?.nickname || 'Douyin Creator',
        avatar: aweme.author?.avatar_thumb?.url_list?.[0] || '',
        signature: aweme.author?.signature || '',
        followers: aweme.author?.follower_count || 0,
        totalFavorited: aweme.author?.total_favorited || 0,
      },
      stats: {
        likes: aweme.statistics?.digg_count || 0,
        comments: aweme.statistics?.comment_count || 0,
        shares: aweme.statistics?.share_count || 0,
        collects: aweme.statistics?.collect_count || 0,
        views: aweme.statistics?.play_count || 0,
      },
      cover: aweme.video?.cover?.url_list?.[0] || aweme.video?.origin_cover?.url_list?.[0] || '',
      dynamicCover: aweme.video?.dynamic_cover?.url_list?.[0] || '',
      video: {
        noWatermark: cleanVideoUrl,
        noWatermarkHd: hdVideoUrl,
        watermark: watermarkUrl,
      },
      music: {
        title: aweme.music?.title || 'Original Sound',
        author: aweme.music?.author || aweme.author?.nickname || 'Douyin Audio',
        cover: aweme.music?.cover_large?.url_list?.[0] || aweme.video?.cover?.url_list?.[0] || '',
        url: aweme.music?.play_url?.url_list?.[0] || cleanVideoUrl,
      },
      images,
    };
  } catch (err) {
    return { success: false, error: `RapidAPI connection failed: ${err.message}` };
  }
}

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
    const oldestKey = mediaCache.keys().next().value;
    if (oldestKey) mediaCache.delete(oldestKey);
  }
  mediaCache.set(url, { timestamp: Date.now(), data });
}

// Clean and extract valid TikTok or Douyin URL from user input, shortened links, or mobile share text
function cleanTikTokUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return null;
  let str = rawUrl.trim();

  // If user pasted without protocol
  if (!/^https?:\/\//i.test(str)) {
    const domainMatch = str.match(/((?:[a-zA-Z0-9_-]+\.)?(?:tiktok\.com|douyin\.com)\/[^\s]+)/i);
    if (domainMatch) {
      str = 'https://' + domainMatch[1];
    }
  }

  // Regex capturing any URL containing tiktok.com or douyin.com
  const match = str.match(/https?:\/\/(?:[a-zA-Z0-9_-]+\.)?(?:tiktok\.com|douyin\.com)\/[a-zA-Z0-9@_\-\/?&=#%._~:;+]+/i);
  if (match) {
    return match[0].replace(/[.,;:!?)\\]+$/, '');
  }

  // Fallback string search
  const fallbackIndex = str.search(/(?:tiktok\.com|douyin\.com)/i);
  if (fallbackIndex !== -1) {
    let sub = str.slice(fallbackIndex);
    const endSpace = sub.search(/\s/);
    if (endSpace !== -1) sub = sub.slice(0, endSpace);
    return 'https://' + sub.replace(/[.,;:!?)\\]+$/, '');
  }

  // If it's a numeric Douyin ID:
  if (/^\d{18,20}$/.test(str)) {
    return 'https://www.douyin.com/video/' + str;
  }

  return null;
}

// Fast timeout wrapper
function fetchProviderWithTimeout(version, url, options = {}, timeoutMs = 7000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Timeout on ${version}`)), timeoutMs);
    Tiktok.Downloader(url, { version, ...options })
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
    const { url, platform } = body;

    if (!url) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid TikTok or Douyin URL.' },
        { status: 400 }
      );
    }

    const cleanUrl = cleanTikTokUrl(url);
    if (!cleanUrl) {
      return NextResponse.json(
        { success: false, error: 'Invalid URL format. Please paste a standard TikTok or Douyin video link.' },
        { status: 400 }
      );
    }

    const isDouyinLink = cleanUrl.includes('douyin.com') || (typeof url === 'string' && (url.includes('douyin.com') || /[\u4e00-\u9fa5]/.test(url)));

    // Strict Platform Separation Check
    if (platform === 'douyin' && cleanUrl.includes('tiktok.com')) {
      return NextResponse.json(
        {
          success: false,
          error: 'This page is dedicated exclusively to Chinese Douyin (抖音) links. For international TikTok videos, please switch to our TikTok Downloader.',
          wrongPlatform: 'tiktok'
        },
        { status: 400 }
      );
    }

    if (platform === 'tiktok' && isDouyinLink) {
      return NextResponse.json(
        {
          success: false,
          error: 'You entered a Chinese Douyin (抖音) link. Please use our specialized Douyin Downloader for fast Chinese CDN processing.',
          wrongPlatform: 'douyin'
        },
        { status: 400 }
      );
    }

    // 1. Check In-Memory Cache first (< 5ms response time)
    const cached = getCachedResult(cleanUrl);
    if (cached) {
      return NextResponse.json({ ...cached, cached: true });
    }

    // 2. Dedicated Douyin Handler (RapidAPI Gateway - ONLY triggered for Douyin links to protect free quota!)
    if (isDouyinLink) {
      const douyinResult = await fetchDouyinDetail(url || cleanUrl);
      if (douyinResult && douyinResult.success) {
        setCachedResult(cleanUrl, douyinResult);
        return NextResponse.json(douyinResult);
      } else {
        return NextResponse.json(
          {
            success: false,
            error: douyinResult?.error || 'Unable to retrieve media from this Douyin link. The video may be private, deleted, or restricted.',
          },
          { status: 404 }
        );
      }
    }

    let downloadResult = null;
    let versionUsed = 'fast-race';

    // 3. Tier 1: High-Speed Concurrent Race (v2 & v1 without proxy for sub-second ~600ms speed for international TikTok)
    try {
      const winner = await Promise.any([
        fetchProviderWithTimeout('v2', cleanUrl, {}, 7000),
        fetchProviderWithTimeout('v1', cleanUrl, {}, 7000)
      ]);
      downloadResult = winner.result;
      versionUsed = winner.version;
    } catch {
      // 4. Tier 2: Webshare Multi-Region Geo-Unlocker (US / UK / JP Proxy)
      // Automatically triggered if Tier 1 encounters a geo-restriction or IP rate-limit!
      try {
        const activeProxy = getNextWebshareProxy();
        const proxyWinner = await fetchProviderWithTimeout('v1', cleanUrl, { proxy: activeProxy }, 8000);
        downloadResult = proxyWinner.result;
        versionUsed = 'webshare-proxy-v1';
      } catch (errProxy) {
        console.warn('Webshare Tier 2 attempt failed, attempting Tier 3 fallback...', errProxy.message);
        
        // 5. Tier 3: MusicalDown fallback
        try {
          const v3 = await fetchProviderWithTimeout('v3', cleanUrl, {}, 8000);
          downloadResult = v3.result;
          versionUsed = 'v3';
        } catch (errV3) {
          console.warn('All tiers failed for:', cleanUrl, errV3.message);
        }
      }
    }

    if (!downloadResult) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unable to retrieve media from this link. The video may be private, deleted, or restricted.',
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
