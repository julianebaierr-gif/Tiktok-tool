import React from 'react';
import Link from 'next/link';
import { Home, Video, Music2, Image as ImageIcon, Flame, HelpCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found (404) | QukTik Downloader',
  description: 'The requested page could not be found on QukTik. Explore our free TikTok video, MP3, and photo download tools on the homepage.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  const quickLinks = [
    { title: 'TikTok Video Downloader', desc: 'Download clean MP4 videos in 1080p Full HD without watermark.', href: '/tiktok-video-downloader', icon: Video },
    { title: 'TikTok to MP3 Converter', desc: 'Extract crystal-clear 320kbps background music and audio tracks.', href: '/tiktok-mp3', icon: Music2 },
    { title: 'TikTok Photo Downloader', desc: 'Save high-resolution photo slides and image carousels in ZIP bundles.', href: '/tiktok-photo', icon: ImageIcon },
    { title: 'Trending TikTok Sounds', desc: 'Discover weekly viral music and popular sound effects across 12 countries.', href: '/trending-sounds', icon: Flame },
  ];

  const troubleshootingTips = [
    {
      q: 'Why am I seeing this 404 page?',
      a: 'The URL entered may have a typographical error, the post ID might be formatted differently, or the requested resource has been relocated to another section of the website.'
    },
    {
      q: 'How can I download my video now?',
      a: 'Return to our homepage or use one of the quick tool links below. Copy the public TikTok share URL and paste it directly into the input box to start your high-definition download.'
    },
    {
      q: 'Does QukTik support short links?',
      a: 'Yes. Our automated redirect parser supports all standard and shortened links, including vm.tiktok.com, vt.tiktok.com, and douyin.com sharing links.'
    },
    {
      q: 'Is any software or registration needed?',
      a: 'No. QukTik operates 100% online through standard mobile and desktop web browsers without registration, subscriptions, or intrusive popups.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-rose-50 border border-rose-200 flex items-center justify-center shadow-xs">
          <span className="text-3xl font-black text-rose-700">404</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          The page you requested could not be located on the server. Please verify the URL or select one of our free media conversion tools below.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>

      {/* Popular Downloader Tools */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 text-center">
          Popular Download Tools & Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <Link
                key={idx}
                href={tool.href}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 hover:shadow-xs transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-rose-600">
                  <span>Open Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Troubleshooting FAQ */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-rose-600 shrink-0" />
          <h2 className="text-lg font-bold text-slate-900">
            Frequently Asked Questions & Troubleshooting
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {troubleshootingTips.map((tip, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5 shadow-2xs">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                {tip.q}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {tip.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
