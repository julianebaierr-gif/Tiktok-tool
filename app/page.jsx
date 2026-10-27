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
          <DownloaderForm 
            onResult={handleResult} 
            title="Download TikTok Videos Without Watermark in HD"
            subtitle="Save clean MP4 videos with no logo, extract crystal-clear MP3 music, and download full photo slideshows online for free."
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

      {/* Rich 1200+ Words Human Editorial Content */}
      <SemanticContent />

      {/* FAQ Accordion */}
      <FaqSection />

    </div>
  );
}
