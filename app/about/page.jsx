import React from 'react';
import { Shield, Sparkles, Users, Award, Heart, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Us | TikFlow Team',
  description: 'Learn about TikFlow, our mission to provide clean video archiving tools, and our commitment to user privacy and streaming technology.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-slate-300">
      
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
          Our Story & Mission
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
          About TikFlow
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
          Building fast, elegant, and secure multimedia web utilities for creators, researchers, and digital archivists worldwide.
        </p>
      </div>

      <div className="space-y-10 text-sm sm:text-base leading-relaxed">
        
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>Who We Are</span>
          </h2>
          <p>
            TikFlow was founded in 2024 by an independent team of web developers and digital media enthusiasts who recognized a recurring frustration among modern content creators: video platforms frequently overlay intrusive bouncing watermarks, logos, and user tags that degrade the viewing experience when archiving or reviewing content offline.
          </p>
          <p>
            We created TikFlow as a lightweight, zero-install, cloud-native web utility designed to fetch and stream public short-form media files directly from source distribution endpoints without quality degradation.
          </p>
        </section>

        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span>Our Core Principles</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 className="font-bold text-white mb-1">1. Absolute User Privacy</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                We do not require account logins, email addresses, or phone numbers. We never store personal identity logs.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 className="font-bold text-white mb-1">2. Zero Server Media Storage</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Our infrastructure operates on a stateless stream proxy model. We never save, host, or cache user video files on our hard drives.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 className="font-bold text-white mb-1">3. Highest Fidelity Guarantee</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                We deliver the exact uncompressed 1080p source stream and 320kbps audio bitrate without re-encoding quality degradation.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 className="font-bold text-white mb-1">4. Ethical Fair-Use Standards</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                We encourage ethical archiving and respect intellectual property rights, providing clear DMCA channels for content owners.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-pink-400" />
            <span>Who Uses TikFlow?</span>
          </h2>
          <p>
            TikFlow serves millions of users monthly, including:
          </p>
          <ul className="space-y-2 list-disc list-inside text-slate-400 text-sm">
            <li><strong>Video Editors & Creators:</strong> Backing up their own creative portfolios without watermarks for cross-posting on YouTube Shorts and Instagram Reels.</li>
            <li><strong>Academic Researchers:</strong> Archiving public viral trends, educational tutorials, and sociological data for scholarly documentation.</li>
            <li><strong>Offline Viewers:</strong> Saving cooking recipes, DIY workout routines, and travel guides for areas with limited internet connectivity.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
