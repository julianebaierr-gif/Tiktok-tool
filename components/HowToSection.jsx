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
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 max-w-3xl mx-auto shadow-sm">
          <h4 className="text-slate-900 font-bold text-sm flex items-center gap-2 mb-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{activeTab === 'mobile' ? 'Quick Tip for iPhone Users:' : 'Quick Tip for Computer Users:'}</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {activeTab === 'mobile'
              ? 'On iOS Safari, after tapping Download, tap the blue arrow in the bottom address bar to view your downloaded file. Open the video, tap the bottom Share button, and select "Save Video" to send it right into your Photos app.'
              : 'On Google Chrome or Edge, hitting the green download button will automatically drop the MP4 file into your Downloads folder without having to right-click or wait for re-encoding.'}
          </p>
        </div>

      </div>
    </section>
  );
}
