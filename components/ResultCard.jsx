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
  Bookmark,
  Hash,
  Users,
  Flame,
  ArrowRight
} from 'lucide-react';

export default function ResultCard({ result, onReset, mode = "video" }) {
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
    provider
  } = result;

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

  // Mode-specific badge
  const getModeBadge = () => {
    if (isDouyinMode) {
      return { text: 'Douyin (抖音) All-in-One Suite Ready', icon: Globe2, color: 'text-rose-700 bg-rose-50 border-rose-200' };
    }
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
        {/* SPECIALIZED MODE: AVATAR / PROFILE PICTURE HD MODE           */}
        {/* ------------------------------------------------------------- */}
        {mode === 'avatar' && (
          <div className="space-y-8 py-2">
            <div className="text-center py-4 space-y-6">
              <div className="relative inline-block group">
                {author?.avatar ? (
                  <img
                    src={author.avatar}
                    alt={author.nickname}
                    className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-teal-100 shadow-xl object-cover mx-auto group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="w-40 h-40 rounded-full bg-slate-200 flex items-center justify-center font-bold text-4xl text-slate-700 mx-auto">
                    {author?.username?.charAt(0) || 'U'}
                  </div>
                )}
                <div className="absolute bottom-2 right-2 p-2 bg-teal-500 text-white rounded-full shadow-md">
                  <Check className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900">{author?.nickname || 'TikTok User'}</h3>
                <p className="text-sm font-semibold text-teal-700">@{author?.username || 'user'}</p>
                {title && <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto line-clamp-2">{title}</p>}
              </div>

              {/* PRIMARY ACTION: Download Full HD Avatar */}
              <div className="max-w-md mx-auto pt-2">
                {author?.avatar && (
                  <a
                    href={getProxyUrl(author.avatar, `avatar_${author.username || id}.jpg`, 'image')}
                    download={`avatar_${author.username || id}.jpg`}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-base shadow-sm hover:shadow transition-all active:scale-[0.98]"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Full HD Avatar (.jpg)</span>
                  </a>
                )}
              </div>
            </div>

            {/* SECONDARY ACTIONS: Also Available (Video & MP3) */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider text-center">Also Available (Creator's Video &amp; Sound):</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {video?.noWatermark && (
                  <a
                    href={getProxyUrl(video.noWatermark, `quktik_video_${id}.mp4`, 'video')}
                    download={`quktik_video_${id}.mp4`}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs hover:shadow transition-all active:scale-[0.98] group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                        <Video className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div className="text-left min-w-0">
                        <div className="text-sm font-bold leading-tight">Download Video</div>
                        <div className="text-[11px] text-emerald-100 font-medium mt-0.5">Without Watermark (1080p MP4)</div>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-white/80 shrink-0 ml-2" />
                  </a>
                )}

                {music?.url && (
                  <a
                    href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                    download={`quktik_audio_${id}.mp3`}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white shadow-xs hover:shadow transition-all active:scale-[0.98] group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                        <Music className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div className="text-left min-w-0">
                        <div className="text-sm font-bold leading-tight">Download Audio MP3</div>
                        <div className="text-[11px] text-rose-100 font-medium mt-0.5">320kbps Studio</div>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-white/80 shrink-0 ml-2" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SPECIALIZED MODE: RINGTONE CONVERTER                          */}
        {/* ------------------------------------------------------------- */}
        {mode === 'ringtone' && (
          <div className="space-y-6">
            {/* Ringtone Hero Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 border border-amber-200/80 shadow-xs">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-900 shadow-md shrink-0 relative group">
                  {cover ? (
                    <img src={cover} alt="Track cover" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <Disc className="w-12 h-12" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                    <Bell className="w-8 h-8 text-amber-300 animate-pulse" />
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left min-w-0">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-500 text-white uppercase tracking-wider shadow-xs">
                    Custom Phone Ringtone Ready
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 truncate">
                    {music?.title || title || 'TikTok Sound Hook'}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 truncate mt-0.5">
                    Creator: {music?.author || author?.nickname || 'TikTok Audio'}
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
            </div>

            {/* PRIMARY ACTION: Download Ringtone First! */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">Primary Ringtone Download:</h4>
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  Universal Phone Format
                </span>
              </div>

              {music?.url && (
                <a
                  href={getProxyUrl(music.url, `quktik_ringtone_${id}.m4a`, 'audio')}
                  download={`quktik_ringtone_${id}.m4a`}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-pink-600 hover:from-amber-600 hover:to-pink-700 text-white font-bold transition-all shadow-md shadow-rose-500/20 active:scale-[0.99] group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left min-w-0">
                      <span className="block font-black text-base sm:text-lg leading-tight tracking-tight">
                        Download Ringtone (.M4A / iPhone & Android)
                      </span>
                      <span className="text-xs text-amber-100 font-medium block mt-0.5">
                        Ready to set as phone call tone, text alert, or alarm
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 text-white tracking-wide shrink-0 ml-2">
                    Ringtone
                  </span>
                </a>
              )}
            </div>

            {/* Quick Phone Setup Guide */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <span className="text-base shrink-0">🍏</span>
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">iPhone Setup (GarageBand):</span>
                  <span>Download file → Open GarageBand → Share as Ringtone → Set as Default Tone.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-base shrink-0">🤖</span>
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Android Setup (Settings):</span>
                  <span>Download file → Open Settings &gt; Sound &amp; Vibration &gt; Phone Ringtone → Select file.</span>
                </div>
              </div>
            </div>

            {/* SECONDARY ACTIONS: MP3 Audio & Full Video Options */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">Also Available (MP3 Audio &amp; Full Video):</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {music?.url && (
                  <a
                    href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                    download={`quktik_audio_${id}.mp3`}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white shadow-xs hover:shadow transition-all active:scale-[0.98] group"
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
                    <Download className="w-4 h-4 text-white/80 shrink-0 ml-2" />
                  </a>
                )}

                {video?.noWatermark && (
                  <a
                    href={getProxyUrl(video.noWatermark, `quktik_video_${id}.mp4`, 'video')}
                    download={`quktik_video_${id}.mp4`}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-xs hover:shadow transition-all active:scale-[0.98] group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Video className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div className="text-left min-w-0">
                        <div className="text-sm font-bold leading-tight">Download Video</div>
                        <div className="text-[11px] text-slate-300 font-medium mt-0.5">Without Watermark (1080p MP4)</div>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-white/80 shrink-0 ml-2" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SPECIALIZED MODE: MP3 AUDIO CONVERTER                         */}
        {/* ------------------------------------------------------------- */}
        {mode === 'mp3' && (
          <div className="space-y-6">
            {/* MP3 Studio Hero Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-50 via-slate-50 to-indigo-50 border border-rose-100 shadow-xs">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-900 shadow-md shrink-0 relative group">
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
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-rose-500 text-white uppercase tracking-wider shadow-xs">
                    320kbps Studio Master Audio
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 truncate">
                    {music?.title || title || 'TikTok Original Soundtrack'}
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
            </div>

            {/* PRIMARY ACTION: Download MP3 Audio First! */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">Primary Audio Download:</h4>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Studio 320kbps MP3
                </span>
              </div>

              {music?.url && (
                <a
                  href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                  download={`quktik_audio_${id}.mp3`}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold transition-all shadow-md shadow-emerald-500/20 active:scale-[0.99] group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Music className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left min-w-0">
                      <span className="block font-black text-base sm:text-lg leading-tight tracking-tight">
                        Download MP3 Audio (320kbps Studio Master)
                      </span>
                      <span className="text-xs text-emerald-100 font-medium block mt-0.5">
                        Isolated sound track • Crystal clear stereo sound
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 text-white tracking-wide shrink-0 ml-2">
                    MP3 (320kbps)
                  </span>
                </a>
              )}
            </div>

            {/* SECONDARY ACTIONS: Ringtone (.M4A) & Full Video */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">Also Available (Ringtone &amp; Video):</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {music?.url && (
                  <a
                    href={getProxyUrl(music.url, `quktik_ringtone_${id}.m4a`, 'audio')}
                    download={`quktik_ringtone_${id}.m4a`}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white shadow-xs hover:shadow transition-all active:scale-[0.98] group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                        <Bell className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div className="text-left min-w-0">
                        <div className="text-sm font-bold leading-tight">Download as Ringtone</div>
                        <div className="text-[11px] text-rose-100 font-medium mt-0.5">M4A (iPhone &amp; Android)</div>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-white/80 shrink-0 ml-2" />
                  </a>
                )}

                {video?.noWatermark && (
                  <a
                    href={getProxyUrl(video.noWatermark, `quktik_video_${id}.mp4`, 'video')}
                    download={`quktik_video_${id}.mp4`}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-xs hover:shadow transition-all active:scale-[0.98] group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Video className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div className="text-left min-w-0">
                        <div className="text-sm font-bold leading-tight">Download Full Video</div>
                        <div className="text-[11px] text-slate-300 font-medium mt-0.5">Without Watermark (1080p MP4)</div>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-white/80 shrink-0 ml-2" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SPECIALIZED MODE: PHOTO SLIDESHOW GALLERY                     */}
        {/* ------------------------------------------------------------- */}
        {mode === 'photo' && (
          <div className="space-y-6">
            {/* Photo Slideshow Gallery Hero Card FIRST */}
            <div className="p-4 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-3">
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500 text-white uppercase tracking-wider">
                    Multi-Image Slideshow Extractor
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-indigo-600" />
                    <span>Extracted Photos ({images && images.length > 0 ? images.length : 1} High-Res Images)</span>
                  </h3>
                </div>
                <span className="text-xs text-slate-500">Uncompressed Full HD Quality</span>
              </div>

              {/* Grid of Extracted Photos */}
              {images && images.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                  {images.map((imgUrl, index) => (
                    <div key={index} className="relative group rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 aspect-[9/16] shadow-xs">
                      <img
                        src={imgUrl}
                        alt={`Photo slide ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center">
                        <span className="text-white text-xs font-bold mb-2">Photo #{index + 1}</span>
                        <a
                          href={getProxyUrl(imgUrl, `quktik_photo_${id}_${index + 1}.jpg`, 'image')}
                          download={`quktik_photo_${id}_${index + 1}.jpg`}
                          className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download HD</span>
                        </a>
                      </div>
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-bold pointer-events-none">
                        #{index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              ) : cover ? (
                <div className="text-center py-4 space-y-4">
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    This TikTok post is a standard video rather than a multi-image carousel. You can download the Full HD cover still or the video below.
                  </p>
                  <div className="max-w-xs mx-auto aspect-[9/16] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md">
                    <img src={cover} alt="Cover preview" className="w-full h-full object-cover" />
                  </div>
                  <a
                    href={getProxyUrl(cover, `quktik_cover_${id}.jpg`, 'image')}
                    download={`quktik_cover_${id}.jpg`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Full HD Cover (.jpg)</span>
                  </a>
                </div>
              ) : null}
            </div>

            {/* SECONDARY ACTIONS: Video & Soundtrack MP3 */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">Also Available (Video &amp; Music):</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {video?.noWatermark && (
                  <a
                    href={getProxyUrl(video.noWatermark, `quktik_video_${id}.mp4`, 'video')}
                    download={`quktik_video_${id}.mp4`}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs hover:shadow transition-all active:scale-[0.98] group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                        <Video className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div className="text-left min-w-0">
                        <div className="text-sm font-bold leading-tight">Download Slideshow Video</div>
                        <div className="text-[11px] text-emerald-100 font-medium mt-0.5">MP4 Video Without Watermark</div>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-white/80 shrink-0 ml-2" />
                  </a>
                )}

                {music?.url && (
                  <a
                    href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                    download={`quktik_audio_${id}.mp3`}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white shadow-xs hover:shadow transition-all active:scale-[0.98] group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                        <Music className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div className="text-left min-w-0">
                        <div className="text-sm font-bold leading-tight">Download Background Music</div>
                        <div className="text-[11px] text-rose-100 font-medium mt-0.5">320kbps Studio MP3</div>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-white/80 shrink-0 ml-2" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SPECIALIZED MODE: STORY SAVER (24H EPHEMERAL)                 */}
        {/* ------------------------------------------------------------- */}
        {mode === 'story' && (
          <div className="space-y-6">
            {/* Story Alert Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-rose-50 to-amber-50 border border-purple-200 flex items-center gap-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Disappearing 24-Hour Story Video
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Saved directly to permanent HD storage before 24-hour expiration. 100% anonymous download.
                </p>
              </div>
            </div>

            {/* Video & Download Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5 space-y-3">
                <div className="relative aspect-[9/16] max-h-[390px] w-full mx-auto rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md group">
                  {isPlaying && video?.noWatermark ? (
                    <video src={video.noWatermark} controls autoPlay className="w-full h-full object-contain bg-black" />
                  ) : cover ? (
                    <>
                      <img src={cover} alt="Story preview" className="w-full h-full object-cover" />
                      {video?.noWatermark && (
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="absolute inset-0 flex items-center justify-center m-auto w-14 h-14 rounded-full bg-white/90 text-purple-700 shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
                        >
                          <Play className="w-6 h-6 fill-purple-600 ml-0.5" />
                        </button>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <Video className="w-16 h-16" />
                    </div>
                  )}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-purple-600 text-white text-[11px] font-bold shadow-sm flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>Story Video (24h)</span>
                  </div>
                </div>

                {/* Author Bar */}
                <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  {author?.avatar && <img src={author.avatar} alt={author.nickname} className="w-10 h-10 rounded-full object-cover" />}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-900 font-bold text-sm truncate">{author?.nickname || 'TikTok User'}</h4>
                    <p className="text-slate-500 text-xs truncate">@{author?.username || 'user'}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-5">
                <div>
                  <h3 className="text-slate-900 text-base sm:text-lg font-semibold leading-relaxed">
                    {title || 'TikTok Story Video'}
                  </h3>
                </div>

                {/* PRIMARY ACTION: Download Story Video First */}
                <div className="space-y-3">
                  <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">Save Story to Your Device:</h4>
                  {video?.noWatermark && (
                    <a
                      href={getProxyUrl(video.noWatermark, `quktik_story_${id}.mp4`, 'video')}
                      download={`quktik_story_${id}.mp4`}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-md shadow-purple-600/15 active:scale-[0.99] group"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                          <Download className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left min-w-0">
                          <span className="block font-black text-base sm:text-lg leading-tight tracking-tight">
                            Download Story Video (No Watermark)
                          </span>
                          <span className="text-xs text-purple-100 font-medium block mt-0.5">
                            Saved permanently in 1080p MP4 before expiry
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 text-white tracking-wide shrink-0 ml-2">
                        Server 1
                      </span>
                    </a>
                  )}
                </div>

                {/* SECONDARY ACTIONS: Story Audio MP3 & Ringtone */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">Also Available (Story Audio &amp; Ringtone):</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {music?.url && (
                      <a
                        href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                        download={`quktik_audio_${id}.mp3`}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white shadow-xs hover:shadow transition-all active:scale-[0.98] group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                            <Music className="w-4.5 h-4.5 text-white" />
                          </div>
                          <div className="text-left min-w-0">
                            <div className="text-sm font-bold leading-tight">Story Audio MP3</div>
                            <div className="text-[11px] text-rose-100 font-medium mt-0.5">320kbps Studio</div>
                          </div>
                        </div>
                        <Download className="w-4 h-4 text-white/80 shrink-0 ml-2" />
                      </a>
                    )}

                    {music?.url && (
                      <a
                        href={getProxyUrl(music.url, `quktik_ringtone_${id}.m4a`, 'audio')}
                        download={`quktik_ringtone_${id}.m4a`}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-xs hover:shadow transition-all active:scale-[0.98] group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                            <Bell className="w-4.5 h-4.5 text-white" />
                          </div>
                          <div className="text-left min-w-0">
                            <div className="text-sm font-bold leading-tight">Story Ringtone</div>
                            <div className="text-[11px] text-slate-300 font-medium mt-0.5">M4A (Phone Alert)</div>
                          </div>
                        </div>
                        <Download className="w-4 h-4 text-white/80 shrink-0 ml-2" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SPECIALIZED MODE 3: DOUYIN ALL-IN-ONE (抖音全能媒体套件)       */}
        {/* ------------------------------------------------------------- */}
        {isDouyinMode && (
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
                      src={video.noWatermark}
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
                          className="absolute inset-0 flex items-center justify-center m-auto w-14 h-14 rounded-full bg-white/90 text-rose-700 shadow-lg hover:scale-110 active:scale-95 transition-all group-hover:bg-white cursor-pointer"
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
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 border border-white/80 text-[11px] font-bold text-rose-700 shadow-sm flex items-center gap-1.5 pointer-events-none">
                    <Sparkles className="w-3 h-3 text-rose-500" />
                    <span>无水印 1080p</span>
                  </div>

                  {/* Duration Badge */}
                  {durationFormatted && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1.5 pointer-events-none">
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

                  {/* Creator Signature / Bio */}
                  {author?.signature && (
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
                      <span className="font-bold text-slate-400 block text-[10px] uppercase mb-0.5">Bio / 个人简介:</span>
                      <p className="line-clamp-3 italic">"{author.signature}"</p>
                    </div>
                  )}

                  {/* Creator Stats: Followers & Total Likes */}
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
                
                {/* Video Description / Title */}
                <div>
                  <h3 className="text-slate-900 text-base sm:text-lg font-semibold leading-relaxed">
                    {title || 'Douyin Video Description'}
                  </h3>
                </div>

                {/* Hashtags Section */}
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

                {/* Engagement Statistics (5 metrics) */}
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

                  {/* 1. No Watermark Video (Server 1 Clean 1080p MP4) */}
                  {video?.noWatermark && (
                    <a
                      href={getProxyUrl(video.noWatermark, `douyin_clean_${id}.mp4`, 'video')}
                      download={`douyin_clean_${id}.mp4`}
                      className="w-full flex items-center justify-between px-6 py-4 rounded-2xl sm:rounded-3xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-sm hover:shadow transition-all active:scale-[0.98] group"
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

                  {/* 2. HD Mirror Video (Server 2) */}
                  {video?.noWatermarkHd && (
                    <a
                      href={getProxyUrl(video.noWatermarkHd, `douyin_hd_${id}.mp4`, 'video')}
                      download={`douyin_hd_${id}.mp4`}
                      className="w-full flex items-center justify-between px-6 py-3.5 rounded-2xl sm:rounded-3xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 active:scale-[0.98] transition-all group"
                    >
                      <div className="flex items-center space-x-3.5">
                        <Video className="w-5 h-5 text-indigo-600 shrink-0" />
                        <span className="text-left font-bold">Download Video (HD Server 2 Mirror)</span>
                      </div>
                      <span className="text-xs text-slate-500 font-semibold">HD 1080p</span>
                    </a>
                  )}

                  {/* 3. With Watermark Video (Original with Douyin logo) */}
                  {video?.watermark && (
                    <a
                      href={getProxyUrl(video.watermark, `douyin_watermarked_${id}.mp4`, 'video')}
                      download={`douyin_watermarked_${id}.mp4`}
                      className="w-full flex items-center justify-between px-6 py-3.5 rounded-2xl sm:rounded-3xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-sm border border-amber-200 active:scale-[0.98] transition-all group"
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

                  {/* 4. Audio & Ringtone Grid */}
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

                  {/* 5. Douyin Video Share URL Box */}
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
        )}

        {/* STANDARD MODE / PHOTO / DOUYIN / STORY / VIDEO LAYOUT         */}
        {/* ------------------------------------------------------------- */}
        {!['avatar', 'ringtone', 'mp3', 'photo', 'story', 'douyin'].includes(mode) && !isDouyinMode && (
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
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-md shadow-emerald-600/15 hover:shadow-lg hover:shadow-emerald-600/25 active:scale-[0.99] group border border-emerald-500/30"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Download className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left min-w-0">
                        <span className="block font-black text-base sm:text-lg leading-tight tracking-tight">
                          Download Without Watermark
                        </span>
                        <span className="text-xs text-emerald-100 font-medium block mt-0.5">
                          Clean MP4 • Ultra HD 1080p • Server 1
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 text-white tracking-wide shrink-0 ml-2">
                      Server 1
                    </span>
                  </a>
                )}

                {video?.noWatermarkHd && (
                  <a
                    href={getProxyUrl(video.noWatermarkHd, `quktik_video_hd_${id}.mp4`, 'video')}
                    download={`quktik_video_hd_${id}.mp4`}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200/90 transition-all shadow-xs hover:shadow active:scale-[0.99] group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Video className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div className="text-left min-w-0">
                        <span className="block font-bold text-slate-900 text-sm leading-tight">
                          Download Video (HD Mirror)
                        </span>
                        <span className="text-xs text-slate-500 font-normal block mt-0.5">
                          Alternative Server 2 • 1080p MP4
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-slate-200/70 text-slate-700 shrink-0 ml-2">
                      HD Mirror
                    </span>
                  </a>
                )}

                {music?.url && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={getProxyUrl(music.url, `quktik_audio_${id}.mp3`, 'audio')}
                      download={`quktik_audio_${id}.mp3`}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-sm hover:shadow transition-all active:scale-[0.98] group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Music className="w-4.5 h-4.5 text-white" />
                        </div>
                        <div className="text-left min-w-0">
                          <div className="text-sm font-bold leading-tight whitespace-nowrap">MP3 Audio</div>
                          <div className="text-[11px] text-rose-100 font-medium mt-0.5 whitespace-nowrap">320kbps Studio</div>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0 ml-2 group-hover:bg-white/30 transition-colors">
                        <Download className="w-4 h-4 text-white" />
                      </div>
                    </a>

                    <a
                      href={getProxyUrl(music.url, `quktik_ringtone_${id}.m4a`, 'audio')}
                      download={`quktik_ringtone_${id}.m4a`}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow transition-all active:scale-[0.98] group border border-slate-800"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Bell className="w-4.5 h-4.5 text-white" />
                        </div>
                        <div className="text-left min-w-0">
                          <div className="text-sm font-bold leading-tight whitespace-nowrap">Ringtone</div>
                          <div className="text-[11px] text-slate-300 font-medium mt-0.5 whitespace-nowrap">M4A (iPhone & Android)</div>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0 ml-2 group-hover:bg-white/20 transition-colors">
                        <Download className="w-4 h-4 text-white" />
                      </div>
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
