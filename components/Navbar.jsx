'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Music, Image as ImageIcon, Video, History, Menu, X, Globe2, Bell, UserCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/tiktok-video-downloader', label: 'Video', icon: Video },
    { href: '/tiktok-mp3', label: 'MP3 Audio', icon: Music },
    { href: '/tiktok-photo', label: 'Photos', icon: ImageIcon },
    { href: '/tiktok-story', label: 'Stories', icon: History },
    { href: '/douyin-downloader', label: 'Douyin', icon: Globe2 },
    { href: '/tiktok-ringtone', label: 'Ringtones', icon: Bell },
    { href: '/tiktok-avatar', label: 'Avatar', icon: UserCheck },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/95 border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group shrink-0">
            <div className="relative">
              <img 
                src="/logo-icon.svg" 
                alt="QukTik - TikTok & Douyin Video Downloader" 
                className="w-10 h-10 rounded-2xl shadow-sm group-hover:scale-105 transition-all duration-200"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center leading-none">
                Quk<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Tik</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold tracking-wider uppercase mt-1 hidden sm:block whitespace-nowrap">
                TikTok &amp; Douyin Video Downloader
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
                      ? 'bg-rose-50 text-rose-600 font-bold border border-rose-200/80 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-rose-500' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Tablet screen navigation fallback (md:flex lg:hidden) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-0.5 shrink-0">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-rose-50 text-rose-600 border border-rose-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-rose-500' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-rose-50 text-rose-600 border border-rose-200'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-rose-500' : 'text-slate-400'}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-around text-xs font-medium text-slate-500">
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-slate-900 py-1">About</Link>
            <Link href="/privacy-policy" onClick={() => setIsOpen(false)} className="hover:text-slate-900 py-1">Privacy</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-slate-900 py-1">Contact</Link>
            <Link href="/disclaimer" onClick={() => setIsOpen(false)} className="hover:text-slate-900 py-1">DMCA</Link>
          </div>
        </div>
      )}
    </header>
  );
}
