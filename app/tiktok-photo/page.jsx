'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { Image as ImageIcon, Sparkles, Layers, Sliders, CheckCircle2 } from 'lucide-react';

export default function TikTokPhotoPage() {
  const [downloadResult, setDownloadResult] = useState(null);

  return (
    <div className="relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-teal-500/10 to-transparent blur-3xl pointer-events-none -z-10"></div>

      {/* Downloader Section */}
      <section className="pt-4 pb-8 sm:pb-12">
        {!downloadResult ? (
          <DownloaderForm
            onResult={(data) => setDownloadResult(data)}
            title="TikTok Photo Slideshow Downloader (Save Carousels in HD)"
            subtitle="Download every photo slide, image carousel, and wallpaper from TikTok posts in full original resolution without watermarks."
            defaultType="photo"
          />
        ) : (
          <ResultCard
            result={downloadResult}
            onReset={() => setDownloadResult(null)}
          />
        )}
      </section>

      {/* Photo Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Multi-Image Extraction
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Download TikTok Photo Carousels in Original Quality
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            TikTok photo posts have become viral for memes, aesthetic photo dumps, infographics, and tutorials. Save every frame in crystal-clear JPG format.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Full Gallery Extraction</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Whether the TikTok slideshow contains 2 photos or 35 photos, TikFlow automatically extracts every single image in sequential order.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Zero Watermarks or Logos</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              No TikTok logos, no username tags, and no black letterboxing. You get the raw, full-bleed images uploaded by the creator.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Original Audio Included</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Along with the image slides, TikFlow also gives you the option to download the background sound/music track playing behind the slideshow.
            </p>
          </div>
        </div>
      </section>

      {/* How To Photo Slideshow */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-slate-300">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            How to Download TikTok Photo Slideshows
          </h2>
          <ol className="space-y-3 list-decimal list-inside text-slate-400 text-sm sm:text-base">
            <li><strong className="text-white">Copy Slideshow Link:</strong> In the TikTok app, navigate to any photo post or carousel, tap the Share button, and select <em>Copy Link</em>.</li>
            <li><strong className="text-white">Paste URL:</strong> Open TikFlow Photo Downloader and paste the link into the search box.</li>
            <li><strong className="text-white">Choose Photos:</strong> Click <em>Download</em>. You will see a preview grid containing all high-resolution pictures. Click <em>Save</em> on any photo to download it to your gallery.</li>
          </ol>
        </div>
      </section>

    </div>
  );
}
