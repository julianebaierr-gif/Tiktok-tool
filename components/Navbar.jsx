'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Music, Image as ImageIcon, Video, History, Menu, X, ArrowDownToLine } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'TikTok Video', icon: Video },
    { href: '/tiktok-mp3', label: 'TikTok to MP3', icon: Music },
    { href: '/tiktok-photo', label: 'Photo Slideshow', icon: ImageIcon },
    { href: '/tiktok-story', label: 'Story Saver', icon: History },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-pink-500 via-rose-500 to-cyan-400 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <ArrowDownToLine className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1">
                Tik<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Flow</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30 uppercase tracking-widest hidden sm:inline-block">HD</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide -mt-1 hidden sm:block">No Watermark Saver</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action links */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/#how-to-use"
              className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white px-3 py-2 rounded-lg transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#faq"
              className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white px-3 py-2 rounded-lg transition-colors"
            >
              FAQ
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-3 pb-5 space-y-2 backdrop-blur-xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-slate-800 text-cyan-300 border border-slate-700'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-around text-xs font-medium text-slate-400">
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-white py-1">About</Link>
            <Link href="/privacy-policy" onClick={() => setIsOpen(false)} className="hover:text-white py-1">Privacy</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-white py-1">Contact</Link>
            <Link href="/disclaimer" onClick={() => setIsOpen(false)} className="hover:text-white py-1">DMCA</Link>
          </div>
        </div>
      )}
    </header>
  );
}
