import React from 'react';
import { Shield, Sparkles, Users } from 'lucide-react';

export const metadata = {
  title: 'About Us | QukTik Team',
  description: 'Learn about QukTik, our mission to provide clean video archiving tools, and our commitment to user privacy and streaming technology.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-slate-700">
      
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200">
          Our Story &amp; Mission
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4">
          About QukTik
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Building fast, elegant, and secure multimedia web utilities for creators, researchers, and digital archivists worldwide.
        </p>
      </div>

      {/* Official Brand Identity Showcase */}
      <div className="flex justify-center mb-12">
        <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-center hover:scale-[1.02] transition-transform">
          <img src="/logo.svg" alt="QukTik Official Brand Logo" className="h-14 sm:h-18 w-auto max-w-full" />
        </div>
      </div>

      <div className="space-y-10 text-sm sm:text-base leading-relaxed">
        
        <section className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-rose-500" />
            <span>Who We Are</span>
          </h2>
          <p>
            QukTik was created in 2024 by an independent group of creators and software developers who were tired of having jumping watermark logos ruin their short-form videos. Every time you save your own video inside TikTok, the app stamps that logo over captions and faces.
          </p>
          <p>
            We built QukTik as a free, lightweight, web-only tool that lets anyone grab the clean, unbranded original video or audio file directly to their phone or computer in seconds.
          </p>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-600" />
            <span>What We Stand For</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-1">1. User Privacy First</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                We do not ask for signups, phone numbers, or passwords. Your activity is completely private.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-1">2. Zero Server Storage</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                We never store copies of your downloaded videos on our servers. Files stream directly to your device.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-1">3. Original Quality</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                We pull the original 1080p source file and up to 320kbps audio without blurry re-encoding.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-1">4. Creator Respect</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                We encourage ethical archiving and proper creator credits, and provide fast DMCA takedown channels.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <span>Who Uses QukTik?</span>
          </h2>
          <p>
            People around the world use QukTik every day:
          </p>
          <ul className="space-y-2 list-disc list-inside text-slate-600 text-sm sm:text-base">
            <li><strong>Content Creators:</strong> Saving their own videos to re-upload to Instagram Reels and YouTube Shorts without logo penalties.</li>
            <li><strong>Students &amp; Researchers:</strong> Archiving tutorials, news breakdowns, and educational videos for study.</li>
            <li><strong>Everyday Viewers:</strong> Saving workout routines, recipes, travel ideas, and favorite songs for offline watching.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
