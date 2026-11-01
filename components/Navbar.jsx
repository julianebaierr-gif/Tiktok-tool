'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Music, Image as ImageIcon, Video, History, Menu, X, Globe2, Bell, UserCheck, Smartphone, Globe, Check } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { LANGUAGES, TRANSLATIONS } from '../lib/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const segments = (pathname || '').split('/').filter(Boolean);
  const firstSegment = segments[0] || '';
  const currentLang = LANGUAGES.find(l => l.code === firstSegment) || LANGUAGES[0];
  const t = TRANSLATIONS[currentLang.code] || TRANSLATIONS.en;

  const prefix = currentLang.code === 'en' ? '' : `/${currentLang.code}`;
  const homeHref = currentLang.code === 'en' ? '/' : `/${currentLang.code}`;

  const triggerInstall = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('quktik-trigger-pwa-install'));
    }
  };

  const navLinks = [
    { href: homeHref, label: 'Home', icon: Home },
    { href: `${prefix}/tiktok-video-downloader`, label: 'Video', icon: Video },
    { href: `${prefix}/tiktok-mp3`, label: 'MP3 Audio', icon: Music },
    { href: `${prefix}/tiktok-photo`, label: 'Photos', icon: ImageIcon },
    { href: `${prefix}/tiktok-story`, label: 'Stories', icon: History },
    { href: `${prefix}/douyin-downloader`, label: 'Douyin', icon: Globe2 },
    { href: `${prefix}/tiktok-ringtone`, label: 'Ringtones', icon: Bell },
    { href: `${prefix}/tiktok-avatar`, label: 'Avatar', icon: UserCheck },
  ];

  // Calculate destination URL while preserving tool slug for mobile menu
  const getMobileTargetUrl = (targetLangCode) => {
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

  const handleMobileLangSelect = (lang) => {
    setIsOpen(false);
    const targetUrl = getMobileTargetUrl(lang.code);
    try {
      localStorage.setItem('quktik_preferred_lang', lang.code);
      document.cookie = `quktik_lang=${lang.code}; path=/; max-age=31536000; SameSite=Lax`;
    } catch (e) {}
    if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
      window.location.href = targetUrl;
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo */}
          <Link href={homeHref} className="flex items-center space-x-3 group shrink-0">
            <img 
              src="/logo-icon.svg" 
              alt="QukTik - TikTok & Douyin Video Downloader" 
              width={38} height={38} className="w-9 h-9 rounded-xl shadow-xs group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 flex items-center leading-none">
                Quk<span className="text-rose-600">Tik</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase mt-1 hidden sm:block whitespace-nowrap">
                TikTok &amp; Douyin Downloader
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (lg:flex) */}
          <nav className="hidden lg:flex items-center space-x-1 shrink-0">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-slate-100 text-slate-900 font-bold border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-rose-600' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {/* Language Switcher in Header */}
            <div className="ml-1.5">
              <LanguageSwitcher />
            </div>

            {/* Install PWA App Button */}
            <button
              onClick={triggerInstall}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 transition-all cursor-pointer active:scale-95 shadow-2xs ml-1"
              title="Install QukTik App on Phone or PC"
            >
              <Smartphone className="w-3.5 h-3.5 text-rose-600" />
              <span>{t.installApp || 'Install App'}</span>
            </button>
          </nav>

          {/* Tablet screen navigation fallback (md:flex lg:hidden) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1 shrink-0">
            {navLinks.slice(0, 5).map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-slate-100 text-slate-900 font-bold border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-rose-600' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button & quick install */}
          <div className="flex md:hidden items-center gap-1.5">
            <LanguageSwitcher />
            <button
              onClick={triggerInstall}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200 shadow-2xs active:scale-95"
            >
              <Smartphone className="w-3.5 h-3.5 text-rose-600" />
              <span>App</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-100 text-slate-900 font-bold border border-slate-200'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-rose-600' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Dedicated 12-Language Selector Grid */}
          <div className="pt-3 border-t border-slate-200">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              <Globe className="w-3.5 h-3.5 text-rose-600" />
              <span>Languages / Idiomas (12):</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {LANGUAGES.map((lang) => {
                const isSelected = currentLang.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleMobileLangSelect(lang)}
                    className={`flex items-center justify-between p-2 rounded-xl text-xs font-medium border text-left transition-all ${
                      isSelected
                        ? 'bg-rose-50 text-rose-900 font-bold border-rose-300'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-sm leading-none">{lang.flag}</span>
                      <span className="truncate">{lang.label}</span>
                    </div>
                    {isSelected && <Check className="w-3 h-3 text-rose-600 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => {
              setIsOpen(false);
              triggerInstall();
            }}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all mt-3"
          >
            <Smartphone className="w-4 h-4 text-rose-600" />
            <span>{t.installApp || 'Install QukTik App (Free)'}</span>
          </button>
        </div>
      )}
    </header>
  );
}
