import React from 'react';
import { Sparkles, Zap, ShieldCheck, Music2, Smartphone, DownloadCloud } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: Sparkles,
      title: 'Clean Videos With No Watermark',
      description: 'Get the exact video as uploaded by the creator, without the jumping TikTok logo or username text blocking the screen.',
      badge: 'Zero Logos',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Full Resolution & Original Colors',
      description: 'We pull the video directly from the source network, keeping the original 1080p sharpness, frame rate, and audio clarity.',
      badge: '1080p HD',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Music2,
      title: 'Separate MP3 Audio Extraction',
      description: 'Found a catchy song or viral sound? Grab just the audio track as an MP3 file ready for your phone, ringtone, or playlist.',
      badge: '320kbps Audio',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: DownloadCloud,
      title: 'Photo Slideshows & Carousels',
      description: 'TikTok photo posts and memes are fully supported. Download every slide in crisp original resolution with one click.',
      badge: 'Full Galleries',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Smartphone,
      title: 'Works on All Phones & Computers',
      description: 'No apps to install from unknown websites. Just open Safari on iPhone, Chrome on Android, or your PC browser and download.',
      badge: 'Universal',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: ShieldCheck,
      title: 'Completely Free & Anonymous',
      description: 'No account needed, no email requested, and we do not store copies of your downloaded videos on our servers.',
      badge: 'No Account',
      gradient: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
          Built For Everyday Use
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
          Everything You Need In A Video Downloader
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          No complicated settings, no subscriptions, and no intrusive watermarks. Here is what makes QukTik the simplest way to save short-form videos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-rose-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.gradient} p-0.5 shadow-md shadow-slate-200`}>
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-slate-800" />
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {feature.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
