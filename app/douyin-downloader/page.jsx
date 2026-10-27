'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { 
  Globe2, 
  Sparkles, 
  ShieldCheck, 
  Film, 
  Smartphone, 
  Laptop, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  FileVideo, 
  ArrowRight,
  Zap,
  Music2,
  Sliders
} from 'lucide-react';

export default function DouyinDownloaderPage() {
  const [downloadResult, setDownloadResult] = useState(null);

  const faqData = [
    {
      q: "What is Douyin (抖音) and how is it different from TikTok?",
      a: "Douyin (抖音) is ByteDance's original domestic version of TikTok developed specifically for the Chinese market. While both apps share similar core algorithms and interface layouts, they run on completely separate servers with distinct user bases, content ecosystems, e-commerce integrations, and creative trends. Viral memes and editing styles often originate on Douyin months before appearing on international TikTok."
    },
    {
      q: "Can I paste Chinese text directly into TikFlow Douyin Downloader?",
      a: "Yes! When you tap 'Copy Link' inside the Douyin app, it copies a complete Chinese modal share snippet containing text, emojis, and a short link (for example: '7.32 e@d.gZ 03/12 v.douyin.com/xyz/ 复制此链接打开抖音'). TikFlow automatically parses the text, isolates the actual video URL, and processes the clean video stream without requiring you to manually delete Chinese characters."
    },
    {
      q: "Does TikFlow require a Chinese phone number, VPN, or Douyin account?",
      a: "No! TikFlow's cloud servers handle all network communication directly with ByteDance Chinese CDN nodes. You do not need a Chinese phone number, an active Douyin login, or a VPN service to download public videos and audio tracks."
    },
    {
      q: "Are downloaded Douyin videos watermark-free and in 1080p Full HD?",
      a: "Yes. Douyin natively embeds a moving logo with the creator's Douyin ID. TikFlow accesses the unwatermarked master MP4 stream, delivering clean 1080p Full HD video with crystal-clear audio at original bitrates."
    },
    {
      q: "Can I extract background music (BGM) from Douyin videos?",
      a: "Yes! Chinese Douyin has an extraordinary collection of viral acoustic covers, traditional Chinese instrument remixes (Guzheng, Pipa), and electronic dance music. TikFlow extracts the pure 320kbps MP3 audio track with one click."
    },
    {
      q: "Can I use downloaded Douyin videos in CapCut (剪映)?",
      a: "Yes. All videos download in universal H.264 MP4 container format, making them immediately compatible with CapCut, JianYing (剪映), Adobe Premiere Pro, DaVinci Resolve, and Final Cut Pro for editing and repurposing."
    },
    {
      q: "Is TikFlow Douyin Downloader completely free?",
      a: "Yes, 100% free with unlimited daily downloads and no hidden subscription fees."
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
            title="Douyin Downloader (抖音视频无水印下载 - Chinese TikTok HD)"
            subtitle="Download Chinese TikTok (Douyin 抖音) videos and audio without watermark in 1080p Full HD. Paste full Chinese share text or short links."
            placeholder="Paste Douyin link or Chinese share text (e.g., https://v.douyin.com/...)"
            buttonText="Download Douyin Video"
            badge="ByteDance China CDN Gateway"
          />
        ) : (
          <ResultCard
            result={downloadResult}
            onReset={() => setDownloadResult(null)}
            mode="video"
          />
        )}
      </section>

      {/* Feature Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
            Global Chinese Video Processing
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Why Use TikFlow Douyin (抖音) Downloader?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Western downloaders usually fail on Chinese URLs. TikFlow provides a dedicated high-speed bridge to ByteDance&apos;s domestic Chinese servers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-2">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Automatic Chinese Text Extraction</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No need to delete Chinese characters manually. Paste the entire clipboard share string from the Douyin app and TikFlow extracts the exact video stream.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-2">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">High-Speed CDN Direct Routing</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We connect directly to ByteDance Chinese CDN nodes, bypassing regional speed caps and delivering full 1080p60 video downloads in seconds.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-2">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">100% Watermark-Free (无水印)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Strip away the bouncing Douyin logo and creator ID watermark completely, leaving pristine video frames ideal for creative editing in CapCut (剪映).
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive 1,200+ Word Editorial Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-700 leading-relaxed space-y-16">

        {/* Section 1: The Douyin Phenomenon & Relative 3D Image */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <Globe2 className="w-4 h-4 text-rose-500" />
            <span>ByteDance Domestic Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How to Download Watermark-Free Douyin (抖音) Videos and Audio Worldwide
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Douyin (抖音), launched by ByteDance in September 2016, is the Chinese sibling of TikTok and the original birthplace of modern short-form vertical video culture. With hundreds of millions of daily active users, Douyin serves as an incubator for high-level creative production, cinematography techniques, viral dance choreography, culinary street food documentation, traditional crafting, and innovative visual effects.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Content creators, digital marketers, and cultural enthusiasts worldwide look to Douyin to discover upcoming global trends months before they hit Western social platforms. However, downloading media from Douyin has traditionally been difficult due to regional network restrictions, specialized Chinese URL redirection chains, and complex clipboard share formats. TikFlow bridges this gap with an automated CDN routing engine that delivers pristine, watermark-free Douyin MP4 videos and MP3 audio to any device worldwide.
          </p>

          {/* Embedded 3D Illustration: Douyin Downloader */}
          <div className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            <img
              src="/images/douyin-downloader-3d.png"
              alt="3D visual illustration showing Douyin Chinese TikTok video downloading without watermark in 1080p Full HD"
              className="w-full h-auto object-cover max-h-[420px]"
              loading="lazy"
            />
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-rose-600 font-bold">
                <span>Douyin App Share Text (v.douyin.com)</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <span>无水印 1080p MP4 • Global CDN Direct Extraction</span>
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Why Competitors Break on Douyin URLs */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Why Western Downloaders Fail on Douyin Links
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Standard video downloaders on the internet are configured strictly for international TikTok domains (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs">tiktok.com</code>). When presented with a Douyin link, they fail for three main reasons:
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white my-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="p-4 sm:p-5">Technical Obstacle</th>
                  <th className="p-4 sm:p-5 text-rose-600">TikFlow Douyin Engine</th>
                  <th className="p-4 sm:p-5 text-slate-500">Standard Western Downloaders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Chinese Share Text Parsing</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Regex filters Chinese characters instantly</td>
                  <td className="p-4 sm:p-5 text-rose-500">Throws &ldquo;Invalid URL&rdquo; error</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">v.douyin.com Redirects</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Follows 302 redirects to master video ID</td>
                  <td className="p-4 sm:p-5 text-rose-500">Times out or rejects domain</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">ByteDance China CDN Access</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Direct authorized stream retrieval</td>
                  <td className="p-4 sm:p-5 text-rose-500">Blocked by regional firewall</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Watermark Removal (无水印)</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">100% Clean master file output</td>
                  <td className="p-4 sm:p-5 text-slate-500">Unsupported or crops frames</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Popular Uses for Douyin Content */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Creative Applications for Douyin Video &amp; Audio
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-bold text-slate-900 text-base">JianYing (剪映) &amp; CapCut Editing</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Video editors use clean Douyin footage to study cutting-edge transition effects, 3D tracking templates, and visual storytelling methods created with ByteDance&apos;s JianYing suite.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-bold text-slate-900 text-base">Viral BGM &amp; Traditional Instrumentals</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Douyin features an endless library of acoustic covers, oriental electronic music, Guzheng melodies, and trending Chinese pop hooks that you can extract in 320kbps MP3.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-bold text-slate-900 text-base">E-Commerce &amp; Product Showcases</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dropshippers and product innovators study creative Chinese unboxing videos, demonstration angles, and consumer product showcases to design better marketing campaigns.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  04
                </div>
                <h4 className="font-bold text-slate-900 text-base">Culinary Techniques &amp; Street Food</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Culinary chefs archive authentic regional Chinese wok skills, noodle stretching arts, dumpling folding methods, and night market culinary traditions for cooking inspiration.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Step-by-Step Instructions */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            How to Download Douyin Videos on Phone or PC
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
            {/* Mobile Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 font-bold">
                  App
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Douyin Mobile App (iOS / Android)</h4>
                  <p className="text-xs text-slate-500">Copy Share String</p>
                </div>
              </div>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
                <li>In the Douyin app, find the video and tap the <strong>Share</strong> button (分享).</li>
                <li>Tap <strong>Copy Link</strong> (复制链接). This copies the full Chinese text.</li>
                <li>Open <strong>TikFlow Douyin Downloader</strong> in Safari or Chrome.</li>
                <li>Paste the entire string into the search box and tap <strong>Download Douyin Video</strong>.</li>
                <li>Tap <strong>Download Video (Without Watermark)</strong> to save the pristine MP4.</li>
              </ol>
            </div>

            {/* Desktop Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                  PC
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Douyin Web (PC &amp; Mac)</h4>
                  <p className="text-xs text-slate-500">Direct Browser Extraction</p>
                </div>
              </div>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
                <li>Visit <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">douyin.com</code> on your computer browser.</li>
                <li>Copy the URL from the browser address bar (or click Share &gt; Copy link).</li>
                <li>Navigate to TikFlow Douyin Downloader in Chrome, Edge, or Safari.</li>
                <li>Paste the link and hit <strong>Download Douyin Video</strong>.</li>
                <li>Save the 1080p MP4 directly into your computer&apos;s Downloads folder.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 5: Ethical & Copyright Considerations */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-lg">
            <ShieldCheck className="w-6 h-6 text-rose-500" />
            <h4>Intellectual Property &amp; Cross-Border Fair Use</h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            TikFlow Douyin Downloader is provided solely for personal archiving, language learning, cultural research, and educational analysis. Media published on Douyin belongs exclusively to the respective Chinese creators and ByteDance Ltd. Please do not re-upload creators&apos; work onto Western platforms like YouTube or Instagram to profit commercially without giving clear attribution and receiving proper creator consent.
          </p>
        </section>

        {/* Section 6: FAQ Accordion */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About Douyin Downloading
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Clear answers regarding Chinese share formats, video codecs, and regional accessibility.
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
