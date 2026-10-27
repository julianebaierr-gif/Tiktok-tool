'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { 
  Radio, 
  Disc, 
  Volume2, 
  Music, 
  Sparkles, 
  Headphones, 
  Smartphone, 
  Laptop, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  FileAudio,
  Sliders,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function TikTokMp3Page() {
  const [downloadResult, setDownloadResult] = useState(null);

  const faqData = [
    {
      q: "What audio bitrate does TikFlow MP3 Downloader provide?",
      a: "TikFlow extracts the original audio stream at up to 320kbps bitrate (44.1 kHz / 48 kHz stereo sampling). Unlike competing web converters that compress audio to low-fidelity 64kbps or 128kbps mono, TikFlow preserves the full acoustic spectrum, punchy bass, and crisp vocal frequencies."
    },
    {
      q: "Can I convert TikTok sounds to ringtones on an iPhone?",
      a: "Yes! After downloading the MP3 file through Safari on your iPhone, you can import it into Apple GarageBand (free from the App Store), trim it to 30 seconds or less, and tap 'Export as Ringtone'. It will immediately appear under iOS Settings > Sounds & Haptics > Ringtone."
    },
    {
      q: "Can I use downloaded MP3 audio on Android phones for notifications?",
      a: "Yes. Once downloaded via Chrome, open your Files app, locate the MP3 in your /Download directory, and move it to the /Notifications or /Ringtones folder. You can then select it in Android Settings > Sound > Notification Sound."
    },
    {
      q: "Do I need to download the full video just to get the audio?",
      a: "No! TikFlow's dedicated audio engine performs demuxing directly on our cloud servers. Only the isolated audio track is delivered to your browser, saving your mobile data allowance and completing the download in under two seconds."
    },
    {
      q: "Are downloaded TikTok MP3 tracks compatible with Spotify Local Files?",
      a: "Yes. All audio files saved via TikFlow use standard MPEG Audio Layer III (.mp3) encoding with clean ID3 tags. You can enable 'Show Local Audio Files' in Spotify desktop or mobile settings, and your downloaded TikTok songs will play seamlessly alongside your regular playlists."
    },
    {
      q: "Is it legal to download audio tracks and music from TikTok?",
      a: "Extracting audio for personal offline listening, academic analysis, voiceover practice, or personal ringtones falls under fair use in most jurisdictions. However, using copyrighted music in commercial advertisements or redistributing it without authorization is prohibited. Always honor artist copyrights."
    },
    {
      q: "Does TikFlow work on private video links or deleted sounds?",
      a: "TikFlow can only extract audio from publicly available TikTok videos. If a sound has been removed by TikTok for copyright strikes or the creator's account is private, the audio stream cannot be retrieved."
    }
  ];

  return (
    <div className="relative overflow-hidden">

      {/* Structured Data FAQ Schema for SEO Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
          })
        }}
      />

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

      {/* Audio Engine Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
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
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-2">
              <Disc className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Original Studio Bitrate (320kbps)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We extract the original audio stream directly from TikTok servers without re-compressing, delivering clean sound at up to 320kbps bitrate with crisp highs and deep bass.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-2">
              <Radio className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Instant Demuxing in 2 Seconds</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No need to wait for heavy video processing. Our audio extraction engine grabs the pure audio stream in under two seconds without burning through your mobile data.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-2">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Universal Compatibility</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Downloaded MP3 files work flawlessly on Apple Music, Spotify local files, iTunes, VLC, Android media players, GarageBand, and car audio systems.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive 1,200+ Word Editorial Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-700 leading-relaxed space-y-16">

        {/* Section 1: The Power of TikTok Audio & Relative 3D Image */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Headphones className="w-4 h-4 text-indigo-500" />
            <span>Studio Acoustic Fidelity</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How to Extract Crystal-Clear 320kbps MP3 Audio from TikTok Videos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            TikTok has evolved into the music industry&apos;s greatest hitmaker and trendsetter. From independent artists debuting unreleased tracks to viral sped-up remixes, nostalgic 90s sample chops, motivational podcast snippets, and ASMR soundscapes, the auditory experience on TikTok is arguably as influential as the visual imagery.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            However, when you only want the soundtrack for offline listening during a workout, to use as a phone ringtone, or to study dialogue for a voiceover project, downloading a 50MB video file is wasteful and inconvenient. TikFlow&apos;s dedicated TikTok to MP3 Converter strips away the heavy video payload and delivers the pure, high-fidelity audio stream in universal MP3 format.
          </p>

          {/* Embedded 3D Illustration: Audio & Ringtone Workflow */}
          <div className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            <img
              src="/images/audio-ringtone-3d.png"
              alt="3D illustration showing audio waveform extraction from TikTok video into a high-fidelity 320kbps MP3 audio file"
              className="w-full h-auto object-cover max-h-[420px]"
              loading="lazy"
            />
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-rose-600 font-bold">
                <span>Direct Audio Stream Extraction (Demuxing)</span>
              </span>
              <span className="flex items-center gap-1.5 text-indigo-600 font-bold">
                <span>320 kbps Studio MP3 • 44.1/48 kHz Stereo</span>
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Bitrate Transparency - 320kbps vs Competitors */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Bitrate Matters: Why Competitors Deliver Muffled Sound
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A common complaint among users of online converters is that audio tracks often sound muddy, tinny, or distorted when played through high-end headphones or car speakers. This happens because low-cost conversion services use aggressive compression algorithms to minimize their server bandwidth costs.
          </p>

          {/* Bitrate Comparison Table */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white my-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="p-4 sm:p-5">Audio Specification</th>
                  <th className="p-4 sm:p-5 text-rose-600">TikFlow MP3 Converter</th>
                  <th className="p-4 sm:p-5 text-slate-500">Standard Web Converters</th>
                  <th className="p-4 sm:p-5 text-slate-500">Screen Recording Audio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Bitrate Density</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Up to 320 kbps (Constant)</td>
                  <td className="p-4 sm:p-5 text-slate-500">64 kbps - 128 kbps (Mono)</td>
                  <td className="p-4 sm:p-5 text-rose-500">Variable / Microphone Noise</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Frequency Response</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">20 Hz - 20,000 Hz Full Range</td>
                  <td className="p-4 sm:p-5 text-slate-500">Cut off above 12,000 Hz</td>
                  <td className="p-4 sm:p-5 text-slate-500">Distorted high frequencies</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Stereo Channels</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">True Dual Stereo (L/R)</td>
                  <td className="p-4 sm:p-5 text-slate-500">Frequently collapsed to Mono</td>
                  <td className="p-4 sm:p-5 text-slate-500">System Mono</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">File Container</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Pure MP3 (ID3 Compliant)</td>
                  <td className="p-4 sm:p-5 text-slate-500">M4A renamed to MP3</td>
                  <td className="p-4 sm:p-5 text-slate-500">Embedded in MP4 video</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Popular Creative Uses for TikTok MP3 Audio */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Creative Ways People Use Downloaded TikTok MP3 Audio
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Extracting audio tracks opens up countless practical applications across everyday life and creative multimedia projects:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-bold text-slate-900 text-base">Custom Phone Ringtones &amp; Alarms</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Transform that hilarious viral comedy punchline or energetic melodic beat into your personal morning alarm or incoming call ringtone for iPhone and Android.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-bold text-slate-900 text-base">Spotify Local Files Integration</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Add unreleased TikTok acoustic sessions, bootlegs, and live DJ sets directly into your private Spotify playlists through the Local Files feature.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-bold text-slate-900 text-base">Video Editing &amp; B-Roll Voiceovers</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Video editors working in Premiere Pro, Final Cut, or CapCut can import sound effects, narrative voiceovers, and ambient background music without watermark interference.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  04
                </div>
                <h4 className="font-bold text-slate-900 text-base">Offline Podcast &amp; Speech Study</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Listen to long-form motivational speeches, philosophy breakdowns, language learning pronunciation drills, and financial advice while offline during flights or commutes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Step-by-Step Device Setup Guides */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            How to Set Downloaded TikTok MP3 as a Ringtone
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
            {/* iPhone GarageBand Tutorial */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 font-bold">
                  iOS
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">iPhone Ringtone (via GarageBand)</h4>
                  <p className="text-xs text-slate-500">100% Free • No Computer Required</p>
                </div>
              </div>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
                <li>Download your MP3 sound using Safari on TikFlow.</li>
                <li>Open the free <strong>GarageBand</strong> app and choose <strong>Audio Recorder</strong>.</li>
                <li>Tap the multi-track icon (top left), then tap the loop icon (top right).</li>
                <li>Select <strong>Files</strong>, locate your downloaded MP3, and drag it onto the timeline.</li>
                <li>Trim the track to 30 seconds or less, tap the dropdown arrow &gt; <strong>My Songs</strong>.</li>
                <li>Long-press the saved project, tap <strong>Share &gt; Ringtone</strong>, name it, and tap <strong>Export</strong>!</li>
              </ol>
            </div>

            {/* Android Settings Tutorial */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                  Android
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Android Custom Sound Setup</h4>
                  <p className="text-xs text-slate-500">Direct File Assignment</p>
                </div>
              </div>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
                <li>Convert and download your MP3 sound using Chrome on TikFlow.</li>
                <li>Open your phone&apos;s <strong>Settings</strong> app.</li>
                <li>Navigate to <strong>Sound &amp; Vibration &gt; Phone Ringtone</strong> (or Notification Sound).</li>
                <li>Scroll down and tap <strong>Custom Ringtone</strong> or <strong>Add from Device</strong>.</li>
                <li>Select your downloaded MP3 file from the <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">/Download</code> folder.</li>
                <li>Tap <strong>Save</strong> or <strong>Done</strong>. Your phone will now play your viral sound!</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 5: Ethical & Fair Use Notice */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-lg">
            <ShieldCheck className="w-6 h-6 text-rose-500" />
            <h4>Audio Copyright &amp; Fair Use Disclaimer</h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            TikFlow MP3 Converter is designed for personal offline study, sound backup, and non-commercial ringtone customization. Audio assets hosted on TikTok are the intellectual property of their respective creators, record labels, and licensing partners. Downloading audio does not grant commercial synchronization rights or permission to re-distribute copyrighted musical tracks on streaming platforms. Please respect musical artists by streaming their official releases on authorized music platforms.
          </p>
        </section>

        {/* Section 6: FAQ Accordion */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About TikTok to MP3 Conversion
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Everything you need to know about sound bitrates, iPhone compatibility, and file formats.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all open:ring-2 open:ring-rose-500/20"
              >
                <summary className="font-bold text-base sm:text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="text-rose-500 group-open:rotate-180 transition-transform text-xl font-black">
                    ↓
                  </span>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

      </article>

    </div>
  );
}
