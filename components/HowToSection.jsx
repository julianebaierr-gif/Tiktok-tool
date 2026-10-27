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
      desc: 'Open the TikTok app on your phone or computer. Find the video you want to save, tap the Share button, and hit Copy Link.',
    },
    {
      step: '02',
      icon: Copy,
      title: 'Paste It into TikFlow',
      desc: 'Come over to TikFlow in your web browser. Paste the link into the search box at the top and press Download.',
    },
    {
      step: '03',
      icon: Download,
      title: 'Save the Clean Video or Audio',
      desc: 'Pick your preferred format: click Download MP4 for the watermark-free video, or Download MP3 for just the music.',
    },
  ];

  return (
    <section id="how-to-use" className="py-16 sm:py-20 bg-slate-50/80 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200">
            Simple 3-Step Guide
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            How to Download TikTok Videos on Your Phone or PC
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            You do not need to install extra apps or create an account. Here is the whole process:
          </p>

          {/* Device Tabs */}
          <div className="inline-flex p-1 rounded-2xl bg-white border border-slate-200 mt-6 shadow-sm">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'mobile'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile Phone (iPhone & Android)</span>
            </button>
            <button
              onClick={() => setActiveTab('desktop')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'desktop'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>Computer (PC & Mac)</span>
            </button>
          </div>
        </div>

        {/* 3D Visual Step-by-Step Illustration (Child-Friendly & Understandable Without Reading) */}
        <div className="max-w-4xl mx-auto mb-12 overflow-hidden rounded-3xl border border-slate-200/90 shadow-xl bg-white">
          <img
            src="/images/how-to-download-3d.png"
            alt="3D visual illustration showing how to copy TikTok link and download video"
            className="w-full h-auto object-cover max-h-[380px]"
            loading="lazy"
          />
          <div className="p-4 bg-white border-t border-slate-100 flex flex-wrap items-center justify-around gap-2 text-xs sm:text-sm font-bold text-slate-700">
            <span className="flex items-center gap-1.5 text-rose-600">
              <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-xs">1</span>
              <span>Tap Share &gt; Copy Link</span>
            </span>
            <span className="text-slate-300">➔</span>
            <span className="flex items-center gap-1.5 text-indigo-600">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs">2</span>
              <span>Paste on TikFlow</span>
            </span>
            <span className="text-slate-300">➔</span>
            <span className="flex items-center gap-1.5 text-emerald-600">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">3</span>
              <span>Save HD Video to Gallery!</span>
            </span>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="absolute top-5 right-6 text-5xl font-black text-slate-100 select-none">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 mb-6">
                  <Icon className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Device specific tips */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 max-w-3xl mx-auto shadow-sm space-y-3">
          <h4 className="text-slate-900 font-bold text-base flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-600" />
            <span>{activeTab === 'mobile' ? 'Quick Tips for Mobile Users (iOS & Android):' : 'Quick Tips for Computer Users (PC, Mac, Linux):'}</span>
          </h4>
          {activeTab === 'mobile' ? (
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">iPhone / iPad (Safari):</strong> After pressing Download, tap the blue downward arrow in Safari&apos;s address bar to inspect the file. Tap the downloaded video, tap the bottom-left Share icon, and tap <em>&ldquo;Save Video&rdquo;</em> to move it into your Apple Photos Camera Roll.
              </p>
              <p>
                <strong className="text-slate-900">Android (Chrome / Samsung Internet):</strong> Tapping Download saves the MP4 instantly to your phone&apos;s internal storage under <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-xs">/Download</code>. You can open it right away in Google Photos, Files by Google, or your device Gallery.
              </p>
            </div>
          ) : (
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">Windows &amp; Linux:</strong> Files save automatically to your personal <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-xs">C:\Users\...\Downloads</code> directory. Press <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-xs font-mono font-bold text-slate-800">Ctrl + J</kbd> in Chrome or Edge to view your completed downloads.
              </p>
              <p>
                <strong className="text-slate-900">macOS (MacBook &amp; iMac):</strong> Files save to your user Downloads folder. Press <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-xs font-mono font-bold text-slate-800">Cmd + Option + L</kbd> in Safari or <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-xs font-mono font-bold text-slate-800">Cmd + Shift + J</kbd> in Chrome to reveal the file in Finder.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
