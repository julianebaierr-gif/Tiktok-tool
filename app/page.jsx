import React from 'react';
import ToolHero from '../components/ToolHero';
import FeatureGrid from '../components/FeatureGrid';
import HowToSection from '../components/HowToSection';
import FaqSection from '../components/FaqSection';
import SemanticContent from '../components/SemanticContent';
import SiteSchema from '../components/SiteSchema';

export const metadata = {
  title: 'QukTik - Download TikTok Videos (No Watermark)',
  description: 'Download TikTok and Douyin videos without watermark in HD MP4 or MP3 audio. 100% free online tool with no app or sign-up needed.',
  alternates: {
    canonical: 'https://quktik.com',
  },
  openGraph: {
    title: 'QukTik - Download TikTok Videos (No Watermark)',
    description: 'Download TikTok and Douyin videos without watermark in HD MP4 or MP3 audio. 100% free online tool with no app or sign-up needed.',
    url: 'https://quktik.com',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <SiteSchema />
      
      {/* Downloader Hero */}
      <ToolHero 
        title="Download TikTok Videos Without Watermark in HD"
        subtitle="Save clean MP4 videos with no logo, extract crystal-clear MP3 music, and download full photo slideshows online for free."
      />

      {/* Quick Trust Highlights Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-6 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center">
          <div className="p-3 rounded-2xl bg-slate-50/80">
            <span className="text-xl sm:text-2xl font-black text-rose-700 block">100%</span>
            <span className="text-xs font-semibold text-slate-600">No Watermarks</span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50/80">
            <span className="text-xl sm:text-2xl font-black text-indigo-600 block">1080p</span>
            <span className="text-xs font-semibold text-slate-600">Full HD Source</span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50/80">
            <span className="text-xl sm:text-2xl font-black text-emerald-700 block">320kbps</span>
            <span className="text-xs font-semibold text-slate-600">Studio MP3 Audio</span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50/80">
            <span className="text-xl sm:text-2xl font-black text-slate-900 block">0 Logins</span>
            <span className="text-xs font-semibold text-slate-600">No Passwords</span>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <FeatureGrid />

      {/* How to Use Tutorial */}
      <HowToSection />

      {/* Rich Human Editorial Content */}
      <SemanticContent />

      {/* FAQ Accordion */}
      <FaqSection />
    </div>
  );
}
