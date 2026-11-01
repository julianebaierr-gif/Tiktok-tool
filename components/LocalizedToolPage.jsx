'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ToolHero from './ToolHero';
import Breadcrumbs from './Breadcrumbs';
import SiteSchema from './SiteSchema';
import { TOOL_DEFINITIONS, VALID_TOOLS } from '../lib/tools';
import { LANGUAGES } from '../lib/translations';
import { DEVICE_STEPS, TOOL_FAQS, UI_STRINGS } from '../lib/tools/localizedContent';
import { TOOL_EDITORIAL } from '../lib/tools/toolEditorial';
import { 
  Sparkles, Zap, Music2, DownloadCloud, ChevronDown, CheckCircle2, 
  HelpCircle, Smartphone, Monitor, ShieldCheck, AlertCircle, ArrowRight, Check, Image as ImageIcon,
  History, Globe2, Bell, UserCheck, Video, FileText, Layers, RefreshCw
} from 'lucide-react';

export default function LocalizedToolPage({ langCode = 'de', toolSlug = 'tiktok-avatar' }) {
  const toolData = TOOL_DEFINITIONS[toolSlug] || TOOL_DEFINITIONS['tiktok-video-downloader'];
  const currentLang = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[1];
  const isRtl = currentLang.dir === 'rtl';
  const hero = toolData.hero[langCode] || toolData.hero.en;

  // Localized UI strings, FAQs, Device Steps, and Editorial Content
  const ui = UI_STRINGS[langCode] || UI_STRINGS.en;
  const toolFaqs = TOOL_FAQS[langCode] || TOOL_FAQS.en;
  const devSteps = DEVICE_STEPS[langCode] || DEVICE_STEPS.en;
  const edit = TOOL_EDITORIAL[langCode] || TOOL_EDITORIAL.en;

  // FAQ accordion state
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

  const homeHref = langCode === 'en' ? '/' : `/${langCode}`;
  const relatedToolsList = VALID_TOOLS.filter(t => t !== toolSlug).slice(0, 4);

  const getToolIcon = (slug) => {
    switch (slug) {
      case 'tiktok-mp3': return Music2;
      case 'tiktok-photo': return ImageIcon;
      case 'tiktok-story': return History;
      case 'douyin-downloader': return Globe2;
      case 'tiktok-ringtone': return Bell;
      case 'tiktok-avatar': return UserCheck;
      default: return Video;
    }
  };

  return (
    <div className={`relative overflow-hidden ${isRtl ? 'rtl' : 'ltr'}`} dir={currentLang.dir}>
      <SiteSchema />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs 
          items={[
            { name: currentLang.label, url: homeHref },
            { name: hero.badge, url: `${homeHref}/${toolSlug}` }
          ]} 
        />
      </div>

      {/* 1. Downloader Hero */}
      <ToolHero
        title={hero.title}
        subtitle={hero.subtitle}
        placeholder={hero.placeholder}
        buttonText={hero.button}
        badge={hero.badge}
        mode={toolData.mode}
        sampleUrl={toolData.sampleUrl}
      />

      {/* 2. Trust Highlights Banner (100% Localized) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">{ui.cleanBadge}</span>
            <span className="text-xs font-medium text-slate-500">{ui.cleanLabel}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">{ui.resBadge}</span>
            <span className="text-xs font-medium text-slate-500">{ui.resLabel}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">{ui.audioBadge}</span>
            <span className="text-xs font-medium text-slate-500">{ui.audioLabel}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block">{ui.noRegBadge}</span>
            <span className="text-xs font-medium text-slate-500">{ui.noRegLabel}</span>
          </div>
        </div>
      </div>

      {/* 3. Deep-Dive Editorial Handbook (2000+ Words Quality) */}
      <section className="py-14 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Header & Comprehensive Introduction */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {currentLang.label} • {hero.badge} • Editorial Masterclass
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {edit.introHeading}
            </h2>
            <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 whitespace-pre-line">
              {edit.introText}
            </div>
          </div>

          {/* Section 1: Extraction Technology & Codec Architecture */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{edit.techHeading}</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {edit.techText}
            </p>
          </div>

          {/* Section 2: Step-by-Step Multi-Device Masterclass (iPhone, Android, PC) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {ui.guideTitle}
              </h3>
              {/* Device Tabs */}
              <div className="inline-flex p-1 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setActiveDeviceTab('ios')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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

            {/* Tab Contents (All in DOM for SEO Indexing) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className={activeDeviceTab === 'ios' ? 'block space-y-3' : 'hidden'}>
                <h4 className="text-lg font-bold text-slate-900 text-rose-600">
                  {devSteps.iosTitle}
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600 leading-relaxed">
                  {devSteps.ios.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className={activeDeviceTab === 'android' ? 'block space-y-3' : 'hidden'}>
                <h4 className="text-lg font-bold text-slate-900 text-rose-600">
                  {devSteps.androidTitle}
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600 leading-relaxed">
                  {devSteps.android.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className={activeDeviceTab === 'pc' ? 'block space-y-3' : 'hidden'}>
                <h4 className="text-lg font-bold text-slate-900 text-rose-600">
                  {devSteps.pcTitle}
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600 leading-relaxed">
                  {devSteps.pc.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Section 3: Technical Comparison Table */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {langCode === 'es' ? 'Comparativa Técnica: QukTik vs Descargadores Tradicionales' :
               langCode === 'pt' ? 'Comparativo Técnico: QukTik vs Métodos Tradicionais' :
               langCode === 'fr' ? 'Comparatif Technique : QukTik face aux Outils Traditionnels' :
               langCode === 'de' ? 'Technischer Vergleich: QukTik vs. Herkömmliche Downloader' :
               langCode === 'ar' ? 'المقارنة الفنية: موقع QukTik في مواجهة أدوات التحميل التقليدية' :
               langCode === 'ja' ? '技術性能比較：QukTikと従来ツールの機能比較表' :
               'Technical Comparison: QukTik vs Traditional Downloaders'}
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
                  <tr>
                    {edit.tableHeaders.map((head, idx) => (
                      <th key={idx} className="p-3 sm:p-4">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {edit.tableRows.map((row, rIdx) => (
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
              <span>{edit.creatorHeading}</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {edit.creatorText}
            </p>
          </div>

          {/* Section 5: Troubleshooting 4 Issues */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {edit.troubleHeading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {edit.troubleItems.map((item, idx) => (
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

          {/* Section 6: Competitor Gap Analysis vs Top 20 Global Competitors */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{edit.competitorGapHeading}</span>
            </h3>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {edit.competitorGapText}
            </div>
          </div>

        </div>
      </section>

      {/* 4. EXACTLY 12 FAQs ACCORDION (100% Localized & In DOM) */}
      <section className="py-14 sm:py-18 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>12 FAQs • {currentLang.label}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            {ui.faqTitle} ({toolFaqs.length})
          </h2>
        </div>

        <div className="space-y-3">
          {toolFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-rose-600 transition-colors cursor-pointer"
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

      {/* 5. Related Localized Tools Grid */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {ui.relatedTitle}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedToolsList.map((slug) => {
              const Icon = getToolIcon(slug);
              const def = TOOL_DEFINITIONS[slug];
              const tTitle = def?.titles[langCode] || def?.titles.en;
              const linkHref = langCode === 'en' ? `/${slug}` : `/${langCode}/${slug}`;
              return (
                <Link
                  key={slug}
                  href={linkHref}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                      {tTitle?.split('|')[0]?.trim()}
                    </h4>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-rose-600">
                    <span>{ui.openTool}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Global Language Cross-Links for THIS Specific Tool */}
      <section className="py-8 border-t border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
            🌍 {hero.badge} {ui.inLangs}:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {LANGUAGES.map((l) => {
              const targetHref = l.code === 'en' ? `/${toolSlug}` : `/${l.code}/${toolSlug}`;
              const isCurrent = l.code === langCode;
              return (
                <a
                  key={l.code}
                  href={targetHref}
                  onClick={(e) => {
                    e.preventDefault();
                    try {
                      localStorage.setItem('quktik_preferred_lang', l.code);
                      document.cookie = `quktik_lang=${l.code}; path=/; max-age=31536000; SameSite=Lax`;
                    } catch (err) {}
                    window.location.href = targetHref;
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-rose-50 text-rose-700 border-rose-300 font-bold shadow-2xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
