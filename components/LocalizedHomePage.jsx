'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ToolHero from './ToolHero';
import SiteSchema from './SiteSchema';
import { TRANSLATIONS, LANGUAGES } from '../lib/translations';
import { Sparkles, Zap, Music2, DownloadCloud, ChevronDown, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

export default function LocalizedHomePage({ langCode = 'en' }) {
  const t = TRANSLATIONS[langCode] || TRANSLATIONS.en;
  const currentLang = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[0];
  const isRtl = currentLang.dir === 'rtl';

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const features = [
    {
      icon: Sparkles,
      title: t.feat1Title,
      description: t.feat1Desc,
      badge: t.badgeNoWatermark,
    },
    {
      icon: Zap,
      title: t.feat2Title,
      description: t.feat2Desc,
      badge: t.badgeSourceQuality,
    },
    {
      icon: Music2,
      title: t.feat3Title,
      description: t.feat3Desc,
      badge: t.badgeStudioAudio,
    },
    {
      icon: DownloadCloud,
      title: t.feat4Title,
      description: t.feat4Desc,
      badge: 'ZIP Album',
    },
  ];

  const steps = [
    { num: '1', title: t.step1Title, desc: t.step1Desc },
    { num: '2', title: t.step2Title, desc: t.step2Desc },
    { num: '3', title: t.step3Title, desc: t.step3Desc },
  ];

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
  ];

  return (
    <div className={`relative overflow-hidden ${isRtl ? 'rtl' : 'ltr'}`} dir={currentLang.dir}>
      <SiteSchema />

      {/* Downloader Hero with Translated UI Strings */}
      <ToolHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        placeholder={t.placeholder}
        buttonText={t.downloadBtn}
        badge={t.badgeNoWatermark}
        mode="all"
      />

      {/* Trust Highlights Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">100%</span>
            <span className="text-xs font-medium text-slate-500">{t.badgeNoWatermark}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">1080p</span>
            <span className="text-xs font-medium text-slate-500">{t.badgeSourceQuality}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">320kbps</span>
            <span className="text-xs font-medium text-slate-500">{t.badgeStudioAudio}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">0 Login</span>
            <span className="text-xs font-medium text-slate-500">{t.badgePrivacy}</span>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            {currentLang.label} • QukTik
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            {t.featTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.featSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-rose-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.badge}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How to Use Tutorial */}
      <section className="py-12 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t.howToTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs relative">
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center mb-3">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>FAQ ({currentLang.label})</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.faqTitle}
          </h2>
          <p className="text-sm text-slate-600 mt-2">{t.faqSubtitle}</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-rose-600 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Language Cross-Links Banner */}
      <section className="py-8 border-t border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
            🌍 Global TikTok Downloader in 12 Languages:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {LANGUAGES.map((l) => (
              <Link
                key={l.code}
                href={l.path}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  l.code === langCode
                    ? 'bg-rose-50 text-rose-700 border-rose-300 font-bold shadow-2xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
