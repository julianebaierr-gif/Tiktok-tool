'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { Music, Radio, Disc, Volume2, CheckCircle2, HelpCircle } from 'lucide-react';

export default function TikTokMp3Page() {
  const [downloadResult, setDownloadResult] = useState(null);

  return (
    <div className="relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-rose-500/10 via-pink-500/10 to-transparent blur-3xl pointer-events-none -z-10"></div>

      {/* Downloader Section */}
      <section className="pt-4 pb-8 sm:pb-12">
        {!downloadResult ? (
          <DownloaderForm
            onResult={(data) => setDownloadResult(data)}
            title="TikTok to MP3 Converter (Download Audio in 320kbps)"
            subtitle="Extract background music, sound bites, dialogue, and trending audio tracks from any TikTok video in high-fidelity MP3 format for free."
            defaultType="audio"
          />
        ) : (
          <ResultCard
            result={downloadResult}
            onReset={() => setDownloadResult(null)}
          />
        )}
      </section>

      {/* Audio Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
            Dedicated Audio Engine
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Why Use TikFlow TikTok to MP3 Converter?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Easily isolate and download high-quality audio files for offline listening, podcast research, ringtones, or audio production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
              <Disc className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Original Studio Bitrate</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We extract the original audio stream directly from TikTok servers without re-compressing, delivering clean sound at up to 320kbps bitrate.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
              <Radio className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Instant MP3 Conversion</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              No need to wait for heavy video processing. Our audio extraction engine grabs the pure audio stream in under 2 seconds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Universal Compatibility</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Downloaded MP3 files work flawlessly on Apple Music, Spotify local files, iTunes, VLC, Android media players, and Windows Media Player.
            </p>
          </div>
        </div>
      </section>

      {/* Guide & Semantic Articles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            How to Convert TikTok Videos to MP3 Online
          </h2>
          <ol className="space-y-3 list-decimal list-inside text-slate-400 text-sm sm:text-base">
            <li><strong className="text-white">Copy Link:</strong> In the TikTok app, tap Share on any video with music you love and select <em>Copy Link</em>.</li>
            <li><strong className="text-white">Paste URL:</strong> Open TikFlow MP3 Downloader in your web browser and paste the link into the field.</li>
            <li><strong className="text-white">Extract MP3:</strong> Click <em>Download</em>, then tap the pink <em>Download MP3 Audio</em> button. The sound track will immediately save to your device.</li>
          </ol>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-3">How to Use Downloaded TikTok Sounds as Your Phone Ringtone</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-3">
            On Android, once you download the MP3 from TikFlow, navigate to <em>Settings &gt; Sound & Vibration &gt; Phone Ringtone &gt; Custom Ringtone</em> and select your newly saved TikTok MP3 file.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            On iPhone, you can import the downloaded MP3 into Apple’s free <strong>GarageBand</strong> app, export it as a Ringtone, and immediately set it as your default call or alarm sound without needing a computer.
          </p>
        </div>
      </section>

    </div>
  );
}
