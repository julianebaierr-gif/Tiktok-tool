'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Scissors, Play, Pause, Download, Volume2, Sparkles, X, Check, Loader2, Music } from 'lucide-react';

// Encode AudioBuffer to high-quality 16-bit PCM WAV Blob (Universally compatible as Ringtone/Alarm)
function audioBufferToWav(buffer, startSec, durationSec) {
  const sampleRate = buffer.sampleRate;
  const channels = buffer.numberOfChannels;
  const startSample = Math.floor(startSec * sampleRate);
  const totalSamples = Math.min(Math.floor(durationSec * sampleRate), buffer.length - startSample);
  
  if (totalSamples <= 0) return null;

  const bytesPerSample = 2; // 16-bit PCM
  const blockAlign = channels * bytesPerSample;
  const dataByteLength = totalSamples * blockAlign;
  const wavHeaderLength = 44;
  const arrayBuffer = new ArrayBuffer(wavHeaderLength + dataByteLength);
  const view = new DataView(arrayBuffer);

  const writeString = (offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  // RIFF identifier
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataByteLength, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, channels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, dataByteLength, true);

  // Write PCM audio samples
  let offset = 44;
  const channelData = [];
  for (let c = 0; c < channels; c++) {
    channelData.push(buffer.getChannelData(c));
  }

  for (let i = 0; i < totalSamples; i++) {
    for (let c = 0; c < channels; c++) {
      const sampleIdx = startSample + i;
      let s = channelData[c][sampleIdx] || 0;
      s = Math.max(-1, Math.min(1, s));
      const intSample = s < 0 ? s * 0x8000 : s * 0x7FFF;
      view.setInt16(offset, intSample, true);
      offset += 2;
    }
  }

  return new Blob([arrayBuffer], { type: 'audio/wav' });
}

