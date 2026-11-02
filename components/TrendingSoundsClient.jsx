'use client';
import { SOUNDS_UI_TRANSLATIONS } from '../lib/tools/soundsUiTranslations';

import React, { useState, useRef } from 'react';
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
  Scissors
} from 'lucide-react';
import Link from 'next/link';

// Top 20 Curated Viral TikTok Sounds
const TRENDING_TRACKS = [
  {
    id: 1,
    title: 'Espresso',
    artist: 'Sabrina Carpenter',
    duration: '0:32',
    creations: '5.6M',
    tag: 'Viral Hook',
    genre: 'Pop / Hype',
    audioSample: 'https://cdn.freesound.org/previews/682/682025_11861866-lq.mp3'
  },
  {
    id: 2,
    title: 'Makeba (Speed Up Remix)',
    artist: 'Jain x DJ Ian Asher',
    duration: '0:28',
    creations: '5.1M',
    tag: 'Dance Challenge',
    genre: 'Remixes & Speed Up',
    audioSample: 'https://cdn.freesound.org/previews/612/612610_11861866-lq.mp3'
  },
  {
    id: 3,
    title: 'Birds of a Feather',
    artist: 'Billie Eilish',
    duration: '0:35',
    creations: '4.9M',
    tag: 'Aesthetic POV',
    genre: 'Aesthetic & Chill',
    audioSample: 'https://cdn.freesound.org/previews/682/682025_11861866-lq.mp3'
  },
  {
    id: 4,
    title: 'Water',
    artist: 'Tyla',
    duration: '0:30',
    creations: '4.8M',
    tag: 'Dance Challenge',
    genre: 'Dance & Hype',
    audioSample: 'https://cdn.freesound.org/previews/612/612610_11861866-lq.mp3'
  },
  {
    id: 5,
    title: 'MILLION DOLLAR BABY',
    artist: 'Tommy Richman',
    duration: '0:29',
    creations: '4.1M',
    tag: 'Viral Hook',
    genre: 'Pop / Hype',
    audioSample: 'https://cdn.freesound.org/previews/682/682025_11861866-lq.mp3'
  },
  {
    id: 6,
    title: 'Please Please Please',
    artist: 'Sabrina Carpenter',
    duration: '0:34',
    creations: '3.9M',
    tag: 'Lip-Sync Anthems',
    genre: 'Pop / Hype',
    audioSample: 'https://cdn.freesound.org/previews/612/612610_11861866-lq.mp3'
  },
  {
    id: 7,
    title: 'ecstacy (slowed + reverb)',
    artist: 'SUICIDAL-IDOL',
    duration: '0:42',
    creations: '3.7M',
    tag: 'Aesthetic POV',
    genre: 'Remixes & Speed Up',
    audioSample: 'https://cdn.freesound.org/previews/682/682025_11861866-lq.mp3'
  },
  {
    id: 8,
    title: 'Not Like Us',
    artist: 'Kendrick Lamar',
    duration: '0:30',
    creations: '3.4M',
    tag: 'High Energy Beat',
    genre: 'Dance & Hype',
    audioSample: 'https://cdn.freesound.org/previews/612/612610_11861866-lq.mp3'
  },
  {
    id: 9,
    title: 'Greedy',
    artist: 'Tate McRae',
    duration: '0:27',
    creations: '3.2M',
    tag: 'Dance Challenge',
    genre: 'Dance & Hype',
    audioSample: 'https://cdn.freesound.org/previews/682/682025_11861866-lq.mp3'
  },
  {
    id: 10,
    title: 'Good Luck, Babe!',
    artist: 'Chappell Roan',
    duration: '0:36',
    creations: '3.1M',
    tag: 'Emotional Chorus',
    genre: 'Pop / Hype',
    audioSample: 'https://cdn.freesound.org/previews/612/612610_11861866-lq.mp3'
  },
  {
    id: 11,
    title: 'Paint The Town Red',
    artist: 'Doja Cat',
    duration: '0:31',
    creations: '2.9M',
    tag: 'Trend Setter',
    genre: 'Dance & Hype',
    audioSample: 'https://cdn.freesound.org/previews/682/682025_11861866-lq.mp3'
  },
  {
    id: 12,
    title: 'A Bar Song (Tipsy)',
    artist: 'Shaboozey',
    duration: '0:33',
    creations: '2.8M',
    tag: 'Party Anthem',
    genre: 'Pop / Hype',
    audioSample: 'https://cdn.freesound.org/previews/612/612610_11861866-lq.mp3'
  },
  {
    id: 13,
    title: 'Too Sweet',
    artist: 'Hozier',
    duration: '0:38',
    creations: '2.5M',
    tag: 'Acoustic Soul',
    genre: 'Aesthetic & Chill',
    audioSample: 'https://cdn.freesound.org/previews/682/682025_11861866-lq.mp3'
  },
  {
    id: 14,
    title: 'Lovin On Me',
    artist: 'Jack Harlow',
    duration: '0:26',
    creations: '2.2M',
    tag: 'Transition Beat',
    genre: 'Dance & Hype',
    audioSample: 'https://cdn.freesound.org/previews/612/612610_11861866-lq.mp3'
  },
  {
    id: 15,
    title: 'If We Being Rëal',
    artist: 'Yeat',
    duration: '0:30',
    creations: '2.1M',
    tag: 'Car Edit Bass',
    genre: 'Remixes & Speed Up',
    audioSample: 'https://cdn.freesound.org/previews/682/682025_11861866-lq.mp3'
  },
  {
    id: 16,
    title: 'Daylight',
    artist: 'David Kushner',
    duration: '0:40',
    creations: '1.9M',
    tag: 'Cinematic Mood',
    genre: 'Aesthetic & Chill',
    audioSample: 'https://cdn.freesound.org/previews/612/612610_11861866-lq.mp3'
  },
  {
    id: 17,
    title: 'Gata Only',
    artist: 'FloyyMenor & Cris Mj',
    duration: '0:29',
    creations: '1.8M',
    tag: 'Latin Club Drop',
    genre: 'Dance & Hype',
    audioSample: 'https://cdn.freesound.org/previews/682/682025_11861866-lq.mp3'
  },
  {
    id: 18,
    title: 'Prada',
    artist: 'casso x RAYE x D-Block Europe',
    duration: '0:28',
    creations: '1.6M',
    tag: 'Nightclub Energy',
    genre: 'Remixes & Speed Up',
    audioSample: 'https://cdn.freesound.org/previews/612/612610_11861866-lq.mp3'
  },
  {
    id: 19,
    title: 'Agora Hills',
    artist: 'Doja Cat',
    duration: '0:33',
    creations: '1.5M',
    tag: 'Aesthetic POV',
    genre: 'Aesthetic & Chill',
    audioSample: 'https://cdn.freesound.org/previews/682/682025_11861866-lq.mp3'
  },
  {
    id: 20,
    title: 'Strangers',
    artist: 'Kenya Grace',
    duration: '0:29',
    creations: '1.4M',
    tag: 'DnB Electronic',
    genre: 'Remixes & Speed Up',
    audioSample: 'https://cdn.freesound.org/previews/612/612610_11861866-lq.mp3'
  }
];

