'use client';

import React, { useState } from 'react';
import { Clipboard, X, Loader2, AlertCircle, ArrowRight, Globe2 } from 'lucide-react';
import Link from 'next/link';

export default function DownloaderForm({ 
  onResult, 
  title = "Download TikTok Videos Without Watermark in HD",
  subtitle = "Save clean MP4 videos with no logo, extract crystal-clear MP3 music, and download full photo slideshows online for free.",
  placeholder = "Paste your TikTok link here (e.g., https://vt.tiktok.com/...)",
  buttonText = "Download Video",
  sampleUrl = "https://www.tiktok.com/@scout2015/video/6718335390845095173",
  badge = "Fast, Free & Private",
  mode = "video"
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
      setError({ message: mode === 'douyin' ? 'Please paste a Douyin link into the box above.' : 'Please paste a TikTok link into the box above to get started.' });
      return;
    }

    // Strict Platform Guard on Client-Side
    if (mode === 'douyin') {
      if (trimmedUrl.includes('tiktok.com')) {
        setError({
          wrongPlatform: 'tiktok',
          message: '⚠️ This page only downloads Chinese Douyin (抖音) videos. For international TikTok, please switch to our Global TikTok Downloader.'
        });
        return;
      }
    } else {
      if (trimmedUrl.includes('douyin.com')) {
        setError({
          wrongPlatform: 'douyin',
          message: '🇨🇳 You entered a Chinese Douyin (抖音) link. Please use our specialized Douyin Downloader for fast Chinese CDN processing.'
        });
        return;
      }
    }

    if (!trimmedUrl.includes('tiktok.com') && !trimmedUrl.includes('douyin.com') && !/^\d{18,20}$/.test(trimmedUrl)) {
      setError({ message: mode === 'douyin' 
        ? 'Please enter a valid Douyin link (e.g., https://www.douyin.com/video/... or https://v.douyin.com/...)' 
        : 'Please enter a valid TikTok link (e.g., https://www.tiktok.com/@user/video/... or https://vt.tiktok.com/...)' 
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          url: trimmedUrl,
          platform: mode === 'douyin' ? 'douyin' : 'tiktok'
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.wrongPlatform) {
          setError({ wrongPlatform: data.wrongPlatform, message: data.error });
        } else {
          setError({ message: data.error || 'Could not fetch this media. Please ensure the link is public and try again.' });
        }
        return;
      }

      if (onResult) {
        onResult(data);
      }
    } catch (err) {
      setError({ message: err.message || 'Something went wrong while connecting to the server. Please check your link.' });
    } finally {
      setLoading(false);
    }
  };

  const loadSampleUrl = () => {
    setUrl(sampleUrl);
    setError(null);
  };

  return (
    <div id="downloader" className="w-full max-w-4xl mx-auto text-center px-4 pt-6 sm:pt-10 pb-6">
      
      {/* Top Cross-Platform Interlink Notice Bar */}
      {mode === 'douyin' ? (
        <div className="w-full max-w-2xl mx-auto mb-6 p-3 sm:p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200/90 text-left shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
            <div className="text-xs sm:text-sm text-amber-900 leading-snug">
              <span className="font-bold">Douyin Exclusive (抖音专属):</span> Only Mainland China Douyin videos work here.
            </div>
          </div>
          <Link 
            href="/tiktok-video-downloader" 
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-amber-100 text-amber-900 font-bold text-xs border border-amber-300 shadow-xs shrink-0 transition-all"
          >
            <span>Switch to Global TikTok</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
          </Link>
        </div>
      ) : (
        <div className="w-full max-w-2xl mx-auto mb-6 p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-left shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <Globe2 className="w-4 h-4 text-rose-600 shrink-0" />
            <div className="text-xs sm:text-sm text-slate-700 leading-snug">
              <span className="font-bold">Need Chinese TikTok?</span> Want to download from Douyin (抖音)?
            </div>
          </div>
          <Link 
            href="/douyin-downloader" 
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-rose-50 text-rose-700 font-bold text-xs border border-slate-200 shadow-xs shrink-0 transition-all"
          >
            <span>Open Douyin Downloader (抖音)</span>
            <ArrowRight className="w-3.5 h-3.5 text-rose-600" />
          </Link>
        </div>
      )}

      {/* Sleek, Minimal Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
        <span>{badge}</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-4 leading-[1.12]">
        {title.includes('Without Watermark') ? (
          <>
            {title.split('Without Watermark')[0]}
            <span className="text-rose-600">
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

      {/* Clean, Modern Search / Input Box */}
      <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto group">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 rounded-2xl bg-white border border-slate-300 shadow-md shadow-slate-900/5 focus-within:border-slate-800 focus-within:ring-2 focus-within:ring-slate-900/10 transition-all">
          
          <div className="relative flex-1 w-full flex items-center">
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (error) setError(null);
              }}
              placeholder={placeholder}
              className="w-full px-4 sm:px-5 py-3.5 bg-transparent text-slate-900 placeholder-slate-400 text-base sm:text-lg font-medium focus:outline-none pr-28 sm:pr-32"
              disabled={loading}
              autoComplete="off"
            />

            {/* Paste / Clear Button */}
            <div className="absolute right-2 flex items-center space-x-1.5">
              {url ? (
                <button
                  type="button"
                  onClick={handleClear}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium text-xs transition-colors"
                  title="Clear link"
                >
                  <X className="w-3.5 h-3.5 text-slate-500" />
                  <span>Clear</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handlePaste}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm border border-slate-200/80 transition-all active:scale-95"
                >
                  <Clipboard className="w-3.5 h-3.5 text-slate-600" />
                  <span>Paste Link</span>
                </button>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-base shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 shrink-0 active:scale-[0.98]"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </>
            )}
          </button>
        </div>

        {/* Subtle sample link helper */}
        <div className="mt-3.5 flex items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-500">
          <span>Need an example?</span>
          <button
            type="button"
            onClick={loadSampleUrl}
            className="text-slate-700 hover:text-rose-600 font-semibold underline underline-offset-4 cursor-pointer"
          >
            Try with a sample link
          </button>
        </div>
      </form>

      {/* Error Notice with Smart Platform Switcher */}
      {error && (
        <div className="mt-5 max-w-2xl mx-auto p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-rose-800">
                {error.wrongPlatform ? 'Wrong Platform Link Detected' : 'Unable to Download'}
              </p>
              <p className="text-xs text-rose-700 mt-0.5">{error.message || error}</p>
            </div>
          </div>
          
          {error.wrongPlatform === 'tiktok' && (
            <Link 
              href="/tiktok-video-downloader" 
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shrink-0 inline-flex items-center gap-1.5 shadow-xs transition-all"
            >
              <span>Open TikTok Downloader</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}

          {error.wrongPlatform === 'douyin' && (
            <Link 
              href="/douyin-downloader" 
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shrink-0 inline-flex items-center gap-1.5 shadow-xs transition-all"
            >
              <span>Open Douyin Downloader</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}

          {!error.wrongPlatform && (
            <button
              onClick={() => setError(null)}
              className="text-rose-400 hover:text-rose-700 p-1 self-start sm:self-auto"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

    </div>
  );
}
