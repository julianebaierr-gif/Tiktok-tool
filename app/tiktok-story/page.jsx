'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { History, Clock, ShieldCheck, Download, AlertCircle } from 'lucide-react';

export default function TikTokStoryPage() {
  const [downloadResult, setDownloadResult] = useState(null);

  return (
    <div className="relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-purple-500/10 via-pink-500/10 to-transparent blur-3xl pointer-events-none -z-10"></div>

      {/* Downloader Section */}
      <section className="pt-4 pb-8 sm:pb-12">
        {!downloadResult ? (
          <DownloaderForm
            onResult={(data) => setDownloadResult(data)}
            title="TikTok Story Downloader (Save Stories Before They Expire)"
            subtitle="Archive temporary 24-hour TikTok stories in high definition without watermarks before they automatically disappear."
            defaultType="video"
          />
        ) : (
          <ResultCard
            result={downloadResult}
            onReset={() => setDownloadResult(null)}
          />
        )}
      </section>

      {/* Story Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            24-Hour Archive Tool
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Preserve Ephemeral Stories in HD Quality
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            TikTok stories vanish after 24 hours. Use TikFlow to archive important announcements, behind-the-scenes clips, and creator stories forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Beat the 24-Hour Clock</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Never lose your favorite creator&apos;s temporary posts. Download story videos and photos directly to your personal device.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
              <History className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Original Full Resolution</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Stories are captured at the exact vertical 9:16 aspect ratio in Full HD resolution without visual compression artifacts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">100% Anonymous Viewing</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              You do not need to log in to TikTok. You can save and watch public stories anonymously without appearing on the creator&apos;s story view history.
            </p>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-slate-300">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            How to Download a TikTok Story
          </h2>
          <ol className="space-y-3 list-decimal list-inside text-slate-400 text-sm sm:text-base">
            <li><strong className="text-white">Copy the Story Link:</strong> While viewing a public TikTok story, tap the Share icon and click <em>Copy Link</em>.</li>
            <li><strong className="text-white">Paste URL:</strong> Open TikFlow Story Saver in your browser and paste the link into the box above.</li>
            <li><strong className="text-white">Save Instantly:</strong> Click <em>Download</em> and choose <em>Download MP4 (Without Watermark)</em> to save the story straight to your phone or computer.</li>
          </ol>
        </div>
      </section>

    </div>
  );
}
