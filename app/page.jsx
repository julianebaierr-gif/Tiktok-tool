import React from 'react';
import ToolHero from '../components/ToolHero';
import FeatureGrid from '../components/FeatureGrid';
import HowToSection from '../components/HowToSection';
import FaqSection from '../components/FaqSection';
import SemanticContent from '../components/SemanticContent';
import SiteSchema from '../components/SiteSchema';

export const metadata = {
  title: { absolute: 'Download TikTok Video No Watermark | QukTik' },
  description: "Download TikTok videos without watermark in HD MP4 or MP3. Free online TikTok downloader for iPhone, Android, and PC with no app or registration needed.",
  alternates: {
    canonical: 'https://www.quktik.com',
    languages: {
      'en': 'https://www.quktik.com',
      'es': 'https://www.quktik.com/es',
      'pt': 'https://www.quktik.com/pt',
      'id': 'https://www.quktik.com/id',
      'fr': 'https://www.quktik.com/fr',
      'ar': 'https://www.quktik.com/ar',
      'de': 'https://www.quktik.com/de',
      'vi': 'https://www.quktik.com/vi',
      'tr': 'https://www.quktik.com/tr',
      'it': 'https://www.quktik.com/it',
      'ru': 'https://www.quktik.com/ru',
      'ja': 'https://www.quktik.com/ja',
      'x-default': 'https://www.quktik.com',
    },
  },
  openGraph: {
    title: { absolute: 'Download TikTok Video No Watermark | QukTik' },
    description: "Download TikTok videos without watermark in HD MP4 or MP3. Free online TikTok downloader for iPhone, Android, and PC with no app or registration needed.",
    url: 'https://www.quktik.com',
    type: 'website',
    images: [
      {
        url: 'https://www.quktik.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QukTik - TikTok & Douyin Video Downloader',
      },
    ],
    siteName: 'QukTik',
  },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <SiteSchema toolName="QukTik - TikTok and Douyin Downloader Without Watermark" toolDesc="Download TikTok videos without watermark in HD MP4 or MP3. Free online TikTok downloader for iPhone, Android, and PC." toolUrl="https://www.quktik.com" />
      
      {/* Downloader Hero */}
      <ToolHero 
        title="Download TikTok Videos Without Watermark in HD"
        subtitle="Save clean MP4 videos with no logo, extract crystal-clear MP3 music, and download full photo slideshows online for free."
        mode="all"
      />

      {/* Clean Trust Highlights Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">100%</span>
            <span className="text-xs font-medium text-slate-500">No Watermarks</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">1080p</span>
            <span className="text-xs font-medium text-slate-500">Source Quality</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">320kbps</span>
            <span className="text-xs font-medium text-slate-500">Studio Audio</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">0 Logins</span>
            <span className="text-xs font-medium text-slate-500">Complete Privacy</span>
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
      <FaqSection 
        badge="12 FAQs • English"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about downloading videos, audio, and photos with QukTik."
      />
    </div>
  );
}
