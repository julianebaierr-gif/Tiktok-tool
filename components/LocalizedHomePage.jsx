'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ToolHero from './ToolHero';
import SiteSchema from './SiteSchema';
import { CONTENT_MAP } from '../lib/content';
import { LANGUAGES } from '../lib/translations';
import { 
  Sparkles, Zap, Music2, DownloadCloud, ChevronDown, CheckCircle2, 
  HelpCircle, Smartphone, Monitor, ShieldCheck, AlertCircle, FileText, Check, Tag
} from 'lucide-react';

export default function LocalizedHomePage({ langCode = 'es' }) {
  const data = CONTENT_MAP[langCode] || CONTENT_MAP.es;
  const currentLang = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[1];
  const isRtl = currentLang.dir === 'rtl';

  // FAQ accordion state (first open by default)
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  // Active Device Guide Tab (ios, android, pc)
  const [activeDeviceTab, setActiveDeviceTab] = useState('ios');

  // Sync DOM <html> lang and dir attributes dynamically
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = langCode;
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    }
  }, [langCode, isRtl]);

  return (
    <div className={`relative overflow-hidden ${isRtl ? 'rtl' : 'ltr'}`} dir={currentLang.dir}>
      <SiteSchema />

      {/* 1. Downloader Hero */}
      <ToolHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        placeholder={data.hero.placeholder}
        buttonText={data.hero.button}
        badge={data.hero.badge}
        mode="all"
      />

      {/* 2. Trust Highlights Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">{stat.value}</span>
              <span className="text-xs font-medium text-slate-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 6 Core Capabilities Features Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            {currentLang.label} • QukTik HD Downloader
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            {data.hero.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {data.hero.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.features.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                  {idx === 0 && <Sparkles className="w-6 h-6" />}
                  {idx === 1 && <Zap className="w-6 h-6" />}
                  {idx === 2 && <Music2 className="w-6 h-6" />}
                  {idx === 3 && <DownloadCloud className="w-6 h-6" />}
                  {idx === 4 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 5 && <CheckCircle2 className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-rose-600">
                <Check className="w-3.5 h-3.5" />
                <span>{item.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Deep-Dive Editorial Guide (1500+ Words Quality) */}
      <section className="py-14 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Header & Intro */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Editorial Guide • {currentLang.label}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {data.deepDive.heading}
            </h2>
            <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 whitespace-pre-line">
              {data.deepDive.intro}
            </div>
          </div>

          {/* Section 1: Extraction Technology */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{data.deepDive.section1Title}</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {data.deepDive.section1Text}
            </p>
          </div>

          {/* Section 2: Step-by-Step Multi-Device Masterclass */}
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {data.deepDive.section2Title}
              </h3>
              {/* Device Tabs */}
              <div className="inline-flex p-1 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setActiveDeviceTab('ios')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeDeviceTab === 'ios'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>iOS / iPhone</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDeviceTab('android')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeDeviceTab === 'android'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Android</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDeviceTab('pc')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeDeviceTab === 'pc'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>PC / Mac</span>
                </button>
              </div>
            </div>

            {/* Tab Contents (All 3 rendered in DOM for 100% SEO indexing) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className={activeDeviceTab === 'ios' ? 'block space-y-3' : 'hidden'}>
                <h4 className="text-lg font-bold text-slate-900 text-rose-600">
                  {data.deepDive.iosGuideTitle}
                </h4>
                <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line space-y-2">
                  {data.deepDive.iosGuideText}
                </div>
              </div>

              <div className={activeDeviceTab === 'android' ? 'block space-y-3' : 'hidden'}>
                <h4 className="text-lg font-bold text-slate-900 text-rose-600">
                  {data.deepDive.androidGuideTitle}
                </h4>
                <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line space-y-2">
                  {data.deepDive.androidGuideText}
                </div>
              </div>

              <div className={activeDeviceTab === 'pc' ? 'block space-y-3' : 'hidden'}>
                <h4 className="text-lg font-bold text-slate-900 text-rose-600">
                  {data.deepDive.pcGuideTitle}
                </h4>
                <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line space-y-2">
                  {data.deepDive.pcGuideText}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Technical Comparison Table */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {data.deepDive.section3Title}
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    {data.deepDive.tableHeaders.map((head, idx) => (
                      <th key={idx} className="p-3 sm:p-4">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.deepDive.tableRows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className={`p-3 sm:p-4 ${cIdx === 1 ? 'font-bold text-rose-600' : 'text-slate-600'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Content Creator Workflow & Fair Use */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-rose-50/30 to-white border border-rose-100 shadow-sm space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{data.deepDive.creatorAdviseTitle}</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {data.deepDive.creatorAdviseText}
            </p>
          </div>

          {/* Section 5: Troubleshooting 4 Issues */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {data.deepDive.troubleshootingTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.deepDive.troubleshootingItems.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {item.problem}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Additional Technical Analysis if present */}
          {data.deepDive.additionalAnalysis && (
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {data.deepDive.additionalAnalysis}
            </div>
          )}

        </div>
      </section>

      {/* 5. EXACTLY 12 FAQs ACCORDION */}
      <section className="py-14 sm:py-18 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>12 FAQs • {currentLang.label}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            {currentLang.label} FAQ ({data.faqs.length})
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Everything you need to know about downloading TikTok & Douyin videos safely without watermark.
          </p>
        </div>

        <div className="space-y-3">
          {data.faqs.map((faq, idx) => {
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
                  <span className="pr-4">{idx + 1}. {faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 ${isOpen ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. 300+ LSI & Semantic Keywords Cloud for Maximum SEO Indexing */}
      {data.lsiKeywords && data.lsiKeywords.length > 0 && (
        <section className="py-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Tag className="w-4 h-4 text-rose-600" />
              <span>{currentLang.label} • Semantic Search Terms &amp; LSI Keywords ({data.lsiKeywords.length}+):</span>
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-3 rounded-2xl bg-white border border-slate-200 text-[11px] text-slate-600">
              {data.lsiKeywords.map((kw, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-rose-50 hover:text-rose-700 transition-colors cursor-default"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Global Language Cross-Links Footer Banner */}
      <section className="py-8 border-t border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
            🌍 Global TikTok Downloader in 12 Languages:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {LANGUAGES.map((l) => (
              <a
                key={l.code}
                href={l.path}
                onClick={(e) => {
                  e.preventDefault();
                  try {
                    localStorage.setItem('quktik_preferred_lang', l.code);
                    document.cookie = `quktik_lang=${l.code}; path=/; max-age=31536000; SameSite=Lax`;
                  } catch (err) {}
                  window.location.href = l.path;
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  l.code === langCode
                    ? 'bg-rose-50 text-rose-700 border-rose-300 font-bold shadow-2xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
