'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { LANGUAGES } from '../lib/translations';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Detect current language from pathname (e.g., /es -> 'es', /de/tiktok-avatar -> 'de')
  const segments = (pathname || '').split('/').filter(Boolean);
  const firstSegment = segments[0] || '';
  const currentLang = LANGUAGES.find(l => l.code === firstSegment) || LANGUAGES[0]; // fallback to 'en'

  // Calculate destination URL while preserving tool slug (e.g. /de/tiktok-avatar -> /fr/tiktok-avatar)
  const getTargetUrl = (targetLangCode) => {
    let currentTool = '';
    if (segments.length === 1 && !LANGUAGES.some(l => l.code === segments[0])) {
      currentTool = segments[0];
    } else if (segments.length >= 2 && LANGUAGES.some(l => l.code === segments[0])) {
      currentTool = segments[1];
    }

    if (currentTool) {
      return targetLangCode === 'en' ? `/${currentTool}` : `/${targetLangCode}/${currentTool}`;
    }
    return targetLangCode === 'en' ? '/' : `/${targetLangCode}`;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const onLanguageClick = (lang, targetUrl) => {
    setIsOpen(false);
    try {
      localStorage.setItem('quktik_preferred_lang', lang.code);
      document.cookie = `quktik_lang=${lang.code}; path=/; max-age=31536000; SameSite=Lax`;
    } catch (e) {}

    // 100% reliable direct browser navigation
    if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
      window.location.href = targetUrl;
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/90 text-xs font-bold transition-all active:scale-95 shadow-2xs cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Change Language / Cambiar Idioma"
      >
        <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
        <span className="text-sm leading-none">{currentLang.flag}</span>
        <span className="hidden sm:inline font-semibold text-xs text-slate-800">{currentLang.label}</span>
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Floating Language Menu */}
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-64 sm:w-72 rounded-2xl bg-white shadow-2xl shadow-slate-900/15 border border-slate-200 p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
          role="menu"
        >
          <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
              Languages / Idiomas (12)
            </span>
            <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
              Global
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-80 overflow-y-auto p-0.5">
            {LANGUAGES.map((lang) => {
              const isSelected = currentLang.code === lang.code;
              const targetUrl = getTargetUrl(lang.code);
              return (
                <a
                  key={lang.code}
                  href={targetUrl}
                  onClick={(e) => {
                    e.preventDefault();
                    onLanguageClick(lang, targetUrl);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-rose-50 text-rose-900 font-bold border border-rose-200'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-medium'
                  }`}
                  role="menuitem"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-base leading-none shrink-0">{lang.flag}</span>
                    <span className="truncate">{lang.label}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 ml-1" />}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
