'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Download, 
  Music, 
  Video, 
  Image as ImageIcon, 
  Heart, 
  MessageCircle, 
  Share2, 
  Eye, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Copy,
  Check,
  QrCode,
  X,
  Play,
  Bell,
  UserCheck,
  Disc,
  Globe2,
  Clock,
  Calendar,
  Bookmark,
  Hash,
  Users,
  Flame,
  ArrowRight
} from 'lucide-react';

export default function ResultCard({ result, onReset, mode = "all" }) {
  const [copied, setCopied] = useState(false);
  const [shareUrlCopied, setShareUrlCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!result) return null;

  const {
    id,
    title,
    author,
    stats,
    cover,
    dynamicCover,
    video,
    music,
    images,
    type,
    isDouyin,
    duration,
    durationFormatted,
    shareUrl,
    hashtags,
    createTime,
    provider
  } = result;


  // Compute exact Video Upload Date & Time (from API createTime or 64-bit Snowflake ID)
  const getUploadTimeInfo = () => {
    let unixSec = null;
    if (createTime && Number(createTime) > 1400000000) {
      const n = Number(createTime);
      unixSec = n > 10000000000 ? Math.floor(n / 1000) : Math.floor(n);
    } else if (id && /^\d{18,20}$/.test(String(id))) {
      try {
        const decoded = Number(BigInt(String(id)) >> 32n);
        if (decoded > 1450000000 && decoded < 2200000000) {
          unixSec = decoded;
        }
      } catch {}
    }
    if (!unixSec) return null;

    const dateObj = new Date(unixSec * 1000);
    const localDate = dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    const localTime = dateObj.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
    const utcString = dateObj.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';

    const diffSec = Math.max(0, Math.floor(Date.now() / 1000) - unixSec);
    let relative = 'Just now';
    if (diffSec >= 31536000) {
      const yrs = Math.floor(diffSec / 31536000);
      relative = `${yrs} year${yrs > 1 ? 's' : ''} ago`;
    } else if (diffSec >= 2592000) {
      const mos = Math.floor(diffSec / 2592000);
      relative = `${mos} month${mos > 1 ? 's' : ''} ago`;
    } else if (diffSec >= 86400) {
      const days = Math.floor(diffSec / 86400);
      relative = `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (diffSec >= 3600) {
      const hrs = Math.floor(diffSec / 3600);
      relative = `${hrs} hour${hrs > 1 ? 's' : ''} ago`;
    } else if (diffSec >= 60) {
      const mins = Math.floor(diffSec / 60);
      relative = `${mins} min${mins > 1 ? 's' : ''} ago`;
    }

    return { localDate, localTime, utcString, relative };
  };

  const uploadInfo = getUploadTimeInfo();

  const isDouyinMode = mode === 'douyin' || isDouyin || provider === 'douyin-rapidapi';
  const isImagePost = type === 'image' || (images && images.length > 0);

  const handleCopyShareUrl = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setShareUrlCopied(true);
      setTimeout(() => setShareUrlCopied(false), 2500);
    });
  };

  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getProxyUrl = (mediaUrl, filename, mediaType = 'video') => {
    return `/api/proxy?url=${encodeURIComponent(mediaUrl)}&filename=${encodeURIComponent(filename)}&type=${mediaType}`;
  };

  const directDownloadUrl = video?.noWatermark 
    ? (typeof window !== 'undefined' ? `${window.location.origin}${getProxyUrl(video.noWatermark, `quktik_${id}.mp4`)}` : video.noWatermark)
    : '';

  const handleCopyLink = () => {
    if (!directDownloadUrl) return;
    navigator.clipboard.writeText(directDownloadUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  // Mode-specific badge for the top bar
  const getModeBadge = () => {
    if (isDouyinMode) {
      return { text: 'Douyin (抖音) All-in-One Suite Ready', icon: Globe2, color: 'text-rose-700 bg-rose-50 border-rose-200' };
    }
    switch (mode) {
      case 'video':
        return { text: 'Watermark-Free 1080p Video Ready', icon: Video, color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
      case 'mp3':
        return { text: 'MP3 Audio Extracted (320kbps Studio)', icon: Disc, color: 'text-rose-700 bg-rose-50 border-rose-200' };
      case 'ringtone':
        return { text: 'Custom Ringtone Ready (.M4A Universal)', icon: Bell, color: 'text-amber-700 bg-amber-50 border-amber-200' };
      case 'avatar':
        return { text: 'Profile Avatar Full HD Extracted', icon: UserCheck, color: 'text-teal-700 bg-teal-50 border-teal-200' };
      case 'story':
        return { text: 'Story Video (Saved Before 24h Expiry)', icon: Clock, color: 'text-purple-700 bg-purple-50 border-purple-200' };
      case 'photo':
        return { text: 'High-Resolution Photo Extractor Ready', icon: ImageIcon, color: 'text-indigo-700 bg-indigo-50 border-indigo-200' };
      default:
        return { text: 'All-in-One Master Suite • 1080p Ready', icon: CheckCircle2, color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    }
  };

  const badgeInfo = getModeBadge();
  const BadgeIcon = badgeInfo.icon;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 animate-in fade-in zoom-in-95 duration-200">
      <div className="rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/60 p-6 sm:p-8 relative">
        
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 mb-6">
          <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold border ${badgeInfo.color}`}>
            <BadgeIcon className="w-4 h-4 shrink-0" />
            <span>{badgeInfo.text}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-all cursor-pointer"
              title="Copy direct download link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
            </button>

            <button
              onClick={() => setShowQr(true)}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-all cursor-pointer"
              title="Download to phone via QR code"
            >
              <QrCode className="w-3.5 h-3.5 text-rose-500" />
              <span>Scan QR</span>
            </button>

            <button
              onClick={onReset}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 transition-all active:scale-95 shadow-xs cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
              <span>Download Another</span>
            </button>
          </div>
        </div>

        {/* ============================================================= */}
        {/* BRANCH 1: DOUYIN MODE ONLY (抖音专区 - 完全独立，不混入 TikTok)   */}
        {/* ============================================================= */}
        {isDouyinMode ? (
          <div className="space-y-6">
            
            {/* Top Douyin Notice & Interlink Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-50 via-amber-50 to-orange-50 border border-rose-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                  抖音
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span>Douyin All-in-One Media Suite (抖音全能下载)</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 font-bold uppercase tracking-wider">China Mainland</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Clean MP4 video, watermarked original, 320kbps BGM MP3, and creator profile metadata.
                  </p>
                </div>
              </div>
              <Link
                href="/tiktok-video-downloader"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-rose-600 text-xs font-bold border border-slate-200 shadow-xs shrink-0 transition-all"
              >
                <span>Switch to Global TikTok</span>
                <ArrowRight className="w-3.5 h-3.5 text-rose-600" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Media Preview, Author Card & Soundtrack */}
              <div className="md:col-span-5 space-y-4">
                
                {/* Video Player / Cover Box */}
                <div className="relative aspect-[9/16] max-h-[420px] w-full mx-auto rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md group">
                  {isPlaying && video?.noWatermark ? (
                    <video
                      src={getProxyUrl(video.noWatermark, `douyin_preview_${id}.mp4`, 'video')}
                      controls
                      autoPlay
                      className="w-full h-full object-contain bg-black"
                    />
                  ) : cover ? (
                    <>
                      <img
                        src={cover}
                        alt={title || 'Douyin Preview'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                      
                      {video?.noWatermark && (
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="absolute inset-0 flex items-center justify-center m-auto w-14 h-14 rounded-full bg-white/90 text-rose-700 shadow-lg hover:scale-110 active:scale-95 transition-all group-hover:bg-white cursor-pointer z-10"
                          title="Play preview video"
                        >
                          <Play className="w-6 h-6 fill-rose-600 ml-0.5" />
                        </button>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <Video className="w-16 h-16" />
                    </div>
                  )}

                  {/* Clean No-Watermark Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 border border-white/80 text-[11px] font-bold text-rose-700 shadow-sm flex items-center gap-1.5 pointer-events-none z-20">
                    <Sparkles className="w-3 h-3 text-rose-500" />
                    <span>无水印 1080p</span>
                  </div>

                  {/* Duration Badge */}
                  {durationFormatted && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1.5 pointer-events-none z-20">
                      <Clock className="w-3 h-3 text-rose-400" />
                      <span>{durationFormatted}</span>
                    </div>
                  )}
                </div>

                {/* Download Full HD Video Cover Button */}
                {cover && (
                  <a
                    href={getProxyUrl(cover, `douyin_cover_${id}.jpg`, 'image')}
                    download={`douyin_cover_${id}.jpg`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition-all shadow-xs"
                  >
                    <ImageIcon className="w-4 h-4 text-indigo-600" />
                    <span>Download Full HD Video Cover (.jpg)</span>
                  </a>
                )}

                {/* Douyin Creator Profile Card */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center space-x-3">
                    {author?.avatar ? (
                      <img
                        src={author.avatar}
                        alt={author.nickname}
                        className="w-12 h-12 rounded-full border-2 border-rose-200 object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg shrink-0">
                        {author?.nickname?.charAt(0) || 'D'}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-slate-900 font-bold text-sm truncate">{author?.nickname || 'Douyin Creator'}</h4>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-rose-100 text-rose-700 font-bold shrink-0">创作者</span>
                      </div>
                      <p className="text-slate-500 text-xs truncate">UID: {author?.username || 'douyin_user'}</p>
                    </div>
                  </div>

                  {author?.signature && (
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
                      <span className="font-bold text-slate-400 block text-[10px] uppercase mb-0.5">Bio / 个人简介:</span>
                      <p className="line-clamp-3 italic">"{author.signature}"</p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/70 text-center">
                    <div className="p-2 rounded-xl bg-white border border-slate-200/80">
                      <span className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mb-0.5">
                        <Users className="w-3 h-3 text-indigo-500" /> Followers
                      </span>
                      <span className="text-sm font-bold text-slate-900">{formatNumber(author?.followers)}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200/80">
                      <span className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mb-0.5">
                        <Flame className="w-3 h-3 text-rose-500" /> Total Likes
                      </span>
                      <span className="text-sm font-bold text-slate-900">{formatNumber(author?.totalFavorited)}</span>
                    </div>
                  </div>
                </div>

                {/* Douyin BGM Soundtrack Card */}
                {music && (
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50/70 via-slate-50 to-indigo-50/70 border border-rose-100 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-900 shadow-xs shrink-0 relative">
                        {music.cover ? (
                          <img src={music.cover} alt="Music cover" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-rose-400">
                            <Disc className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider block">BGM Soundtrack</span>
                        <h5 className="text-xs font-bold text-slate-900 truncate">{music.title || 'Douyin Original Sound'}</h5>
                        <p className="text-[11px] text-slate-500 truncate">{music.author || author?.nickname || 'Douyin Audio'}</p>
                      </div>
                    </div>

                    {music.url && (
                      <audio controls className="w-full h-8 rounded-lg" src={music.url}>
                        Your browser does not support audio playback.
                      </audio>
                    )}

                    {music.url && (
                      <a
                        href={getProxyUrl(music.url, `douyin_audio_${id}.mp3`, 'audio')}
                        download={`douyin_audio_${id}.mp3`}
                        className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs transition-all"
                      >
                        <Music className="w-3.5 h-3.5" />
                        <span>Download BGM MP3 (320kbps)</span>
                      </a>
                    )}
                  </div>
                )}

              </div>

              {/* Right Column: Title, Hashtags, Stats & Download Options */}
              <div className="md:col-span-7 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-slate-900 text-base sm:text-lg font-semibold leading-relaxed">
                    {title || 'Douyin Video Description'}
                  </h3>
                  {uploadInfo && (
                    <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-gradient-to-r from-rose-50/60 via-slate-50 to-white border border-slate-200/90 shadow-2xs">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-xl bg-rose-100/80 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap text-xs sm:text-[13px] leading-tight">
                            <span className="font-bold text-slate-500">Uploaded:</span>
                            <span className="font-extrabold text-slate-900">{uploadInfo.localDate}</span>
                            <span className="text-slate-300 font-bold">•</span>
                            <span className="font-bold text-rose-600">{uploadInfo.localTime}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 font-mono mt-0.5 truncate">
                            UTC: {uploadInfo.utcString.replace(' UTC', '')}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 font-bold text-[11px] shrink-0 shadow-2xs">
                        <Clock className="w-3 h-3 text-rose-500" />
                        <span>{uploadInfo.relative}</span>
                      </span>
                    </div>
                  )}
                </div>

                {hashtags && hashtags.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Video Hashtags / 话题标签:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {hashtags.map((tag, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 border border-rose-100 text-xs font-semibold hover:bg-rose-100 transition-colors">
                          <Hash className="w-3 h-3 text-rose-500" />
                          <span>{tag.replace(/^#/, '')}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Engagement Statistics */}
                <div className="grid grid-cols-5 gap-1.5 py-3 px-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                  <div>
                    <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mb-1">
                      <Heart className="w-3 h-3 text-rose-500" /> Likes
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">{formatNumber(stats?.likes)}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mb-1">
                      <MessageCircle className="w-3 h-3 text-indigo-500" /> Comments
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">{formatNumber(stats?.comments)}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mb-1">
                      <Share2 className="w-3 h-3 text-amber-500" /> Shares
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">{formatNumber(stats?.shares)}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mb-1">
                      <Bookmark className="w-3 h-3 text-emerald-500" /> Favs
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">{formatNumber(stats?.collects)}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mb-1">
                      <Eye className="w-3 h-3 text-purple-500" /> Plays
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">{formatNumber(stats?.views)}</p>
                  </div>
                </div>

                {/* All-in-One Download Action Buttons */}
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">Choose Douyin Download Option:</h4>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      ByteDance China CDN
                    </span>
                  </div>

                  {video?.noWatermark && (
                    <a
                      href={getProxyUrl(video.noWatermark, `douyin_clean_${id}.mp4`, 'video')}
                      download={`douyin_clean_${id}.mp4`}
                      className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-sm hover:shadow transition-all active:scale-[0.98] group"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-9 h-9 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Download className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left">
                          <span className="block font-black tracking-tight leading-tight">Download Video (Without Watermark)</span>
                          <span className="text-xs text-emerald-100 font-normal">无水印高清原画 MP4</span>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/25 font-bold uppercase tracking-wider shrink-0">Server 1</span>
                    </a>
                  )}

                  {video?.noWatermarkHd && (
                    <a
                      href={getProxyUrl(video.noWatermarkHd, `douyin_hd_${id}.mp4`, 'video')}
                      download={`douyin_hd_${id}.mp4`}
                      className="w-full flex items-center justify-between px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 active:scale-[0.98] transition-all group"
                    >
                      <div className="flex items-center space-x-3.5">
                        <Video className="w-5 h-5 text-indigo-600 shrink-0" />
                        <span className="text-left font-bold">Download Video (HD Server 2 Mirror)</span>
                      </div>
                      <span className="text-xs text-slate-500 font-semibold">HD 1080p</span>
                    </a>
                  )}

                  {video?.watermark && (
                    <a
                      href={getProxyUrl(video.watermark, `douyin_watermarked_${id}.mp4`, 'video')}
                      download={`douyin_watermarked_${id}.mp4`}
                      className="w-full flex items-center justify-between px-6 py-3.5 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-sm border border-amber-200 active:scale-[0.98] transition-all group"
                    >
                      <div className="flex items-center space-x-3.5">
                        <Video className="w-5 h-5 text-amber-700 shrink-0" />
                        <div className="text-left">
                          <span className="font-bold block leading-tight">Download Video (With Watermark / 带水印)</span>
                          <span className="text-[11px] text-amber-700 font-normal">Original ByteDance Logo Version</span>
                        </div>
                      </div>
                      <span className="text-xs text-amber-700 font-semibold shrink-0">With Logo</span>
                    </a>
                  )}

                  {music?.url && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={getProxyUrl(music.url, `douyin_audio_${id}.mp3`, 'audio')}
                        download={`douyin_audio_${id}.mp3`}
                        className="flex items-center justify-between px-5 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm shadow-sm hover:shadow transition-all active:scale-[0.98] group"
                      >
                        <div className="flex items-center space-x-2.5 truncate">
                          <Music className="w-4 h-4 text-white shrink-0" />
                          <span className="truncate">Download MP3 Audio</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/25 font-bold uppercase tracking-wider shrink-0">320kbps</span>
                      </a>

                      <a
                        href={getProxyUrl(music.url, `douyin_ringtone_${id}.m4a`, 'audio')}
                        download={`douyin_ringtone_${id}.m4a`}
                        className="flex items-center justify-between px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm hover:shadow transition-all active:scale-[0.98] group"
                      >
                        <div className="flex items-center space-x-2.5 truncate">
                          <Bell className="w-4 h-4 text-white shrink-0" />
                          <span className="truncate">Download Ringtone</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/25 font-bold uppercase tracking-wider shrink-0">iOS / Android</span>
                      </a>
                    </div>
                  )}

                  {/* Douyin Video Share URL Box */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span className="flex items-center gap-1.5 text-slate-800">
                        <Share2 className="w-3.5 h-3.5 text-rose-500" />
                        <span>Douyin Web Share URL (分享链接):</span>
                      </span>
                      <span className="text-slate-400 text-[11px]">Original Web Link</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        readOnly
                        value={shareUrl || `https://www.douyin.com/video/${id}`}
                        className="flex-1 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 truncate focus:outline-hidden"
                      />
                      <button
                        onClick={handleCopyShareUrl}
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 shadow-xs shrink-0 transition-all active:scale-95 cursor-pointer"
                      >
                        {shareUrlCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                        <span>{shareUrlCopied ? 'Copied!' : 'Copy'}</span>
                      </button>
                      <a
                        href={shareUrl || `https://www.douyin.com/video/${id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shrink-0 transition-all"
                      >
                        <span>Open</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* All-in-One Format Conversion Matrix */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span className="flex items-center gap-1.5 text-rose-600">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Douyin All-in-One Media Suite:</span>
                      </span>
                      <span className="text-slate-400">ByteDance Original Quality</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                        <span className="font-bold text-slate-900 block">1080p MP4</span>
                        <span className="text-[10px] text-emerald-700 font-semibold">无水印原画</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                        <span className="font-bold text-slate-900 block">320kbps MP3</span>
                        <span className="text-[10px] text-rose-700 font-semibold">背景音乐 BGM</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                        <span className="font-bold text-slate-900 block">HD Cover</span>
                        <span className="text-[10px] text-indigo-600 font-semibold">高清原图封面</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                        <span className="font-bold text-slate-900 block">With Logo</span>
                        <span className="text-[10px] text-amber-700 font-semibold">带水印原版</span>
                      </div>
                    </div>
                  </div>

                  {/* Photo Slideshow Gallery if image post */}
                  {isImagePost && images && images.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <ImageIcon className="w-4 h-4 text-rose-500" />
                          <span>Douyin Photo Gallery ({images.length} High-Res Photos)</span>
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {images.map((imgUrl, index) => (
                          <div key={index} className="relative group rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[9/16]">
                            <img
                              src={imgUrl}
                              alt={`Photo slide ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                              <a
                                href={getProxyUrl(imgUrl, `douyin_photo_${id}_${index + 1}.jpg`, 'image')}
                                download={`douyin_photo_${id}_${index + 1}.jpg`}
                                className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1 shadow-md"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>Save #{index + 1}</span>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom Interlink Banner to Global TikTok */}
                  <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                    <div>
                      <span className="font-bold text-slate-800 block mb-0.5">Need International TikTok Videos?</span>
                      Douyin (抖音) content is exclusive to Mainland China. For TikTok videos without watermark, use our Global TikTok tool.
                    </div>
                    <Link
                      href="/tiktok-video-downloader"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-rose-700 font-bold border border-slate-200 shrink-0 shadow-xs transition-all"
                    >
                      <span>Open TikTok Downloader</span>
                      <ArrowRight className="w-3.5 h-3.5 text-rose-600" />
                    </Link>
                  </div>

                </div>

              </div>

            </div>

          </div>
        ) : (
          /* ============================================================= */
          /* BRANCH 2: UNIFIED 2-COLUMN CARD LAYOUT FOR ALL TIKTOK PAGES   */
          /* - Homepage (mode === 'all'): Shows ALL-IN-ONE Suite           */
          /* - Dedicated Pages (video, mp3, ringtone, photo, story, avatar)*/
          /*   Show ONLY their specific job #1 FIRST + MP4 & MP3!          */
          /* ============================================================= */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* ----------------------------------------------------------- */}
            {/* LEFT COLUMN: Media Preview & Creator Profile                */}
            {/* ----------------------------------------------------------- */}
            <div className="md:col-span-5 space-y-4">
              
              {/* If mode === 'avatar', highlight the Full HD Uncropped Avatar in the Preview Box */}
              {mode === 'avatar' ? (
                <div className="relative aspect-square max-h-[380px] w-full mx-auto rounded-2xl overflow-hidden bg-slate-950 border-2 border-teal-200 shadow-md group">
                  {author?.avatar ? (
                    <img
                      src={author.avatar}
                      alt={author.nickname || 'TikTok Avatar HD'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = getProxyUrl(author.avatar, `avatar_${id}.jpg`, 'image');
                      }}
                    />
                  ) : cover ? (
                    <img
                      src={cover}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-5xl font-black bg-teal-700">
                      {author?.username?.charAt(0)?.toUpperCase() || 'U'}
                    </div>
                  )}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-teal-600 text-white text-[11px] font-bold shadow-sm flex items-center gap-1.5 pointer-events-none z-20">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Uncropped Full HD Avatar</span>
                  </div>
                </div>
              ) : (
                /* Standard Video / Cover Preview Box (FAIL-PROOF: Cover -> Proxied Video Frame -> Avatar) */
                <div className="relative aspect-[9/16] max-h-[420px] w-full mx-auto rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md group">
                  {isPlaying && video?.noWatermark ? (
                    <video
                      src={getProxyUrl(video.noWatermark, `preview_${id}.mp4`, 'video')}
                      controls
                      autoPlay
                      className="w-full h-full object-contain bg-black"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      {cover ? (
                        <img
                          src={cover}
                          alt={title || 'TikTok Preview'}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = getProxyUrl(cover, `cover_${id}.jpg`, 'image');
                          }}
                        />
                      ) : video?.noWatermark ? (
                        <video
                          src={`${getProxyUrl(video.noWatermark, `preview_${id}.mp4`, 'video')}#t=0.001`}
                          preload="metadata"
                          playsInline
                          muted
                          className="w-full h-full object-contain bg-black"
                        />
                      ) : author?.avatar ? (
                        <img
                          src={author.avatar}
                          alt="Author Avatar"
                          className="w-full h-full object-cover blur-xs opacity-75"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-2">
                          <Video className="w-16 h-16 text-slate-600" />
                          <span className="text-xs text-slate-500 font-medium">TikTok Media Stream</span>
                        </div>
                      )}

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Center Play Button */}
                      {video?.noWatermark && (
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="absolute inset-0 flex items-center justify-center m-auto w-14 h-14 rounded-full bg-white/95 text-rose-600 shadow-xl hover:scale-110 active:scale-95 transition-all group-hover:bg-white cursor-pointer z-10"
                          title="Play preview video"
                        >
                          <Play className="w-6 h-6 fill-rose-600 ml-0.5" />
                        </button>
                      )}

                      {/* Top-Left Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 border border-white/80 text-[11px] font-bold text-rose-700 shadow-sm flex items-center gap-1.5 pointer-events-none z-20">
                        <Sparkles className="w-3 h-3 text-rose-500" />
                        <span>
                          {mode === 'story' ? '24h Story' : (isImagePost ? 'Photo Mode' : 'Clean 1080p')}
                        </span>
                      </div>

                      {/* Duration Badge */}
                      {durationFormatted && (
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1.5 pointer-events-none z-20">
                          <Clock className="w-3 h-3 text-rose-400" />
                          <span>{durationFormatted}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* ONLY ON HOMEPAGE ('all'): Extra Cover Download Button under preview */}
              {mode === 'all' && (cover || (images && images.length > 0)) && (
                <a
                  href={getProxyUrl(cover || images[0], `quktik_cover_${id}.jpg`, 'image')}
                  download={`quktik_cover_${id}.jpg`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition-all shadow-xs cursor-pointer active:scale-[0.98]"
                >
                  <ImageIcon className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Download Full HD Video Cover (.jpg)</span>
                </a>
              )}

              {/* Creator Profile Box */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5">
                <div className="flex items-center space-x-3">
                  {author?.avatar ? (
                    <img
                      src={author.avatar}
                      alt={author.nickname}
                      className="w-11 h-11 rounded-full border-2 border-slate-200 object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700 shrink-0">
                      {author?.username?.charAt(0) || 'U'}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-900 font-bold text-sm truncate">{author?.nickname || 'TikTok Creator'}</h4>
                    <p className="text-slate-500 text-xs truncate">@{author?.username || 'user'}</p>
                  </div>
                </div>

                {/* ONLY ON HOMEPAGE ('all'): Instant Profile Avatar HD Download inside Author Card */}
                {mode === 'all' && author?.avatar && (
                  <a
                    href={getProxyUrl(author.avatar, `quktik_avatar_${author.username || id}.jpg`, 'image')}
                    download={`quktik_avatar_${author.username || id}.jpg`}
                    className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-xl bg-white hover:bg-teal-50 text-teal-800 text-[11px] font-bold border border-teal-200/90 transition-all shadow-xs cursor-pointer active:scale-[0.98]"
                  >
                    <UserCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Download Profile Avatar HD (.jpg)</span>
                  </a>
                )}
              </div>

            </div>

            {/* ----------------------------------------------------------- */}
            {/* RIGHT COLUMN: Title, Stats & Mode-Specific Download Actions */}
            {/* ----------------------------------------------------------- */}
            <div className="md:col-span-7 space-y-5">
              
              {/* Video Title / Description + Exact Upload Timestamp */}
              <div className="space-y-3">
                <h3 className="text-slate-900 text-base sm:text-lg font-bold leading-relaxed line-clamp-3">
                  {title || 'TikTok video description'}
                </h3>
                {uploadInfo && (
                  <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50/80 border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center text-rose-600 shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap text-xs sm:text-[13px] leading-tight">
                          <span className="font-bold text-slate-500">Uploaded:</span>
                          <span className="font-extrabold text-slate-900">{uploadInfo.localDate}</span>
                          <span className="text-slate-300 font-bold">•</span>
                          <span className="font-bold text-rose-600">{uploadInfo.localTime}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-mono mt-0.5 truncate">
                          UTC: {uploadInfo.utcString.replace(' UTC', '')}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[11px] shrink-0 shadow-2xs">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      <span>{uploadInfo.relative}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Engagement Statistics */}
              <div className="grid grid-cols-4 gap-2 py-3 px-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div>
                  <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mb-1">
                    <Heart className="w-3.5 h-3.5 text-rose-500" /> Likes
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{formatNumber(stats?.likes)}</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mb-1">
                    <MessageCircle className="w-3.5 h-3.5 text-indigo-500" /> Comments
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{formatNumber(stats?.comments)}</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mb-1">
                    <Share2 className="w-3.5 h-3.5 text-amber-500" /> Shares
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{formatNumber(stats?.shares)}</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mb-1">
                    <Eye className="w-3.5 h-3.5 text-emerald-500" /> Plays
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{formatNumber(stats?.views)}</p>
                </div>
              </div>

              {/* ========================================================= */}
              {/* MODE 1: VIDEO DOWNLOADER (/tiktok-video-downloader)       */}
              {/* #1 Primary: Video (No Watermark) + HD Mirror              */}
              {/* #2 Secondary: MP3 Audio                                   */}
              {/* ========================================================= */}
              {mode === 'video' && (
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">1. Primary Video Download (MP4):</h4>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      1080p Full HD
                    </span>
                  </div>

                  {/* #1: Video Without Watermark */}
                  {video?.noWatermark && (
                    <a
                      href={getProxyUrl(video.noWatermark, `quktik_video_nowm_${id}.mp4`, 'video')}
                      download={`quktik_video_nowm_${id}.mp4`}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold transition-all shadow-md shadow-emerald-600/20 active:scale-[0.99] group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Download className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left min-w-0">
                          <span className="block font-black text-base sm:text-lg leading-tight tracking-tight">
                            Download Video (Without Watermark)
                          </span>
                          <span className="text-xs text-emerald-100 font-medium block mt-0.5">
                            Clean 1080p Ultra HD MP4 • Server 1
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 text-white shrink-0 ml-2 uppercase">
                        MP4 HD
                      </span>
                    </a>
                  )}

                  {/* Video HD Mirror (Server 2) */}
                  {video?.noWatermarkHd && (
                    <a
                      href={getProxyUrl(video.noWatermarkHd, `quktik_video_hd_${id}.mp4`, 'video')}
                      download={`quktik_video_hd_${id}.mp4`}
                      className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200/90 transition-all shadow-xs hover:shadow active:scale-[0.99] group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                          <Video className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="text-left min-w-0">
                          <span className="block font-bold text-slate-900 text-sm sm:text-base leading-tight">
                            Download Video (HD Server 2 Mirror)
                          </span>
                          <span className="text-xs text-slate-500 font-normal block mt-0.5">
                            Alternative High-Speed Mirror • 1080p MP4
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-200/80 text-slate-700 shrink-0 ml-2">
                        Server 2
                      </span>
                    </a>
                  )}

                  {/* Also Include MP3 Audio */}
                  {music?.url && (
                    <div className="pt-2 space-y-2">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">Also Available (MP3 Audio):</span>
                      <a
                        href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                        download={`quktik_audio_${id}.mp3`}
                        className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-sm hover:shadow transition-all active:scale-[0.99] group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                            <Music className="w-4.5 h-4.5 text-white" />
                          </div>
                          <div className="text-left min-w-0">
                            <div className="text-sm sm:text-base font-bold leading-tight">Download MP3 Audio</div>
                            <div className="text-xs text-rose-100 font-medium mt-0.5">320kbps Studio Master Soundtrack</div>
                          </div>
                        </div>
                        <span className="text-xs font-bold px-3 py-1 rounded-xl bg-white/20 text-white shrink-0 ml-2">
                          MP3
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* ========================================================= */}
              {/* MODE 2: MP3 DOWNLOADER (/tiktok-mp3)                      */}
              {/* #1 Primary: Audio Player + Download MP3 Audio (320kbps)   */}
              {/* #2 Secondary: Download MP4 Video                          */}
              {/* ========================================================= */}
              {mode === 'mp3' && (
                <div className="space-y-3.5 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black text-rose-600 uppercase tracking-wider">1. Primary MP3 Audio Download:</h4>
                    <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                      320kbps Studio Master
                    </span>
                  </div>

                  {/* Built-in Audio Preview Player */}
                  {music?.url && (
                    <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center shrink-0">
                          <Music className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate">{music.title || title || 'Original TikTok Sound'}</div>
                          <div className="text-[11px] text-slate-500 truncate">Artist: {music.author || author?.nickname || 'Creator'}</div>
                        </div>
                      </div>
                      <audio controls className="w-full h-9 rounded-lg" src={music.url}>
                        Your browser does not support audio playback.
                      </audio>
                    </div>
                  )}

                  {/* #1 PRIMARY BUTTON: Download MP3 Audio */}
                  {music?.url && (
                    <a
                      href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                      download={`quktik_audio_${id}.mp3`}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold transition-all shadow-md shadow-rose-600/20 active:scale-[0.99] group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Music className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left min-w-0">
                          <span className="block font-black text-base sm:text-lg leading-tight tracking-tight">
                            Download MP3 Audio (320kbps)
                          </span>
                          <span className="text-xs text-rose-100 font-medium block mt-0.5">
                            Isolated High-Bitrate Studio Master Track (.mp3)
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 text-white shrink-0 ml-2 uppercase">
                        MP3 320k
                      </span>
                    </a>
                  )}

                  {/* #2 SECONDARY: Also Include MP4 Video */}
                  {video?.noWatermark && (
                    <div className="pt-2 space-y-2">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">Also Available (MP4 Video):</span>
                      <a
                        href={getProxyUrl(video.noWatermark, `quktik_video_nowm_${id}.mp4`, 'video')}
                        download={`quktik_video_nowm_${id}.mp4`}
                        className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow transition-all active:scale-[0.99] group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                            <Video className="w-4.5 h-4.5 text-white" />
                          </div>
                          <div className="text-left min-w-0">
                            <div className="text-sm sm:text-base font-bold leading-tight">Download Video (Without Watermark)</div>
                            <div className="text-xs text-emerald-100 font-medium mt-0.5">Clean 1080p Full HD MP4</div>
                          </div>
                        </div>
                        <span className="text-xs font-bold px-3 py-1 rounded-xl bg-white/20 text-white shrink-0 ml-2">
                          MP4 HD
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* ========================================================= */}
              {/* MODE 3: RINGTONE DOWNLOADER (/tiktok-ringtone)            */}
              {/* #1 Primary: Audio Player + Download Ringtone (.M4A)       */}
              {/* #2 Secondary: MP4 Video & MP3 Audio                       */}
              {/* ========================================================= */}
              {mode === 'ringtone' && (
                <div className="space-y-3.5 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black text-amber-700 uppercase tracking-wider">1. Primary Phone Ringtone Download:</h4>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      iPhone &amp; Android Ready
                    </span>
                  </div>

                  {/* Built-in Ringtone Sound Preview Player */}
                  {music?.url && (
                    <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0">
                          <Bell className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate">Preview Ringtone: {music.title || 'TikTok Sound Hook'}</div>
                          <div className="text-[11px] text-slate-500 truncate">Ready for Call Tone, Notification, or Alarm</div>
                        </div>
                      </div>
                      <audio controls className="w-full h-9 rounded-lg" src={music.url}>
                        Your browser does not support audio playback.
                      </audio>
                    </div>
                  )}

                  {/* #1 PRIMARY BUTTON: Download Ringtone (.M4A) */}
                  {music?.url && (
                    <a
                      href={getProxyUrl(music.url, `quktik_ringtone_${id}.m4a`, 'audio')}
                      download={`quktik_ringtone_${id}.m4a`}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-bold transition-all shadow-md shadow-orange-500/20 active:scale-[0.99] group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Bell className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left min-w-0">
                          <span className="block font-black text-base sm:text-lg leading-tight tracking-tight">
                            Download Ringtone (.M4A / iPhone &amp; Android)
                          </span>
                          <span className="text-xs text-amber-100 font-medium block mt-0.5">
                            Universal Phone Call Ringtone, SMS Alert &amp; Alarm Tone
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 text-white shrink-0 ml-2 uppercase">
                        Ringtone
                      </span>
                    </a>
                  )}

                  {/* #2 SECONDARY: MP4 Video & MP3 Audio */}
                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">Also Available (MP4 Video &amp; MP3 Audio):</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {video?.noWatermark && (
                        <a
                          href={getProxyUrl(video.noWatermark, `quktik_video_nowm_${id}.mp4`, 'video')}
                          download={`quktik_video_nowm_${id}.mp4`}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow transition-all active:scale-[0.98] group cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                              <Video className="w-4.5 h-4.5 text-white" />
                            </div>
                            <div className="text-left min-w-0">
                              <div className="text-sm font-bold leading-tight">Download MP4 Video</div>
                              <div className="text-[11px] text-emerald-100 font-medium mt-0.5">No Watermark (1080p)</div>
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-white shrink-0 ml-2" />
                        </a>
                      )}

                      {music?.url && (
                        <a
                          href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                          download={`quktik_audio_${id}.mp3`}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white shadow-sm hover:shadow transition-all active:scale-[0.98] group cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                              <Music className="w-4.5 h-4.5 text-white" />
                            </div>
                            <div className="text-left min-w-0">
                              <div className="text-sm font-bold leading-tight">Download MP3 Audio</div>
                              <div className="text-[11px] text-rose-100 font-medium mt-0.5">320kbps Studio Master</div>
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-white shrink-0 ml-2" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* MODE 4: PHOTO DOWNLOADER (/tiktok-photo)                  */}
              {/* #1 Primary: Photo Slideshow Gallery / HD Photo Download   */}
              {/* #2 Secondary: MP4 Video & MP3 Audio                       */}
              {/* ========================================================= */}
              {mode === 'photo' && (
                <div className="space-y-4 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black text-indigo-600 uppercase tracking-wider">
                      1. Primary Photo / Slideshow Download:
                    </h4>
                    <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                      Uncompressed HD JPG
                    </span>
                  </div>

                  {/* If multi-image slideshow post, show Photo Gallery FIRST */}
                  {images && images.length > 0 ? (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {images.map((imgUrl, index) => (
                          <div key={index} className="relative group rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[9/16] shadow-xs">
                            <img
                              src={imgUrl}
                              alt={`Photo slide ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
                              <span className="text-white text-xs font-bold mb-2">Photo #{index + 1}</span>
                              <a
                                href={getProxyUrl(imgUrl, `quktik_photo_${id}_${index + 1}.jpg`, 'image')}
                                download={`quktik_photo_${id}_${index + 1}.jpg`}
                                className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1 shadow-md active:scale-95 transition-all cursor-pointer"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>Save Photo #{index + 1}</span>
                              </a>
                            </div>
                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-bold pointer-events-none">
                              #{index + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {/* #1 Primary Button: Download Main Photo / Cover HD */}
                  {(cover || (images && images.length > 0)) && (
                    <a
                      href={getProxyUrl(images?.[0] || cover, `quktik_photo_hd_${id}.jpg`, 'image')}
                      download={`quktik_photo_hd_${id}.jpg`}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold transition-all shadow-md shadow-indigo-600/20 active:scale-[0.99] group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <ImageIcon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left min-w-0">
                          <span className="block font-black text-base sm:text-lg leading-tight tracking-tight">
                            Download Full HD Photo / Cover (.JPG)
                          </span>
                          <span className="text-xs text-indigo-100 font-medium block mt-0.5">
                            Original Uncompressed Resolution • Zero Watermark
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 text-white shrink-0 ml-2 uppercase">
                        HD JPG
                      </span>
                    </a>
                  )}

                  {/* #2 SECONDARY: MP4 Video & MP3 Audio */}
                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">Also Available (MP4 Video &amp; MP3 Audio):</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {video?.noWatermark && (
                        <a
                          href={getProxyUrl(video.noWatermark, `quktik_video_nowm_${id}.mp4`, 'video')}
                          download={`quktik_video_nowm_${id}.mp4`}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow transition-all active:scale-[0.98] group cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                              <Video className="w-4.5 h-4.5 text-white" />
                            </div>
                            <div className="text-left min-w-0">
                              <div className="text-sm font-bold leading-tight">Download MP4 Video</div>
                              <div className="text-[11px] text-emerald-100 font-medium mt-0.5">No Watermark (1080p)</div>
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-white shrink-0 ml-2" />
                        </a>
                      )}

                      {music?.url && (
                        <a
                          href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                          download={`quktik_audio_${id}.mp3`}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white shadow-sm hover:shadow transition-all active:scale-[0.98] group cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                              <Music className="w-4.5 h-4.5 text-white" />
                            </div>
                            <div className="text-left min-w-0">
                              <div className="text-sm font-bold leading-tight">Download MP3 Audio</div>
                              <div className="text-[11px] text-rose-100 font-medium mt-0.5">320kbps Studio Master</div>
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-white shrink-0 ml-2" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* MODE 5: STORY SAVER (/tiktok-story)                       */}
              {/* #1 Primary: Save Story Video (Before 24h Expiry)          */}
              {/* #2 Secondary: MP4 HD Mirror & MP3 Audio                   */}
              {/* ========================================================= */}
              {mode === 'story' && (
                <div className="space-y-3.5 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black text-purple-700 uppercase tracking-wider">1. Primary 24h Story Download:</h4>
                    <span className="text-[11px] font-bold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                      Direct HD Story Save
                    </span>
                  </div>

                  {/* #1 PRIMARY BUTTON: Download Story Without Watermark */}
                  {video?.noWatermark && (
                    <a
                      href={getProxyUrl(video.noWatermark, `quktik_story_${id}.mp4`, 'video')}
                      download={`quktik_story_${id}.mp4`}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold transition-all shadow-md shadow-purple-600/20 active:scale-[0.99] group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left min-w-0">
                          <span className="block font-black text-base sm:text-lg leading-tight tracking-tight">
                            Download Story Video (No Watermark)
                          </span>
                          <span className="text-xs text-purple-100 font-medium block mt-0.5">
                            Saved Permanently in 1080p MP4 Before 24h Expiration
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 text-white shrink-0 ml-2 uppercase">
                        Story MP4
                      </span>
                    </a>
                  )}

                  {/* #2 SECONDARY: MP4 Mirror & MP3 Audio */}
                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">Also Available (MP4 Mirror &amp; MP3 Audio):</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {video?.noWatermarkHd && (
                        <a
                          href={getProxyUrl(video.noWatermarkHd, `quktik_story_hd_${id}.mp4`, 'video')}
                          download={`quktik_story_hd_${id}.mp4`}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow transition-all active:scale-[0.98] group cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                              <Video className="w-4.5 h-4.5 text-white" />
                            </div>
                            <div className="text-left min-w-0">
                              <div className="text-sm font-bold leading-tight">Download MP4 (Mirror)</div>
                              <div className="text-[11px] text-emerald-100 font-medium mt-0.5">Server 2 • 1080p HD</div>
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-white shrink-0 ml-2" />
                        </a>
                      )}

                      {music?.url && (
                        <a
                          href={getProxyUrl(music.url, `quktik_story_audio_${id}.mp3`, 'audio')}
                          download={`quktik_story_audio_${id}.mp3`}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white shadow-sm hover:shadow transition-all active:scale-[0.98] group cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                              <Music className="w-4.5 h-4.5 text-white" />
                            </div>
                            <div className="text-left min-w-0">
                              <div className="text-sm font-bold leading-tight">Download Story MP3</div>
                              <div className="text-[11px] text-rose-100 font-medium mt-0.5">320kbps Studio Audio</div>
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-white shrink-0 ml-2" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* MODE 6: TIKTOK AVATAR DOWNLOADER (/tiktok-avatar)         */}
              {/* #1 Primary: Download Full HD Profile Avatar (.JPG)        */}
              {/* #2 Secondary: MP4 Video & MP3 Audio                       */}
              {/* ========================================================= */}
              {mode === 'avatar' && (
                <div className="space-y-3.5 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black text-teal-700 uppercase tracking-wider">1. Primary Profile Avatar Download:</h4>
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                      Uncropped 1080x1080 HD
                    </span>
                  </div>

                  {/* #1 PRIMARY BUTTON: Download Full HD Avatar */}
                  {author?.avatar && (
                    <a
                      href={getProxyUrl(author.avatar, `quktik_avatar_${author.username || id}.jpg`, 'image')}
                      download={`quktik_avatar_${author.username || id}.jpg`}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold transition-all shadow-md shadow-teal-600/20 active:scale-[0.99] group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <UserCheck className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left min-w-0">
                          <span className="block font-black text-base sm:text-lg leading-tight tracking-tight">
                            Download Full HD Profile Avatar (.JPG)
                          </span>
                          <span className="text-xs text-teal-100 font-medium block mt-0.5">
                            Original Square Master Photo • No Circular Crop
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 text-white shrink-0 ml-2 uppercase">
                        HD Avatar
                      </span>
                    </a>
                  )}

                  {/* #2 SECONDARY: MP4 Video & MP3 Audio */}
                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">Also Available (Creator's MP4 Video &amp; MP3 Audio):</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {video?.noWatermark && (
                        <a
                          href={getProxyUrl(video.noWatermark, `quktik_video_nowm_${id}.mp4`, 'video')}
                          download={`quktik_video_nowm_${id}.mp4`}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow transition-all active:scale-[0.98] group cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                              <Video className="w-4.5 h-4.5 text-white" />
                            </div>
                            <div className="text-left min-w-0">
                              <div className="text-sm font-bold leading-tight">Download MP4 Video</div>
                              <div className="text-[11px] text-emerald-100 font-medium mt-0.5">No Watermark (1080p)</div>
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-white shrink-0 ml-2" />
                        </a>
                      )}

                      {music?.url && (
                        <a
                          href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                          download={`quktik_audio_${id}.mp3`}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white shadow-sm hover:shadow transition-all active:scale-[0.98] group cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                              <Music className="w-4.5 h-4.5 text-white" />
                            </div>
                            <div className="text-left min-w-0">
                              <div className="text-sm font-bold leading-tight">Download MP3 Audio</div>
                              <div className="text-[11px] text-rose-100 font-medium mt-0.5">320kbps Studio Master</div>
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-white shrink-0 ml-2" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* MODE 7: HOMEPAGE ONLY ('all') - ALL-IN-ONE MASTER SUITE   */}
              {/* (Shows Video Server 1 & 2, MP3, Ringtone, Photos, Cover)  */}
              {/* ========================================================= */}
              {!['video', 'mp3', 'ringtone', 'photo', 'story', 'avatar'].includes(mode) && (
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">All-in-One Download Options:</h4>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Ready in 1080p Ultra HD
                    </span>
                  </div>

                  {/* 1. PRIMARY: Download Video Without Watermark (Server 1) */}
                  {video?.noWatermark && (
                    <a
                      href={getProxyUrl(video.noWatermark, `quktik_video_nowm_${id}.mp4`, 'video')}
                      download={`quktik_video_nowm_${id}.mp4`}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold transition-all shadow-md shadow-emerald-600/20 active:scale-[0.99] group border border-emerald-500/30 cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Download className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left min-w-0">
                          <span className="block font-black text-base sm:text-lg leading-tight tracking-tight">
                            Download Video (Without Watermark)
                          </span>
                          <span className="text-xs text-emerald-100 font-medium block mt-0.5">
                            Clean 1080p Ultra HD MP4 • High-Speed Server 1
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 text-white tracking-wide shrink-0 ml-2 uppercase">
                        Server 1
                      </span>
                    </a>
                  )}

                  {/* 2. SECONDARY: Download Video HD Mirror (Server 2) */}
                  {video?.noWatermarkHd && (
                    <a
                      href={getProxyUrl(video.noWatermarkHd, `quktik_video_hd_${id}.mp4`, 'video')}
                      download={`quktik_video_hd_${id}.mp4`}
                      className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200/90 transition-all shadow-xs hover:shadow active:scale-[0.99] group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Video className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="text-left min-w-0">
                          <span className="block font-bold text-slate-900 text-sm sm:text-base leading-tight">
                            Download Video (HD Mirror)
                          </span>
                          <span className="text-xs text-slate-500 font-normal block mt-0.5">
                            Alternative High-Speed Mirror • 1080p MP4
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-200/80 text-slate-700 shrink-0 ml-2">
                        HD Mirror
                      </span>
                    </a>
                  )}

                  {/* 3 & 4. AUDIO & RINGTONE GRID */}
                  {music?.url && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                        download={`quktik_audio_${id}.mp3`}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-sm hover:shadow transition-all active:scale-[0.98] group cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Music className="w-4.5 h-4.5 text-white" />
                          </div>
                          <div className="text-left min-w-0">
                            <div className="text-sm font-bold leading-tight">Download MP3 Audio</div>
                            <div className="text-[11px] text-rose-100 font-medium mt-0.5">320kbps Studio Master</div>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0 ml-2 group-hover:bg-white/30 transition-colors">
                          <Download className="w-4 h-4 text-white" />
                        </div>
                      </a>

                      <a
                        href={getProxyUrl(music.url, `quktik_ringtone_${id}.m4a`, 'audio')}
                        download={`quktik_ringtone_${id}.m4a`}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow transition-all active:scale-[0.98] group border border-slate-800 cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Bell className="w-4.5 h-4.5 text-white" />
                          </div>
                          <div className="text-left min-w-0">
                            <div className="text-sm font-bold leading-tight">Download Ringtone</div>
                            <div className="text-[11px] text-slate-300 font-medium mt-0.5">.M4A (iPhone &amp; Android)</div>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0 ml-2 group-hover:bg-white/20 transition-colors">
                          <Download className="w-4 h-4 text-white" />
                        </div>
                      </a>
                    </div>
                  )}

                  {/* 5. MULTI-IMAGE SLIDESHOW GALLERY (If post contains photos) */}
                  {isImagePost && images && images.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-slate-200/90 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <ImageIcon className="w-4 h-4 text-indigo-600" />
                          <span>Photo Slideshow Gallery ({images.length} High-Res Images)</span>
                        </h4>
                        <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                          Full HD Quality
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {images.map((imgUrl, index) => (
                          <div key={index} className="relative group rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[9/16] shadow-xs">
                            <img
                              src={imgUrl}
                              alt={`Photo slide ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
                              <span className="text-white text-xs font-bold mb-2">Photo #{index + 1}</span>
                              <a
                                href={getProxyUrl(imgUrl, `quktik_photo_${id}_${index + 1}.jpg`, 'image')}
                                download={`quktik_photo_${id}_${index + 1}.jpg`}
                                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 shadow-md active:scale-95 transition-all cursor-pointer"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>Save HD</span>
                              </a>
                            </div>
                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-bold pointer-events-none">
                              #{index + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* All-in-One Format Conversion Suite Matrix (Homepage only) */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 mt-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span className="flex items-center gap-1.5 text-indigo-600">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>All-in-One Media Suite:</span>
                      </span>
                      <span className="text-slate-400">Pristine Master Quality</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                        <span className="font-bold text-slate-900 block">1080p MP4</span>
                        <span className="text-[10px] text-emerald-700 font-semibold">Zero Watermark</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                        <span className="font-bold text-slate-900 block">320kbps MP3</span>
                        <span className="text-[10px] text-rose-700 font-semibold">Studio Stereo</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                        <span className="font-bold text-slate-900 block">Custom Tone</span>
                        <span className="text-[10px] text-indigo-600 font-semibold">M4A / Alarm</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                        <span className="font-bold text-slate-900 block">Master Still</span>
                        <span className="text-[10px] text-purple-600 font-semibold">JPG / WebP</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Source Fallback Link */}
              {video?.noWatermark && (
                <div className="pt-1 text-center">
                  <a
                    href={video.noWatermark}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-rose-700 transition-colors"
                  >
                    <span>Having trouble downloading? Click here to view source stream</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

            </div>

          </div>
        )}

      </div>

      {/* QR Code Modal for Mobile Quick Download */}
      {showQr && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-slate-200 text-center relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setShowQr(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center mx-auto mb-3">
              <QrCode className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Scan to Download on Phone</h3>
            <p className="text-xs text-slate-500 mb-4">
              Open your iPhone or Android camera app and point it at the QR code below to download this video directly to your phone.
            </p>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 inline-block mb-3">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(directDownloadUrl || '')}`}
                alt="Download QR Code"
                className="w-44 h-44 mx-auto rounded-lg"
              />
            </div>
            <p className="text-[11px] text-slate-400">Fast, instant direct file save</p>
          </div>
        </div>
      )}

    </div>
  );
}
