'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Music, 
  Image as ImageIcon, 
  Video, 
  Menu, 
  X, 
  Globe2, 
  Bell, 
  UserCheck, 
  Smartphone, 
  Globe, 
  Check, 
  FolderArchive, 
  Flame, 
  ChevronDown 
} from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { LANGUAGES, TRANSLATIONS, NAV_TRANSLATIONS } from '../lib/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const pathname = usePathname();

  const segments = (pathname || '').split('/').filter(Boolean);
  const firstSegment = segments[0] || '';
  const currentLang = LANGUAGES.find(l => l.code === firstSegment) || LANGUAGES[0];
  const t = TRANSLATIONS[currentLang.code] || TRANSLATIONS.en;
  const navT = NAV_TRANSLATIONS[currentLang.code] || NAV_TRANSLATIONS.en;

  const prefix = currentLang.code === 'en' ? '' : `/${currentLang.code}`;
  const homeHref = currentLang.code === 'en' ? '/' : `/${currentLang.code}`;

  const triggerInstall = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('quktik-trigger-pwa-install'));
    }
  };

  // Close "More" dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    }
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, []);

  // Close "More" on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setIsMoreOpen(false);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Primary links in main bar
  const primaryLinks = [
    { href: homeHref, label: navT.home, icon: Home },
    { href: `${prefix}/tiktok-video-downloader`, label: navT.video, icon: Video },
    { href: `${prefix}/tiktok-mp3`, label: navT.mp3, icon: Music },
    { href: `${prefix}/tiktok-photo`, label: navT.photos, icon: ImageIcon },
    { href: `${prefix}/douyin-downloader`, label: navT.douyin, icon: Globe2 },
    { href: `${prefix}/tiktok-bulk-downloader`, label: navT.bulk, icon: FolderArchive, badge: navT.batchBadge },
  ];

  // Secondary tools in More dropdown
  const secondaryLinks = [
    { 
      href: `${prefix}/trending-sounds`, 
      label: navT.trending, 
      desc: navT.trendingDesc, 
      icon: Flame, 
      badge: navT.viralBadge,
      iconColor: 'text-amber-500' 
    },
    { 
      href: `${prefix}/tiktok-ringtone`, 
      label: navT.ringtone, 
      desc: navT.ringtoneDesc, 
      icon: Bell,
      iconColor: 'text-rose-500' 
    },
    { 
      href: `${prefix}/tiktok-avatar`, 
      label: navT.avatar, 
      desc: navT.avatarDesc, 
      icon: UserCheck,
      iconColor: 'text-indigo-500' 
    },
  ];

  // All links combined for mobile drawer
  const allNavLinks = [
    ...primaryLinks,
    { href: `${prefix}/trending-sounds`, label: navT.trending, icon: Flame, badge: navT.viralBadge },
    { href: `${prefix}/tiktok-ringtone`, label: navT.ringtone, icon: Bell },
    { href: `${prefix}/tiktok-avatar`, label: navT.avatar, icon: UserCheck },
  ];

  const isMoreActive = secondaryLinks.some(l => pathname === l.href);

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
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo */}
          <Link href={homeHref} className="flex items-center space-x-2.5 group shrink-0">
            <img 
              src="/logo-icon.svg" 
              alt="QukTik - TikTok & Douyin Video Downloader" 
              width={38} height={38} className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl shadow-xs group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 flex items-center leading-none">
                Quk<span className="text-rose-600">Tik</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase mt-1 hidden xl:block whitespace-nowrap">
                TikTok &amp; Douyin Downloader
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (lg:flex) */}
          <nav className="hidden lg:flex items-center space-x-1 shrink-0">
            {primaryLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-slate-100 text-slate-900 font-bold border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0 ${isActive ? 'text-rose-600' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-rose-100 text-rose-700 font-extrabold uppercase shrink-0">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            {/* More Tools Dropdown */}
            <div className="relative inline-block" ref={moreRef}>
              <button
                type="button"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isMoreActive || isMoreOpen
                    ? 'bg-slate-100 text-slate-900 font-bold border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
                aria-expanded={isMoreOpen}
                aria-haspopup="true"
              >
                <span>{navT.more || 'More'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isMoreOpen ? 'rotate-180 text-rose-600' : 'text-slate-400'}`} />
              </button>

              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white shadow-2xl shadow-slate-900/15 border border-slate-200 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                      {navT.moreDesc || 'Specialized Tools'}
                    </span>
                    <span className="text-[9px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100 uppercase">
                      Pro
                    </span>
                  </div>

                  <div className="space-y-1">
                    {secondaryLinks.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMoreOpen(false)}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                            isActive
                              ? 'bg-rose-50 border border-rose-200'
                              : 'hover:bg-slate-50 text-slate-700 hover:text-slate-900'
                          }`}
                        >
                          <div className={`p-1.5 rounded-lg bg-slate-100 shrink-0 mt-0.5 ${item.iconColor}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-slate-900 truncate">{item.label}</span>
                              {item.badge && (
                                <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-rose-100 text-rose-700 font-extrabold uppercase">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-slate-500 leading-tight mt-0.5 truncate">{item.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Language Switcher in Header */}
            <div className="pl-1">
              <LanguageSwitcher />
            </div>

            {/* Install PWA App Button */}
            <button
              onClick={triggerInstall}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 transition-all cursor-pointer active:scale-95 shadow-2xs ml-1 shrink-0 whitespace-nowrap"
              title="Install QukTik App on Phone or PC"
            >
              <Smartphone className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>{t.installApp || 'Install App'}</span>
            </button>
          </nav>

          {/* Tablet screen navigation fallback (md:flex lg:hidden) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1 shrink-0">
            {primaryLinks.slice(0, 4).map((link) => {
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile menu button & quick install */}
          <div className="flex md:hidden items-center gap-1.5">
            <LanguageSwitcher />
            <button
              onClick={triggerInstall}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200 shadow-2xs active:scale-95 shrink-0"
            >
              <Smartphone className="w-3.5 h-3.5 text-rose-600" />
              <span>App</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none shrink-0"
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
            {allNavLinks.map((link) => {
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
                  {link.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-rose-100 text-rose-700 font-extrabold uppercase shrink-0 ml-auto">
                      {link.badge}
                    </span>
                  )}
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
