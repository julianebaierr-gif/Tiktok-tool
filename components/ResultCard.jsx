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
  Pause
} from 'lucide-react';

export default function ResultCard({ result, onReset }) {
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
    ? (typeof window !== 'undefined' ? `${window.location.origin}${getProxyUrl(video.noWatermark, `tikflow_${id}.mp4`)}` : video.noWatermark)
    : '';

  const handleCopyLink = () => {
    if (!directDownloadUrl) return;
    navigator.clipboard.writeText(directDownloadUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 animate-in fade-in zoom-in-95 duration-200">
      <div className="rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/60 p-6 sm:p-8 relative">
        
        {/* Header / Success Indicator & Tools Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 mb-6">
          <div className="flex items-center space-x-2 text-emerald-600 text-sm font-bold">
            <CheckCircle2 className="w-5 h-5" />
            <span>Ready for Download (1080p Source Available)</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-all"
              title="Copy direct download link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
            </button>

            {/* QR Code for Mobile */}
            <button
              onClick={() => setShowQr(true)}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-all"
              title="Download to phone via QR code"
            >
              <QrCode className="w-3.5 h-3.5 text-rose-500" />
              <span>Scan QR</span>
            </button>

            {/* Download Another */}
            <button
              onClick={onReset}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>New Search</span>
            </button>
          </div>
        </div>

        {/* Content Layout */}
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
                  
                  {/* Play preview button */}
                  {video?.noWatermark && (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center m-auto w-14 h-14 rounded-full bg-white/90 text-rose-600 shadow-lg hover:scale-110 active:scale-95 transition-all group-hover:bg-white"
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
              
              {/* Badge overlay */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 border border-white/80 text-[11px] font-bold text-rose-600 shadow-sm flex items-center gap-1.5 pointer-events-none">
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
            
            {/* Title / Caption */}
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
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Choose Download Option</h4>

              {/* MP4 No Watermark Primary */}
              {video?.noWatermark && (
                <a
                  href={getProxyUrl(video.noWatermark, `tikflow_video_nowm_${id}.mp4`, 'video')}
                  download={`tikflow_video_nowm_${id}.mp4`}
                  className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-emerald-500/20 active:scale-[0.99] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                    <span>Download MP4 (Without Watermark)</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-white/20 font-semibold uppercase">Server 1</span>
                </a>
              )}

              {/* MP4 HD Server 2 */}
              {video?.noWatermarkHd && (
                <a
                  href={getProxyUrl(video.noWatermarkHd, `tikflow_video_hd_${id}.mp4`, 'video')}
                  download={`tikflow_video_hd_${id}.mp4`}
                  className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm border border-slate-200 active:scale-[0.99] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Video className="w-5 h-5 text-indigo-600" />
                    <span>Download MP4 (HD Server 2)</span>
                  </div>
                  <span className="text-[11px] text-slate-500">Source HD</span>
                </a>
              )}

              {/* MP3 Audio Track */}
              {music?.url && (
                <a
                  href={getProxyUrl(music.url, `tikflow_audio_${id}.mp3`, 'audio')}
                  download={`tikflow_audio_${id}.mp3`}
                  className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold text-sm shadow-md shadow-rose-500/20 active:scale-[0.99] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Music className="w-5 h-5 text-rose-100" />
                    <span className="truncate max-w-[240px]">
                      Download MP3 Audio ({music.title || 'Soundtrack'})
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-white/20 font-semibold uppercase">320kbps</span>
                </a>
              )}

              {/* Direct fallback link */}
              {video?.noWatermark && (
                <div className="pt-2 text-center">
                  <a
                    href={video.noWatermark}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-rose-600 transition-colors"
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
                          href={getProxyUrl(imgUrl, `tikflow_photo_${id}_${index + 1}.jpg`, 'image')}
                          download={`tikflow_photo_${id}_${index + 1}.jpg`}
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
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-3">
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
