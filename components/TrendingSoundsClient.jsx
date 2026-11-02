'use client';
import { SOUNDS_UI_TRANSLATIONS } from '../lib/tools/soundsUiTranslations';
import { 
  REGIONAL_TRENDING_SOUNDS, 
  AVAILABLE_REGIONS, 
  getRegionalTrending 
} from '../lib/tools/trendingSoundsData';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Download, 
  Music, 
  Flame, 
  Search, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  ExternalLink,
  Volume2,
  Clock,
  Layers,
  Scissors,
  Globe,
  Radio,
  Sliders,
  Check
} from 'lucide-react';
import Link from 'next/link';

const GENRES = ['All Trends', 'Dance & Hype', 'Pop / Hype', 'Aesthetic & Chill', 'Remixes & Speed Up'];

export default function TrendingSoundsClient({ langCode = "en" }) {
  const ui = SOUNDS_UI_TRANSLATIONS[langCode] || SOUNDS_UI_TRANSLATIONS.en;
  
  // Dual Combo State:
  // 1. Localized by default based on URL langCode
  const initialRegion = AVAILABLE_REGIONS.some(r => r.id === langCode) ? langCode : 'global';
  const [selectedRegion, setSelectedRegion] = useState(initialRegion);
  const [detectedGeo, setDetectedGeo] = useState(null);

  // Filters & Audio State
  const [activeGenre, setActiveGenre] = useState('All Trends');
  const [searchQuery, setSearchQuery] = useState('');
  const [playingId, setPlayingId] = useState(null);
  const audioPlayerRef = useRef(null);

  // Trimmer State
  const [trimmingTrack, setTrimmingTrack] = useState(null);
  const [trimStart, setTrimStart] = useState(0);
  const [trimDuration, setTrimDuration] = useState(20);
  const [isTrimPlaying, setIsTrimPlaying] = useState(false);
  const trimAudioRef = useRef(null);

  // Custom URL Sound Extractor
  const [customUrl, setCustomUrl] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedResult, setExtractedResult] = useState(null);
  const [extractError, setExtractError] = useState(null);

  // Auto-detect country/timezone on mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        let detected = null;

        if (tz.includes('Madrid') || tz.includes('Mexico') || tz.includes('Bogota') || tz.includes('Santiago') || tz.includes('Buenos_Aires') || tz.includes('Lima')) {
          detected = { key: 'es', label: 'España & LATAM', flag: '🇪🇸' };
        } else if (tz.includes('Paris')) {
          detected = { key: 'fr', label: 'France', flag: '🇫🇷' };
        } else if (tz.includes('Riyadh') || tz.includes('Dubai') || tz.includes('Cairo') || tz.includes('Baghdad') || tz.includes('Qatar') || tz.includes('Kuwait')) {
          detected = { key: 'ar', label: 'العالم العربي', flag: '🇸🇦' };
        } else if (tz.includes('Jakarta') || tz.includes('Makassar') || tz.includes('Jayapura') || tz.includes('Pontianak')) {
          detected = { key: 'id', label: 'Indonesia', flag: '🇮🇩' };
        } else if (tz.includes('Tokyo')) {
          detected = { key: 'ja', label: '日本 (Japan)', flag: '🇯🇵' };
        } else if (tz.includes('Sao_Paulo') || tz.includes('Fortaleza') || tz.includes('Manaus') || tz.includes('Recife') || tz.includes('Belem')) {
          detected = { key: 'pt', label: 'Brasil', flag: '🇧🇷' };
        } else if (tz.includes('Berlin')) {
          detected = { key: 'de', label: 'Deutschland', flag: '🇩🇪' };
        } else if (tz.includes('Ho_Chi_Minh') || tz.includes('Saigon') || tz.includes('Hanoi')) {
          detected = { key: 'vi', label: 'Việt Nam', flag: '🇻🇳' };
        } else if (tz.includes('Istanbul')) {
          detected = { key: 'tr', label: 'Türkiye', flag: '🇹🇷' };
        } else if (tz.includes('Rome')) {
          detected = { key: 'it', label: 'Italia', flag: '🇮🇹' };
        } else if (tz.includes('Moscow') || tz.includes('Yekaterinburg') || tz.includes('Novosibirsk') || tz.includes('Samara') || tz.includes('Krasnoyarsk')) {
          detected = { key: 'ru', label: 'Россия & СНГ', flag: '🇷🇺' };
        } else if (tz.includes('New_York') || tz.includes('Chicago') || tz.includes('Los_Angeles') || tz.includes('Denver') || tz.includes('London')) {
          detected = { key: 'global', label: 'Global (US / UK)', flag: '🌍' };
        }

        if (detected) {
          setDetectedGeo(detected);
          // If on default global english route, auto-select detected country
          if (langCode === 'en' && detected.key && detected.key !== 'global') {
            setSelectedRegion(detected.key);
          }
        }
      }
    } catch (e) {
      console.warn('Geo-detection error:', e);
    }
  }, [langCode]);

  // Audio Playback
  const handlePlayPause = (track) => {
    if (playingId === track.id) {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
      }
      setPlayingId(null);
    } else {
      setPlayingId(track.id);
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
        const audioSrc = `/audio/${track.audioFile || 'track-1.mp3'}`;
        audioPlayerRef.current.src = audioSrc;
        audioPlayerRef.current.load();
        audioPlayerRef.current.play().catch((err) => {
          console.warn('Audio direct play failed, trying API route:', err);
          if (audioPlayerRef.current) {
            audioPlayerRef.current.src = `/api/audio-download?file=${encodeURIComponent(track.audioFile || 'track-1.mp3')}&title=${encodeURIComponent(track.title)}&artist=${encodeURIComponent(track.artist)}`;
            audioPlayerRef.current.play().catch(() => setPlayingId(null));
          }
        });
      }
    }
  };

  // Preview Trimmed Segment
  const handleToggleTrimPlay = () => {
    if (!trimAudioRef.current) return;
    if (isTrimPlaying) {
      trimAudioRef.current.pause();
      setIsTrimPlaying(false);
    } else {
      trimAudioRef.current.currentTime = trimStart;
      trimAudioRef.current.play().then(() => {
        setIsTrimPlaying(true);
      }).catch(() => setIsTrimPlaying(false));
    }
  };

  // Check trim end time
  const handleTrimTimeUpdate = () => {
    if (trimAudioRef.current) {
      if (trimAudioRef.current.currentTime >= trimStart + trimDuration) {
        trimAudioRef.current.pause();
        trimAudioRef.current.currentTime = trimStart;
        setIsTrimPlaying(false);
      }
    }
  };

  // Custom TikTok Sound Extraction
  const handleExtractCustomSound = async (e) => {
    e.preventDefault();
    const trimmed = customUrl.trim();
    if (!trimmed) return;

    try {
      setIsExtracting(true);
      setExtractError(null);
      setExtractedResult(null);

      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: trimmed,
          platform: trimmed.includes('douyin.com') ? 'douyin' : 'tiktok'
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success || !data.music?.url) {
        throw new Error(data.error || 'Could not isolate audio track from this link.');
      }

      setExtractedResult(data);
    } catch (err) {
      setExtractError(err.message || 'Error extracting audio stem.');
    } finally {
      setIsExtracting(false);
    }
  };

  // Current Regional Tracks
  const currentRegionData = getRegionalTrending(selectedRegion);
  const regionalTracks = currentRegionData.tracks || [];

  // Filtered tracks by search and genre
  const filteredTracks = regionalTracks.filter(t => {
    const matchesGenre = activeGenre === 'All Trends' || t.genre === activeGenre;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Hidden Master Audio Player */}
      <audio 
        ref={audioPlayerRef} 
        onEnded={() => setPlayingId(null)}
        onError={() => setPlayingId(null)}
        className="hidden" 
      />

      {/* 1. Regional Country Switcher Bar (Dual Combo) */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-xl border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center shrink-0 shadow-md">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm sm:text-base font-extrabold leading-tight text-white">
                  Trending TikTok Charts by Country
                </h3>
                {detectedGeo && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-bold">
                    <span>{detectedGeo.flag}</span>
                    <span>Detected: {detectedGeo.label}</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentRegionData.subheading || 'Select your country to explore localized viral sounds & dance challenge audio.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] text-slate-400">Current Market:</span>
            <span className="px-3 py-1 rounded-xl bg-rose-600/30 border border-rose-500/50 text-rose-300 text-xs font-black flex items-center gap-1.5">
              <span>{currentRegionData.flag}</span>
              <span>{currentRegionData.name}</span>
            </span>
          </div>
        </div>

        {/* 12 Country Tabs Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
          {AVAILABLE_REGIONS.map((region) => {
            const isSelected = selectedRegion === region.id;
            return (
              <button
                key={region.id}
                onClick={() => {
                  setSelectedRegion(region.id);
                  if (audioPlayerRef.current) {
                    audioPlayerRef.current.pause();
                  }
                  setPlayingId(null);
                  setTrimmingTrack(null);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all shrink-0 active:scale-95 ${
                  isSelected
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/40 ring-2 ring-white/30 font-extrabold'
                    : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/60'
                }`}
              >
                <span className="text-base leading-none">{region.flag}</span>
                <span>{region.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Custom URL Sound Extractor Banner */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center shrink-0 shadow-xs">
            <Music className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
              Extract Custom Audio from Any TikTok or Douyin Link
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Have a specific TikTok video with audio you love? Paste the URL below to isolate the 320kbps MP3.
            </p>
          </div>
        </div>

        <form onSubmit={handleExtractCustomSound} className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="url"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder={ui.extractorPlaceholder || "Paste TikTok video link (e.g. https://vm.tiktok.com/...)"}
            className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 border-2 border-slate-200 focus:border-rose-500 focus:bg-white focus:outline-hidden text-xs sm:text-sm text-slate-900 font-mono transition-all"
          />
          <button
            type="submit"
            disabled={isExtracting || !customUrl.trim()}
            className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 disabled:opacity-50 shrink-0 flex items-center justify-center gap-2"
          >
            {isExtracting ? (
              <span>Extracting MP3...</span>
            ) : (
              <>
                <Zap className="w-4 h-4 fill-white" />
                <span>{ui.extractBtn || 'Extract Sound'}</span>
              </>
            )}
          </button>
        </form>

        {extractError && (
          <p className="text-xs text-red-600 font-semibold bg-red-50 p-3 rounded-xl border border-red-200">
            {extractError}
          </p>
        )}

        {extractedResult && (
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold uppercase tracking-wider">
                  Audio Extracted
                </span>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 truncate mt-1">
                  {extractedResult.music?.title || extractedResult.title || 'TikTok Audio Track'}
                </h4>
                <p className="text-[11px] text-slate-500 truncate">
                  Artist: {extractedResult.music?.author || extractedResult.author?.nickname || 'Unknown'}
                </p>
              </div>
            </div>

            <a
              href={`/api/proxy?url=${encodeURIComponent(extractedResult.music.url)}&filename=quktik_audio_${extractedResult.id}.mp3&type=audio`}
              download={`quktik_audio_${extractedResult.id}.mp3`}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md active:scale-95 transition-all text-center shrink-0 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Clean MP3 (320kbps)</span>
            </a>
          </div>
        )}
      </div>

      {/* 3. Controls Bar: Search & Genre Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Genre Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {GENRES.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGenre(g)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeGenre === g
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={ui.searchPlaceholder || "Search viral song or artist..."}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-rose-500 transition-all"
          />
        </div>
      </div>

      {/* 4. The Top Tracks Chart Grid with Reliable Audio Play & Instant MP3 Download */}
      <div className="space-y-3">
        {filteredTracks.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
            No tracks found matching your search.
          </div>
        ) : (
          filteredTracks.map((track) => {
            const isThisPlaying = playingId === track.id;
            const rankColor = 
              track.id === 1 ? 'bg-amber-400 text-slate-950 font-black' :
              track.id === 2 ? 'bg-slate-300 text-slate-900 font-black' :
              track.id === 3 ? 'bg-amber-600 text-white font-black' :
              'bg-slate-100 text-slate-600 font-bold';

            const isTrimmingThis = trimmingTrack?.id === track.id;
            const downloadUrl = `/api/audio-download?file=${encodeURIComponent(track.audioFile || 'track-1.mp3')}&title=${encodeURIComponent(track.title)}&artist=${encodeURIComponent(track.artist)}`;
            const safeDownloadFilename = `quktik_${track.title.toLowerCase().replace(/[^a-z0-9]+/g, '_')}_320kbps.mp3`;

            return (
              <div 
                key={track.id}
                className={`p-3.5 sm:p-4 rounded-2xl bg-white border transition-all flex flex-col gap-3 group shadow-xs ${
                  isThisPlaying 
                    ? 'border-rose-500 ring-2 ring-rose-100 shadow-md' 
                    : 'border-slate-200/80 hover:border-rose-300 hover:shadow-md'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {/* Left: Rank + Play + Info */}
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-2xs ${rankColor}`}>
                      #{track.id}
                    </div>

                    {/* Play/Pause Button */}
                    <button
                      onClick={() => handlePlayPause(track)}
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-xs ${
                        isThisPlaying
                          ? 'bg-rose-600 text-white ring-4 ring-rose-100'
                          : 'bg-slate-100 group-hover:bg-rose-50 text-slate-700 group-hover:text-rose-600'
                      }`}
                      title={isThisPlaying ? 'Pause sound' : 'Play audio snippet'}
                    >
                      {isThisPlaying ? (
                        <Pause className="w-5 h-5 fill-white" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>

                    {/* Title & Artist & Dynamic Equalizer Waves */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 truncate">
                          {track.title}
                        </h4>
                        <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-rose-50 text-rose-700 border border-rose-200 font-bold shrink-0 hidden sm:inline-block">
                          {track.tag}
                        </span>
                        {isThisPlaying && (
                          <div className="flex items-end gap-0.5 h-3.5 shrink-0 px-1 py-0.5 bg-rose-50 rounded-md">
                            <span className="w-1 bg-rose-600 rounded-full animate-bounce [animation-delay:-0.3s] h-3"></span>
                            <span className="w-1 bg-rose-600 rounded-full animate-bounce [animation-delay:-0.15s] h-2"></span>
                            <span className="w-1 bg-rose-600 rounded-full animate-bounce h-3.5"></span>
                          </div>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                        {track.artist}
                      </p>
                    </div>
                  </div>

                  {/* Right: Stats, Trimmer Button & 1-Click MP3 Download */}
                  <div className="flex items-center justify-between sm:justify-end gap-2.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <div className="text-left sm:text-right mr-1">
                      <span className="text-xs font-extrabold text-slate-900 block font-mono">
                        {track.creations} {ui.creations || 'Videos'}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono block">
                        {track.duration} • 320kbps
                      </span>
                    </div>

                    {/* Ringtone Trimmer Toggle */}
                    <button
                      onClick={() => {
                        if (isTrimmingThis) {
                          setTrimmingTrack(null);
                        } else {
                          setTrimmingTrack(track);
                          setTrimStart(0);
                        }
                      }}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                        isTrimmingThis
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                      title="Trim 15-30s Ringtone or Alarm"
                    >
                      <Scissors className="w-3.5 h-3.5 text-rose-500" />
                      <span className="hidden sm:inline">{ui.trimTone || 'Trim Tone'}</span>
                    </button>

                    {/* Reliable Same-Origin Native MP3 Download */}
                    <a
                      href={downloadUrl}
                      download={safeDownloadFilename}
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-bold transition-all shadow-xs active:scale-95 flex items-center gap-1.5 shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{ui.downloadMp3 || 'Download MP3'}</span>
                    </a>
                  </div>
                </div>

                {/* Built-in Ringtone & Audio Trimmer Card */}
                {isTrimmingThis && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mt-2 space-y-3 animate-in fade-in duration-200">
                    <audio
                      ref={trimAudioRef}
                      src={`/audio/${track.audioFile || 'track-1.mp3'}`}
                      onTimeUpdate={handleTrimTimeUpdate}
                      className="hidden"
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Scissors className="w-4 h-4 text-rose-600" />
                        <h5 className="text-xs font-extrabold text-slate-900">
                          Create Custom Phone Ringtone / Alarm
                        </h5>
                      </div>
                      <span className="text-[11px] text-slate-500 font-mono">
                        Start: 0:{trimStart < 10 ? `0${trimStart}` : trimStart} • Duration: {trimDuration}s
                      </span>
                    </div>

                    {/* Timeline Slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                        <span>0:00 (Intro)</span>
                        <span>0:15</span>
                        <span>0:30 (Drop)</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="20"
                        step="1"
                        value={trimStart}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10);
                          setTrimStart(val);
                          if (trimAudioRef.current) {
                            trimAudioRef.current.currentTime = val;
                          }
                        }}
                        className="w-full accent-rose-600 cursor-pointer"
                      />
                    </div>

                    {/* Duration Buttons & Actions */}
                    <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] text-slate-600 font-bold">Length:</span>
                        {[15, 20, 30].map((dur) => (
                          <button
                            key={dur}
                            onClick={() => setTrimDuration(dur)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                              trimDuration === dur
                                ? 'bg-rose-600 text-white'
                                : 'bg-white text-slate-600 border border-slate-200'
                            }`}
                          >
                            {dur}s
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleToggleTrimPlay}
                          className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs"
                        >
                          {isTrimPlaying ? (
                            <>
                              <Pause className="w-3.5 h-3.5 fill-current" />
                              <span>Pause</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 fill-current" />
                              <span>Audition Trim</span>
                            </>
                          )}
                        </button>

                        <a
                          href={downloadUrl}
                          download={`quktik_${track.title.toLowerCase().replace(/[^a-z0-9]+/g, '_')}_ringtone_${trimDuration}s.mp3`}
                          className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Save Ringtone MP3</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
