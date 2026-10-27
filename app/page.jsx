'use client';

import React, { useState } from 'react';
import DownloaderForm from '../components/DownloaderForm';
import ResultCard from '../components/ResultCard';
import FeatureGrid from '../components/FeatureGrid';
import HowToSection from '../components/HowToSection';
import FaqSection from '../components/FaqSection';
import SemanticContent from '../components/SemanticContent';

export default function HomePage() {
  const [downloadResult, setDownloadResult] = useState(null);

  const handleResult = (data) => {
    setDownloadResult(data);
    setTimeout(() => {
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setDownloadResult(null);
  };

  return (
    <div className="relative overflow-hidden">
      
      {/* Downloader Section */}
      <section className="pt-4 pb-8 sm:pb-12">
        {!downloadResult ? (
          <>
            <DownloaderForm 
              onResult={handleResult} 
              title="Download TikTok Videos Without Watermark in HD"
              subtitle="Save clean MP4 videos with no logo, extract crystal-clear MP3 music, and download full photo slideshows online for free."
            />

            {/* Quick Trust Highlights Banner */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-2 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center">
                <div className="p-3 rounded-2xl bg-slate-50/80">
                  <span className="text-xl sm:text-2xl font-black text-rose-600 block">100%</span>
                  <span className="text-xs font-semibold text-slate-600">No Watermarks</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50/80">
                  <span className="text-xl sm:text-2xl font-black text-indigo-600 block">1080p</span>
                  <span className="text-xs font-semibold text-slate-600">Full HD Source</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50/80">
                  <span className="text-xl sm:text-2xl font-black text-emerald-600 block">320kbps</span>
                  <span className="text-xs font-semibold text-slate-600">Studio MP3 Audio</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50/80">
                  <span className="text-xl sm:text-2xl font-black text-slate-900 block">0 Logins</span>
                  <span className="text-xs font-semibold text-slate-600">No Passwords</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <ResultCard 
            result={downloadResult} 
            onReset={handleReset} 
          />
        )}
      </section>

      {/* Core Features */}
      <FeatureGrid />

      {/* How to Use Tutorial */}
      <HowToSection />

      {/* Rich 1200+ Words Human Editorial Content */}
      <SemanticContent />

      {/* FAQ Accordion */}
      <FaqSection />

    </div>
  );
}
