'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { Globe2, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function DouyinDownloaderPage() {
  const [downloadResult, setDownloadResult] = useState(null);

  return (
    <div className="relative overflow-hidden">
      
      {/* Downloader Section */}
      <section className="pt-4 pb-8 sm:pb-12">
        {!downloadResult ? (
          <DownloaderForm
            onResult={(data) => setDownloadResult(data)}
            title="Douyin Video Downloader (Download Chinese TikTok Without Watermark)"
            subtitle="Save original Full HD videos, audio tracks, and slideshows from Douyin (抖音) directly to your device without logos or Chinese watermarks."
            placeholder="Paste Douyin video link or copied Chinese share text (v.douyin.com)..."
            buttonText="Download Douyin Video"
            badge="Douyin (抖音) HD Video Downloader"
          />
        ) : (
          <ResultCard
            result={downloadResult}
            onReset={() => setDownloadResult(null)}
            mode="douyin"
          />
        )}
      </section>

      {/* Douyin Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
            Chinese TikTok Support
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Download Videos from Douyin (抖音) in 1080p HD
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Many global viral video trends, editing transitions, and CapCut sound templates start on Douyin before reaching TikTok. Save them cleanly with TikFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No Douyin Logo or Watermark</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Douyin places moving Chinese watermarks across videos. TikFlow strips these completely, giving you clean, unbranded MP4 footage.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">All Douyin Links Supported</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Paste standard <code className="text-rose-600 bg-rose-50 px-1 rounded text-xs">douyin.com/video/...</code> links or short share links like <code className="text-rose-600 bg-rose-50 px-1 rounded text-xs">v.douyin.com/...</code>. Our parser handles both automatically.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Ultra-Fast CDN Stream</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We connect directly to ByteDance&apos;s Asian and global content distribution servers to deliver rapid downloads without buffer queues.
            </p>
          </div>
        </div>
      </section>

      {/* How To Douyin */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-slate-700">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
            How to Copy Link and Download from Douyin
          </h2>
          <ol className="space-y-3 list-decimal list-inside text-slate-600 text-sm sm:text-base">
            <li><strong className="text-slate-900">Open Douyin App:</strong> In the Douyin app or on douyin.com, find your favorite video, tap the Share arrow (分享), and tap <em>Copy Link (复制链接)</em>.</li>
            <li><strong className="text-slate-900">Paste on TikFlow:</strong> Paste the text or link into the search box above. TikFlow will automatically extract the URL and ignore Chinese text around it.</li>
            <li><strong className="text-slate-900">Download Clean MP4:</strong> Hit Download to save the unwatermarked HD video directly to your gallery or computer.</li>
          </ol>
        </div>
      </section>

    </div>
  );
}
