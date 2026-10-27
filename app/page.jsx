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
    // Smooth scroll down to result card
    setTimeout(() => {
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setDownloadResult(null);
  };

  return (
    <div className="relative overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-pink-500/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-80 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-96 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Downloader Section */}
      <section className="pt-4 pb-8 sm:pb-12">
        {!downloadResult ? (
          <DownloaderForm 
            onResult={handleResult} 
            title="Download TikTok Video Without Watermark in HD"
            subtitle="Save clean MP4 videos with no logo, extract studio-quality MP3 audio, and download photo carousels online for free."
          />
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

      {/* Rich Semantic Content & 1000+ Keyword Hunter Coverage */}
      <SemanticContent />

      {/* FAQ Accordion */}
      <FaqSection />

    </div>
  );
}
