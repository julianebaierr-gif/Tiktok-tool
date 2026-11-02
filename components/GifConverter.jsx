'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Film, Download, Play, Pause, Sparkles, X, Check, Loader2, Image as ImageIcon } from 'lucide-react';
import { GifWriter } from 'omggif';

// Precomputed standard 256-color palette (RGB332: 3 bits R, 3 bits G, 2 bits B)
const PALETTE_256 = new Int32Array(256);
for (let i = 0; i < 256; i++) {
  const r = Math.round(((i >> 5) & 7) * (255 / 7));
  const g = Math.round(((i >> 2) & 7) * (255 / 7));
  const b = Math.round((i & 3) * (255 / 3));
  PALETTE_256[i] = (r << 16) | (g << 8) | b;
}

function pixelToPaletteIndex(r, g, b) {
  const r3 = (r * 7 / 255 + 0.5) | 0;
  const g3 = (g * 7 / 255 + 0.5) | 0;
  const b2 = (b * 3 / 255 + 0.5) | 0;
  return (r3 << 5) | (g3 << 2) | b2;
}

export default function GifConverter({
  videoUrl,
  title = 'TikTok Video',
  id = 'vid',
  langCode = 'en',
  onClose
}) {
  const [videoDuration, setVideoDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [gifDuration, setGifDuration] = useState(3); // 1s to 5s
  const [status, setStatus] = useState('idle'); // 'idle' | 'rendering' | 'ready' | 'error'
  const [progress, setProgress] = useState(0);
  const [gifBlobUrl, setGifBlobUrl] = useState(null);
  const [gifSizeMb, setGifSizeMb] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const labels = {
    en: {
      title: 'TikTok MP4 to Animated GIF Converter',
      subtitle: 'Create a 1-click animated GIF (up to 5s) for WhatsApp stickers, memes & Discord.',
      startAt: 'Start Time',
      length: 'GIF Length',
      seconds: 'sec',
      convertBtn: 'Generate Animated GIF',
      converting: 'Capturing frames & encoding GIF...',
      downloadGif: 'Download Animated GIF (.gif)',
      reset: 'Create Another Clip',
      tip: 'Rendered directly in your browser. 100% private, zero server upload.',
      close: 'Close GIF Maker'
    },
    es: {
      title: 'Convertidor de Video TikTok a GIF Animado',
      subtitle: 'Crea un GIF animado de hasta 5 segundos para stickers de WhatsApp y memes.',
      startAt: 'Punto de Inicio',
      length: 'Duración del GIF',
      seconds: 'seg',
      convertBtn: 'Crear GIF Animado',
      converting: 'Capturando cuadros y codificando GIF...',
      downloadGif: 'Descargar GIF Animado (.gif)',
      reset: 'Crear Otro Clip',
      tip: 'Procesado 100% en tu navegador. Seguro y sin subir tus datos al servidor.',
      close: 'Cerrar'
    },
    pt: {
      title: 'Conversor de TikTok para GIF Animado',
      subtitle: 'Crie um GIF animado de até 5s para figurinhas do WhatsApp e memes.',
      startAt: 'Início',
      length: 'Duração',
      seconds: 'seg',
      convertBtn: 'Gerar GIF Animado',
      converting: 'Capturando frames e gerando GIF...',
      downloadGif: 'Baixar GIF Animado (.gif)',
      reset: 'Fazer Outro GIF',
      tip: 'Gerado diretamente no seu navegador com total privacidade.',
      close: 'Fechar'
    },
    fr: {
      title: 'Convertisseur TikTok MP4 en GIF Animé',
      subtitle: 'Créez un GIF animé de 1 à 5s pour vos stickers WhatsApp et vos mèmes.',
      startAt: 'Début',
      length: 'Durée du GIF',
      seconds: 'sec',
      convertBtn: 'Générer le GIF Animé',
      converting: 'Capture des images et encodage du GIF...',
      downloadGif: 'Télécharger le GIF (.gif)',
      reset: 'Nouveau GIF',
      tip: 'Généré directement dans votre navigateur. 100% privé.',
      close: 'Fermer'
    },
    ar: {
      title: 'محول فيديو تيك توك إلى صور متحركة GIF',
      subtitle: 'أنشئ صورة متحركة GIF مدتها حتى 5 ثوانٍ لملصقات واتساب والميمات.',
      startAt: 'وقت البدء',
      length: 'مدة الصورة',
      seconds: 'ثوانٍ',
      convertBtn: 'إنشاء صورة متحركة GIF',
      converting: 'جاري التقاط الإطارات وتوليد الصورة...',
      downloadGif: 'تحميل ملف GIF (.gif)',
      reset: 'إنشاء مقطع آخر',
      tip: 'يتم المعالجة مباشرة في متصفحك بأعلى سرعة وبدون رفع بياناتك.',
      close: 'إغلاق'
    },
    de: {
      title: 'TikTok MP4 zu Animiertem GIF Konverter',
      subtitle: 'Erstellen Sie ein animiertes GIF (bis zu 5s) für WhatsApp-Sticker & Memes.',
      startAt: 'Startzeit',
      length: 'GIF-Dauer',
      seconds: 'Sek.',
      convertBtn: 'Animiertes GIF Erstellen',
      converting: 'Bilder werden extrahiert und als GIF kodiert...',
      downloadGif: 'Animiertes GIF Herunterladen (.gif)',
      reset: 'Weiteres GIF Erstellen',
      tip: 'Wird direkt in Ihrem Browser generiert. 100% privat.',
      close: 'Schließen'
    }
  };

  const l = labels[langCode] || labels.en;

  // Use proxy URL to avoid cross-origin canvas security errors
  const proxyVideoUrl = `/api/proxy?url=${encodeURIComponent(videoUrl)}&filename=gif_${id}.mp4&type=video`;

  useEffect(() => {
    return () => {
      if (gifBlobUrl) {
        URL.revokeObjectURL(gifBlobUrl);
      }
    };
  }, [gifBlobUrl]);

  const onLoadedMetadata = (e) => {
    const dur = Math.floor(e.target.duration || 0);
    setVideoDuration(dur);
    setGifDuration(Math.min(3, Math.max(1, dur)));
  };

  // Convert Video frames to GIF via canvas & omggif
  const generateGif = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      setStatus('rendering');
      setProgress(5);
      setErrorMessage(null);

      const targetFps = 10;
      const totalFrames = Math.max(5, Math.floor(gifDuration * targetFps));
      const frameIntervalSec = gifDuration / totalFrames;
      const frameDelayHundredths = Math.round((1 / targetFps) * 100);

      const origWidth = video.videoWidth || 640;
      const origHeight = video.videoHeight || 1136;
      const targetWidth = 320;
      const targetHeight = Math.round((origHeight / origWidth) * targetWidth);

      const gifBuffer = new Uint8Array(10 * 1024 * 1024);
      const gifWriter = new GifWriter(gifBuffer, targetWidth, targetHeight, { loop: 0 });

      const canvas = document.createElement('canvas');
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });

      const indexedPixels = new Uint8Array(targetWidth * targetHeight);

      for (let f = 0; f < totalFrames; f++) {
        const frameTime = startTime + f * frameIntervalSec;
        
        await new Promise((resolve) => {
          const onSeeked = () => {
            video.removeEventListener('seeked', onSeeked);
            resolve();
          };
          video.addEventListener('seeked', onSeeked);
          video.currentTime = Math.min(frameTime, (videoDuration || 10) - 0.1);
        });

        ctx.drawImage(video, 0, 0, targetWidth, targetHeight);
        const imgData = ctx.getImageData(0, 0, targetWidth, targetHeight).data;

        let pixelIdx = 0;
        for (let i = 0; i < imgData.length; i += 4) {
          const r = imgData[i];
          const g = imgData[i + 1];
          const b = imgData[i + 2];
          indexedPixels[pixelIdx++] = pixelToPaletteIndex(r, g, b);
        }

        gifWriter.addFrame(0, 0, targetWidth, targetHeight, indexedPixels, {
          palette: PALETTE_256,
          delay: frameDelayHundredths
        });

        const pct = Math.round(((f + 1) / totalFrames) * 90);
        setProgress(pct);
      }

      const bytesWritten = gifWriter.end();
      setProgress(98);

      const slicedBlob = new Blob([gifBuffer.subarray(0, bytesWritten)], { type: 'image/gif' });
      const sizeMb = (slicedBlob.size / (1024 * 1024)).toFixed(2);
      setGifSizeMb(sizeMb);

      if (gifBlobUrl) {
        URL.revokeObjectURL(gifBlobUrl);
      }
      const newUrl = URL.createObjectURL(slicedBlob);
      setGifBlobUrl(newUrl);
      setStatus('ready');
      setProgress(100);
    } catch (err) {
      console.error('GIF generation error:', err);
      setErrorMessage(err.message || 'Failed to capture and encode GIF.');
      setStatus('error');
    }
  };

  const handleDownloadGif = () => {
    if (!gifBlobUrl) return;
    const a = document.createElement('a');
    a.href = gifBlobUrl;
    const safeTitle = (title || 'quktik_gif').replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 30);
    a.download = `${safeTitle}_animated_${Math.floor(startTime)}s_${gifDuration}s.gif`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const maxStart = Math.max(0, videoDuration - gifDuration);

  return (
    <div className="relative overflow-hidden p-5 sm:p-6 rounded-3xl bg-slate-900/95 backdrop-blur-2xl text-white border border-slate-800 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
      {/* Top ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-28 bg-gradient-to-b from-pink-500/15 via-rose-500/10 to-transparent rounded-full blur-3xl" />

      {/* Hidden processing video */}
      <video
        ref={videoRef}
        src={proxyVideoUrl}
        crossOrigin="anonymous"
        playsInline
        muted
        preload="metadata"
        onLoadedMetadata={onLoadedMetadata}
        className="hidden"
      />

      {/* Header */}
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 via-pink-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-pink-500/25 ring-1 ring-white/20 mt-0.5">
            <Film className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-sm sm:text-base font-black text-white tracking-tight">
                {l.title}
              </h4>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap shadow-2xs">
                GIF Maker
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-md">
              {l.subtitle}
            </p>
          </div>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all shrink-0 cursor-pointer"
            title={l.close}
            aria-label={l.close}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {status === 'error' && (
        <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-800/80 text-rose-200 text-xs font-medium flex items-center gap-2">
          <span>⚠️</span>
          <span>{errorMessage}</span>
        </div>
      )}

      {status === 'ready' && gifBlobUrl ? (
        /* Result Preview */
        <div className="space-y-4 flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-black/90 shadow-2xl max-w-[280px] sm:max-w-[320px] ring-1 ring-white/10">
            <img 
              src={gifBlobUrl} 
              alt="Generated animated GIF" 
              className="w-full h-auto object-contain block"
            />
            <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono font-extrabold text-pink-300 shadow-md">
              {gifSizeMb} MB
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={handleDownloadGif}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-black text-xs sm:text-sm transition-all shadow-lg shadow-pink-500/25 active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{l.downloadGif}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setStatus('idle');
                setProgress(0);
              }}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white text-xs sm:text-sm font-bold transition-all border border-slate-700/80 active:scale-[0.98] cursor-pointer shadow-sm"
            >
              {l.reset}
            </button>
          </div>
        </div>
      ) : (
        /* Configuration Controls */
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Start Time Slider */}
            <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 shadow-inner space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">{l.startAt}</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700/70 font-mono font-bold text-pink-400 text-xs shadow-2xs">
                  {startTime} {l.seconds}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={maxStart}
                step="0.5"
                value={startTime}
                disabled={status === 'rendering'}
                onChange={(e) => setStartTime(Number(e.target.value))}
                className="w-full h-1.5 rounded-lg appearance-none bg-slate-700 accent-pink-500 cursor-pointer disabled:opacity-50"
              />
            </div>

            {/* GIF Length Slider (1s to 5s) */}
            <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 shadow-inner space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">{l.length}</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700/70 font-mono font-bold text-pink-400 text-xs shadow-2xs">
                  {gifDuration} {l.seconds}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max={Math.min(5, videoDuration || 5)}
                step="0.5"
                value={gifDuration}
                disabled={status === 'rendering'}
                onChange={(e) => setGifDuration(Number(e.target.value))}
                className="w-full h-1.5 rounded-lg appearance-none bg-slate-700 accent-pink-500 cursor-pointer disabled:opacity-50"
              />
            </div>
          </div>

          {/* Progress Indicator */}
          {status === 'rendering' ? (
            <div className="space-y-2.5 p-4 rounded-2xl bg-slate-800/90 border border-slate-700 shadow-inner">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-pink-500 animate-spin" />
                  <span>{l.converting}</span>
                </span>
                <span className="font-mono font-bold text-pink-400">{progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden ring-1 ring-white/10">
                <div 
                  className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={generateGif}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-black text-xs sm:text-sm transition-all shadow-lg shadow-pink-500/25 active:scale-[0.98] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>{l.convertBtn}</span>
            </button>
          )}

          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-400 text-xs flex items-center justify-center gap-2 text-center">
            <span>💡</span>
            <span>{l.tip}</span>
          </div>
        </div>
      )}
    </div>
  );
}
