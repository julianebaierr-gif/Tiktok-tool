'use client';

import React from 'react';
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
  ExternalLink
} from 'lucide-react';

export default function ResultCard({ result, onReset }) {
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

  // Format numbers nicely (e.g., 1.2M, 45K)
  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getProxyUrl = (mediaUrl, filename, mediaType = 'video') => {
    return `/api/proxy?url=${encodeURIComponent(mediaUrl)}&filename=${encodeURIComponent(filename)}&type=${mediaType}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-in fade-in zoom-in-95 duration-300">
      <div className="rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl p-6 sm:p-8 backdrop-blur-xl">
        
        {/* Header / Success Indicator */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
          <div className="flex items-center space-x-2 text-emerald-400 text-sm font-semibold">
            <CheckCircle2 className="w-5 h-5" />
            <span>Ready for Download (High Quality)</span>
          </div>
          <button
            onClick={onReset}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Download Another</span>
          </button>
        </div>

        {/* Content Layout: Left Media Preview + Right Details & Download Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Media Thumbnail & Author Profile */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative aspect-[9/16] max-h-[380px] w-full mx-auto rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md group">
              {cover ? (
                <img
                  src={cover}
                  alt={title || 'TikTok Preview'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600">
                  <Video className="w-16 h-16" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              {/* Badge overlay */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-700/80 text-[11px] font-bold text-cyan-300 backdrop-blur-md flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>No Watermark</span>
              </div>
            </div>

            {/* Author Profile Bar */}
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              {author?.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.nickname}
                  className="w-10 h-10 rounded-full border border-pink-500/50 object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white">
                  {author?.username?.charAt(0) || 'U'}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-sm truncate">{author?.nickname || 'TikTok User'}</h4>
                <p className="text-slate-400 text-xs truncate">@{author?.username || 'user'}</p>
              </div>
            </div>
          </div>

          {/* Details & Download Actions */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Title / Caption */}
            <div>
              <h3 className="text-white text-base sm:text-lg font-medium leading-relaxed line-clamp-3">
                {title || 'TikTok video description'}
              </h3>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-4 gap-2 py-3 px-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div>
                <p className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-1">
                  <Heart className="w-3 h-3 text-rose-500" /> Likes
                </p>
                <p className="text-sm font-bold text-white">{formatNumber(stats?.likes)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-1">
                  <MessageCircle className="w-3 h-3 text-cyan-400" /> Comments
                </p>
                <p className="text-sm font-bold text-white">{formatNumber(stats?.comments)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-1">
                  <Share2 className="w-3 h-3 text-amber-400" /> Shares
                </p>
                <p className="text-sm font-bold text-white">{formatNumber(stats?.shares)}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-1">
                  <Eye className="w-3 h-3 text-emerald-400" /> Plays
                </p>
                <p className="text-sm font-bold text-white">{formatNumber(stats?.views)}</p>
              </div>
            </div>

            {/* Download Buttons Section */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Available Download Links</h4>

              {/* MP4 No Watermark (Direct Server Stream) */}
              {video?.noWatermark && (
                <a
                  href={getProxyUrl(video.noWatermark, `tikflow_video_nowm_${id}.mp4`, 'video')}
                  download={`tikflow_video_nowm_${id}.mp4`}
                  className="w-full flex items-center justify-between px-5 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-sm shadow-lg shadow-green-600/20 active:scale-[0.99] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                    <span>Download MP4 (Without Watermark)</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-white/20 font-semibold uppercase">HD Fast</span>
                </a>
              )}

              {/* MP4 HD Option */}
              {video?.noWatermarkHd && (
                <a
                  href={getProxyUrl(video.noWatermarkHd, `tikflow_video_hd_${id}.mp4`, 'video')}
                  download={`tikflow_video_hd_${id}.mp4`}
                  className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 active:scale-[0.99] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Video className="w-5 h-5 text-cyan-400" />
                    <span>Download MP4 [HD Alternative]</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Server 2</span>
                </a>
              )}

              {/* MP3 Audio Track */}
              {music?.url && (
                <a
                  href={getProxyUrl(music.url, `tikflow_audio_${id}.mp3`, 'audio')}
                  download={`tikflow_audio_${id}.mp3`}
                  className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold text-sm shadow-md shadow-pink-600/20 active:scale-[0.99] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Music className="w-5 h-5 text-pink-200" />
                    <span className="truncate max-w-[240px]">
                      Download MP3 Audio ({music.title || 'Soundtrack'})
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-white/20 font-semibold uppercase">320kbps</span>
                </a>
              )}

              {/* Direct TikTok CDN fallback link */}
              {video?.noWatermark && (
                <div className="pt-2 text-center">
                  <a
                    href={video.noWatermark}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Direct CDN link not opening? Click here to view source stream</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>

            {/* Photo Slideshow Gallery (If post contains multiple photos) */}
            {isImagePost && images && images.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-cyan-400" />
                    <span>Photo Slideshow ({images.length} High-Res Photos)</span>
                  </h4>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {images.map((imgUrl, index) => (
                    <div key={index} className="relative group rounded-xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[9/16]">
                      <img
                        src={imgUrl}
                        alt={`Photo slide ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                        <a
                          href={getProxyUrl(imgUrl, `tikflow_photo_${id}_${index + 1}.jpg`, 'image')}
                          download={`tikflow_photo_${id}_${index + 1}.jpg`}
                          className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1 shadow-lg"
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
    </div>
  );
}
