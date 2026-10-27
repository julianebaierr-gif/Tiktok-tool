'use client';

import React, { useState } from 'react';
import DownloaderForm from './DownloaderForm';
import ResultCard from './ResultCard';

export default function ToolHero({ title, subtitle, sampleUrl, placeholder, buttonText, badge }) {
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
    <section className="pt-4 pb-8 sm:pb-12">
      {!downloadResult ? (
        <DownloaderForm 
          onResult={handleResult} 
          title={title}
          subtitle={subtitle}
          placeholder={placeholder}
          sampleUrl={sampleUrl}
          buttonText={buttonText}
          badge={badge}
        />
      ) : (
        <ResultCard 
          result={downloadResult} 
          onReset={handleReset} 
        />
      )}
    </section>
  );
}
