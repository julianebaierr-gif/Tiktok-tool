'use client';

import React from 'react';
import { Sparkles, Cpu, ShieldCheck, Layers, Award } from 'lucide-react';

/**
 * Parses creator advice text into introductory paragraphs and numbered tips.
 */
function parseCreatorText(text) {
  if (!text) return { introParagraphs: [], tips: [] };
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const introParagraphs = [];
  const tips = [];

  for (const line of lines) {
    const match = line.match(/^[0-9]+[\.\)]\s*(.*)/);
    if (match) {
      tips.push(match[1].trim());
    } else {
      introParagraphs.push(line);
    }
  }

  return { introParagraphs, tips };
}

/**
 * Parses in-depth technical analysis text into major sections with sub-item cards and paragraphs.
 */
function parseTechnicalAnalysis(text) {
  if (!text) return [];
  const blocks = text.split(/\r?\n\r?\n+/).map(b => b.trim()).filter(Boolean);
  const sections = [];
  let currentSection = { heading: '', paragraphs: [], cards: [] };

  function isMajorHeading(str) {
    const t = str.trim();
    if (!t) return false;
    // Uppercase headings (e.g. ANALYSE TECHNIQUE ET ARCHITECTURE DU FLUX VIDÉO)
    if (t.length < 90 && !t.includes('.') && t === t.toUpperCase() && /[A-Z]/.test(t)) return true;
    // Japanese & Arabic major architecture titles
    if (t.includes('技術的アーキテクチャ') || t.includes('التحليل الهندسي')) return true;
    // Major competitor comparison section header (starts with number, longer, not ending in colon)
    if (/^[0-9]+[\.\)]\s/.test(t) && !t.endsWith(':') && (t.includes('20') || t.length > 25)) return true;
    return false;
  }

  for (const block of blocks) {
    const lines = block.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const firstLine = lines[0] || '';

    if (isMajorHeading(firstLine)) {
      if (currentSection.heading || currentSection.paragraphs.length > 0 || currentSection.cards.length > 0) {
        sections.push(currentSection);
      }
      currentSection = { heading: firstLine, paragraphs: [], cards: [] };
      if (lines.length > 1) {
        currentSection.paragraphs.push(lines.slice(1).join('\n'));
      }
      continue;
    }

    const isNumbered = /^[0-9]+[\.\)]\s/.test(firstLine);
    const isColon = firstLine.endsWith(':') && firstLine.length < 120;

    if (lines.length > 1 && (isNumbered || isColon)) {
      const title = firstLine.replace(/^[0-9]+[\.\)]\s*/, '').replace(/:$/, '').trim();
      const body = lines.slice(1).join('\n');
      currentSection.cards.push({ title, body });
      continue;
    }

    currentSection.paragraphs.push(block);
  }

  if (currentSection.heading || currentSection.paragraphs.length > 0 || currentSection.cards.length > 0) {
    sections.push(currentSection);
  }

  return sections;
}

/**
 * Parses competitor gap analysis text, formatting subheadings ending in ':' as distinct blocks.
 */
function parseCompetitorGap(text) {
  if (!text) return [];
  const blocks = text.split(/\r?\n\r?\n+/).map(b => b.trim()).filter(Boolean);
  const items = [];

  for (const block of blocks) {
    const lines = block.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (lines.length > 1 && lines[0].endsWith(':') && lines[0].length < 110) {
      items.push({
        type: 'sub',
        title: lines[0].replace(/:$/, '').trim(),
        body: lines.slice(1).join('\n'),
      });
    } else {
      items.push({
        type: 'p',
        text: block,
      });
    }
  }

  return items;
}

/**
 * Polished Component for Creator Advice & Fair Use tips.
 */
export function FormattedCreatorAdvice({ title, text }) {
  const { introParagraphs, tips } = parseCreatorText(text);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-50/50 via-white to-slate-50 border border-rose-100 shadow-sm space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-rose-600 shrink-0" />
        <span>{title}</span>
      </h3>

      {introParagraphs.map((p, idx) => (
        <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {p}
        </p>
      ))}

      {tips.length > 0 && (
        <div className="grid grid-cols-1 gap-3 pt-2">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-rose-100/90 shadow-2xs hover:border-rose-200 transition-all"
            >
              <span className="w-6 h-6 rounded-lg bg-rose-50 text-rose-700 border border-rose-200/80 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                {idx + 1}
              </span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {tip}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Polished Component for In-Depth Technical Analysis and Top 20 Competitor In-Depth Comparison.
 */
export function FormattedTechnicalAnalysis({ text }) {
  const sections = parseTechnicalAnalysis(text);
  if (!sections || sections.length === 0) return null;

  return (
    <div className="space-y-10 pt-4">
      {sections.map((sec, sIdx) => {
        const isCompetitor = /20|compet|vergleich|comparat|concorr|rival|đối thủ|wettbewerb/i.test(sec.heading);

        return (
          <div key={sIdx} className="space-y-5">
            {sec.heading && (
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  {isCompetitor ? <ShieldCheck className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {sec.heading}
                </h3>
              </div>
            )}

            {sec.paragraphs.length > 0 && (
              <div className="space-y-3">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {sec.cards.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {sec.cards.map((card, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-rose-200 shadow-2xs hover:shadow-xs transition-all space-y-2"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {cIdx + 1}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {card.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Polished Component for Competitor Gap Analysis vs Top 20 Global Competitors.
 */
export function FormattedCompetitorGap({ heading, text }) {
  const items = parseCompetitorGap(text);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-rose-600 shrink-0" />
        <span>{heading}</span>
      </h3>

      {items.map((item, idx) => {
        if (item.type === 'sub') {
          return (
            <div key={idx} className="mt-5 pt-4 border-t border-slate-100 space-y-2">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-rose-600 shrink-0" />
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  {item.title}
                </h4>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-6">
                {item.body}
              </p>
            </div>
          );
        }

        return (
          <p key={idx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {item.text}
          </p>
        );
      })}
    </div>
  );
}
