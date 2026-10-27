'use client';

import React, { useState } from 'react';
import { Clipboard, X, Loader2, AlertCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DownloaderForm({ 
  onResult, 
  title = "Download TikTok Videos Without Watermark in HD",
  subtitle = "Save clean MP4 videos with no logo, extract crystal-clear MP3 music, and download full photo slideshows online for free.",
  placeholder = "Paste your TikTok link here (e.g., https://vt.tiktok.com/...)",
  buttonText = "Download Video",
  sampleUrl = "https://www.tiktok.com/@scout2015/video/6718335390845095173",
  badge = "Fast, Free & Private"
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
      setError('Please paste a TikTok link into the box above to get started!');
      return;
    }

    if (!trimmedUrl.includes('tiktok.com') && !trimmedUrl.includes('douyin.com')) {
      setError('Please enter a valid TikTok or Douyin link (e.g., https://www.tiktok.com/@user/video/... or https://vt.tiktok.com/...)');
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
        throw new Error(data.error || 'Could not fetch this media. Please ensure the link is public and try again.');
      }

      if (onResult) {
        onResult(data);
      }
    } catch (err) {
      setError(err.message || 'Something went wrong while connecting to the server. Please check your link.');
    } finally {
      setLoading(false);
    }
  };

  const loadSampleUrl = () => {
    setUrl(sampleUrl);
    setError(null);
  };

  return (
    <div id="downloader" className="w-full max-w-4xl mx-auto text-center px-4 pt-8 sm:pt-14 pb-8">
      
      {/* Friendly 3-Step Pill Flow (Super Easy to Understand) */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-bold shadow-xs">
          <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-black">1</span>
          <span>📋 Paste Link</span>
        </div>
        <span className="text-slate-300 font-bold hidden sm:inline">➔</span>
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs sm:text-sm font-bold shadow-xs">
          <span className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-black">2</span>
          <span>⚡ Tap Download</span>
        </div>
        <span className="text-slate-300 font-bold hidden sm:inline">➔</span>
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-bold shadow-xs">
          <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-black">3</span>
          <span>🎉 Save Clean Video</span>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-4 leading-[1.15]">
        {title.includes('Without Watermark') ? (
          <>
            {title.split('Without Watermark')[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-600 to-indigo-600">
              Without Watermark
            </span>
            {title.split('Without Watermark')[1]}
          </>
        ) : (
          title
        )}
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
        {subtitle}
      </p>

      {/* Elevated White Search / Input Box */}
      <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto group">
        <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-0 p-2 sm:p-2.5 rounded-3xl bg-white border-2 border-slate-200/90 shadow-2xl shadow-slate-200/80 focus-within:border-rose-500 focus-within:ring-4 focus-within:ring-rose-500/15 transition-all">
          
          <div className="relative flex-1 w-full flex items-center">
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (error) setError(null);
              }}
              placeholder={placeholder}
              className="w-full px-4 sm:px-6 py-4 bg-transparent text-slate-900 placeholder-slate-400 text-base sm:text-lg font-medium focus:outline-none pr-28 sm:pr-32"
              disabled={loading}
              autoComplete="off"
            />

            {/* Paste / Clear Buttons inside Input - Always Visible & Friendly */}
            <div className="absolute right-2 flex items-center space-x-1.5">
              {url ? (
                <button
                  type="button"
                  onClick={handleClear}
                  className="flex items-center gap-1 px-3 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                  title="Clear link"
                >
                  <X className="w-4 h-4 text-slate-500" />
                  <span>Clear</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handlePaste}
                  className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 text-rose-600 font-bold text-xs sm:text-sm border border-rose-200 transition-all active:scale-95 shadow-xs"
                >
                  <Clipboard className="w-4 h-4 text-rose-600" />
                  <span>Paste Link</span>
                </button>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-600 text-white font-black text-base sm:text-lg shadow-xl shadow-rose-500/30 active:scale-[0.97] transition-all flex items-center justify-center gap-2.5 min-w-[170px]"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-white" />
                <span>Working...</span>
              </>
            ) : (
              <>
                <span>{buttonText}</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </>
            )}
          </button>
        </div>

        {/* Quick sample link helper */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500">
          <span>💡 Don&apos;t have a link right now?</span>
          <button
            type="button"
            onClick={loadSampleUrl}
            className="text-rose-600 hover:text-rose-700 underline font-bold cursor-pointer"
          >
            Click here to try a fun sample video! 🎬
          </button>
        </div>
      </form>

      {/* Error Notice */}
      {error && (
        <div className="mt-6 max-w-xl mx-auto p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-sm flex items-start gap-3 text-left animate-in fade-in slide-in-from-top-2 shadow-sm">
          <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-bold text-rose-800">Check Your Link</p>
            <p className="text-xs text-rose-700 mt-0.5">{error}</p>
          </div>
          <button
            onClick={() => setError(null)}
            className="text-rose-400 hover:text-rose-700 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
