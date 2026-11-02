'use client';

import React, { useState, useEffect } from 'react';
import { Download, Smartphone, X, Share, PlusSquare, Check } from 'lucide-react';

export default function PwaManager() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [showIosModal, setShowIosModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // 1. Register Service Worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch((err) => {
        console.warn('PWA SW registration failed:', err);
      });
    }

    // 2. Check if already installed in standalone mode
    if (typeof window !== 'undefined') {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
      if (isStandalone) {
        setIsInstalled(true);
        return;
      }

      // Check iOS Safari
      const userAgent = window.navigator.userAgent.toLowerCase();
      const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
      setIsIos(isIosDevice);

      // Listen for Android / Chrome / Edge install prompt
      const handleBeforeInstall = (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        // Show install button after 2 seconds
        setTimeout(() => setShowBanner(true), 2000);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstall);

      // Listen for app installed event
      window.addEventListener('appinstalled', () => {
        setIsInstalled(true);
        setShowBanner(false);
        setDeferredPrompt(null);
      });

      // For iOS, show banner if not already dismissed in this session
      if (isIosDevice && !sessionStorage.getItem('quktik_ios_banner_dismissed')) {
        setTimeout(() => setShowBanner(true), 2500);
      }

      // Listen for custom trigger from Navbar or Footer
      const handleCustomTrigger = () => {
        handleInstallClick();
      };
      window.addEventListener('quktik-trigger-pwa-install', handleCustomTrigger);

      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
        window.removeEventListener('quktik-trigger-pwa-install', handleCustomTrigger);
      };
    }
  }, []);

  const handleInstallClick = async () => {
    if (isIos) {
      setShowIosModal(true);
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
        setShowBanner(false);
      }
      setDeferredPrompt(null);
    } else {
      // Fallback modal for browsers where prompt isn't directly triggerable
      setShowIosModal(true);
    }
  };

  const dismissBanner = () => {
    setShowBanner(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('quktik_ios_banner_dismissed', 'true');
    }
  };

  if (isInstalled) return null;

  return (
    <>
      {/* Floating Bottom-Right or Top-Right Quick Install Pill (Mobile/Desktop) */}
      {showBanner && (
        <div className="fixed bottom-4 right-4 z-40 max-w-sm w-[calc(100%-2rem)] sm:w-auto animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-3xl bg-slate-900/95 backdrop-blur-md text-white shadow-2xl border border-slate-700/80">
            <img 
              src="/logo-icon.svg" 
              alt="QukTik App Icon" 
              width={44}
              height={44}
              className="w-11 h-11 rounded-2xl shadow-md shrink-0 border border-white/20"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs sm:text-sm font-extrabold leading-tight text-white truncate">
                  Install QukTik App
                </h4>
                <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-rose-600 text-white font-extrabold uppercase shrink-0">
                  Free
                </span>
              </div>

              <p className="text-[10px] text-slate-400 leading-tight truncate mt-0.5">
                Direct share from TikTok app &amp; 1-tap HD saves
              </p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={handleInstallClick}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-bold transition-all shadow-md active:scale-95"
              >
                Install
              </button>
              <button
                onClick={dismissBanner}
                className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
                title="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* iOS & Manual Add to Home Screen Modal */}
      {showIosModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative text-slate-800">
            <button
              onClick={() => setShowIosModal(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-icon.svg" alt="QukTik App Icon" width={48} height={48} className="w-12 h-12 rounded-2xl shadow-sm" />
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg leading-tight">Install QukTik on Your Device</h3>
                <p className="text-xs text-slate-500">Run as a standalone app on your home screen</p>
              </div>
            </div>

            <div className="space-y-3.5 my-5 text-sm text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs sm:text-sm">
                  {isIos ? (
                    <>Tap the <strong className="text-slate-900 inline-flex items-center gap-1 mx-1"><Share className="w-3.5 h-3.5 text-blue-600 inline" /> Share</strong> button at the bottom of Safari.</>
                  ) : (
                    <>Tap the browser menu button (<strong className="text-slate-900">⋮</strong>) at the top right.</>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs sm:text-sm">
                  Scroll down and tap <strong className="text-slate-900 inline-flex items-center gap-1 mx-1"><PlusSquare className="w-3.5 h-3.5 text-emerald-600 inline" /> Add to Home Screen</strong>.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div className="text-xs sm:text-sm">
                  Tap <strong className="text-slate-900">Add</strong> in the top-right corner. QukTik is now installed on your home screen!
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIosModal(false)}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-sm"
            >
              Got it, Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
