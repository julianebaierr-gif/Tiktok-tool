'use client';

import React, { useState } from 'react';
import { Clipboard, X, Loader2, Sparkles, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function DownloaderForm({ 
  onResult, 
  title = "Save TikTok Videos Without Watermark",
  subtitle = "Paste a TikTok link below to download the clean original video in HD or save the audio as an MP3 file directly to your device.",
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
      setError('Please enter a valid TikTok link (e.g., https://www.tiktok.com/@user/video/... or https://vt.tiktok.com/...)');
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
        throw new Error(data.error || 'Could not fetch this video. Please make sure the video is public and try again.');
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
    setUrl('https://www.tiktok.com/@scout2015/video/6718335390845095173');
    setError(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center px-4 pt-8 sm:pt-14 pb-8">
      
      {/* Light pill badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-700 mb-6 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-slate-600">Fast, Free & Private</span>
        <span className="text-slate-300">•</span>
        <span className="text-rose-600 font-bold">No Watermarks</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-4 leading-[1.15]">
        {title.split('Without Watermark')[0]}
        {title.includes('Without Watermark') && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-600 to-indigo-600">
            Without Watermark
          </span>
        )}
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
        {subtitle}
      </p>

      {/* Elevated White Search / Input Box */}
      <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto group">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 p-2 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/70 focus-within:border-rose-400 focus-within:ring-4 focus-within:ring-rose-500/10 transition-all">
          
          <div className="relative flex-1 w-full flex items-center">
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Paste your TikTok link here (e.g., https://vt.tiktok.com/...)"
              className="w-full px-4 sm:px-6 py-3.5 sm:py-4 bg-transparent text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none pr-20"
              disabled={loading}
              autoComplete="off"
            />

            {/* Paste / Clear Buttons inside Input */}
            <div className="absolute right-2 flex items-center space-x-1.5">
              {url ? (
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  title="Clear text"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handlePaste}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-all"
                >
                  <Clipboard className="w-3.5 h-3.5 text-rose-500" />
                  <span>Paste</span>
                </button>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold text-base shadow-lg shadow-rose-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 min-w-[150px]"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-white" />
                <span>Working...</span>
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
        <div className="mt-3.5 flex items-center justify-center gap-2 text-xs text-slate-500">
          <span>Want to test it first?</span>
          <button
            type="button"
            onClick={loadSampleUrl}
            className="text-rose-600 hover:text-rose-700 underline font-semibold cursor-pointer"
          >
            Click here to try a sample link
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
