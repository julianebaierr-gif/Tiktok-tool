import React from 'react';
import { Sparkles, Zap, ShieldCheck, Music2, Smartphone, DownloadCloud } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: Sparkles,
      title: 'Zero Watermark & No Logo',
      description: 'Automatically strips out the moving TikTok badge and creator ID overlay, giving you pristine, uncompressed video playback.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Zap,
      title: 'Ultra High Definition (HD)',
      description: 'Fetches raw master streams directly from TikTok content delivery nodes with zero quality degradation or extra compression.',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: Music2,
      title: 'Studio MP3 Audio Extraction',
      description: 'Instantly extract sound tracks, trending background music, and voiceovers into crystal-clear 320kbps MP3 audio files.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: DownloadCloud,
      title: 'Slideshow & Photo Support',
      description: 'Easily save full TikTok photo carousels and slideshow galleries in original high-resolution JPG format in one click.',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      icon: Smartphone,
      title: 'All Devices & Browsers',
      description: 'Seamlessly works across Apple iPhone, iPad, Android smartphones, Windows PC, Mac, Linux, and all major web browsers.',
      color: 'from-purple-400 to-indigo-500',
    },
    {
      icon: ShieldCheck,
      title: '100% Free & Privacy First',
      description: 'No account registration, no credit card, and no invasive permissions required. We never store your downloaded videos on our servers.',
      color: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase mb-2">
          Engineered for Speed & Quality
        </h2>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Why Millions Choose TikFlow Over Ordinary Downloaders
        </h3>
        <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
          Experience the fastest, cleanest, and most reliable web tool designed specifically to preserve original video quality and soundtrack clarity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
