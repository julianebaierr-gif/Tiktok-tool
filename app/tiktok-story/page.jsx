'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { History, Clock, ShieldCheck } from 'lucide-react';

export default function TikTokStoryPage() {
  const [downloadResult, setDownloadResult] = useState(null);

  return (
    <div className="relative overflow-hidden">
      
      {/* Downloader Section */}
      <section className="pt-4 pb-8 sm:pb-12">
        {!downloadResult ? (
          <DownloaderForm
            onResult={(data) => setDownloadResult(data)}
            title="TikTok Story Downloader (Save Stories Before They Expire)"
            subtitle="Archive temporary 24-hour TikTok stories in high definition without watermarks before they automatically disappear."
            placeholder="Paste temporary TikTok story link..."
            buttonText="Save Story"
            badge="24-Hour Story Archiver"
          />
        ) : (
          <ResultCard
            result={downloadResult}
            onReset={() => setDownloadResult(null)}
            mode="story"
          />
        )}
      </section>

      {/* Story Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200">
            24-Hour Archive Tool
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Preserve Ephemeral Stories in HD Quality
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            TikTok stories vanish after 24 hours. Use TikFlow to archive important announcements, behind-the-scenes clips, and creator stories forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Beat the 24-Hour Clock</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Never lose your favorite creator&apos;s temporary posts. Download story videos and photos directly to your personal device.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-4">
              <History className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Original Full Resolution</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Stories are captured at the exact vertical 9:16 aspect ratio in Full HD resolution without visual compression artifacts.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">100% Anonymous Viewing</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              You do not need to log in to TikTok. You can save and watch public stories anonymously without appearing on the creator&apos;s story view history.
            </p>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-slate-700">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
            How to Download a TikTok Story
          </h2>
          <ol className="space-y-3 list-decimal list-inside text-slate-600 text-sm sm:text-base">
            <li><strong className="text-slate-900">Copy the Story Link:</strong> While viewing a public TikTok story, tap the Share icon and click <em>Copy Link</em>.</li>
            <li><strong className="text-slate-900">Paste URL:</strong> Open TikFlow Story Saver in your browser and paste the link into the box above.</li>
            <li><strong className="text-slate-900">Save Instantly:</strong> Click <em>Save Story</em> and choose <em>Download MP4 (Without Watermark)</em> to save the story straight to your phone or computer.</li>
          </ol>
        </div>
      </section>

    </div>
  );
}
