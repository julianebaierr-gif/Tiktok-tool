'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" aria-label="QukTik Official Home - TikTok & Douyin Downloader" title="QukTik Official Home" className="flex items-center space-x-3 group">
              <img 
                src="/logo-icon.svg" 
                alt="QukTik - TikTok & Douyin Video Downloader" 
                width={40} height={40} className="w-10 h-10 rounded-2xl shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900 leading-none">
                  Quk<span className="text-rose-600">Tik</span>
                </span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">
                  TikTok &amp; Douyin Video Downloader
                </span>
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              QukTik is a free, web-based tool designed to help you save short-form videos, MP3 audio tracks, and photo slideshows from TikTok and Douyin for personal archiving and offline viewing without watermarks.
            </p>
          </div>

          {/* Core Tools */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 text-xs tracking-wider uppercase">Free Tools</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/tiktok-video-downloader" className="hover:text-rose-700 transition-colors">TikTok Video Downloader</Link>
              </li>
              <li>
                <Link href="/tiktok-mp3" className="hover:text-rose-700 transition-colors">TikTok to MP3 Converter</Link>
              </li>
              <li>
                <Link href="/tiktok-photo" className="hover:text-rose-700 transition-colors">Photo Slideshow Downloader</Link>
              </li>
              <li>
                <Link href="/tiktok-story" className="hover:text-rose-700 transition-colors">TikTok Story Saver</Link>
              </li>
              <li>
                <Link href="/douyin-downloader" className="hover:text-rose-700 transition-colors font-semibold text-rose-700">Douyin Downloader (抖音)</Link>
              </li>
              <li>
                <Link href="/tiktok-ringtone" className="hover:text-rose-700 transition-colors">TikTok Ringtone Maker</Link>
              </li>
              <li>
                <Link href="/tiktok-avatar" className="hover:text-rose-700 transition-colors">TikTok Avatar / PFP HD</Link>
              </li>
              <li>
                <Link href="/tiktok-bulk-downloader" className="hover:text-rose-700 transition-colors font-semibold text-rose-600">Bulk ZIP Downloader (Multi-URL)</Link>
              </li>
              <li>
                <Link href="/trending-sounds" className="hover:text-rose-700 transition-colors font-semibold text-rose-600">Trending TikTok Sounds MP3</Link>
              </li>
            </ul>
          </div>

          {/* Quick Support & Resources */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 text-xs tracking-wider uppercase">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#how-to-use" className="hover:text-rose-700 transition-colors">How to Download</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-rose-700 transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rose-700 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rose-700 transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 text-xs tracking-wider uppercase">Legal &amp; Policy</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-rose-700 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-rose-700 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-rose-700 transition-colors">DMCA &amp; Fair Use</Link>
              </li>
            </ul>
          </div>
        </div>



        {/* Global Multi-Language & Regional Tools Matrix (12 Languages x 8 Core Tools) */}
        <div className="mt-12 pt-10 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-slate-900 font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                <span>🌐</span>
                <span>Global Multi-Language Tool Matrix (12 Languages)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Access QukTik across all 12 supported international languages and regional tools with zero watermarks.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 font-medium transition-all shadow-2xs">🇺🇸 English</Link>
              <Link href="/es" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 font-medium transition-all shadow-2xs">🇪🇸 Español</Link>
              <Link href="/pt" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 font-medium transition-all shadow-2xs">🇧🇷 Português</Link>
              <Link href="/id" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 font-medium transition-all shadow-2xs">🇮🇩 Indonesia</Link>
              <Link href="/fr" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 font-medium transition-all shadow-2xs">🇫🇷 Français</Link>
              <Link href="/ar" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 font-medium transition-all shadow-2xs">🇸🇦 العربية</Link>
              <Link href="/de" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 font-medium transition-all shadow-2xs">🇩🇪 Deutsch</Link>
              <Link href="/vi" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 font-medium transition-all shadow-2xs">🇻🇳 Tiếng Việt</Link>
              <Link href="/tr" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 font-medium transition-all shadow-2xs">🇹🇷 Türkçe</Link>
              <Link href="/it" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 font-medium transition-all shadow-2xs">🇮🇹 Italiano</Link>
              <Link href="/ru" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 font-medium transition-all shadow-2xs">🇷🇺 Русский</Link>
              <Link href="/ja" className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 font-medium transition-all shadow-2xs">🇯🇵 日本語</Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-4 text-xs">
            {/* English */}
            <div className="space-y-2">
              <Link href="/" className="font-bold text-slate-900 hover:text-rose-600 block transition-colors">
                🇺🇸 English
              </Link>
              <ul className="space-y-1.5 text-slate-500">
                <li><Link href="/tiktok-video-downloader" className="hover:text-rose-600 transition-colors">TikTok Video HD</Link></li>
                <li><Link href="/tiktok-mp3" className="hover:text-rose-600 transition-colors">TikTok MP3 Music</Link></li>
                <li><Link href="/tiktok-photo" className="hover:text-rose-600 transition-colors">Photo Slideshow</Link></li>
                <li><Link href="/douyin-downloader" className="hover:text-rose-600 transition-colors">Douyin 抖音 Video</Link></li>
                <li><Link href="/tiktok-bulk-downloader" className="hover:text-rose-600 transition-colors">Bulk ZIP Downloader</Link></li>
                <li><Link href="/trending-sounds" className="hover:text-rose-600 transition-colors">Trending Sounds MP3</Link></li>
                <li><Link href="/tiktok-story" className="hover:text-rose-600 transition-colors">Story Saver</Link></li>
                <li><Link href="/tiktok-ringtone" className="hover:text-rose-600 transition-colors">Ringtone Maker</Link></li>
              </ul>
            </div>

            {/* Español */}
            <div className="space-y-2">
              <Link href="/es" className="font-bold text-slate-900 hover:text-rose-600 block transition-colors">
                🇪🇸 Español
              </Link>
              <ul className="space-y-1.5 text-slate-500">
                <li><Link href="/es/tiktok-video-downloader" className="hover:text-rose-600 transition-colors">Descargar Video TikTok</Link></li>
                <li><Link href="/es/tiktok-mp3" className="hover:text-rose-600 transition-colors">TikTok a MP3 Audio</Link></li>
                <li><Link href="/es/tiktok-photo" className="hover:text-rose-600 transition-colors">Fotos de TikTok</Link></li>
                <li><Link href="/es/douyin-downloader" className="hover:text-rose-600 transition-colors">Descargar Douyin (抖音)</Link></li>
                <li><Link href="/es/tiktok-bulk-downloader" className="hover:text-rose-600 transition-colors">Descarga Masiva ZIP</Link></li>
                <li><Link href="/es/trending-sounds" className="hover:text-rose-600 transition-colors">Sonidos en Tendencia</Link></li>
                <li><Link href="/es/tiktok-story" className="hover:text-rose-600 transition-colors">Guardar Historias</Link></li>
                <li><Link href="/es/tiktok-ringtone" className="hover:text-rose-600 transition-colors">Tonos de Llamada</Link></li>
              </ul>
            </div>

            {/* Português */}
            <div className="space-y-2">
              <Link href="/pt" className="font-bold text-slate-900 hover:text-rose-600 block transition-colors">
                🇧🇷 Português
              </Link>
              <ul className="space-y-1.5 text-slate-500">
                <li><Link href="/pt/tiktok-video-downloader" className="hover:text-rose-600 transition-colors">Baixar Vídeo TikTok</Link></li>
                <li><Link href="/pt/tiktok-mp3" className="hover:text-rose-600 transition-colors">TikTok para MP3</Link></li>
                <li><Link href="/pt/tiktok-photo" className="hover:text-rose-600 transition-colors">Fotos do TikTok</Link></li>
                <li><Link href="/pt/douyin-downloader" className="hover:text-rose-600 transition-colors">Baixar Douyin (抖音)</Link></li>
                <li><Link href="/pt/tiktok-bulk-downloader" className="hover:text-rose-600 transition-colors">Download em Lote ZIP</Link></li>
                <li><Link href="/pt/trending-sounds" className="hover:text-rose-600 transition-colors">Músicas em Alta MP3</Link></li>
                <li><Link href="/pt/tiktok-story" className="hover:text-rose-600 transition-colors">Salvar Stories TikTok</Link></li>
                <li><Link href="/pt/tiktok-ringtone" className="hover:text-rose-600 transition-colors">Toques de Celular</Link></li>
              </ul>
            </div>

            {/* Bahasa Indonesia */}
            <div className="space-y-2">
              <Link href="/id" className="font-bold text-slate-900 hover:text-rose-600 block transition-colors">
                🇮🇩 Indonesia
              </Link>
              <ul className="space-y-1.5 text-slate-500">
                <li><Link href="/id/tiktok-video-downloader" className="hover:text-rose-600 transition-colors">Download Video TikTok</Link></li>
                <li><Link href="/id/tiktok-mp3" className="hover:text-rose-600 transition-colors">TikTok ke MP3 Audio</Link></li>
                <li><Link href="/id/tiktok-photo" className="hover:text-rose-600 transition-colors">Download Foto Slide</Link></li>
                <li><Link href="/id/douyin-downloader" className="hover:text-rose-600 transition-colors">Download Douyin (抖音)</Link></li>
                <li><Link href="/id/tiktok-bulk-downloader" className="hover:text-rose-600 transition-colors">Download Massal ZIP</Link></li>
                <li><Link href="/id/trending-sounds" className="hover:text-rose-600 transition-colors">Lagu Viral TikTok</Link></li>
                <li><Link href="/id/tiktok-story" className="hover:text-rose-600 transition-colors">Simpan Story TikTok</Link></li>
                <li><Link href="/id/tiktok-ringtone" className="hover:text-rose-600 transition-colors">Nada Dering TikTok</Link></li>
              </ul>
            </div>

            {/* Français */}
            <div className="space-y-2">
              <Link href="/fr" className="font-bold text-slate-900 hover:text-rose-600 block transition-colors">
                🇫🇷 Français
              </Link>
              <ul className="space-y-1.5 text-slate-500">
                <li><Link href="/fr/tiktok-video-downloader" className="hover:text-rose-600 transition-colors">Télécharger Vidéo TikTok</Link></li>
                <li><Link href="/fr/tiktok-mp3" className="hover:text-rose-600 transition-colors">Convertir TikTok en MP3</Link></li>
                <li><Link href="/fr/tiktok-photo" className="hover:text-rose-600 transition-colors">Photos Diaporama</Link></li>
                <li><Link href="/fr/douyin-downloader" className="hover:text-rose-600 transition-colors">Télécharger Douyin (抖音)</Link></li>
                <li><Link href="/fr/tiktok-bulk-downloader" className="hover:text-rose-600 transition-colors">Téléchargement en Masse</Link></li>
                <li><Link href="/fr/trending-sounds" className="hover:text-rose-600 transition-colors">Musiques Tendances</Link></li>
                <li><Link href="/fr/tiktok-story" className="hover:text-rose-600 transition-colors">Enregistrer Story</Link></li>
                <li><Link href="/fr/tiktok-ringtone" className="hover:text-rose-600 transition-colors">Sonneries TikTok</Link></li>
              </ul>
            </div>

            {/* العربية */}
            <div className="space-y-2">
              <Link href="/ar" className="font-bold text-slate-900 hover:text-rose-600 block transition-colors">
                🇸🇦 العربية
              </Link>
              <ul className="space-y-1.5 text-slate-500">
                <li><Link href="/ar/tiktok-video-downloader" className="hover:text-rose-600 transition-colors">تحميل فيديو تيك توك</Link></li>
                <li><Link href="/ar/tiktok-mp3" className="hover:text-rose-600 transition-colors">تحويل إلى MP3</Link></li>
                <li><Link href="/ar/tiktok-photo" className="hover:text-rose-600 transition-colors">تنزيل صور تيك توك</Link></li>
                <li><Link href="/ar/douyin-downloader" className="hover:text-rose-600 transition-colors">تحميل من دويين (抖音)</Link></li>
                <li><Link href="/ar/tiktok-bulk-downloader" className="hover:text-rose-600 transition-colors">تنزيل جماعي ZIP</Link></li>
                <li><Link href="/ar/trending-sounds" className="hover:text-rose-600 transition-colors">أغاني تيك توك الرائجة</Link></li>
                <li><Link href="/ar/tiktok-story" className="hover:text-rose-600 transition-colors">حفظ ستوري تيك توك</Link></li>
                <li><Link href="/ar/tiktok-ringtone" className="hover:text-rose-600 transition-colors">نغمات رنين تيك توك</Link></li>
              </ul>
            </div>

            {/* Deutsch */}
            <div className="space-y-2">
              <Link href="/de" className="font-bold text-slate-900 hover:text-rose-600 block transition-colors">
                🇩🇪 Deutsch
              </Link>
              <ul className="space-y-1.5 text-slate-500">
                <li><Link href="/de/tiktok-video-downloader" className="hover:text-rose-600 transition-colors">TikTok Video Download</Link></li>
                <li><Link href="/de/tiktok-mp3" className="hover:text-rose-600 transition-colors">TikTok zu MP3 Konverter</Link></li>
                <li><Link href="/de/tiktok-photo" className="hover:text-rose-600 transition-colors">TikTok Fotos Herunterladen</Link></li>
                <li><Link href="/de/douyin-downloader" className="hover:text-rose-600 transition-colors">Douyin Downloader (抖音)</Link></li>
                <li><Link href="/de/tiktok-bulk-downloader" className="hover:text-rose-600 transition-colors">Massen-Download ZIP</Link></li>
                <li><Link href="/de/trending-sounds" className="hover:text-rose-600 transition-colors">Trending Sounds MP3</Link></li>
                <li><Link href="/de/tiktok-story" className="hover:text-rose-600 transition-colors">TikTok Story Speichern</Link></li>
                <li><Link href="/de/tiktok-ringtone" className="hover:text-rose-600 transition-colors">TikTok Klingeltöne</Link></li>
              </ul>
            </div>

            {/* Tiếng Việt */}
            <div className="space-y-2">
              <Link href="/vi" className="font-bold text-slate-900 hover:text-rose-600 block transition-colors">
                🇻🇳 Tiếng Việt
              </Link>
              <ul className="space-y-1.5 text-slate-500">
                <li><Link href="/vi/tiktok-video-downloader" className="hover:text-rose-600 transition-colors">Tải Video TikTok HD</Link></li>
                <li><Link href="/vi/tiktok-mp3" className="hover:text-rose-600 transition-colors">TikTok Sang MP3</Link></li>
                <li><Link href="/vi/tiktok-photo" className="hover:text-rose-600 transition-colors">Tải Ảnh Slide TikTok</Link></li>
                <li><Link href="/vi/douyin-downloader" className="hover:text-rose-600 transition-colors">Tải Douyin Không Logo (抖音)</Link></li>
                <li><Link href="/vi/tiktok-bulk-downloader" className="hover:text-rose-600 transition-colors">Tải Hàng Loạt File ZIP</Link></li>
                <li><Link href="/vi/trending-sounds" className="hover:text-rose-600 transition-colors">Nhạc Nền TikTok Hot</Link></li>
                <li><Link href="/vi/tiktok-story" className="hover:text-rose-600 transition-colors">Lưu Story TikTok</Link></li>
                <li><Link href="/vi/tiktok-ringtone" className="hover:text-rose-600 transition-colors">Nhạc Chuông TikTok</Link></li>
              </ul>
            </div>

            {/* Türkçe */}
            <div className="space-y-2">
              <Link href="/tr" className="font-bold text-slate-900 hover:text-rose-600 block transition-colors">
                🇹🇷 Türkçe
              </Link>
              <ul className="space-y-1.5 text-slate-500">
                <li><Link href="/tr/tiktok-video-downloader" className="hover:text-rose-600 transition-colors">TikTok Video İndir</Link></li>
                <li><Link href="/tr/tiktok-mp3" className="hover:text-rose-600 transition-colors">TikTok MP3 Dönüştürücü</Link></li>
                <li><Link href="/tr/tiktok-photo" className="hover:text-rose-600 transition-colors">TikTok Fotoğraf İndir</Link></li>
                <li><Link href="/tr/douyin-downloader" className="hover:text-rose-600 transition-colors">Douyin İndirici (抖音)</Link></li>
                <li><Link href="/tr/tiktok-bulk-downloader" className="hover:text-rose-600 transition-colors">Toplu ZIP İndirme</Link></li>
                <li><Link href="/tr/trending-sounds" className="hover:text-rose-600 transition-colors">Trend Müzikler MP3</Link></li>
                <li><Link href="/tr/tiktok-story" className="hover:text-rose-600 transition-colors">TikTok Hikaye İndir</Link></li>
                <li><Link href="/tr/tiktok-ringtone" className="hover:text-rose-600 transition-colors">TikTok Zil Sesi Yapma</Link></li>
              </ul>
            </div>

            {/* Italiano */}
            <div className="space-y-2">
              <Link href="/it" className="font-bold text-slate-900 hover:text-rose-600 block transition-colors">
                🇮🇹 Italiano
              </Link>
              <ul className="space-y-1.5 text-slate-500">
                <li><Link href="/it/tiktok-video-downloader" className="hover:text-rose-600 transition-colors">Scarica Video TikTok</Link></li>
                <li><Link href="/it/tiktok-mp3" className="hover:text-rose-600 transition-colors">TikTok in MP3</Link></li>
                <li><Link href="/it/tiktok-photo" className="hover:text-rose-600 transition-colors">Scarica Foto TikTok</Link></li>
                <li><Link href="/it/douyin-downloader" className="hover:text-rose-600 transition-colors">Scarica Douyin (抖音)</Link></li>
                <li><Link href="/it/tiktok-bulk-downloader" className="hover:text-rose-600 transition-colors">Download Multiplo ZIP</Link></li>
                <li><Link href="/it/trending-sounds" className="hover:text-rose-600 transition-colors">Suoni di Tendenza</Link></li>
                <li><Link href="/it/tiktok-story" className="hover:text-rose-600 transition-colors">Salva Storie TikTok</Link></li>
                <li><Link href="/it/tiktok-ringtone" className="hover:text-rose-600 transition-colors">Suonerie TikTok</Link></li>
              </ul>
            </div>

            {/* Русский */}
            <div className="space-y-2">
              <Link href="/ru" className="font-bold text-slate-900 hover:text-rose-600 block transition-colors">
                🇷🇺 Русский
              </Link>
              <ul className="space-y-1.5 text-slate-500">
                <li><Link href="/ru/tiktok-video-downloader" className="hover:text-rose-600 transition-colors">Скачать Видео TikTok</Link></li>
                <li><Link href="/ru/tiktok-mp3" className="hover:text-rose-600 transition-colors">Конвертер в MP3</Link></li>
                <li><Link href="/ru/tiktok-photo" className="hover:text-rose-600 transition-colors">Скачать Фото Слайды</Link></li>
                <li><Link href="/ru/douyin-downloader" className="hover:text-rose-600 transition-colors">Скачать Douyin (抖音)</Link></li>
                <li><Link href="/ru/tiktok-bulk-downloader" className="hover:text-rose-600 transition-colors">Массовое Скачивание</Link></li>
                <li><Link href="/ru/trending-sounds" className="hover:text-rose-600 transition-colors">Трендовая Музыка</Link></li>
                <li><Link href="/ru/tiktok-story" className="hover:text-rose-600 transition-colors">Скачать Истории</Link></li>
                <li><Link href="/ru/tiktok-ringtone" className="hover:text-rose-600 transition-colors">Рингтоны из TikTok</Link></li>
              </ul>
            </div>

            {/* 日本語 */}
            <div className="space-y-2">
              <Link href="/ja" className="font-bold text-slate-900 hover:text-rose-600 block transition-colors">
                🇯🇵 日本語
              </Link>
              <ul className="space-y-1.5 text-slate-500">
                <li><Link href="/ja/tiktok-video-downloader" className="hover:text-rose-600 transition-colors">TikTok動画保存 HD</Link></li>
                <li><Link href="/ja/tiktok-mp3" className="hover:text-rose-600 transition-colors">TikTok MP3 変換</Link></li>
                <li><Link href="/ja/tiktok-photo" className="hover:text-rose-600 transition-colors">写真スライド保存</Link></li>
                <li><Link href="/ja/douyin-downloader" className="hover:text-rose-600 transition-colors">抖音 Douyin 保存</Link></li>
                <li><Link href="/ja/tiktok-bulk-downloader" className="hover:text-rose-600 transition-colors">一括保存 ZIP</Link></li>
                <li><Link href="/ja/trending-sounds" className="hover:text-rose-600 transition-colors">トレンド音源 MP3</Link></li>
                <li><Link href="/ja/tiktok-story" className="hover:text-rose-600 transition-colors">ストーリー保存</Link></li>
                <li><Link href="/ja/tiktok-ringtone" className="hover:text-rose-600 transition-colors">着信音作成</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Official DMCA Disclaimer */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed shadow-sm">
          <p>
            <strong className="text-slate-800">Disclaimer &amp; Trademark Notice:</strong> QukTik is an independent web tool designed for personal, non-commercial, and fair-use archiving. QukTik does not host or store copyrighted media files on its servers; all content streams directly from official content delivery network (CDN) endpoints. QukTik is not affiliated with, endorsed by, or sponsored by TikTok, Douyin, ByteDance Ltd., Musical.ly, or any of their subsidiaries. All trademarks belong to their respective owners.
          </p>
        </div>

        <div className="mt-6 text-center sm:text-left text-xs text-slate-500">
          <p>© {currentYear} QukTik. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
