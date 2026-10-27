'use client';

import React, { useState } from 'react';
import { Share2, Copy, Download, Smartphone, Laptop, Check } from 'lucide-react';

export default function HowToSection() {
  const [activeTab, setActiveTab] = useState('mobile');

  const steps = [
    {
      step: '01',
      icon: Share2,
      title: 'Copy the TikTok Link',
      desc: 'Open the TikTok app or website. Tap the "Share" arrow on your desired video and select "Copy Link".',
    },
    {
      step: '02',
      icon: Copy,
      title: 'Paste URL into TikFlow',
      desc: 'Navigate to TikFlow in any mobile or desktop web browser and paste the copied link into the top input field.',
    },
    {
      step: '03',
      icon: Download,
      title: 'Save Clean File',
      desc: 'Hit "Download", then select "Download MP4 (No Watermark)" or "Download MP3" to save the file instantly.',
    },
  ];

  return (
    <section id="how-to-use" className="py-16 sm:py-20 bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
            Quick 3-Step Guide
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            How to Download TikTok Videos Without Watermark
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            It takes less than 5 seconds. Follow these simple steps on any phone, tablet, or computer.
          </p>

          {/* Device Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 mt-6">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'mobile'
                  ? 'bg-slate-800 text-cyan-300 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile Phone (iOS / Android)</span>
            </button>
            <button
              onClick={() => setActiveTab('desktop')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'desktop'
                  ? 'bg-slate-800 text-cyan-300 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>PC / Mac / Laptop</span>
            </button>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-xl overflow-hidden group hover:border-slate-700 transition-all"
              >
                <div className="absolute top-4 right-6 text-5xl font-black text-slate-800/40 select-none group-hover:text-slate-800/70 transition-colors">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Device specific tips */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 max-w-3xl mx-auto">
          <h4 className="text-white font-semibold text-sm flex items-center gap-2 mb-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{activeTab === 'mobile' ? 'Mobile Pro Tip:' : 'Desktop Pro Tip:'}</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {activeTab === 'mobile'
              ? 'On Apple iPhone running iOS 13 or later, Safari will prompt "Do you want to download this file?". Tap Download, and the clean MP4 video will appear in your Safari Downloads manager, ready to be saved into your Photos Camera Roll with a single tap.'
              : 'On Google Chrome or Edge on Windows and Mac, hitting "Download MP4" saves the video straight into your default "Downloads" folder without re-encoding or opening an annoying new tab.'}
          </p>
        </div>

      </div>
    </section>
  );
}
