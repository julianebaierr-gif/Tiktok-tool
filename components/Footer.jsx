import React from 'react';
import Link from 'next/link';
import { ArrowDownToLine, Shield, Heart, HelpCircle, FileText, Lock, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <ArrowDownToLine className="w-5 h-5 text-pink-400" />
                </div>
              </div>
              <span className="text-xl font-black text-white">
                Tik<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Flow</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              TikFlow is a high-speed, secure online web tool that allows creators and users to save videos, audio tracks, and photo slideshows for personal archiving and offline reference without watermarks.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-500 pt-1">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>SSL 256-bit Encrypted & Privacy-First Architecture</span>
            </div>
          </div>

          {/* Core Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase">Free Web Tools</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-300 transition-colors">TikTok Video Downloader</Link>
              </li>
              <li>
                <Link href="/tiktok-mp3" className="hover:text-cyan-300 transition-colors">TikTok to MP3 Converter</Link>
              </li>
              <li>
                <Link href="/tiktok-photo" className="hover:text-cyan-300 transition-colors">TikTok Photo Downloader</Link>
              </li>
              <li>
                <Link href="/tiktok-story" className="hover:text-cyan-300 transition-colors">TikTok Story Saver</Link>
              </li>
            </ul>
          </div>

          {/* Quick Support & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#how-to-use" className="hover:text-cyan-300 transition-colors">How to Download</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-cyan-300 transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors">About TikFlow Team</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal Compliance (AdSense 2026 Essential) */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase">Legal & Compliance</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-cyan-300 transition-colors">Privacy Policy (GDPR/CCPA)</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-cyan-300 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-cyan-300 transition-colors">DMCA & Fair Use Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Supported Languages Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-slate-400">Supported Regions:</span>
            <span className="hover:text-slate-300 cursor-pointer">English</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Español</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Português</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Bahasa Indonesia</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">العربية</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">اردو</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Français</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Deutsch</span>
          </div>
          <div>
            <span>Status: <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1 animate-pulse"></span> All Systems Operational</span>
          </div>
        </div>

        {/* Official DMCA Disclaimer (Crucial for AdSense) */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">Disclaimer & Trademark Notice:</strong> TikFlow is an independent web-based utility tool developed for personal, non-commercial, and fair-use archiving. TikFlow does not host, store, or republish copyrighted media files on its servers; all multimedia content is streamed directly from official content delivery network (CDN) endpoints. TikFlow is not affiliated, associated, authorized, endorsed by, or in any way officially connected with TikTok, ByteDance Ltd., Musical.ly, or any of their affiliates or subsidiaries. TikTok and related trademarks, logos, and emblems are registered trademarks of their respective owners.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {currentYear} TikFlow. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with modern Next.js for ultra-fast performance
          </p>
        </div>

      </div>
    </footer>
  );
}
