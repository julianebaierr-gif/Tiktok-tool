'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { 
  Image as ImageIcon, 
  Sparkles, 
  Layers, 
  Download, 
  Grid, 
  ShieldCheck, 
  Smartphone, 
  Laptop, 
  CheckCircle2, 
  HelpCircle,
  Camera,
  Maximize2,
  FolderArchive,
  ArrowRight
} from 'lucide-react';

export default function TikTokPhotoPage() {
  const [downloadResult, setDownloadResult] = useState(null);

  const faqData = [
    {
      q: "Does TikFlow download individual photos or a video slideshow?",
      a: "TikFlow extracts the original, high-resolution individual image files (JPG/WebP) directly from the TikTok photo mode post. You can download each photo one-by-one or save them all without being forced into a blurry, compressed 15-second video recording."
    },
    {
      q: "Are the downloaded photos full resolution without black borders?",
      a: "Yes! When taking screenshots on a smartphone, you get ugly UI overlays, like buttons, comment icons, and letterbox black bars. TikFlow fetches the original master image uploaded by the creator with 100% of its native pixels and zero UI clutter."
    },
    {
      q: "Can I also download the background music playing on the photo slideshow?",
      a: "Absolutely! TikTok photo mode posts almost always feature a viral soundtrack. TikFlow detects both the full array of high-resolution images AND the accompanying 320kbps MP3 audio track, allowing you to save both with one click."
    },
    {
      q: "How many pictures can be in a TikTok photo carousel?",
      a: "TikTok allows creators to post photo carousels containing anywhere from 2 to 35 high-resolution images per post. TikFlow automatically indexes every single image in the carousel sequence and provides high-speed download buttons for all of them."
    },
    {
      q: "Where do saved TikTok slideshow photos go on iPhone and Android?",
      a: "On iPhone (Safari), tapping download opens each image in a clean tab where you can tap the Share button and select 'Save Image' into your Apple Photos app. On Android (Chrome), images save directly into your /Download folder and immediately appear in Google Photos or your Gallery."
    },
    {
      q: "Can I use downloaded TikTok photos as phone wallpapers?",
      a: "Yes! Most photo mode carousels are filmed in vertical 9:16 aspect ratio (1080x1920 or higher), making them ideal for high-resolution Lock Screen and Home Screen wallpapers on iPhone, Samsung Galaxy, and Google Pixel devices."
    },
    {
      q: "Do I need to install any app to download TikTok carousels?",
      a: "No apps, APKs, or software are required. TikFlow is an entirely web-based utility that works seamlessly in Safari, Chrome, Edge, and Firefox across iOS, Android, macOS, Windows, and Linux."
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
            title="TikTok Photo Slideshow Downloader (Save All Pictures in HD)"
            subtitle="Download every high-resolution photo from TikTok carousels and slideshows without watermarks, compression, or black bars."
            placeholder="Paste TikTok photo slideshow link here..."
            buttonText="Extract All Photos"
            badge="Multi-Image Carousel Extractor"
          />
        ) : (
          <ResultCard
            result={downloadResult}
            onReset={() => setDownloadResult(null)}
            mode="photo"
          />
        )}
      </section>

      {/* Feature Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200">
            Pristine Still Image Processing
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Why Use TikFlow Photo Slideshow Downloader?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Say goodbye to low-resolution phone screenshots and UI clutter. Get the exact master photo files uploaded by creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-2">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Original Master Resolution</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We extract photos in their native uploaded resolution (up to 4K and 1080x1920) without downsampling or destructive compression artifacts.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-2">
              <Grid className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Complete Carousel Extraction</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether a creator posted 3 photos or 35 slides, TikFlow indexes every single image in sequence and offers one-click download buttons for each.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-2">
              <FolderArchive className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Bundled Music Included</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every photo slideshow comes paired with its accompanying background music. You can download the full photo collection plus the high-fidelity 320kbps MP3 audio.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive 1,200+ Word Editorial Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-700 leading-relaxed space-y-16">

        {/* Section 1: The Rise of TikTok Photo Mode & Relative 3D Image */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>High-Definition Carousel Preservation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How to Download TikTok Photo Slideshows and Carousels in Original Quality
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            TikTok&apos;s introduction of Photo Mode has revolutionized how creators share visual stories. Instead of traditional video clips, users can swipe through horizontal carousels of high-resolution still photographs set to synchronized trending music. Creators use this format for travel destination itineraries, fashion outfit lookbooks, aesthetic photography dumps, step-by-step culinary recipes, comic strips, and motivational quotes.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Unfortunately, trying to save these pictures through the official app creates frustrating roadblocks. Taking screenshots clutters images with TikTok&apos;s UI elements (like buttons, comment icons, and creator tags) and leaves letterbox black bars. Competing downloaders often fail entirely on photo posts or mistakenly convert the slideshow into a blurry 15-second MP4 video. TikFlow solves this by extracting the raw, individual JPG and WebP image files directly from ByteDance&apos;s master content servers.
          </p>

          {/* Embedded 3D Illustration: Photo Carousel Extraction */}
          <div className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            <img
              src="/images/photo-slideshow-3d.png"
              alt="3D visual illustration showing TikTok multi-image photo carousel extraction into crisp individual JPG pictures"
              className="w-full h-auto object-cover max-h-[420px]"
              loading="lazy"
            />
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-rose-600 font-bold">
                <span>Multi-Image Carousel Parsing (Up to 35 Photos)</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <span>Original Master JPG/WebP • Zero UI Clutter</span>
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Screenshot vs TikFlow Direct Extraction */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Screenshots vs. TikFlow: Why Direct Extraction Wins Every Time
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Many users resort to taking phone screenshots when they want to save a recipe, wallpaper, or travel tip from a TikTok slideshow. Here is how that compares to extracting the original file via TikFlow:
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white my-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="p-4 sm:p-5">Comparison Metric</th>
                  <th className="p-4 sm:p-5 text-rose-600">TikFlow Carousel Downloader</th>
                  <th className="p-4 sm:p-5 text-slate-500">Phone Screenshot</th>
                  <th className="p-4 sm:p-5 text-slate-500">Legacy Video Downloaders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Image Resolution</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Full 1080x1920+ Native Source</td>
                  <td className="p-4 sm:p-5 text-slate-500">Screen resolution with status bar</td>
                  <td className="p-4 sm:p-5 text-rose-500">Downscaled 720p video frame</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">UI Elements &amp; Overlays</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">100% Clean (Zero UI / No Icons)</td>
                  <td className="p-4 sm:p-5 text-rose-500">Covered by likes, comments, share icons</td>
                  <td className="p-4 sm:p-5 text-rose-500">Bouncing TikTok watermark</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Aspect Ratio Integrity</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Untouched 9:16, 4:3, or 1:1 format</td>
                  <td className="p-4 sm:p-5 text-slate-500">Forced black bars on top and bottom</td>
                  <td className="p-4 sm:p-5 text-slate-500">Stretched video container</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">File Format</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Standard JPG / PNG Image Files</td>
                  <td className="p-4 sm:p-5 text-slate-500">PNG screenshot with compression</td>
                  <td className="p-4 sm:p-5 text-slate-500">Unwanted MP4 video file</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Popular Uses for TikTok Photo Carousels */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Popular Ways People Use Saved TikTok Photo Carousels
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-bold text-slate-900 text-base">Travel Guides &amp; Itineraries</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Save destination maps, restaurant recommendations, train schedules, and hotel tips to your camera roll for quick offline reference while traveling internationally.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-bold text-slate-900 text-base">Culinary Recipes &amp; Meal Prep</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Keep step-by-step cooking ingredient lists and baking measurements in your photo gallery so you can cook in the kitchen without keeping video playback running.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-bold text-slate-900 text-base">Aesthetic Wallpapers &amp; Lock Screens</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Photographers and digital artists share stunning 9:16 vertical scenery, anime art, and minimalist typography that make perfect phone wallpapers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  04
                </div>
                <h4 className="font-bold text-slate-900 text-base">Fashion Lookbooks &amp; Style Inspiration</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Archive seasonal outfit pairings, thrift hauls, color matching guides, and hairstyle ideas to reference while shopping or getting ready.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Step-by-Step Instructions */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            How to Download TikTok Photos on Any Device
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
            {/* iOS Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 font-bold">
                  iOS
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">iPhone &amp; iPad (Safari)</h4>
                  <p className="text-xs text-slate-500">Save to Apple Photos</p>
                </div>
              </div>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
                <li>In TikTok, tap <strong>Share</strong> on the photo carousel and select <strong>Copy Link</strong>.</li>
                <li>Open <strong>Safari</strong>, go to TikFlow, paste the link, and tap <strong>Extract All Photos</strong>.</li>
                <li>Preview each image on screen. Tap <strong>Download Photo</strong> on the pictures you want.</li>
                <li>When the image opens, long-press it and choose <strong>Save to Photos</strong> (or tap Share &gt; Save Image).</li>
              </ol>
            </div>

            {/* Android / PC Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                  PC / Android
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Android &amp; Desktop Computers</h4>
                  <p className="text-xs text-slate-500">Direct File Download</p>
                </div>
              </div>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
                <li>Copy the TikTok photo slideshow URL from your browser or app.</li>
                <li>Paste the URL into TikFlow and click <strong>Extract All Photos</strong>.</li>
                <li>Click the green <strong>Download Image</strong> button under each photo.</li>
                <li>Images will save immediately to your local <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">Downloads</code> folder in pristine JPG format.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 5: Ethical & Copyright Considerations */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-lg">
            <ShieldCheck className="w-6 h-6 text-rose-500" />
            <h4>Photographer Copyright &amp; Ethical Re-use</h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            TikFlow Photo Slideshow Downloader is intended strictly for personal archiving, educational research, and offline reference. Visual photography and artwork posted on TikTok remain the exclusive intellectual property of their original creators. Please do not re-upload, sell, or commercially utilize these photographs without obtaining explicit permission or a license from the copyright holder.
          </p>
        </section>

        {/* Section 6: FAQ Accordion */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About TikTok Photo Slideshows
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Clear answers regarding carousel sizes, photo formats, and music downloads.
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
