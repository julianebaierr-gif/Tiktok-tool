import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import SiteSchema from '../../components/SiteSchema';
import FaqSection from '../../components/FaqSection';
import TrendingSoundsClient from '../../components/TrendingSoundsClient';
import { SOUNDS_EDITORIAL, SOUNDS_FAQS_EN } from '../../lib/tools/soundsEditorialData';
import { 
  Music, 
  Sparkles, 
  TrendingUp, 
  Flame, 
  HelpCircle, 
  ShieldCheck, 
  Cpu, 
  Headphones, 
  Layers, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Scissors,
  Smartphone,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: { absolute: 'Trending TikTok Sounds MP3 | QukTik' },
  description: 'Listen and download trending TikTok sounds and viral songs in 320kbps MP3 for free. Weekly updated chart of top viral TikTok music with no login.',
  alternates: {
    canonical: 'https://www.quktik.com/trending-sounds',
    languages: {
      'x-default': 'https://www.quktik.com/trending-sounds',
      'en': 'https://www.quktik.com/trending-sounds',
      'es': 'https://www.quktik.com/es/trending-sounds',
      'pt': 'https://www.quktik.com/pt/trending-sounds',
      'id': 'https://www.quktik.com/id/trending-sounds',
      'fr': 'https://www.quktik.com/fr/trending-sounds',
      'ar': 'https://www.quktik.com/ar/trending-sounds',
      'de': 'https://www.quktik.com/de/trending-sounds',
      'vi': 'https://www.quktik.com/vi/trending-sounds',
      'tr': 'https://www.quktik.com/tr/trending-sounds',
      'it': 'https://www.quktik.com/it/trending-sounds',
      'ru': 'https://www.quktik.com/ru/trending-sounds',
      'ja': 'https://www.quktik.com/ja/trending-sounds',
    }
  },
  openGraph: {
    title: 'Trending TikTok Sounds MP3 | QukTik',
    description: 'Listen and download trending TikTok sounds and viral songs in 320kbps MP3 for free. Weekly updated chart of top viral TikTok music with no login.',
    url: 'https://www.quktik.com/trending-sounds',
    type: 'website',
  }
};

