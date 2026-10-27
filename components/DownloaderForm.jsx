'use client';

import React, { useState } from 'react';
import { Search, Clipboard, X, Loader2, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

export default function DownloaderForm({ 
  onResult, 
  title = "Download TikTok Video Without Watermark",
  subtitle = "Save high-definition MP4 videos, original MP3 audio tracks, and photo slideshows in seconds without quality loss.",
  defaultType = "video"
}) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
        setError(null);
      }
    } catch (err) {
      console.warn('Clipboard read failed:', err);
    }
  };

  const handleClear = () => {
    setUrl('');
    setError(null);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setError(null);

    const trimmedUrl = url.trim();
    if (!trimmedUrl) {
      setError('Please paste a TikTok link into the box above.');
      return;
    }

    if (!trimmedUrl.includes('tiktok.com') && !trimmedUrl.includes('douyin.com')) {
      setError('Please provide a valid TikTok link (e.g., https://www.tiktok.com/@user/video/... or https://vt.tiktok.com/...)');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: trimmedUrl }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to fetch video data. Please verify the URL is public and try again.');
      }

      if (onResult) {
        onResult(data);
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred while communicating with the server.');
    } finally {
      setLoading(false);
    }
  };

  const loadSampleUrl = () => {
    setUrl('https://www.tiktok.com/@scout2015/video/6718335390845095173');
    setError(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center px-4 pt-6 sm:pt-12 pb-8">
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-300 mb-6 backdrop-blur-md shadow-sm">
        <Sparkles className="w-4 h-4 text-cyan-400" />
        <span>100% Free • Fast Server • No Registration Required</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
        {title.split('Without Watermark')[0]}
        {title.includes('Without Watermark') && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-cyan-400">
            Without Watermark
          </span>
        )}
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
        {subtitle}
      </p>

      {/* Search / Input Box */}
      <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto group">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 p-1.5 sm:p-2 rounded-2xl bg-slate-900/90 border-2 border-slate-700 focus-within:border-cyan-400 focus-within:ring-4 focus-within:ring-cyan-500/20 shadow-2xl transition-all">
          
          <div className="relative flex-1 w-full flex items-center">
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Paste TikTok video link here (e.g., https://vm.tiktok.com/...)"
              className="w-full px-4 py-3.5 sm:py-4 bg-transparent text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none pr-20"
              disabled={loading}
              autoComplete="off"
            />

            {/* Paste / Clear Buttons inside Input */}
            <div className="absolute right-2 flex items-center space-x-1.5">
              {url ? (
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Clear link"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handlePaste}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-all"
                >
                  <Clipboard className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Paste</span>
                </button>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold text-base shadow-lg shadow-pink-600/30 hover:shadow-pink-600/50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 min-w-[150px]"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-white" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Download</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </>
            )}
          </button>
        </div>

        {/* Quick sample link helper */}
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
          <span>Need a test URL?</span>
          <button
            type="button"
            onClick={loadSampleUrl}
            className="text-cyan-400 hover:text-cyan-300 underline font-medium cursor-pointer"
          >
            Insert sample video link
          </button>
        </div>
      </form>

      {/* Error Notice */}
      {error && (
        <div className="mt-6 max-w-xl mx-auto p-4 rounded-xl bg-red-950/60 border border-red-800/80 text-red-200 text-sm flex items-start gap-3 text-left animate-in fade-in slide-in-from-top-2">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold text-red-300">Download Failed</p>
            <p className="text-xs text-red-200 mt-1">{error}</p>
          </div>
          <button
            onClick={() => setError(null)}
            className="text-red-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