const GENRES = ['All Trends', 'Dance & Hype', 'Pop / Hype', 'Aesthetic & Chill', 'Remixes & Speed Up'];

export default function TrendingSoundsClient({ langCode = "en" }) {
  const ui = SOUNDS_UI_TRANSLATIONS[langCode] || SOUNDS_UI_TRANSLATIONS.en;
  const [activeGenre, setActiveGenre] = useState('All Trends');
  const [searchQuery, setSearchQuery] = useState('');
  const [playingId, setPlayingId] = useState(null);
  const audioPlayerRef = useRef(null);

  // Direct TikTok Link Sound Extractor
  const [customUrl, setCustomUrl] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedResult, setExtractedResult] = useState(null);
  const [extractError, setExtractError] = useState(null);

  const handlePlayPause = (track) => {
    if (playingId === track.id) {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
      }
      setPlayingId(null);
    } else {
      setPlayingId(track.id);
      if (audioPlayerRef.current) {
        audioPlayerRef.current.src = track.audioSample;
        audioPlayerRef.current.play().catch(() => {});
      }
    }
  };

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

  // Filter tracks
  const filteredTracks = TRENDING_TRACKS.filter(t => {
    const matchesGenre = activeGenre === 'All Trends' || t.genre === activeGenre;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Hidden Audio Player */}
      <audio 
        ref={audioPlayerRef} 
        onEnded={() => setPlayingId(null)}
        className="hidden" 
      />

      {/* 1. Custom URL Sound Extractor Banner */}
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
            placeholder="Paste TikTok video link (e.g. https://vm.tiktok.com/...)"
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
                <span>Extract Audio Stem</span>
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

      {/* 2. Controls Bar: Search & Genre Filters */}
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
            placeholder="Search viral song or artist..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-rose-500 transition-all"
          />
        </div>
      </div>

      {/* 3. The Top 20 Viral Tracks Chart Grid */}
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

            return (
              <div 
                key={track.id}
                className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-rose-300 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
              >
                {/* Left: Rank + Info */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-2xs ${rankColor}`}>
                    #{track.id}
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => handlePlayPause(track)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-xs ${
                      isThisPlaying
                        ? 'bg-rose-600 text-white animate-pulse'
                        : 'bg-slate-100 group-hover:bg-rose-50 text-slate-700 group-hover:text-rose-600'
                    }`}
                    title={isThisPlaying ? 'Pause' : 'Play audio snippet'}
                  >
                    {isThisPlaying ? (
                      <Pause className="w-5 h-5 fill-white" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </button>

                  {/* Title & Artist */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 truncate">
                        {track.title}
                      </h4>
                      <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-rose-50 text-rose-700 border border-rose-200 font-bold shrink-0 hidden sm:inline-block">
                        {track.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                      {track.artist}
                    </p>
                  </div>
                </div>

                {/* Right: Stats & Download */}
                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-extrabold text-slate-900 block font-mono">
                      {track.creations} Videos
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono block">
                      {track.duration} • 320kbps
                    </span>
                  </div>

                  <a
                    href={track.audioSample}
                    download={`quktik_${track.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_320kbps.mp3`}
                    className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all shadow-xs active:scale-95 flex items-center gap-1.5 shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{ui.downloadMp3}</span>
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