export default function AudioTrimmer({ 
  audioUrl, 
  title = 'TikTok Audio', 
  author = 'Creator',
  id = 'track', 
  langCode = 'en',
  onClose 
}) {
  const [audioBuffer, setAudioBuffer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [clipLength, setClipLength] = useState(20);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackPos, setPlaybackPos] = useState(0);
  const [downloading, setDownloading] = useState(false);

  const audioContextRef = useRef(null);
  const activeSourceRef = useRef(null);
  const playStartTimeRef = useRef(0);
  const animFrameRef = useRef(null);

  // Translations for trimmer UI
  const labels = {
    en: {
      title: 'Built-in Audio & Ringtone Trimmer',
      subtitle: 'Cut 15-30s snippet for custom iPhone & Android ringtone / alarm.',
      loadingAudio: 'Loading and decoding audio waveform...',
      startAt: 'Start Time',
      length: 'Clip Length',
      seconds: 'sec',
      preview: 'Preview Trimmed Snippet',
      pause: 'Pause Snippet',
      downloadBtn: 'Download Custom Ringtone (.WAV / .M4A)',
      downloading: 'Encoding ringtone...',
      iphoneTip: 'Tip: Compatible with iPhone GarageBand ringtones & Android sound settings.',
      close: 'Close Trimmer'
    },
    es: {
      title: 'Cortador y Editor de Tonos de Llamada',
      subtitle: 'Corta 15-30s para tono de llamada o alarma en iPhone y Android.',
      loadingAudio: 'Cargando y analizando pista de audio...',
      startAt: 'Punto de Inicio',
      length: 'Duración del Tono',
      seconds: 'seg',
      preview: 'Escuchar Fragmento',
      pause: 'Pausar',
      downloadBtn: 'Descargar Tono Personalizado (.WAV)',
      downloading: 'Generando tono...',
      iphoneTip: 'Consejo: Compatible con GarageBand en iPhone y tonos de Android.',
      close: 'Cerrar Cortador'
    },
    pt: {
      title: 'Cortador de Áudio e Toques para Celular',
      subtitle: 'Corte 15-30s para criar toques e alarmes para iPhone e Android.',
      loadingAudio: 'Carregando e decodificando áudio...',
      startAt: 'Ponto Inicial',
      length: 'Duração',
      seconds: 'seg',
      preview: 'Ouvir Trecho',
      pause: 'Pausar',
      downloadBtn: 'Baixar Toque Personalizado (.WAV)',
      downloading: 'Processando toque...',
      iphoneTip: 'Dica: Compatível com GarageBand no iOS e configurações do Android.',
      close: 'Fechar Cortador'
    },
    fr: {
      title: 'Découpeur Audio & Sonnerie Personnalisée',
      subtitle: 'Découpez 15 à 30s pour créer votre sonnerie iPhone & Android.',
      loadingAudio: 'Chargement et analyse du fichier audio...',
      startAt: 'Début',
      length: 'Durée de l\'extrait',
      seconds: 'sec',
      preview: 'Écouter l\'Extrait',
      pause: 'Pause',
      downloadBtn: 'Télécharger Sonnerie (.WAV)',
      downloading: 'Création de la sonnerie...',
      iphoneTip: 'Astuce : Prêt pour GarageBand iOS et sonneries Android.',
      close: 'Fermer'
    },
    ar: {
      title: 'أداة قص الصوت ونغمات الرنين',
      subtitle: 'قص 15-30 ثانية لإنشاء نغمة رنين مخصصة لهواتف آيفون وأندرويد.',
      loadingAudio: 'جاري تحميل وتحليل الملف الصوتي...',
      startAt: 'وقت البدء',
      length: 'طول المقطع',
      seconds: 'ثانية',
      preview: 'معاينة المقطع المقصوص',
      pause: 'إيقاف مؤقت',
      downloadBtn: 'تحميل نغمة الرنين (.WAV)',
      downloading: 'جاري إنشاء النغمة...',
      iphoneTip: 'متوافق مع نغمات GarageBand على آيفون وأجهزة أندرويد مباشرة.',
      close: 'إغلاق'
    },
    de: {
      title: 'Audio-Cutter & Klingelton-Editor',
      subtitle: 'Schneiden Sie 15-30 Sekunden für Ihren iPhone- & Android-Klingelton.',
      loadingAudio: 'Audiodatei wird analysiert...',
      startAt: 'Startzeit',
      length: 'Dauer',
      seconds: 'Sek.',
      preview: 'Ausschnitt Abspielen',
      pause: 'Pause',
      downloadBtn: 'Eigenen Klingelton Herunterladen (.WAV)',
      downloading: 'Klingelton wird erstellt...',
      iphoneTip: 'Tipp: Kompatibel mit iPhone GarageBand & Android-Sounds.',
      close: 'Schließen'
    }
  };

  const l = labels[langCode] || labels.en;

  useEffect(() => {
    let isCancelled = false;

    async function loadAudio() {
      try {
        setLoading(true);
        setError(null);

        const proxyUrl = `/api/proxy?url=${encodeURIComponent(audioUrl)}&filename=trim_${id}.mp3&type=audio`;
        const res = await fetch(proxyUrl);
        if (!res.ok) throw new Error('Could not fetch audio file for trimming.');
        
        const arrayBuf = await res.arrayBuffer();
        if (isCancelled) return;

        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        const decoded = await ctx.decodeAudioData(arrayBuf);
        if (isCancelled) return;

        setAudioBuffer(decoded);
        const totalSec = Math.floor(decoded.duration);
        setDuration(totalSec);

        const defaultLen = Math.min(20, Math.max(5, totalSec));
        setClipLength(defaultLen);
        setStartTime(0);
      } catch (err) {
        if (!isCancelled) {
          setError(err.message || 'Error processing audio stream.');
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    if (audioUrl) {
      loadAudio();
    }

    return () => {
      isCancelled = true;
      stopPlayback();
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [audioUrl, id]);

  const stopPlayback = () => {
    if (activeSourceRef.current) {
      try {
        activeSourceRef.current.stop();
        activeSourceRef.current.disconnect();
      } catch (e) {}
      activeSourceRef.current = null;
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    setIsPlaying(false);
    setPlaybackPos(0);
  };

  const playSnippet = () => {
    if (!audioBuffer) return;
    stopPlayback();

    const ctx = audioContextRef.current;
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(ctx.destination);

    const actualDuration = Math.min(clipLength, duration - startTime);
    source.start(0, startTime, actualDuration);
    activeSourceRef.current = source;
    setIsPlaying(true);
    playStartTimeRef.current = ctx.currentTime;

    source.onended = () => {
      setIsPlaying(false);
      setPlaybackPos(0);
    };

    const updatePos = () => {
      if (!activeSourceRef.current) return;
      const elapsed = ctx.currentTime - playStartTimeRef.current;
      setPlaybackPos(Math.min(elapsed, actualDuration));
      if (elapsed < actualDuration) {
        animFrameRef.current = requestAnimationFrame(updatePos);
      }
    };
    animFrameRef.current = requestAnimationFrame(updatePos);
  };

  const handleDownloadRingtone = () => {
    if (!audioBuffer) return;
    try {
      setDownloading(true);
      const actualDuration = Math.min(clipLength, duration - startTime);
      const wavBlob = audioBufferToWav(audioBuffer, startTime, actualDuration);
      if (!wavBlob) throw new Error('Failed to encode sliced ringtone.');

      const downloadUrl = URL.createObjectURL(wavBlob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      const safeTitle = (title || 'quktik_ringtone').replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 30);
      a.download = `${safeTitle}_ringtone_${Math.floor(startTime)}s_${Math.floor(actualDuration)}s.wav`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(downloadUrl), 5000);
    } catch (err) {
      alert(err.message || 'Error downloading trimmed ringtone.');
    } finally {
      setDownloading(false);
    }
  };

  const maxStart = Math.max(0, duration - clipLength);
  const effectiveEnd = Math.min(duration, startTime + clipLength);

  const formatSec = (s) => {
    const mins = Math.floor(s / 60);
    const secs = Math.floor(s % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="relative overflow-hidden p-5 sm:p-6 rounded-3xl bg-slate-900/95 backdrop-blur-2xl text-white border border-slate-800 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
      {/* Top ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-28 bg-gradient-to-b from-rose-500/15 via-pink-500/10 to-transparent rounded-full blur-3xl" />

      {/* Header */}
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 via-pink-600 to-rose-500 flex items-center justify-center shrink-0 shadow-lg shadow-rose-600/25 ring-1 ring-white/20 mt-0.5">
            <Scissors className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-sm sm:text-base font-black text-white tracking-tight">
                {l.title}
              </h4>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap shadow-2xs">
                Live Cutter
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

      {loading ? (
        <div className="py-8 flex flex-col items-center justify-center gap-3 text-slate-400">
          <Loader2 className="w-7 h-7 text-rose-500 animate-spin" />
          <span className="text-xs font-medium">{l.loadingAudio}</span>
        </div>
      ) : error ? (
        <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-800/80 text-rose-200 text-xs font-medium flex items-center gap-2">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Waveform / Visual Snippet Tracker */}
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-2.5 shadow-inner">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 flex-wrap gap-2">
              <span className="flex items-center gap-2 truncate max-w-[220px] sm:max-w-xs text-slate-200">
                <Music className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span className="truncate">{title}</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700/80 text-rose-400 font-mono font-bold text-xs shadow-2xs">
                {formatSec(startTime)} — {formatSec(effectiveEnd)} ({clipLength}s snippet)
              </span>
            </div>

            {/* Interactive Waveform Visualizer */}
            <div className="relative h-14 bg-slate-950 rounded-xl overflow-hidden flex items-center px-1 border border-slate-800">
              {/* Pseudo waveform bars */}
              <div className="absolute inset-0 flex items-center justify-between px-2.5 opacity-35">
                {Array.from({ length: 48 }).map((_, i) => {
                  const height = 25 + ((i * 17 + 7) % 70);
                  return (
                    <div 
                      key={i} 
                      className="w-1 bg-slate-300 rounded-full" 
                      style={{ height: `${height}%` }}
                    />
                  );
                })}
              </div>

              {/* Active Trim Window Overlay */}
              <div 
                className="absolute top-0 bottom-0 bg-rose-500/25 border-x-2 border-rose-500 rounded-md pointer-events-none transition-all duration-75 shadow-lg shadow-rose-500/20"
                style={{
                  left: `${(startTime / (duration || 1)) * 100}%`,
                  width: `${(clipLength / (duration || 1)) * 100}%`
                }}
              >
                {/* Playing cursor */}
                {isPlaying && (
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-md animate-pulse"
                    style={{
                      left: `${(playbackPos / (clipLength || 1)) * 100}%`
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Controls: Start Time & Length Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Start Time Slider */}
            <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 shadow-inner space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">{l.startAt}</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700/70 font-mono font-bold text-rose-400 text-xs shadow-2xs">
                  {formatSec(startTime)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={maxStart}
                step="1"
                value={startTime}
                onChange={(e) => {
                  stopPlayback();
                  setStartTime(Number(e.target.value));
                }}
                className="w-full h-1.5 rounded-lg appearance-none bg-slate-700 accent-rose-500 cursor-pointer"
              />
            </div>

            {/* Length Slider (15s - 30s) */}
            <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 shadow-inner space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">{l.length}</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700/70 font-mono font-bold text-rose-400 text-xs shadow-2xs">
                  {clipLength} {l.seconds}
                </span>
              </div>
              <input
                type="range"
                min="5"
                max={Math.min(30, duration || 30)}
                step="1"
                value={clipLength}
                onChange={(e) => {
                  stopPlayback();
                  setClipLength(Number(e.target.value));
                }}
                className="w-full h-1.5 rounded-lg appearance-none bg-slate-700 accent-rose-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Action Buttons: Preview & Download */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={isPlaying ? stopPlayback : playSnippet}
              className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl font-black text-xs sm:text-sm transition-all shadow-md active:scale-[0.98] cursor-pointer ${
                isPlaying 
                  ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-black shadow-lg shadow-amber-400/20'
                  : 'bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white border border-slate-700/80'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-slate-950" />
                  <span>{l.pause}</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                  <span>{l.preview}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleDownloadRingtone}
              disabled={downloading}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-400 hover:to-pink-500 text-white font-black text-xs sm:text-sm transition-all shadow-lg shadow-rose-500/25 active:scale-[0.98] cursor-pointer disabled:opacity-50"
            >
              {downloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{l.downloading}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{l.downloadBtn}</span>
                </>
              )}
            </button>
          </div>

          {/* Tip Box */}
          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-400 text-xs flex items-center justify-center gap-2 text-center">
            <span>💡</span>
            <span>{l.iphoneTip}</span>
          </div>
        </div>
      )}
    </div>
  );
}
