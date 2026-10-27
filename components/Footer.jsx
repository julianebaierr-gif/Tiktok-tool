import React from 'react';
import Link from 'next/link';
import { ArrowDownToLine, Shield, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-rose-500 to-indigo-600 p-0.5 shadow-sm">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <ArrowDownToLine className="w-5 h-5 text-rose-500" />
                </div>
              </div>
              <span className="text-xl font-black text-slate-900">
                Tik<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Flow</span>
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              TikFlow is a free, web-based tool designed to help you save short-form videos, MP3 audio tracks, and photo slideshows for personal archiving and offline viewing without watermarks.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-500 pt-1">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>SSL 256-bit Encrypted • Zero Video Storage</span>
            </div>
          </div>

          {/* Core Tools */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 text-xs tracking-wider uppercase">Free Tools</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-rose-600 transition-colors">TikTok Video Downloader</Link>
              </li>
              <li>
                <Link href="/tiktok-mp3" className="hover:text-rose-600 transition-colors">TikTok to MP3 Converter</Link>
              </li>
              <li>
                <Link href="/tiktok-photo" className="hover:text-rose-600 transition-colors">Photo Slideshow Downloader</Link>
              </li>
              <li>
                <Link href="/tiktok-story" className="hover:text-rose-600 transition-colors">TikTok Story Saver</Link>
              </li>
            </ul>
          </div>

          {/* Quick Support & Resources */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 text-xs tracking-wider uppercase">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#how-to-use" className="hover:text-rose-600 transition-colors">How to Download</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-rose-600 transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rose-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rose-600 transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 text-xs tracking-wider uppercase">Legal &amp; Policy</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-rose-600 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-rose-600 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-rose-600 transition-colors">DMCA &amp; Fair Use</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Supported Languages Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-slate-700">Supported Languages:</span>
            <span className="hover:text-slate-900 cursor-pointer">English</span>
            <span>•</span>
            <span className="hover:text-slate-900 cursor-pointer">Español</span>
            <span>•</span>
            <span className="hover:text-slate-900 cursor-pointer">Português</span>
            <span>•</span>
            <span className="hover:text-slate-900 cursor-pointer">Bahasa Indonesia</span>
            <span>•</span>
            <span className="hover:text-slate-900 cursor-pointer">العربية</span>
            <span>•</span>
            <span className="hover:text-slate-900 cursor-pointer">اردو</span>
            <span>•</span>
            <span className="hover:text-slate-900 cursor-pointer">Français</span>
            <span>•</span>
            <span className="hover:text-slate-900 cursor-pointer">Deutsch</span>
          </div>
          <div>
            <span>Status: <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1 animate-pulse"></span> All Systems Operational</span>
          </div>
        </div>

        {/* Official DMCA Disclaimer */}
        <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed shadow-sm">
          <p>
            <strong className="text-slate-800">Disclaimer &amp; Trademark Notice:</strong> TikFlow is an independent web tool designed for personal, non-commercial, and fair-use archiving. TikFlow does not host or store copyrighted media files on its servers; all content streams directly from official content delivery network (CDN) endpoints. TikFlow is not affiliated with, endorsed by, or sponsored by TikTok, ByteDance Ltd., Musical.ly, or any of their subsidiaries. All trademarks belong to their respective owners.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {currentYear} TikFlow. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Fast, clean &amp; lightweight web utility
          </p>
        </div>

      </div>
    </footer>
  );
}
