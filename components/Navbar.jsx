'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Music, Image as ImageIcon, Video, History, Menu, X, ArrowDownToLine, Globe2, Bell, UserCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Video Saver', icon: Video },
    { href: '/tiktok-mp3', label: 'Audio & MP3', icon: Music },
    { href: '/tiktok-photo', label: 'Photo Slides', icon: ImageIcon },
    { href: '/tiktok-story', label: 'Stories', icon: History },
    { href: '/douyin-downloader', label: 'Douyin 抖音', icon: Globe2 },
    { href: '/tiktok-ringtone', label: 'Ringtones', icon: Bell },
    { href: '/tiktok-avatar', label: 'Avatar HD', icon: UserCheck },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-rose-500 via-pink-500 to-indigo-500 p-0.5 shadow-md shadow-rose-500/15 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <ArrowDownToLine className="w-5 h-5 text-rose-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                Tik<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Flow</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200 uppercase tracking-wider hidden sm:inline-block">HD</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide -mt-1 hidden sm:block">Clean Video Downloader</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-100 text-rose-600 shadow-sm border border-slate-200/70'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-rose-500' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Medium screen navigation fallback */}
          <nav className="hidden md:flex xl:hidden items-center space-x-1">
            {navLinks.slice(0, 4).map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-100 text-rose-600 border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-rose-500' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Support / Quick Links */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/#how-to-use"
              className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 px-2.5 py-2 rounded-lg transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#faq"
              className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 px-2.5 py-2 rounded-lg transition-colors"
            >
              FAQ
            </Link>
          </div>

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
                <Icon className={`w-5 h-5 ${isActive ? 'text-rose-500' : 'text-slate-400'}`} />
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
