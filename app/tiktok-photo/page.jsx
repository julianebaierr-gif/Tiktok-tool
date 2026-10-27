'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { Sparkles, Layers, Sliders } from 'lucide-react';

export default function TikTokPhotoPage() {
  const [downloadResult, setDownloadResult] = useState(null);

  return (
    <div className="relative overflow-hidden">
      
      {/* Downloader Section */}
      <section className="pt-4 pb-8 sm:pb-12">
        {!downloadResult ? (
          <DownloaderForm
            onResult={(data) => setDownloadResult(data)}
            title="TikTok Photo Slideshow Downloader (Save Carousels in HD)"
            subtitle="Download every photo slide, image carousel, and wallpaper from TikTok posts in full original resolution without watermarks."
            placeholder="Paste TikTok photo slideshow or carousel link..."
            buttonText="Get Photos HD"
            badge="Full-Resolution Photo Gallery"
          />
        ) : (
          <ResultCard
            result={downloadResult}
            onReset={() => setDownloadResult(null)}
            mode="photo"
          />
        )}
      </section>

      {/* Photo Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200">
            Multi-Image Extraction
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Download TikTok Photo Carousels in Original Quality
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            TikTok photo posts are popular for memes, travel albums, infographics, and recipes. Save every frame in crystal-clear JPG format.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Full Gallery Extraction</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether the TikTok slideshow contains 2 photos or 35 photos, TikFlow automatically extracts every single image in sequential order.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Watermarks or Logos</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No TikTok logos, no username tags, and no black letterboxing. You get the raw, full-bleed images uploaded by the creator.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-4">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Original Audio Included</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Along with the image slides, TikFlow also gives you the option to download the background sound/music track playing behind the slideshow.
            </p>
          </div>
        </div>
      </section>

      {/* How To Photo Slideshow */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-slate-700">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
            How to Download TikTok Photo Slideshows
          </h2>
          <ol className="space-y-3 list-decimal list-inside text-slate-600 text-sm sm:text-base">
            <li><strong className="text-slate-900">Copy Slideshow Link:</strong> In the TikTok app, navigate to any photo post, tap Share, and select <em>Copy Link</em>.</li>
            <li><strong className="text-slate-900">Paste URL:</strong> Open TikFlow Photo Downloader and paste the link into the search box.</li>
            <li><strong className="text-slate-900">Choose Photos:</strong> Click <em>Get Photos HD</em>. You will see a preview gallery containing all high-resolution pictures. Click <em>Save</em> on any photo to download it to your gallery.</li>
          </ol>
        </div>
      </section>

    </div>
  );
}
