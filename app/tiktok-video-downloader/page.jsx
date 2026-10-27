'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import HowToSection from '../../components/HowToSection';
import { 
  Video, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  Laptop, 
  Layers, 
  CheckCircle2, 
  HelpCircle, 
  Film, 
  Zap, 
  Download, 
  Share2, 
  Clock, 
  ArrowRight,
  Eye,
  Check
} from 'lucide-react';

export default function TikTokVideoDownloaderPage() {
  const [downloadResult, setDownloadResult] = useState(null);

  const faqData = [
    {
      q: "How does TikFlow download TikTok videos without any watermark?",
      a: "When a creator uploads a video to TikTok, ByteDance stores the original source video alongside a rendered version with the animated bouncing watermark overlay. TikFlow bypasses the overlay by extracting the clean source MP4 stream directly from the content delivery network (CDN). This gives you the original 1080p or 720p master file with zero logos, usernames, or stamps."
    },
    {
      q: "Do I need to pay or create an account to use TikFlow?",
      a: "No. TikFlow is 100% free with unlimited daily downloads. You do not need to register, input an email address, or install any browser extensions. All operations run directly inside your browser."
    },
    {
      q: "Can I download TikTok videos on an iPhone or iPad?",
      a: "Yes! Open Safari on your iPhone, paste the TikTok video link into TikFlow, and tap Download. Safari will prompt you to download the MP4 file. Once downloaded, tap the download icon in Safari's address bar, select the video, tap the iOS Share icon, and select 'Save Video' to place it into your Apple Photos camera roll."
    },
    {
      q: "Where do downloaded TikTok videos get saved on Windows PC or Mac?",
      a: "On desktop computers, files automatically download to your personal Downloads folder (e.g., C:\\Users\\Name\\Downloads on Windows or /Users/Name/Downloads on macOS). You can press Ctrl + J in Chrome/Edge or Cmd + Option + L in Safari to view and open your downloaded video files instantly."
    },
    {
      q: "Does TikFlow compress the video or reduce picture quality?",
      a: "Never. TikFlow delivers the highest bitrate stream available on TikTok servers. If the creator uploaded in 1080p Full HD at 60 FPS, you receive that exact 1080p file in standard H.264 / AAC MP4 format with crisp details and synchronized sound."
    },
    {
      q: "Is it safe to use an online video downloader instead of an APK?",
      a: "Browser-based downloaders like TikFlow are vastly safer than downloading third-party APKs or software. TikFlow runs securely over HTTPS, requires zero device permissions (no camera, microphone, or storage access), and leaves no persistent background processes on your device."
    },
    {
      q: "Can I download videos from private TikTok accounts?",
      a: "No. To respect user privacy and adhere to platform security protocols, TikFlow only processes publicly accessible TikTok videos. If an account is set to private or a video is restricted to friends only, its media stream cannot be accessed."
    },
    {
      q: "Can I repurpose clean TikTok videos for YouTube Shorts and Instagram Reels?",
      a: "Yes. In fact, major social algorithms (Instagram and YouTube) intentionally demote videos that contain the bouncing TikTok watermark. Saving the clean MP4 through TikFlow allows content creators to cross-post their original media cleanly across all short-form platforms for maximum organic reach."
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

      {/* Top Downloader Hero */}
      <section className="pt-4 pb-8 sm:pb-12">
        {!downloadResult ? (
          <DownloaderForm
            onResult={(data) => setDownloadResult(data)}
            title="TikTok Video Downloader Without Watermark HD"
            subtitle="Save original 1080p MP4 videos from TikTok without logos, stamps, or usernames. Fast, free, and unlimited for all devices."
            placeholder="Paste TikTok video link here (e.g., https://www.tiktok.com/@user/video/...)"
            buttonText="Download HD Video"
            badge="100% Free Online Video Downloader"
          />
        ) : (
          <ResultCard
            result={downloadResult}
            onReset={() => setDownloadResult(null)}
            mode="video"
          />
        )}
      </section>

      {/* Visual Step-by-Step Tutorial with Mobile / Desktop Tab Toggle */}
      <HowToSection />

      {/* In-Depth 1200+ Word Editorial Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-700 leading-relaxed space-y-16">

        {/* Section 1: Watermark vs Clean Video Breakdown with Relative 3D Image */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span>High-Fidelity Video Processing</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            The Complete Guide to Downloading Clean TikTok Videos in Full HD
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Short-form video has completely transformed modern digital entertainment and storytelling. Every single day, millions of creators share entertaining sketches, educational tutorials, culinary recipes, fitness workouts, and viral dance trends on TikTok. However, when you use the built-in save feature inside the native TikTok mobile app, the platform automatically burns a prominent bouncing watermark and the creator&apos;s username directly into the video frames.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            This moving watermark covers important visual details, distracts viewers, and ruins playback when you want to archive videos for offline viewing or repurpose your own media for other channels. TikFlow solves this challenge with an elegant, cloud-based stream extraction system that delivers the pristine, original MP4 file exactly as the creator filmed it.
          </p>

          {/* Embedded 3D Illustration: Watermark Comparison */}
          <div className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            <img
              src="/images/watermark-vs-clean-3d.png"
              alt="Visual comparison showing a video with annoying bouncing watermark versus clean spotless Full HD MP4 downloaded via TikFlow"
              className="w-full h-auto object-cover max-h-[420px]"
              loading="lazy"
            />
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-rose-600 font-bold">
                <span>Left: Native TikTok Save (Bouncing Watermark + Quality Loss)</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <span>Right: TikFlow HD (Clean 1080p MP4 • Zero Logos)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Why Cross-Platform Creators Need Clean Videos */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Why Clean MP4 Videos Are Essential for Content Creators
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            If you produce short-form video content, maximizing your audience reach requires posting across multiple platforms, including Instagram Reels, YouTube Shorts, Facebook Reels, Snapchat Spotlight, and Pinterest Idea Pins. However, the recommendation algorithms on Instagram and YouTube actively penalize videos that bear the TikTok logo watermark.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="font-bold text-slate-900 text-base">Algorithm Favorability</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Instagram and YouTube explicitly deprioritize watermarked content in discovery feeds. Clean MP4 files qualify for full algorithmic distribution on Reels and Shorts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="font-bold text-slate-900 text-base">Professional Presentation</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you are showing video samples to clients, building a creative portfolio, or compiling a showreel, clean footage looks intentional and polished.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="font-bold text-slate-900 text-base">Long-Term Archiving</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Social media accounts can experience sudden restrictions or deletions. Having your complete video library saved offline ensures your creative work is preserved forever.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Technical Architecture Comparison Table */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            How TikFlow Compares to Standard Competitor Downloaders
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Not all video download tools operate the same way. Many legacy tools resort to destructive video cropping (cutting off the edges to hide the watermark) or apply blurry filters that damage video quality. TikFlow uses a direct stream extraction protocol that downloads the original untouched master file.
          </p>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="p-4 sm:p-5">Feature &amp; Performance Metric</th>
                  <th className="p-4 sm:p-5 text-rose-600">TikFlow Downloader</th>
                  <th className="p-4 sm:p-5 text-slate-500">Typical Competitors</th>
                  <th className="p-4 sm:p-5 text-slate-500">Native TikTok Save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Watermark Removal</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">100% Clean (Zero Stamps)</td>
                  <td className="p-4 sm:p-5 text-slate-500">Often crops or blurs edges</td>
                  <td className="p-4 sm:p-5 text-rose-500">Large bouncing logo</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Output Resolution</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Full HD 1080p / 720p 60fps</td>
                  <td className="p-4 sm:p-5 text-slate-500">Downscaled to 480p/720p</td>
                  <td className="p-4 sm:p-5 text-slate-500">Compressed 720p</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Video &amp; Audio Codec</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Universal H.264 MP4 + AAC</td>
                  <td className="p-4 sm:p-5 text-slate-500">Proprietary or low bitrate</td>
                  <td className="p-4 sm:p-5 text-slate-500">Heavily compressed MP4</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Software Installation</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">None (Pure Web Browser)</td>
                  <td className="p-4 sm:p-5 text-slate-500">Prompts suspicious APK downloads</td>
                  <td className="p-4 sm:p-5 text-slate-500">Requires TikTok App</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Device Privacy</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Zero tracking, no permissions</td>
                  <td className="p-4 sm:p-5 text-slate-500">Intrusive pop-ups and redirects</td>
                  <td className="p-4 sm:p-5 text-slate-500">Extensive tracking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Device-Specific Instructions */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Step-by-Step Instructions for Mobile Phones and Computers
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            TikFlow works seamlessly across any device equipped with a modern web browser. Follow these straightforward steps tailored for your operating system:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
            {/* iOS Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Apple iOS (iPhone &amp; iPad)</h4>
                  <p className="text-xs text-slate-500">Safari on iOS 14, 15, 16, 17, 18+</p>
                </div>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                  <span>In TikTok, tap the <strong>Share</strong> button on your desired video and tap <strong>Copy Link</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                  <span>Open <strong>Safari</strong>, navigate to TikFlow, tap the <strong>Paste Link</strong> button, and tap <strong>Download HD Video</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
                  <span>Tap <strong>Download</strong> on Safari&apos;s prompt. Tap the blue download indicator in the address bar, open the video, tap the <strong>Share</strong> icon, and select <strong>Save Video</strong>.</span>
                </li>
              </ul>
            </div>

            {/* Android Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Google Android</h4>
                  <p className="text-xs text-slate-500">Chrome, Samsung Internet, Firefox</p>
                </div>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                  <span>Open TikTok, tap <strong>Share</strong>, and tap <strong>Copy link</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                  <span>Switch to Chrome, open TikFlow, tap <strong>Paste</strong>, and hit <strong>Download HD Video</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
                  <span>The video will instantly save to your phone&apos;s <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">/Download</code> folder and immediately appear in Google Photos or your Gallery.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Legal & Fair Use Transparency */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-lg">
            <ShieldCheck className="w-6 h-6 text-rose-500" />
            <h4>Intellectual Property &amp; Fair Use Ethics</h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            TikFlow respects the creative efforts and copyright ownership of content creators. Our tool is intended strictly for personal archiving, academic study, research, and fair-use repurposing of your own original intellectual property. We do not support or condone the unauthorized re-uploading or commercial monetization of another creator&apos;s work without their explicit written permission. Always credit original creators when sharing educational or transformative commentary.
          </p>
        </section>

        {/* Section 6: Comprehensive FAQ Accordion */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About TikTok Video Downloading
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Clear answers to the most common questions regarding video resolution, security, formats, and device compatibility.
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
