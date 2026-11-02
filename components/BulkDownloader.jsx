'use client';
import { BULK_UI_TRANSLATIONS } from '../lib/tools/bulkUiTranslations';

import React, { useState } from 'react';
import JSZip from 'jszip';
import { 
  FolderArchive, 
  Download, 
  Play, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Trash2, 
  Sparkles, 
  Music, 
  Video, 
  Layers, 
  Clock, 
  ExternalLink,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';
import Link from 'next/link';

const SAMPLE_BULK_URLS = [
  'https://www.tiktok.com/@scout2015/video/6718335390845095173',
  'https://www.tiktok.com/@tiktok/video/7106594312292453678',
  'https://www.douyin.com/video/7330964478051257627'
];

export default function BulkDownloader({ langCode = "en" }) {
  const ui = BULK_UI_TRANSLATIONS[langCode] || BULK_UI_TRANSLATIONS.en;
  const [inputUrls, setInputUrls] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progressMsg, setProgressMsg] = useState('');
  const [currentProgress, setCurrentProgress] = useState(0);
  const [results, setResults] = useState([]);
  const [isZippingVideos, setIsZippingVideos] = useState(false);
  const [isZippingAudio, setIsZippingAudio] = useState(false);
  const [zipPercent, setZipPercent] = useState(0);
  const [errorBanner, setErrorBanner] = useState(null);

  // Extract valid lines
  const parseLines = (text) => {
    return text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
  };

  const lines = parseLines(inputUrls);
  const totalUrlsCount = lines.length;

  const handleLoadSample = () => {
    setInputUrls(SAMPLE_BULK_URLS.join('\n'));
    setErrorBanner(null);
  };

  const handleClear = () => {
    setInputUrls('');
    setResults([]);
    setErrorBanner(null);
  };

  const handleProcessBatch = async () => {
    if (lines.length === 0) {
      setErrorBanner(ui.emptyWarning);
      return;
    }
    if (lines.length > 10) {
      setErrorBanner(ui.maxWarning);
      return;
    }

    setIsProcessing(true);
    setProgressMsg('Initiating batch analysis...');
    setCurrentProgress(0);
    setErrorBanner(null);
    setResults([]);

    const batchResults = [];

    for (let i = 0; i < lines.length; i++) {
      const targetUrl = lines[i];
      const isDouyin = targetUrl.includes('douyin.com');
      const stepPct = Math.round(((i + 1) / lines.length) * 100);

      setProgressMsg(`Processing item ${i + 1} of ${lines.length}...`);
      setCurrentProgress(stepPct);

      try {
        const res = await fetch('/api/download', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: targetUrl,
            platform: isDouyin ? 'douyin' : 'tiktok'
          })
        });

        const data = await res.json();

        if (res.ok && data.success) {
          batchResults.push({
            status: 'success',
            originalUrl: targetUrl,
            data: data
          });
        } else {
          batchResults.push({
            status: 'failed',
            originalUrl: targetUrl,
            error: data.error || 'Could not fetch this media.'
          });
        }
      } catch (err) {
        batchResults.push({
          status: 'failed',
          originalUrl: targetUrl,
          error: err.message || 'Network error.'
        });
      }

      // Small delay between requests to be polite
      if (i < lines.length - 1) {
        await new Promise(r => setTimeout(r, 400));
      }
    }

    setResults(batchResults);
    setIsProcessing(false);
    setProgressMsg('');
  };

  // Helper to fetch media blob via proxy
  const fetchMediaBlob = async (rawUrl, filename, type) => {
    const proxyUrl = `/api/proxy?url=${encodeURIComponent(rawUrl)}&filename=${encodeURIComponent(filename)}&type=${type}`;
    const res = await fetch(proxyUrl);
    if (!res.ok) throw new Error(`{ui.errorCount} to fetch media: ${filename}`);
    return await res.blob();
  };

  // Master Action 1: Download All Videos in 1 Single ZIP
  const handleDownloadAllVideosZip = async () => {
    const successfulVideos = results.filter(
      r => r.status === 'success' && (r.data?.video?.noWatermark || r.data?.video?.noWatermarkHd)
    );

    if (successfulVideos.length === 0) {
      alert('No valid MP4 videos available to archive.');
      return;
    }

    try {
      setIsZippingVideos(true);
      setZipPercent(5);

      const zip = new JSZip();
      const folder = zip.folder('QukTik_Batch_Videos');

      for (let i = 0; i < successfulVideos.length; i++) {
        const item = successfulVideos[i];
        const vUrl = item.data.video.noWatermark || item.data.video.noWatermarkHd;
        const safeId = item.data.id || `video_${i + 1}`;
        const fileName = `${i + 1}_${safeId}_nowatermark.mp4`;

        try {
          const blob = await fetchMediaBlob(vUrl, fileName, 'video');
          folder.file(fileName, blob);
        } catch (e) {
          console.warn(`Error packaging ${fileName}:`, e);
        }

        const pct = Math.round(((i + 1) / successfulVideos.length) * 75);
        setZipPercent(pct);
      }

      setZipPercent(85);
      const zipContent = await zip.generateAsync(
        { type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 4 } },
        (meta) => {
          setZipPercent(85 + Math.round(meta.percent * 0.15));
        }
      );

      const downloadUrl = URL.createObjectURL(zipContent);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `QukTik_Batch_${successfulVideos.length}_Videos_${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(downloadUrl), 8000);
    } catch (err) {
      alert(`ZIP creation error: ${err.message}`);
    } finally {
      setIsZippingVideos(false);
      setZipPercent(0);
    }
  };

  // Master Action 2: Download All MP3 Tracks in 1 Single ZIP
  const handleDownloadAllAudioZip = async () => {
    const successfulAudio = results.filter(
      r => r.status === 'success' && r.data?.music?.url
    );

    if (successfulAudio.length === 0) {
      alert('No audio tracks available to archive.');
      return;
    }

    try {
      setIsZippingAudio(true);
      setZipPercent(10);

      const zip = new JSZip();
      const folder = zip.folder('QukTik_Batch_Audio_MP3');

      for (let i = 0; i < successfulAudio.length; i++) {
        const item = successfulAudio[i];
        const aUrl = item.data.music.url;
        const safeTitle = (item.data.music.title || item.data.title || `track_${i + 1}`).replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 30);
        const fileName = `${i + 1}_${safeTitle}.mp3`;

        try {
          const blob = await fetchMediaBlob(aUrl, fileName, 'audio');
          folder.file(fileName, blob);
        } catch (e) {
          console.warn(`Error packaging ${fileName}:`, e);
        }

        const pct = Math.round(((i + 1) / successfulAudio.length) * 80);
        setZipPercent(pct);
      }

      setZipPercent(90);
      const zipContent = await zip.generateAsync(
        { type: 'blob' },
        (meta) => setZipPercent(90 + Math.round(meta.percent * 0.1))
      );

      const downloadUrl = URL.createObjectURL(zipContent);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `QukTik_Batch_${successfulAudio.length}_Audio_MP3_${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(downloadUrl), 8000);
    } catch (err) {
      alert(`ZIP creation error: ${err.message}`);
    } finally {
      setIsZippingAudio(false);
      setZipPercent(0);
    }
  };

  const successCount = results.filter(r => r.status === 'success').length;

  return (
    <div className="space-y-8">
      {/* Hero Form Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-bold mb-2">
              <FolderArchive className="w-4 h-4 text-rose-600" />
              <span>{ui.agencySuite || 'Multi-URL Agency Suite'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {ui.pasteHeading || 'Paste 5 to 10 TikTok & Douyin Links Below'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {ui.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handleLoadSample}
              disabled={isProcessing}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all border border-slate-200 disabled:opacity-50"
            >
              {ui.demoLinks || 'Demo Links'}
            </button>
            {(inputUrls.length > 0 || results.length > 0) && (
              <button
                onClick={handleClear}
                disabled={isProcessing}
                className="p-1.5 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                title="Clear all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Textarea */}
        <div className="relative">
          <textarea
            rows={5}
            value={inputUrls}
            onChange={(e) => setInputUrls(e.target.value)}
            disabled={isProcessing}
            placeholder={ui.placeholder}
            className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 focus:border-rose-500 focus:bg-white focus:outline-hidden text-slate-900 font-mono text-xs sm:text-sm leading-relaxed transition-all resize-y placeholder:text-slate-400 disabled:opacity-50"
          />
          <div className="absolute bottom-3 right-3 text-[11px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-500 shadow-2xs">
            {totalUrlsCount} / 10 {ui.linksCount || 'Links'}
          </div>
        </div>

        {errorBanner && (
          <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{errorBanner}</span>
          </div>
        )}

        {/* Action Button */}
        <div>
          {isProcessing ? (
            <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-rose-600 animate-spin" />
                  <span>{progressMsg}</span>
                </span>
                <span className="text-rose-600 font-mono">{currentProgress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                <div 
                  className="h-full bg-rose-600 transition-all duration-300"
                  style={{ width: `${currentProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <button
              onClick={handleProcessBatch}
              disabled={totalUrlsCount === 0}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-black text-sm sm:text-base transition-all shadow-lg active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
            >
              <Zap className="w-5 h-5 fill-white" />
              <span>Fetch &amp; Process {totalUrlsCount > 0 ? `${totalUrlsCount} Videos` : 'Batch Links'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Section */}
      {results.length > 0 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Master Download Action Banner */}
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{ui.batchReady || 'Batch Ready'} ({successCount} / {results.length})</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                {ui.singleZipTitle || 'One-Click Single ZIP Downloads'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {ui.singleZipDesc || 'Save hours of manual downloading. Clean 1080p MP4s & 320kbps MP3s packaged together.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
              <button
                onClick={handleDownloadAllVideosZip}
                disabled={isZippingVideos || isZippingAudio || successCount === 0}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-extrabold transition-all shadow-md active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isZippingVideos ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Zipping Videos ({zipPercent}%)...</span>
                  </>
                ) : (
                  <>
                    <FolderArchive className="w-4 h-4" />
                    <span>{ui.downloadVideosZip || 'Download All Videos (.ZIP)'}</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadAllAudioZip}
                disabled={isZippingVideos || isZippingAudio || successCount === 0}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-extrabold transition-all border border-slate-700 shadow-md active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isZippingAudio ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Zipping MP3s ({zipPercent}%)...</span>
                  </>
                ) : (
                  <>
                    <Music className="w-4 h-4 text-pink-400" />
                    <span>{ui.downloadAudioZip || 'Download All Audio (.ZIP)'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((res, idx) => {
              if (res.status === 'failed') {
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-red-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-red-600 text-xs font-bold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{ui.itemFailed || 'Item Failed'} #{idx + 1}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-mono truncate">{res.originalUrl}</p>
                    <p className="text-xs text-red-600 bg-red-50 p-2 rounded-lg font-medium">{res.error}</p>
                  </div>
                );
              }

              const d = res.data;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-20 h-24 rounded-xl bg-slate-100 overflow-hidden relative shrink-0 border border-slate-200">
                      {d.cover ? (
                        <img src={d.cover} alt={d.title || 'Cover'} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          <Video className="w-8 h-8" />
                        </div>
                      )}
                      {d.durationFormatted && (
                        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded-md bg-black/75 text-[10px] font-bold text-white">
                          {d.durationFormatted}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-rose-600">
                        <span>#{idx + 1}</span>
                        <span>•</span>
                        <span className="truncate">@{d.author?.username || d.author?.nickname || 'creator'}</span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-2 mt-0.5 leading-snug">
                        {d.title || 'TikTok Video'}
                      </h4>
                      <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-500 font-semibold">
                        <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Clean 1080p
                        </span>
                        {d.music?.url && (
                          <span className="px-1.5 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200">
                            MP3 320k
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Individual Download Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    {d.video?.noWatermark && (
                      <a
                        href={`/api/proxy?url=${encodeURIComponent(d.video.noWatermark)}&filename=video_${d.id}.mp4&type=video`}
                        download={`video_${d.id}.mp4`}
                        className="py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Video className="w-3.5 h-3.5 text-slate-600" />
                        <span>MP4 Video</span>
                      </a>
                    )}
                    {d.music?.url && (
                      <a
                        href={`/api/proxy?url=${encodeURIComponent(d.music.url)}&filename=audio_${d.id}.mp3&type=audio`}
                        download={`audio_${d.id}.mp3`}
                        className="py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Music className="w-3.5 h-3.5 text-rose-600" />
                        <span>MP3 Audio</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
