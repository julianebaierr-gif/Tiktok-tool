'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { Bell, Smartphone, Music, CheckCircle2 } from 'lucide-react';

export default function TikTokRingtonePage() {
  const [downloadResult, setDownloadResult] = useState(null);

  return (
    <div className="relative overflow-hidden">
      
      {/* Downloader Section */}
      <section className="pt-4 pb-8 sm:pb-12">
        {!downloadResult ? (
          <DownloaderForm
            onResult={(data) => setDownloadResult(data)}
            title="TikTok Ringtone Maker (Download Viral Sounds for Phone Ringtones)"
            subtitle="Convert any trending TikTok video soundtrack or sound bite into a custom ringtone or alarm for iPhone (iOS) and Android."
            defaultType="audio"
          />
        ) : (
          <ResultCard
            result={downloadResult}
            onReset={() => setDownloadResult(null)}
          />
        )}
      </section>

      {/* Ringtone Guide */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
            Custom Sounds
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Turn Any TikTok Audio Into Your Phone Ringtone
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Follow these step-by-step guides to set your favorite viral sound as your ringtone or morning alarm.
          </p>
        </div>

        {/* iPhone Tutorial */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-3 text-rose-600">
            <Smartphone className="w-6 h-6" />
            <h3 className="text-xl font-black text-slate-900">How to Set as iPhone Ringtone (iOS)</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Apple makes setting custom ringtones slightly tricky without a computer, but you can do it completely free on your phone using Apple&apos;s official <strong>GarageBand</strong> app:
          </p>
          <ol className="space-y-2 list-decimal list-inside text-sm text-slate-600">
            <li>Paste your TikTok link above and click <strong>Download MP3 Audio</strong> in Safari.</li>
            <li>Open the free <strong>GarageBand</strong> app on your iPhone. Tap the &ldquo;+&rdquo; icon and pick <strong>Audio Recorder</strong>.</li>
            <li>Tap the small Project icon (brick tracks view) in the top-left corner.</li>
            <li>Tap the Loop Browser icon in the top-right corner, select <strong>Files</strong>, and browse to your downloaded TikTok MP3.</li>
            <li>Drag the audio track into your timeline. Trim it to under 30 seconds.</li>
            <li>Tap the top-left dropdown arrow &gt; <strong>My Songs</strong>. Tap and hold your saved project, choose <strong>Share &gt; Ringtone</strong>, and name it.</li>
            <li>Tap <strong>Use sound as... &gt; Standard Ringtone</strong>. Done!</li>
          </ol>
        </div>

        {/* Android Tutorial */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-3 text-emerald-600">
            <Bell className="w-6 h-6" />
            <h3 className="text-xl font-black text-slate-900">How to Set as Android Ringtone</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Android makes setting custom ringtones very straightforward:
          </p>
          <ol className="space-y-2 list-decimal list-inside text-sm text-slate-600">
            <li>Download the audio file using the <strong>Download MP3 Audio</strong> button in Chrome.</li>
            <li>Go to your phone&apos;s <strong>Settings &gt; Sound &amp; Vibration</strong>.</li>
            <li>Tap <strong>Phone Ringtone</strong> (or Notification sound / Alarm sound).</li>
            <li>Tap <strong>Custom Ringtone</strong> or &ldquo;On this device&rdquo; and select the downloaded MP3. It will immediately begin ringing for incoming calls.</li>
          </ol>
        </div>
      </section>

    </div>
  );
}
