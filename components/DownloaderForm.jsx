'use client';

import React, { useState, useEffect } from 'react';
import { Clipboard, X, Loader2, AlertCircle, ArrowRight, Globe2, Zap, History, Trash2, Clock, Play } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TRANSLATIONS } from '../lib/translations';

export default function DownloaderForm({ 
  onResult, 
  title = "Download TikTok Videos Without Watermark in HD",
  subtitle = "Save clean MP4 videos with no logo, extract crystal-clear MP3 music, and download full photo slideshows online for free.",
  placeholder = "Paste your TikTok link here (e.g., https://vt.tiktok.com/...)",
  buttonText = "Download Video",
  sampleUrl = "https://www.tiktok.com/@scout2015/video/6718335390845095173",
  badge = "Fast, Free & Private",
  mode = "video",
  langCode
}) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const pathname = usePathname();
  const pathSegment = pathname?.split('/')[1] || '';
  const activeLang = langCode || (['es','pt','id','fr','ar','de','vi','tr','it','ru','ja'].includes(pathSegment) ? pathSegment : 'en');
  const t = TRANSLATIONS[activeLang] || TRANSLATIONS.en;

  const effectivePlaceholder = placeholder || t.placeholder || "Paste your TikTok link here (e.g., https://vt.tiktok.com/...)";
  const effectiveButtonText = buttonText || t.downloadBtn || "Download Video";
  const effectiveBadge = badge || t.badgePrivacy || "Fast, Free & Private";

  // Load local history on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('quktik_recent_history');
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

  // Save successful result to local history (Max 10 items)
  const saveToHistory = (item) => {
    try {
      const prev = JSON.parse(localStorage.getItem('quktik_recent_history') || '[]');
      const filtered = prev.filter(x => x.id !== item.id && x.title !== item.title);
      const updated = [
        {
          id: item.id,
          title: item.title,
          cover: item.cover,
          author: item.author?.nickname || item.author?.username || 'Creator',
          avatar: item.author?.avatar,
          type: item.type,
          duration: item.durationFormatted,
          timestamp: Date.now(),
          rawResult: item,
        },
        ...filtered,
      ].slice(0, 10);
      setHistory(updated);
      localStorage.setItem('quktik_recent_history', JSON.stringify(updated));
    } catch (e) {}
  };

  const handleClearHistory = () => {
    try {
      localStorage.removeItem('quktik_recent_history');
      setHistory([]);
      setShowHistory(false);
    } catch (e) {}
  };

  // Dedicated execution function for Submit, Paste & Go, and Global Ctrl+V
  const executeDownload = async (inputUrl) => {
    const trimmed = (inputUrl || url).trim();
    const getPastePrompt = () => {
      const msgs = {
        es: mode === 'douyin' ? 'Pega un enlace de Douyin en el cuadro superior.' : 'Pega un enlace de TikTok en el cuadro superior para comenzar.',
        pt: mode === 'douyin' ? 'Cole um link do Douyin na caixa acima.' : 'Cole um link do TikTok na caixa acima para começar.',
        fr: mode === 'douyin' ? 'Veuillez coller un lien Douyin ci-dessus.' : 'Veuillez coller un lien TikTok dans la zone ci-dessus pour commencer.',
        de: mode === 'douyin' ? 'Bitte fügen Sie oben einen Douyin-Link ein.' : 'Bitte fügen Sie oben einen TikTok-Link ein, um zu beginnen.',
        ar: mode === 'douyin' ? 'يرجى لصق رابط دويين في المربع أعلاه.' : 'يرجى لصق رابط تيك توك في المربع أعلاه للبدء.',
        it: mode === 'douyin' ? 'Incolla un link di Douyin nel campo sopra.' : 'Incolla un link di TikTok nel campo sopra per iniziare.',
        id: mode === 'douyin' ? 'Silakan tempel tautan Douyin di kotak atas.' : 'Silakan tempel tautan TikTok di kotak atas untuk memulai.',
        vi: mode === 'douyin' ? 'Vui lòng dán liên kết Douyin vào ô bên trên.' : 'Vui lòng dán liên kết TikTok vào ô bên trên để bắt đầu.',
        tr: mode === 'douyin' ? 'Lütfen yukarıdaki kutuya bir Douyin bağlantısı yapıştırın.' : 'Başlamak için lütfen yukarıdaki kutuya bir TikTok bağlantısı yapıştırın.',
        ru: mode === 'douyin' ? 'Пожалуйста, вставьте ссылку Douyin в поле выше.' : 'Пожалуйста, вставьте ссылку TikTok в поле выше, чтобы начать.',
        ja: mode === 'douyin' ? '上のボックスにDouyinのリンクを貼り付けてください。' : '上のボックスにTikTokのリンクを貼り付けてください。',
      };
      return msgs[activeLang] || (mode === 'douyin' ? 'Please paste a Douyin link into the box above.' : 'Please paste a TikTok link into the box above to get started.');
    };

    const getInvalidPrompt = () => {
      const msgs = {
        es: 'Por favor, ingresa un enlace válido de TikTok (ej. https://vt.tiktok.com/...)',
        pt: 'Por favor, insira um link válido do TikTok (ex: https://vt.tiktok.com/...)',
        fr: 'Veuillez entrer un lien TikTok valide (ex: https://vt.tiktok.com/...)',
        de: 'Bitte geben Sie einen gültigen TikTok-Link ein (z. B. https://vt.tiktok.com/...)',
        ar: 'يرجى إدخال رابط تيك توك صحيح (مثال: https://vt.tiktok.com/...)',
        it: 'Inserisci un link di TikTok valido (es. https://vt.tiktok.com/...)',
        id: 'Harap masukkan tautan TikTok yang valid (contoh: https://vt.tiktok.com/...)',
        vi: 'Vui lòng nhập liên kết TikTok hợp lệ (vd: https://vt.tiktok.com/...)',
        tr: 'Lütfen geçerli bir TikTok bağlantısı girin (örn. https://vt.tiktok.com/...)',
        ru: 'Пожалуйста, введите корректную ссылку TikTok (например, https://vt.tiktok.com/...)',
        ja: '有効なTikTokのリンクを入力してください (例: https://vt.tiktok.com/...)',
      };
      return msgs[activeLang] || (mode === 'douyin'
        ? 'Please enter a valid Douyin link (e.g., https://www.douyin.com/video/... or https://v.douyin.com/...)' 
        : 'Please enter a valid TikTok link (e.g., https://www.tiktok.com/@user/video/... or https://vt.tiktok.com/...)');
    };

    if (!trimmed) {
      setError({ message: getPastePrompt() });
      return;
    }

    if (mode === 'douyin') {
      if (trimmed.includes('tiktok.com')) {
        setError({
          wrongPlatform: 'tiktok',
          message: '⚠️ This page only downloads Chinese Douyin (抖音) videos. For international TikTok, please switch to our Global TikTok Downloader.'
        });
        return;
      }
    } else {
      if (trimmed.includes('douyin.com')) {
        setError({
          wrongPlatform: 'douyin',
          message: '🇨🇳 You entered a Chinese Douyin (抖音) link. Please use our specialized Douyin Downloader for fast Chinese CDN processing.'
        });
        return;
      }
    }

    if (!trimmed.includes('tiktok.com') && !trimmed.includes('douyin.com') && !/^\d{18,20}$/.test(trimmed)) {
      setError({ message: getInvalidPrompt() });
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          url: trimmed,
          platform: mode === 'douyin' ? 'douyin' : 'tiktok'
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.wrongPlatform) {
          setError({ wrongPlatform: data.wrongPlatform, message: data.error });
        } else {
          setError({ message: data.error || 'Could not fetch this media. Please ensure the link is public and try again.' });
        }
        return;
      }

      saveToHistory(data);
      if (onResult) {
        onResult(data);
      }
    } catch (err) {
      setError({ message: err.message || 'Something went wrong while connecting to the server. Please check your link.' });
    } finally {
      setLoading(false);
    }
  };

  // Smart Desktop Keyboard Listener (Ctrl+V or Cmd+V anywhere on page)
  useEffect(() => {
    const handleGlobalPaste = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      const pasted = e.clipboardData?.getData('text');
      if (pasted && (pasted.includes('tiktok.com') || pasted.includes('douyin.com') || /^\d{18,20}$/.test(pasted.trim()))) {
        e.preventDefault();
        setUrl(pasted.trim());
        executeDownload(pasted.trim());
      }
    };

    window.addEventListener('paste', handleGlobalPaste);
    return () => window.removeEventListener('paste', handleGlobalPaste);
  }, [mode]);

  // Mobile / Quick 1-Tap "Paste & Go"
  const handlePasteAndGo = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text.trim());
        executeDownload(text.trim());
      }
    } catch (err) {
      console.warn('Clipboard read failed:', err);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
        setError(null);
      }
    } catch (err) {
      console.warn('Clipboard read failed:', err);
    }
  };

  const handleClear = () => {
    setUrl('');
    setError(null);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    executeDownload(url);
  };

  const loadSampleUrl = () => {
    setUrl(sampleUrl);
    setError(null);
  };

  return (
    <div id="downloader" className="w-full max-w-4xl mx-auto text-center px-4 pt-6 sm:pt-10 pb-6">
      
      {/* Top Cross-Platform Interlink Notice Bar */}
      {mode === 'douyin' ? (
        <div className="w-full max-w-2xl mx-auto mb-6 p-3 sm:p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200/90 text-left shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
            <div className="text-xs sm:text-sm text-amber-900 leading-snug">
              <span className="font-bold">Douyin Exclusive (抖音专属):</span> Only Mainland China Douyin videos work here.
            </div>
          </div>
          <Link 
            href="/tiktok-video-downloader" 
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-amber-100 text-amber-900 font-bold text-xs border border-amber-300 shadow-xs shrink-0 transition-all"
          >
            <span>Switch to Global TikTok</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
          </Link>
        </div>
      ) : (
        <div className="w-full max-w-2xl mx-auto mb-6 p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-left shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <Globe2 className="w-4 h-4 text-rose-600 shrink-0" />
            <div className="text-xs sm:text-sm text-slate-700 leading-snug">
              <span className="font-bold">{activeLang === 'es' ? '¿Buscas TikTok de China?' : activeLang === 'pt' ? 'Precisa do TikTok chinês?' : activeLang === 'fr' ? 'Besoin de TikTok chinois ?' : activeLang === 'de' ? 'Chinesisches TikTok gesucht?' : activeLang === 'ar' ? 'هل تبحث عن تيك توك الصيني؟' : activeLang === 'it' ? 'Cerchi il TikTok cinese?' : activeLang === 'id' ? 'Butuh TikTok versi Tiongkok?' : activeLang === 'vi' ? 'Cần tải TikTok Trung Quốc?' : activeLang === 'tr' ? 'Çin TikTok\'u mu lazım?' : activeLang === 'ru' ? 'Нужен китайский TikTok?' : activeLang === 'ja' ? '中国版TikTokをお探しですか？' : 'Need Chinese TikTok?'}</span> {activeLang === 'es' ? '¿Descargar de Douyin (抖音)?' : activeLang === 'pt' ? 'Baixar do Douyin (抖音)?' : activeLang === 'fr' ? 'Télécharger depuis Douyin (抖音) ?' : activeLang === 'de' ? 'Videos von Douyin (抖音) laden?' : activeLang === 'ar' ? 'تحميل من دويين (抖音)؟' : activeLang === 'it' ? 'Scaricare da Douyin (抖音)?' : activeLang === 'id' ? 'Download dari Douyin (抖音)?' : activeLang === 'vi' ? 'Tải từ Douyin (抖音)?' : activeLang === 'tr' ? 'Douyin\'den (抖音) indirmek ister misiniz?' : activeLang === 'ru' ? 'Скачать с Douyin (抖音)?' : activeLang === 'ja' ? 'Douyin（抖音）からダウンロード' : 'Want to download from Douyin (抖音)?'}
            </div>
          </div>
          <Link 
            href="/douyin-downloader" 
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-rose-50 text-rose-700 font-bold text-xs border border-slate-200 shadow-xs shrink-0 transition-all"
          >
            <span>{activeLang === 'es' ? 'Abrir Descargador Douyin (抖音)' : activeLang === 'pt' ? 'Abrir Downloader Douyin (抖音)' : activeLang === 'fr' ? 'Ouvrir Téléchargeur Douyin (抖音)' : activeLang === 'de' ? 'Douyin Downloader öffnen (抖音)' : activeLang === 'ar' ? 'فتح محمل دويين (抖音)' : activeLang === 'it' ? 'Apri Downloader Douyin (抖音)' : activeLang === 'id' ? 'Buka Downloader Douyin (抖音)' : activeLang === 'vi' ? 'Mở Trình Tải Douyin (抖音)' : activeLang === 'tr' ? 'Douyin İndiriciyi Aç (抖音)' : activeLang === 'ru' ? 'Открыть загрузчик Douyin (抖音)' : activeLang === 'ja' ? 'Douyin保存ツールを開く (抖音)' : 'Open Douyin Downloader (抖音)'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-rose-600" />
          </Link>
        </div>
      )}

      {/* Sleek, Minimal Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
        <span>{effectiveBadge}</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-4 leading-[1.12]">
        {title.includes('Without Watermark') ? (
          <>
            {title.split('Without Watermark')[0]}
            <span className="text-rose-600">
              Without Watermark
            </span>
            {title.split('Without Watermark')[1]}
          </>
        ) : (
          title
        )}
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
        {subtitle}
      </p>

      {/* Clean, Modern Search / Input Box */}
      <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto group">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 rounded-2xl bg-white border border-slate-300 shadow-md shadow-slate-900/5 focus-within:border-slate-800 focus-within:ring-2 focus-within:ring-slate-900/10 transition-all">
          
          <div className="relative flex-1 w-full flex items-center">
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (error) setError(null);
              }}
              placeholder={effectivePlaceholder}
              className="w-full px-4 sm:px-5 py-3.5 bg-transparent text-slate-900 placeholder-slate-400 text-base sm:text-lg font-medium focus:outline-none pr-28 sm:pr-32"
              disabled={loading}
              autoComplete="off"
            />

            {/* Paste / Clear Button */}
            <div className="absolute right-2 flex items-center space-x-1.5">
              {url ? (
                <button
                  type="button"
                  onClick={handleClear}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium text-xs transition-colors"
                  title="Clear link"
                >
                  <X className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.clearAll || 'Clear'}</span>
                </button>
              ) : (
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePasteAndGo}
                    className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs border border-amber-200 transition-all active:scale-95 shadow-2xs"
                    title="Paste from clipboard & download immediately in 1 tap"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    <span>{t.pasteAndGo || 'Paste & Go'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handlePaste}
                    className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm border border-slate-200/80 transition-all active:scale-95"
                  >
                    <Clipboard className="w-3.5 h-3.5 text-slate-600" />
                    <span>{t.pasteBtn || 'Paste'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-base shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 shrink-0 active:scale-[0.98]"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>{t.fetchingBtn || 'Processing...'}</span>
              </>
            ) : (
              <>
                <span>{effectiveButtonText}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </>
            )}
          </button>
        </div>

        {/* Helpers: Sample Link, Paste & Go (Mobile), Recent History */}
        <div className="mt-3.5 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>Need an example?</span>
            <button
              type="button"
              onClick={loadSampleUrl}
              className="text-slate-700 hover:text-rose-600 font-semibold underline underline-offset-4 cursor-pointer"
            >
              Try sample link
            </button>
          </div>

          <span className="text-slate-300 hidden sm:inline">•</span>

          <button
            type="button"
            onClick={handlePasteAndGo}
            className="sm:hidden inline-flex items-center gap-1 text-amber-700 font-bold hover:underline cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>1-Tap Paste &amp; Go</span>
          </button>

          {history && history.length > 0 && (
            <>
              <span className="text-slate-300">•</span>
              <button
                type="button"
                onClick={() => setShowHistory(!showHistory)}
                className="inline-flex items-center gap-1 text-slate-700 hover:text-rose-600 font-bold cursor-pointer transition-colors"
              >
                <History className="w-3.5 h-3.5 text-rose-500" />
                <span>{t.recentSaves || 'Recent Saves'} ({history.length})</span>
              </button>
            </>
          )}
        </div>

        {/* 🕒 Expandable Recent Downloads History Drawer */}
        {showHistory && history && history.length > 0 && (
          <div className="mt-5 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-xl text-left max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-rose-600" />
                <h4 className="text-sm font-bold text-slate-900">{t.recentSaves || 'Your Recent Saves'}</h4>
              </div>
              <button
                type="button"
                onClick={handleClearHistory}
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-rose-600 font-semibold transition-colors cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
                <span>{t.clearAll || 'Clear History'}</span>
              </button>
            </div>

            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {history.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onResult && onResult(item.rawResult)}
                  className="flex items-center justify-between gap-3 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 shrink-0 relative border border-slate-200">
                      {item.cover ? (
                        <img src={item.cover} alt="Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-rose-400 font-bold text-xs">
                          {item.type === 'image' ? 'IMG' : 'MP4'}
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900 truncate group-hover:text-rose-600 transition-colors">
                        {item.title || 'Saved Media'}
                      </h5>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5 truncate">
                        <span>@{item.author || 'creator'}</span>
                        {item.duration && (
                          <>
                            <span>•</span>
                            <span>{item.duration}</span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-xl bg-rose-50 text-rose-700 text-xs font-bold shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-all shadow-2xs">
                    Re-Open
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </form>

      {/* Error Notice with Smart Platform Switcher */}
      {error && (
        <div className="mt-5 max-w-2xl mx-auto p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-rose-800">
                {error.wrongPlatform ? 'Wrong Platform Link Detected' : 'Unable to Download'}
              </p>
              <p className="text-xs text-rose-700 mt-0.5">{error.message || error}</p>
            </div>
          </div>
          
          {error.wrongPlatform === 'tiktok' && (
            <Link 
              href="/tiktok-video-downloader" 
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shrink-0 inline-flex items-center gap-1.5 shadow-xs transition-all"
            >
              <span>Open TikTok Downloader</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}

          {error.wrongPlatform === 'douyin' && (
            <Link 
              href="/douyin-downloader" 
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shrink-0 inline-flex items-center gap-1.5 shadow-xs transition-all"
            >
              <span>Open Douyin Downloader</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}

          {!error.wrongPlatform && (
            <button
              onClick={() => setError(null)}
              className="text-rose-400 hover:text-rose-700 p-1 self-start sm:self-auto"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

    </div>
  );
}
