import React from 'react';
import { Sparkles, Zap, ShieldCheck, Music2, Smartphone, DownloadCloud } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: Sparkles,
      title: 'Clean Videos Without Watermark',
      description: 'Get the exact video as uploaded by the creator, without the bouncing TikTok watermark or author username blocking the frame.',
      badge: 'No Watermarks',
    },
    {
      icon: Zap,
      title: 'Original Source Quality (1080p)',
      description: 'We pull media directly from source content delivery nodes, preserving genuine 1080p resolution, frame rate, and color balance.',
      badge: 'High Definition',
    },
    {
      icon: Music2,
      title: 'High-Bitrate MP3 Extraction',
      description: 'Isolate catchy background audio or viral dialogues into clean 320kbps MP3 tracks ready for offline listening or ringtones.',
      badge: 'Audio Converter',
    },
    {
      icon: DownloadCloud,
      title: 'Photo Slideshows & Carousels',
      description: 'TikTok photo posts and memes are fully supported. Download every slide in original uncompressed JPG quality.',
      badge: 'Image Galleries',
    },
    {
      icon: Smartphone,
      title: 'Universal Device Compatibility',
      description: 'Operates directly in Safari, Chrome, Edge, and Firefox. Works across iPhones, Android smartphones, iPads, PCs, and Macs.',
      badge: 'Zero Install',
    },
    {
      icon: ShieldCheck,
      title: 'Private & No Login Needed',
      description: 'No account registration, no credit cards, and no stored media logs. All media streams securely through an ephemeral browser sandbox.',
      badge: 'Safe & Secure',
    },
  ];

  return (
    <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Core Capabilities
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
          Designed for Speed, Quality &amp; Privacy
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Everything you need in a modern media utility. Clean user experience, no apps required, and no destructive compression.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-800">
                    <Icon className="w-5 h-5 text-rose-600" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
