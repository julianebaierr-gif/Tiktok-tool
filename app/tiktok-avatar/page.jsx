'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { UserCheck, Sparkles, Download, ShieldCheck } from 'lucide-react';

export default function TikTokAvatarPage() {
  const [downloadResult, setDownloadResult] = useState(null);

  return (
    <div className="relative overflow-hidden">
      
      {/* Downloader Section */}
      <section className="pt-4 pb-8 sm:pb-12">
        {!downloadResult ? (
          <DownloaderForm
            onResult={(data) => setDownloadResult(data)}
            title="TikTok Profile Picture Downloader (Download Full HD Avatar & PFP)"
            subtitle="View and download full-size, uncompressed TikTok profile pictures (PFP) in high resolution from any public account or video link."
            defaultType="photo"
          />
        ) : (
          <div className="space-y-6">
            <ResultCard
              result={downloadResult}
              onReset={() => setDownloadResult(null)}
            />
            
            {/* Dedicated Avatar Card if author avatar exists */}
            {downloadResult.author?.avatar && (
              <div className="max-w-md mx-auto p-6 rounded-3xl bg-white border border-slate-200 shadow-xl text-center">
                <h3 className="text-lg font-black text-slate-900 mb-2">Original Full-Size Avatar</h3>
                <img
                  src={downloadResult.author.avatar}
                  alt={downloadResult.author.nickname}
                  className="w-36 h-36 mx-auto rounded-full border-4 border-rose-100 shadow-md object-cover my-4"
                />
                <p className="font-bold text-slate-900">{downloadResult.author.nickname}</p>
                <p className="text-xs text-slate-500 mb-4">@{downloadResult.author.username}</p>
                <a
                  href={`/api/proxy?url=${encodeURIComponent(downloadResult.author.avatar)}&filename=pfp_${downloadResult.author.username}.jpg&type=image`}
                  download={`pfp_${downloadResult.author.username}.jpg`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-sm shadow-md shadow-rose-500/20 hover:scale-105 active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Save Full HD Avatar</span>
                </a>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Avatar Features */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-slate-700">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200">
            Profile Tools
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            How to Download TikTok Profile Pictures (PFP)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            TikTok does not let you zoom in or save profile photos inside the app. Use TikFlow to see avatars in full 720p/1080p resolution.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Instructions</h3>
          <ol className="space-y-3 list-decimal list-inside text-slate-600 text-sm sm:text-base">
            <li>Copy the link of any video posted by the user, or copy their TikTok profile URL.</li>
            <li>Paste it into the search field above and click <strong>Download</strong>.</li>
            <li>TikFlow immediately retrieves the creator&apos;s full-resolution uncropped avatar image and provides a direct <strong>Save Full HD Avatar</strong> button.</li>
          </ol>
        </div>
      </section>

    </div>
  );
}
