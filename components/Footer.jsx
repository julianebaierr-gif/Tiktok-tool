'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo-icon.svg" 
                alt="QukTik - TikTok & Douyin Video Downloader" 
                width={40} height={40} className="w-10 h-10 rounded-2xl shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900 leading-none">
                  Quk<span className="text-rose-600">Tik</span>
                </span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">
                  TikTok &amp; Douyin Video Downloader
                </span>
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              QukTik is a free, web-based tool designed to help you save short-form videos, MP3 audio tracks, and photo slideshows from TikTok and Douyin for personal archiving and offline viewing without watermarks.
            </p>
          </div>

          {/* Core Tools */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 text-xs tracking-wider uppercase">Free Tools</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/tiktok-video-downloader" className="hover:text-rose-700 transition-colors">TikTok Video Downloader</Link>
              </li>
              <li>
                <Link href="/tiktok-mp3" className="hover:text-rose-700 transition-colors">TikTok to MP3 Converter</Link>
              </li>
              <li>
                <Link href="/tiktok-photo" className="hover:text-rose-700 transition-colors">Photo Slideshow Downloader</Link>
              </li>
              <li>
                <Link href="/tiktok-story" className="hover:text-rose-700 transition-colors">TikTok Story Saver</Link>
              </li>
              <li>
                <Link href="/douyin-downloader" className="hover:text-rose-700 transition-colors font-semibold text-rose-700">Douyin Downloader (抖音)</Link>
              </li>
              <li>
                <Link href="/tiktok-ringtone" className="hover:text-rose-700 transition-colors">TikTok Ringtone Maker</Link>
              </li>
              <li>
                <Link href="/tiktok-avatar" className="hover:text-rose-700 transition-colors">TikTok Avatar / PFP HD</Link>
              </li>
              <li>
                <Link href="/tiktok-bulk-downloader" className="hover:text-rose-700 transition-colors font-semibold text-rose-600">Bulk ZIP Downloader (Multi-URL)</Link>
              </li>
              <li>
                <Link href="/trending-sounds" className="hover:text-rose-700 transition-colors font-semibold text-rose-600">Trending TikTok Sounds MP3</Link>
              </li>
            </ul>
          </div>

          {/* Quick Support & Resources */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 text-xs tracking-wider uppercase">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#how-to-use" className="hover:text-rose-700 transition-colors">How to Download</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-rose-700 transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rose-700 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rose-700 transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 text-xs tracking-wider uppercase">Legal &amp; Policy</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-rose-700 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-rose-700 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-rose-700 transition-colors">DMCA &amp; Fair Use</Link>
              </li>
            </ul>
          </div>
        </div>



        {/* Global Editions & Language Hub */}
        <div className="mt-10 pt-8 border-t border-slate-200">
          <h3 className="text-slate-900 font-bold mb-3 text-xs tracking-wider uppercase">
            Global Editions &amp; Languages (12)
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
            <Link href="/" className="text-slate-600 hover:text-rose-700 font-medium transition-colors">
              🇺🇸 English
            </Link>
            <Link href="/es" className="text-slate-600 hover:text-rose-700 font-medium transition-colors">
              🇪🇸 Español
            </Link>
            <Link href="/pt" className="text-slate-600 hover:text-rose-700 font-medium transition-colors">
              🇧🇷 Português
            </Link>
            <Link href="/id" className="text-slate-600 hover:text-rose-700 font-medium transition-colors">
              🇮🇩 Bahasa Indonesia
            </Link>
            <Link href="/fr" className="text-slate-600 hover:text-rose-700 font-medium transition-colors">
              🇫🇷 Français
            </Link>
            <Link href="/ar" className="text-slate-600 hover:text-rose-700 font-medium transition-colors">
              🇸🇦 العربية
            </Link>
            <Link href="/de" className="text-slate-600 hover:text-rose-700 font-medium transition-colors">
              🇩🇪 Deutsch
            </Link>
            <Link href="/vi" className="text-slate-600 hover:text-rose-700 font-medium transition-colors">
              🇻🇳 Tiếng Việt
            </Link>
            <Link href="/tr" className="text-slate-600 hover:text-rose-700 font-medium transition-colors">
              🇹🇷 Türkçe
            </Link>
            <Link href="/it" className="text-slate-600 hover:text-rose-700 font-medium transition-colors">
              🇮🇹 Italiano
            </Link>
            <Link href="/ru" className="text-slate-600 hover:text-rose-700 font-medium transition-colors">
              🇷🇺 Русский
            </Link>
            <Link href="/ja" className="text-slate-600 hover:text-rose-700 font-medium transition-colors">
              🇯🇵 日本語
            </Link>
          </div>
        </div>

        {/* Official DMCA Disclaimer */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed shadow-sm">
          <p>
            <strong className="text-slate-800">Disclaimer &amp; Trademark Notice:</strong> QukTik is an independent web tool designed for personal, non-commercial, and fair-use archiving. QukTik does not host or store copyrighted media files on its servers; all content streams directly from official content delivery network (CDN) endpoints. QukTik is not affiliated with, endorsed by, or sponsored by TikTok, Douyin, ByteDance Ltd., Musical.ly, or any of their subsidiaries. All trademarks belong to their respective owners.
          </p>
        </div>

        <div className="mt-6 text-center sm:text-left text-xs text-slate-500">
          <p>© {currentYear} QukTik. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
