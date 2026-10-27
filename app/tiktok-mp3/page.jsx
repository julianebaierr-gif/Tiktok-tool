'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { Radio, Disc, Volume2 } from 'lucide-react';

export default function TikTokMp3Page() {
  const [downloadResult, setDownloadResult] = useState(null);

  return (
    <div className="relative overflow-hidden">
      
      {/* Downloader Section */}
      <section className="pt-4 pb-8 sm:pb-12">
        {!downloadResult ? (
          <DownloaderForm
            onResult={(data) => setDownloadResult(data)}
            title="TikTok to MP3 Converter (Download Audio in 320kbps)"
            subtitle="Extract background music, sound bites, dialogue, and trending audio tracks from any TikTok video in high-quality MP3 format for free."
            placeholder="Paste TikTok video link to extract 320kbps MP3 audio..."
            buttonText="Convert to MP3"
            badge="Studio Audio Extractor"
          />
        ) : (
          <ResultCard
            result={downloadResult}
            onReset={() => setDownloadResult(null)}
            mode="mp3"
          />
        )}
      </section>

      {/* Audio Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
            Dedicated Audio Engine
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Why Use TikFlow TikTok to MP3 Converter?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Easily isolate and download high-quality audio files for offline listening, podcast research, ringtones, or audio production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-4">
              <Disc className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Original Studio Bitrate</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We extract the original audio stream directly from TikTok servers without re-compressing, delivering clean sound at up to 320kbps bitrate.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4">
              <Radio className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Instant MP3 Conversion</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No need to wait for heavy video processing. Our audio extraction engine grabs the pure audio stream in under 2 seconds.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Universal Compatibility</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Downloaded MP3 files work flawlessly on Apple Music, Spotify local files, iTunes, VLC, Android media players, and Windows Media Player.
            </p>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 leading-relaxed">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
            How to Convert TikTok Videos to MP3 Online
          </h2>
          <ol className="space-y-3 list-decimal list-inside text-slate-600 text-sm sm:text-base">
            <li><strong className="text-slate-900">Copy Link:</strong> In the TikTok app, tap Share on any video with music you love and select <em>Copy Link</em>.</li>
            <li><strong className="text-slate-900">Paste URL:</strong> Open TikFlow MP3 Downloader in your web browser and paste the link into the field.</li>
            <li><strong className="text-slate-900">Extract MP3:</strong> Click <em>Convert to MP3</em>, then tap the green <em>Download MP3 Audio (320kbps)</em> button. The sound track will immediately save to your device.</li>
          </ol>
        </div>
      </section>

    </div>
  );
}