export default function TrendingSoundsPage() {
  const edit = SOUNDS_EDITORIAL.en;
  const faqs = SOUNDS_FAQS_EN;

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <SiteSchema />

      {/* Breadcrumbs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs 
          items={[
            { name: 'Home', url: '/' },
            { name: 'Trending Sounds', url: '/trending-sounds' }
          ]} 
        />
      </div>

      {/* Main Interactive Viral Sounds Player & Extractor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <TrendingSoundsClient langCode="en" />
      </div>

      {/* Trust Highlights Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">Weekly Top 20</span>
            <span className="text-xs font-medium text-slate-500">Curated Viral Chart</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">320kbps MP3</span>
            <span className="text-xs font-medium text-slate-500">Uncompressed Audio</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">Ringtone Cutter</span>
            <span className="text-xs font-medium text-slate-500">15-30s Web Audio Trimmer</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">100% Free</span>
            <span className="text-xs font-medium text-slate-500">No App or Login</span>
          </div>
        </div>
      </div>

      {/* 2500+ Words Deep-Dive Editorial Handbook */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Header & Comprehensive Introduction */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">
              {edit.heroBadge} • Deep Technical Masterclass
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {edit.mainHeading}
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
              {edit.introLead}
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              {edit.introBody}
            </p>
          </div>

          {/* Section 1: The FYP Recommendation Engine & Audio Clustering */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{edit.sec1Heading}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {edit.sec1Text}
            </p>
          </div>

          {/* Section 2: Forensic 20-Competitor Benchmarking */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{edit.sec2Heading}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {edit.sec2Text}
            </p>
          </div>

          {/* Comparison Table */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Acoustic Comparison: QukTik Trending Sounds vs Traditional Downloaders
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-3 sm:p-4">Feature Metric</th>
                    <th className="p-3 sm:p-4 text-rose-600">QukTik Trending Sounds</th>
                    <th className="p-3 sm:p-4">Top 20 Competitors (SnapTik, SSSTik)</th>
                    <th className="p-3 sm:p-4">YouTube MP3 Converters (Y2Mate)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="p-3 sm:p-4 font-semibold text-slate-800">Weekly Curated Soundboard</td>
                    <td className="p-3 sm:p-4 font-bold text-rose-600">Top 20 Viral Tracks + Player</td>
                    <td className="p-3 sm:p-4 text-slate-600">None (Blank URL Input Only)</td>
                    <td className="p-3 sm:p-4 text-slate-600">None (Search Engine Only)</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-slate-800">Live In-Browser Audio Audition</td>
                    <td className="p-3 sm:p-4 font-bold text-rose-600">1-Click Play / Pause Waveform</td>
                    <td className="p-3 sm:p-4 text-slate-600">No Audio Preview</td>
                    <td className="p-3 sm:p-4 text-slate-600">No Audio Preview</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 sm:p-4 font-semibold text-slate-800">Direct MP3 Audio Bitrate</td>
                    <td className="p-3 sm:p-4 font-bold text-rose-600">320kbps Master Stereo</td>
                    <td className="p-3 sm:p-4 text-slate-600">Compressed 96kbps / 128kbps</td>
                    <td className="p-3 sm:p-4 text-slate-600">Variable 128kbps Mono</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-slate-800">Built-in Ringtone Cutter</td>
                    <td className="p-3 sm:p-4 font-bold text-rose-600">15-30s Web Audio Trimmer</td>
                    <td className="p-3 sm:p-4 text-slate-600">Unsupported</td>
                    <td className="p-3 sm:p-4 text-slate-600">Unsupported</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 sm:p-4 font-semibold text-slate-800">Genre Categorization</td>
                    <td className="p-3 sm:p-4 font-bold text-rose-600">Pop, Remixes, POV, Aesthetic</td>
                    <td className="p-3 sm:p-4 text-slate-600">None</td>
                    <td className="p-3 sm:p-4 text-slate-600">None</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 sm:p-4 font-semibold text-slate-800">Safety & Advertisements</td>
                    <td className="p-3 sm:p-4 font-bold text-rose-600">0 Deceptive Ads • Clean UI</td>
                    <td className="p-3 sm:p-4 text-slate-600">Aggressive Pop-Unders & Adware</td>
                    <td className="p-3 sm:p-4 text-slate-600">Scam Antivirus Warnings</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Acoustic Engineering & Bitrate Dynamics */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Headphones className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{edit.sec3Heading}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {edit.sec3Text}
            </p>
          </div>

          {/* Section 4: The 72-Hour Velocity Window */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{edit.sec4Heading}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {edit.sec4Text}
            </p>
          </div>

          {/* Section 5: Integrated Ringtone Suite */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Scissors className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{edit.sec5Heading}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {edit.sec5Text}
            </p>
          </div>

          {/* Section 6: Commercial Music Library vs Original Sounds */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{edit.sec6Heading}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {edit.sec6Text}
            </p>
          </div>

          {/* Section 7: Cross-Platform NLE Timeline Workflow */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{edit.sec7Heading}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {edit.sec7Text}
            </p>
          </div>

          {/* Section 8: Technical Troubleshooting */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{edit.sec8Heading}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {edit.sec8Text}
            </p>
          </div>

        </div>
      </section>

      {/* 12 In-Depth Frequently Asked Questions with FAQPage Schema */}
      <FaqSection
        faqs={faqs}
        langCode="en"
        title="Frequently Asked Questions"
        badge="12 In-Depth FAQs • Trending Sounds"
        subtitle="Everything you need to know about discovering, converting, and saving trending TikTok sounds."
      />
    </div>
  );
}
