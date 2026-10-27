'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { 
  UserCheck, 
  Sparkles, 
  ShieldCheck, 
  ZoomIn, 
  Smartphone, 
  Laptop, 
  CheckCircle2, 
  HelpCircle, 
  Image as ImageIcon, 
  Camera, 
  Crop, 
  ArrowRight,
  Maximize2
} from 'lucide-react';

export default function TikTokAvatarPage() {
  const [downloadResult, setDownloadResult] = useState(null);

  const faqData = [
    {
      q: "Can I view and download TikTok profile pictures in full size without cropping?",
      a: "Yes! While the TikTok mobile app only displays avatars as small 80x80 or 100x100 circular icons, ByteDance stores the uncropped square master photo (often 720x720 or 1080x1080 resolution) on its image CDN. TikFlow retrieves this original high-resolution master file, allowing you to zoom in and download the full uncropped image."
    },
    {
      q: "Can I download an avatar using just a TikTok username?",
      a: "Yes. You can paste either the full profile link (e.g., https://www.tiktok.com/@username) or simply enter the username handle directly into the search bar. TikFlow will locate the public profile and retrieve the highest-resolution avatar on file."
    },
    {
      q: "Can I download profile pictures from private TikTok accounts?",
      a: "Yes! Profile pictures and usernames on TikTok are always publicly accessible, even if the user's uploaded videos and follower lists are set to private. TikFlow can retrieve public avatars from any valid account."
    },
    {
      q: "Does the user get notified when I view or download their TikTok avatar?",
      a: "No. Downloading or viewing an avatar via TikFlow is 100% anonymous. We do not use your personal TikTok account, and TikTok does not offer any analytics or notifications for avatar views."
    },
    {
      q: "What image formats are downloaded for TikTok avatars?",
      a: "Avatars are delivered in standard, uncompressed JPEG (.jpg) or WebP (.webp) formats with original color profiles, ready for use as Discord avatars, phone wallpapers, or graphic design inspiration."
    },
    {
      q: "Why can't I zoom into profile pictures directly inside the TikTok app?",
      a: "TikTok's native mobile interface does not support pinch-to-zoom on profile icons. Tapping an avatar simply takes you to the creator's profile page or opens their story if active. TikFlow provides the missing zoom and download capability directly in your browser."
    },
    {
      q: "Is TikFlow Avatar HD Downloader free to use?",
      a: "Yes, TikFlow is completely free with unlimited avatar searches and high-resolution downloads."
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
            title="TikTok Avatar HD Downloader (Full Size PFP Viewer)"
            subtitle="View, zoom, and download uncropped high-resolution profile pictures from any TikTok user in 1080p Full HD for free."
            placeholder="Paste TikTok profile link or @username (e.g., https://www.tiktok.com/@creator)..."
            buttonText="View Full HD Avatar"
            badge="1080p Profile Photo Extractor"
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
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
            Uncompressed Master Photo Retrieval
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Why Use TikFlow TikTok Avatar HD Downloader?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            The TikTok app locks profile photos behind tiny circular crops. TikFlow unlocks the full-resolution master photo behind any profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 mb-2">
              <Maximize2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Uncropped Full Size (1080p)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Retrieve the original square photograph uploaded by the creator before TikTok&apos;s interface cropped it into a small circle.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-2">
              <ZoomIn className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">High-Resolution Zoom Viewer</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Inspect intricate details on anime PFPs, gaming team logos, aesthetic digital artwork, and creator branding with high magnification.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-2">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">100% Anonymous Lookup</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No TikTok login required. Search any public profile handle and save the picture completely anonymously without alerting the user.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive 1,200+ Word Editorial Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-700 leading-relaxed space-y-16">

        {/* Section 1: The Avatar Resolution Dilemma & Relative 3D Image */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4 text-teal-600" />
            <span>Digital Identity &amp; Aesthetics</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How to View and Download Full-Resolution TikTok Profile Pictures (PFP)
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A creator&apos;s profile picture (PFP) is the digital storefront of their TikTok presence. It encapsulates their visual branding, aesthetic identity, gaming persona, or artistic style. From custom-drawn anime illustrations to high-fashion photography, users put immense thought into selecting their avatar.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Yet, the native TikTok smartphone app severely restricts how users interact with profile pictures. Avatars are compressed into tiny 80x80 or 100x100 pixel circular icons on mobile screens, and tapping them doesn&apos;t enlarge the image. If you admire someone&apos;s artwork, want to study their branding, or need to verify whether a profile is an authentic account or an impersonator bot, the in-app view is frustratingly inadequate. TikFlow solves this by querying ByteDance&apos;s master media servers directly to fetch the uncropped, original 1080p source image.
          </p>

          {/* Embedded 3D Illustration: Avatar Downloader */}
          <div className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            <img
              src="/images/avatar-downloader-3d.png"
              alt="3D visual illustration showing TikTok profile picture uncropping and HD zoom extraction into crisp 1080p JPG"
              className="w-full h-auto object-cover max-h-[420px]"
              loading="lazy"
            />
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-teal-600 font-bold">
                <span>Circular Crop Bypass (80x80 ➔ 1080x1080 Master)</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <span>Full Uncropped JPG/PNG • 100% Anonymous</span>
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Mobile App Crop vs TikFlow Direct Master Fetch */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            In-App Circular Crop vs. TikFlow Master File Extraction
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Here is a side-by-side technical comparison between what the TikTok mobile app shows you and what TikFlow extracts from the CDN:
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white my-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="p-4 sm:p-5">Visual Attribute</th>
                  <th className="p-4 sm:p-5 text-teal-600">TikFlow Avatar HD Downloader</th>
                  <th className="p-4 sm:p-5 text-slate-500">TikTok Mobile App</th>
                  <th className="p-4 sm:p-5 text-slate-500">Phone Screenshot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Pixel Resolution</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Up to 1080 x 1080 Master</td>
                  <td className="p-4 sm:p-5 text-rose-500">Compressed 80 x 80 icon</td>
                  <td className="p-4 sm:p-5 text-slate-500">Pixelated screen crop</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Image Framing</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Full Uncropped Square Photo</td>
                  <td className="p-4 sm:p-5 text-rose-500">Aggressive circular mask</td>
                  <td className="p-4 sm:p-5 text-rose-500">Circular mask with background</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Zoom Capability</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Full optical zoom on high-res file</td>
                  <td className="p-4 sm:p-5 text-rose-500">No zoom supported</td>
                  <td className="p-4 sm:p-5 text-slate-500">Blurry digital zoom</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Download Availability</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">One-click JPG/PNG download</td>
                  <td className="p-4 sm:p-5 text-rose-500">No download button exists</td>
                  <td className="p-4 sm:p-5 text-slate-500">Manual cropping required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Popular Uses for TikTok Avatars */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Common Reasons People Download and Inspect Avatars
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-bold text-slate-900 text-base">Verifying Impersonators &amp; Scams</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Scam accounts often steal public creator photos and re-upload low-res screenshots. Viewing the master avatar helps you verify whether an account is authentic before sending messages.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-bold text-slate-900 text-base">Anime Art &amp; Gaming Avatars</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Many TikTok creators commission bespoke digital artwork, anime characters, and esports logos that make fantastic profile pictures for Discord, Steam, or Twitter.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-bold text-slate-900 text-base">Creator Brand Auditing</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Talent agencies and marketing teams inspect high-resolution profile logos to evaluate creator aesthetic consistency, typography, and professional brand presentation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  04
                </div>
                <h4 className="font-bold text-slate-900 text-base">Personal Wallpaper &amp; Keepsakes</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Save high-resolution portrait photographs of your favorite celebrities, athletes, and digital personalities to use as phone contact photos or lock-screen backgrounds.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Step-by-Step Instructions */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            How to Download Any TikTok Profile Picture in HD
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
            {/* Mobile Tutorial */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 font-bold">
                  Phone
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">On iPhone &amp; Android</h4>
                  <p className="text-xs text-slate-500">Using Username or Profile Link</p>
                </div>
              </div>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
                <li>Open TikTok, go to the user&apos;s profile, and copy their username (or tap the 3 dots &gt; <strong>Copy Link</strong>).</li>
                <li>Open <strong>TikFlow Avatar HD</strong> in your browser (Safari, Chrome).</li>
                <li>Paste the username or profile link into the search bar.</li>
                <li>Tap <strong>View Full HD Avatar</strong>.</li>
                <li>Tap <strong>Download HD Photo</strong> to save the uncropped picture to your camera roll.</li>
              </ol>
            </div>

            {/* Desktop Tutorial */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                  Desktop
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">On PC &amp; Mac</h4>
                  <p className="text-xs text-slate-500">Browser Direct Download</p>
                </div>
              </div>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
                <li>Copy the profile URL from your browser address bar (e.g., <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">tiktok.com/@username</code>).</li>
                <li>Head to TikFlow Avatar Downloader in Chrome, Edge, or Firefox.</li>
                <li>Paste the URL and click <strong>View Full HD Avatar</strong>.</li>
                <li>Inspect the uncropped high-resolution photo on your screen.</li>
                <li>Click <strong>Download Image</strong> to save the JPG file directly to your Downloads folder.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 5: Ethical & Privacy Considerations */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-lg">
            <ShieldCheck className="w-6 h-6 text-teal-600" />
            <h4>Privacy Ethics &amp; Identity Protection</h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            TikFlow Avatar HD Downloader is created strictly for personal reference, identity verification, and aesthetic inspiration. Downloading another person&apos;s photograph does not grant permission to impersonate them, commit identity theft, create fraudulent social media profiles, or use their likeness in commercial advertising. Please respect personal privacy and practice ethical online behavior at all times.
          </p>
        </section>

        {/* Section 6: FAQ Accordion */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About TikTok Avatar Downloading
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Clear answers regarding profile picture resolutions, privacy rules, and username lookups.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all open:ring-2 open:ring-teal-500/20"
              >
                <summary className="font-bold text-base sm:text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="text-teal-600 group-open:rotate-180 transition-transform text-xl font-black">
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
