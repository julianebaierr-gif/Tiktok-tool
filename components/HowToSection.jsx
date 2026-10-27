'use client';

import React, { useState } from 'react';
import { Share2, Copy, Download, Smartphone, Laptop, Check } from 'lucide-react';

export default function HowToSection() {
  const [activeTab, setActiveTab] = useState('mobile');

  const mobileSteps = [
    {
      step: '01',
      icon: Share2,
      title: 'Copy the TikTok Link',
      desc: 'Open the TikTok app on your iPhone or Android phone. Navigate to your desired video, tap the Share arrow, and tap Copy Link.',
    },
    {
      step: '02',
      icon: Copy,
      title: 'Paste It into QukTik',
      desc: 'Open Safari or Chrome and visit QukTik. Tap Paste Link into the input field and tap Download.',
    },
    {
      step: '03',
      icon: Download,
      title: 'Save Clean Video to Gallery',
      desc: 'Tap Download MP4 (Without Watermark) or Download MP3. The clean media saves directly to your Photos or Files app.',
    },
  ];

  const desktopSteps = [
    {
      step: '01',
      icon: Share2,
      title: 'Copy Video URL from Browser',
      desc: 'Open tiktok.com on your PC or Mac. Copy the URL from your browser address bar or click Share > Copy link.',
    },
    {
      step: '02',
      icon: Copy,
      title: 'Paste into QukTik Web',
      desc: 'Navigate to QukTik in Chrome, Edge, or Safari. Paste the copied TikTok URL into the search bar and click Download.',
    },
    {
      step: '03',
      icon: Download,
      title: 'Save MP4 to Downloads Folder',
      desc: 'Click Download Video (Without Watermark). The original 1080p MP4 file downloads straight to your Downloads folder.',
    },
  ];

  const steps = activeTab === 'mobile' ? mobileSteps : desktopSteps;

  return (
    <section id="how-to-use" className="py-14 sm:py-20 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Quick Walkthrough
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            {activeTab === 'mobile' ? 'How to Download on iPhone & Android' : 'How to Download on PC & Mac'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            No software installation or account creation needed. Follow these three simple steps:
          </p>

          {/* Clean Segmented Device Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-200/60 border border-slate-200 mt-6">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'mobile'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile (iOS &amp; Android)</span>
            </button>
            <button
              onClick={() => setActiveTab('desktop')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'desktop'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>Desktop (PC &amp; Mac)</span>
            </button>
          </div>
        </div>

        {/* 3D Visual Step-by-Step Illustration */}
        <div className="max-w-4xl mx-auto mb-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white transition-all">
          <img
            key={activeTab}
            src={activeTab === 'mobile' ? '/images/how-to-download-3d.png' : '/images/how-to-download-desktop-3d.png'}
            alt={activeTab === 'mobile' ? 'Visual walkthrough showing how to copy TikTok link on phone and download' : 'Visual walkthrough showing how to download TikTok videos on PC and Mac browser'}
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                    <Icon className="w-5 h-5 text-rose-600" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80">
                    Step {item.step}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Device specific tips */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 max-w-3xl mx-auto shadow-xs space-y-2">
          <h4 className="text-slate-900 font-bold text-sm sm:text-base flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{activeTab === 'mobile' ? 'Quick Tips for Mobile Users (iOS & Android):' : 'Quick Tips for Desktop Users (PC, Mac, Linux):'}</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {activeTab === 'mobile' 
              ? 'On iOS devices, downloaded videos can be moved from the Safari Downloads manager into your Photos camera roll by tapping the Share button and selecting "Save Video". On Android, files appear immediately inside your Gallery app.'
              : 'On desktop browsers, press Ctrl+J (Windows) or Cmd+Option+L (Mac) to open your recent downloads log. Videos download directly in universally playable progressive MP4 format.'}
          </p>
        </div>

      </div>
    </section>
  );
}
