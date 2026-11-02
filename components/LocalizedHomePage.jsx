'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ToolHero from './ToolHero';
import SiteSchema from './SiteSchema';
import FaqSection from './FaqSection';
import { FormattedCreatorAdvice, FormattedTechnicalAnalysis } from './FormattedEditorial';
import { CONTENT_MAP } from '../lib/content';
import { ARCHITECTURAL_GUIDE } from '../lib/tools/architecturalGuideData';
import { LANGUAGES } from '../lib/translations';
import { 
  Sparkles, Zap, Music2, DownloadCloud, ChevronDown, CheckCircle2, 
  HelpCircle, Smartphone, Monitor, ShieldCheck, AlertCircle, FileText, Check, Tag
} from 'lucide-react';

export default function LocalizedHomePage({ langCode = 'es' }) {
  const data = CONTENT_MAP[langCode] || CONTENT_MAP.es;
  const currentLang = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[1];
  const archGuide = ARCHITECTURAL_GUIDE[langCode] || ARCHITECTURAL_GUIDE.en;
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
        langCode={langCode}
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
          <FormattedCreatorAdvice 
            title={data.deepDive.creatorAdviseTitle} 
            text={data.deepDive.creatorAdviseText} 
          />

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

          {/* Section 6: In-Depth Technical Architecture & Top 20 Competitor Gap Analysis */}
          {data.deepDive.additionalAnalysis && (
            <FormattedTechnicalAnalysis text={data.deepDive.additionalAnalysis} />
          )}

        </div>
      </section>

      
      {/* Comprehensive Architectural & Technical Deep Dive */}
      {archGuide && (
        <section className="py-14 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-rose-700 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200 inline-block mb-3">
                {archGuide.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {archGuide.heading}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {archGuide.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {archGuide.topics.map((topic, idx) => (
                <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-rose-700 leading-relaxed">
                    {topic.lead}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                    {topic.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. EXACTLY 12 FAQs ACCORDION WITH FAQPAGESCHEMA */}
      <FaqSection
        faqs={data.faqs}
        langCode={langCode}
        title={`${currentLang.label} FAQ`}
        badge={`12 FAQs • ${currentLang.label}`}
        subtitle="Everything you need to know about downloading TikTok & Douyin videos safely without watermark."
      />
    </div>
  );
}
