'use client';

import React, { useState } from 'react';
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
  Clock
} from 'lucide-react';

export default function ResultCard({ result, onReset, mode = "video" }) {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!result) return null;

  const {
    id,
    title,
    author,
    stats,
    cover,
    video,
    music,
    images,
    type
  } = result;

  const isImagePost = type === 'image' || (images && images.length > 0);

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

  // Mode-specific badge
  const getModeBadge = () => {
    switch (mode) {
      case 'mp3':
        return { text: 'MP3 Audio Extracted (320kbps)', icon: Disc, color: 'text-rose-700 bg-rose-50 border-rose-200' };
      case 'ringtone':
        return { text: 'Custom Ringtone Ready', icon: Bell, color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
      case 'avatar':
        return { text: 'Profile Avatar HD Extracted', icon: UserCheck, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' };
      case 'douyin':
        return { text: 'Douyin (抖音) Watermark Removed', icon: Globe2, color: 'text-rose-700 bg-rose-50 border-rose-200' };
      case 'story':
        return { text: 'Story Video (Saved Before 24h Expiry)', icon: Clock, color: 'text-amber-700 bg-amber-50 border-amber-200' };
      case 'photo':
        return { text: 'Photo Slideshow Gallery', icon: ImageIcon, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' };
      default:
        return { text: 'Watermark-Free 1080p Stream Ready', icon: CheckCircle2, color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    }
  };

  const badgeInfo = getModeBadge();
  const BadgeIcon = badgeInfo.icon;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 animate-in fade-in zoom-in-95 duration-200">
      <div className="rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/60 p-6 sm:p-8 relative">
        
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 mb-6">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs sm:text-sm font-bold border ${badgeInfo.color}`}>
            <BadgeIcon className="w-4 h-4 shrink-0" />
            <span>{badgeInfo.text}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-all"
              title="Copy direct download link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
            </button>

            <button
              onClick={() => setShowQr(true)}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-all"
              title="Download to phone via QR code"
            >
              <QrCode className="w-3.5 h-3.5 text-rose-500" />
              <span>Scan QR</span>
            </button>

            <button
              onClick={onReset}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 transition-all active:scale-95 shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
              <span>Download Another Video</span>
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SPECIALIZED MODE 1: AVATAR / PROFILE PICTURE HD MODE         */}
        {/* ------------------------------------------------------------- */}
        {mode === 'avatar' && (
          <div className="text-center py-4 space-y-6">
            <div className="relative inline-block group">
              {author?.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.nickname}
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-rose-100 shadow-xl object-cover mx-auto group-hover:scale-105 transition-transform"
                />
              ) : (
                <div className="w-40 h-40 rounded-full bg-slate-200 flex items-center justify-center font-bold text-4xl text-slate-700 mx-auto">
                  {author?.username?.charAt(0) || 'U'}
                </div>
              )}
              <div className="absolute bottom-2 right-2 p-2 bg-emerald-500 text-white rounded-full shadow-md">
                <Check className="w-4 h-4" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900">{author?.nickname || 'TikTok User'}</h3>
              <p className="text-sm font-semibold text-rose-700">@{author?.username || 'user'}</p>
              {title && <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto line-clamp-2">{title}</p>}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {author?.avatar && (
                <a
                  href={getProxyUrl(author.avatar, `avatar_${author.username || id}.jpg`, 'image')}
                  download={`avatar_${author.username || id}.jpg`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-bold text-base shadow-lg shadow-rose-500/25 hover:scale-105 active:scale-95 transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Full HD Avatar (.jpg)</span>
                </a>
              )}

              {video?.noWatermark && (
                <a
                  href={getProxyUrl(video.noWatermark, `quktik_video_${id}.mp4`, 'video')}
                  download={`quktik_video_${id}.mp4`}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 transition-all"
                >
                  <Video className="w-4 h-4 text-slate-600" />
                  <span>Download Video As Well</span>
                </a>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SPECIALIZED MODE 2: MP3 AUDIO CONVERTER & RINGTONE MODE       */}
        {/* ------------------------------------------------------------- */}
        {(mode === 'mp3' || mode === 'ringtone') && (
          <div className="space-y-8 py-2">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-50 via-slate-50 to-indigo-50 border border-rose-100 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-900 shadow-lg shrink-0 relative group">
                {cover ? (
                  <img src={cover} alt="Track cover" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <Disc className="w-12 h-12" />
                  </div>
                )}
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <Music className="w-8 h-8 text-rose-300 animate-pulse" />
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left min-w-0">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-500 text-white uppercase tracking-wider">
                  320kbps Studio Audio
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 truncate">
                  {music?.title || 'TikTok Original Soundtrack'}
                </h3>
                <p className="text-sm font-semibold text-slate-600 truncate mt-0.5">
                  Artist / Creator: {music?.author || author?.nickname || 'TikTok Audio'}
                </p>

                {/* Built-in HTML5 Audio Player */}
                {music?.url && (
                  <div className="mt-4">
                    <audio controls className="w-full h-10 rounded-xl" src={music.url}>
                      Your browser does not support audio playback.
                    </audio>
                  </div>
                )}
              </div>
            </div>

            {/* Audio Download Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {music?.url && (
                <a
                  href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                  download={`quktik_audio_${id}.mp3`}
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-emerald-500/25 active:scale-[0.99] transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Download MP3 Audio (320kbps)</span>
                </a>
              )}

              {music?.url && (
                <a
                  href={getProxyUrl(music.url, `quktik_ringtone_${id}.m4a`, 'audio')}
                  download={`quktik_ringtone_${id}.m4a`}
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-base shadow-lg shadow-rose-500/25 active:scale-[0.99] transition-all"
                >
                  <Bell className="w-5 h-5" />
                  <span>Download Ringtone (.M4A / iPhone)</span>
                </a>
              )}
            </div>

            {/* Video Fallback Option */}
            {video?.noWatermark && (
              <div className="pt-2 text-center border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-xs">
                <span className="text-slate-500">Need the full video as well?</span>
                <a
                  href={getProxyUrl(video.noWatermark, `quktik_video_${id}.mp4`, 'video')}
                  download={`quktik_video_${id}.mp4`}
                  className="font-bold text-rose-700 hover:underline flex items-center gap-1"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Download MP4 Without Watermark</span>
                </a>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* STANDARD MODE / PHOTO / DOUYIN / STORY / VIDEO LAYOUT         */}
        {/* ------------------------------------------------------------- */}
        {mode !== 'avatar' && mode !== 'mp3' && mode !== 'ringtone' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Media Thumbnail & Player */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative aspect-[9/16] max-h-[390px] w-full mx-auto rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md group">
                {isPlaying && video?.noWatermark ? (
                  <video
                    src={video.noWatermark}
                    controls
                    autoPlay
                    className="w-full h-full object-contain bg-black"
                  />
                ) : cover ? (
                  <>
                    <img
                      src={cover}
                      alt={title || 'TikTok Preview'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    
                    {video?.noWatermark && (
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center m-auto w-14 h-14 rounded-full bg-white/90 text-rose-700 shadow-lg hover:scale-110 active:scale-95 transition-all group-hover:bg-white"
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
                
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 border border-white/80 text-[11px] font-bold text-rose-700 shadow-sm flex items-center gap-1.5 pointer-events-none">
                  <Sparkles className="w-3 h-3 text-rose-500" />
                  <span>No Watermark</span>
                </div>
              </div>

              {/* Author Profile Bar */}
              <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                {author?.avatar ? (
                  <img
                    src={author.avatar}
                    alt={author.nickname}
                    className="w-10 h-10 rounded-full border border-slate-200 object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700">
                    {author?.username?.charAt(0) || 'U'}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="text-slate-900 font-bold text-sm truncate">{author?.nickname || 'TikTok Creator'}</h4>
                  <p className="text-slate-500 text-xs truncate">@{author?.username || 'user'}</p>
                </div>
              </div>
            </div>

            {/* Details & Download Actions */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h3 className="text-slate-900 text-base sm:text-lg font-semibold leading-relaxed line-clamp-3">
                  {title || 'TikTok video description'}
                </h3>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-4 gap-2 py-3 px-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div>
                  <p className="text-xs text-slate-500 flex items-center justify-center gap-1 mb-1">
                    <Heart className="w-3 h-3 text-rose-500" /> Likes
                  </p>
                  <p className="text-sm font-bold text-slate-900">{formatNumber(stats?.likes)}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 flex items-center justify-center gap-1 mb-1">
                    <MessageCircle className="w-3 h-3 text-indigo-500" /> Comments
                  </p>
                  <p className="text-sm font-bold text-slate-900">{formatNumber(stats?.comments)}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 flex items-center justify-center gap-1 mb-1">
                    <Share2 className="w-3 h-3 text-amber-500" /> Shares
                  </p>
                  <p className="text-sm font-bold text-slate-900">{formatNumber(stats?.shares)}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 flex items-center justify-center gap-1 mb-1">
                    <Eye className="w-3 h-3 text-emerald-500" /> Plays
                  </p>
                  <p className="text-sm font-bold text-slate-900">{formatNumber(stats?.views)}</p>
                </div>
              </div>

              {/* Download Buttons Section */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">Choose Download Option:</h4>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Ready in 1080p</span>
                </div>

                {video?.noWatermark && (
                  <a
                    href={getProxyUrl(video.noWatermark, `quktik_video_nowm_${id}.mp4`, 'video')}
                    download={`quktik_video_nowm_${id}.mp4`}
                    className="w-full flex items-center justify-between px-6 py-4.5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-base shadow-xl shadow-emerald-500/25 active:scale-[0.98] transition-all group"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="w-9 h-9 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Download className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-left font-black tracking-tight">Download Video (Without Watermark)</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/25 font-bold uppercase tracking-wider shrink-0">Server 1</span>
                  </a>
                )}

                {video?.noWatermarkHd && (
                  <a
                    href={getProxyUrl(video.noWatermarkHd, `quktik_video_hd_${id}.mp4`, 'video')}
                    download={`quktik_video_hd_${id}.mp4`}
                    className="w-full flex items-center justify-between px-6 py-3.5 rounded-2xl sm:rounded-3xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 active:scale-[0.98] transition-all group"
                  >
                    <div className="flex items-center space-x-3.5">
                      <Video className="w-5 h-5 text-indigo-600 shrink-0" />
                      <span className="text-left font-bold">Download Video (HD Server 2)</span>
                    </div>
                    <span className="text-xs text-slate-500 font-semibold">HD Mirror</span>
                  </a>
                )}

                {music?.url && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                      download={`quktik_audio_${id}.mp3`}
                      className="flex items-center justify-between px-5 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-sm shadow-md shadow-rose-500/20 active:scale-[0.98] transition-all group"
                    >
                      <div className="flex items-center space-x-2.5 truncate">
                        <Music className="w-4 h-4 text-white shrink-0" />
                        <span className="truncate">Download MP3 Audio</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/25 font-bold uppercase tracking-wider shrink-0">320kbps</span>
                    </a>

                    <a
                      href={getProxyUrl(music.url, `quktik_ringtone_${id}.m4a`, 'audio')}
                      download={`quktik_ringtone_${id}.m4a`}
                      className="flex items-center justify-between px-5 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-sm shadow-md shadow-indigo-500/20 active:scale-[0.98] transition-all group"
                    >
                      <div className="flex items-center space-x-2.5 truncate">
                        <Bell className="w-4 h-4 text-white shrink-0" />
                        <span className="truncate">Download Ringtone</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/25 font-bold uppercase tracking-wider shrink-0">iOS / Android</span>
                    </a>
                  </div>
                )}

                {/* All-in-One Format Conversion Matrix */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
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

                {video?.noWatermark && (
                  <div className="pt-2 text-center">
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

              {/* Photo Slideshow Gallery */}
              {isImagePost && images && images.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-rose-500" />
                      <span>Photo Slideshow ({images.length} High-Res Photos)</span>
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
                            href={getProxyUrl(imgUrl, `quktik_photo_${id}_${index + 1}.jpg`, 'image')}
                            download={`quktik_photo_${id}_${index + 1}.jpg`}
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
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
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
