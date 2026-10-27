'use client';

import React, { useState } from 'react';
import DownloaderForm from '../../components/DownloaderForm';
import ResultCard from '../../components/ResultCard';
import { 
  History, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Eye, 
  Smartphone, 
  Laptop, 
  CheckCircle2, 
  HelpCircle, 
  PlaySquare, 
  Archive, 
  Zap, 
  Lock, 
  ArrowRight
} from 'lucide-react';

export default function TikTokStoryPage() {
  const [downloadResult, setDownloadResult] = useState(null);

  const faqData = [
    {
      q: "Can I download TikTok stories without the creator knowing?",
      a: "Yes! When you view or download a TikTok story through TikFlow, our cloud server requests the public media stream directly. You never log into your TikTok account, meaning your profile never appears on the creator's 'Viewers' or 'Seen' analytics list. It is 100% anonymous."
    },
    {
      q: "What happens after the 24-hour story expiration window?",
      a: "TikTok stories automatically disappear from public profiles and feeds after exactly 24 hours (86,400 seconds). Once expired, TikTok's servers permanently delete the public access tokens. You must download the story through TikFlow before the 24-hour countdown finishes."
    },
    {
      q: "Can TikFlow download stories from private TikTok profiles?",
      a: "No. TikFlow only processes public stories. If a creator has configured their account as private or has set the story visibility to 'Friends Only', TikTok restricts server access. We respect user privacy boundaries."
    },
    {
      q: "Does TikFlow remove the watermark on TikTok story videos?",
      a: "Yes. Our extractor accesses the clean source stream directly from ByteDance's content delivery network, stripping the moving watermark logo and giving you the original, unblemished 1080p MP4 video file."
    },
    {
      q: "Can I download photo stories as well as video stories?",
      a: "Yes! Creators often post still images or graphics to their TikTok stories. TikFlow automatically detects whether the story contains an MP4 video or a high-resolution JPG image and provides the appropriate one-click download option."
    },
    {
      q: "How do I get the link to a TikTok story?",
      a: "Open the TikTok app, tap on the creator's avatar with the colorful glowing story ring, tap the Share arrow icon on the story, and tap 'Copy Link'. Then paste that exact link into TikFlow."
    },
    {
      q: "Is there any limit on how many stories I can save each day?",
      a: "None at all. TikFlow is completely free and provides unlimited daily story downloads without registration, subscriptions, or watermarks."
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
            title="TikTok Story Saver & Downloader (Save 24h Stories in HD)"
            subtitle="Save disappearing TikTok stories before they vanish forever. Download clean, watermark-free 1080p MP4 videos 100% anonymously."
            placeholder="Paste TikTok story link here..."
            buttonText="Save Story in HD"
            badge="Anonymous 24-Hour Story Archiver"
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
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200">
            Ephemeral Media Preservation
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Why Use TikFlow TikTok Story Saver?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            TikTok stories disappear after 24 hours. TikFlow lets you save personal memories, creator announcements, and daily vlogs before they vanish into thin air.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-2">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">100% Anonymous Viewing</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Download and watch stories without leaving a trace. The creator will never see your username in their story viewers analytics list.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-2">
              <Archive className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Permanent Archiving</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Once downloaded to your device, the story is yours forever. No more losing important tutorials, behind-the-scenes moments, or recipes.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-2">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Original Master 1080p Quality</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Enjoy pristine 1080p Full HD video resolution and crisp 320kbps audio with absolutely zero watermarks, blur filters, or logo stamps.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive 1,200+ Word Editorial Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-700 leading-relaxed space-y-16">

        {/* Section 1: The 24-Hour Ephemeral Dilemma & Relative 3D Image */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-4 h-4 text-purple-500" />
            <span>24-Hour Time-to-Live (TTL) Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How to Save Disappearing TikTok Stories Before the 24-Hour Clock Runs Out
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            TikTok stories provide a casual, unfiltered window into creators&apos; everyday lives. Unlike permanent feed uploads that require meticulous editing, color grading, and caption optimization, stories are spontaneous. Creators use them to share urgent tour dates, behind-the-scenes studio bloopers, candid opinion pieces, flash sales, and day-in-the-life vlogs.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            The defining characteristic of TikTok stories is their ephemeral nature: they automatically vanish from the creator&apos;s profile after exactly 24 hours. Once the 24-hour expiration window closes, ByteDance permanently invalidates the public access token, making the video inaccessible forever. If you want to keep a memorable story clip for your personal archives, you must download it before the countdown expires.
          </p>

          {/* Embedded 3D Illustration: Story Saver */}
          <div className="my-8 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            <img
              src="/images/story-saver-3d.png"
              alt="3D visual illustration showing TikTok 24-hour disappearing story saved securely into permanent photo gallery"
              className="w-full h-auto object-cover max-h-[420px]"
              loading="lazy"
            />
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-purple-600 font-bold">
                <span>Active 24-Hour Story Ring Extraction</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <span>Permanent Local Storage • 100% Anonymous</span>
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Why Competitors Fail on TikTok Stories */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Why 90% of Competitor Downloaders Throw Errors on Story Links
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            If you have tried using generic TikTok downloaders, you have likely encountered the frustrating message: <em>&ldquo;Invalid URL or Video Not Found&rdquo;</em> when pasting a story link. Here is the technical reason why this happens and how TikFlow solves it:
          </p>

          {/* Architecture Comparison Table */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white my-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="p-4 sm:p-5">Technical Capability</th>
                  <th className="p-4 sm:p-5 text-purple-600">TikFlow Story Saver</th>
                  <th className="p-4 sm:p-5 text-slate-500">Generic Downloaders</th>
                  <th className="p-4 sm:p-5 text-slate-500">In-App Screen Recording</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Story Token Routing</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Specialized Story API Parser</td>
                  <td className="p-4 sm:p-5 text-rose-500">Fails (Hardcoded feed regex)</td>
                  <td className="p-4 sm:p-5 text-slate-500">Manual capture required</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Viewer Anonymity</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">100% Anonymous (No Login)</td>
                  <td className="p-4 sm:p-5 text-slate-500">N/A (Link fails)</td>
                  <td className="p-4 sm:p-5 text-rose-500">Exposes name to creator&apos;s view list</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Watermark Removal</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Zero Watermark Clean Stream</td>
                  <td className="p-4 sm:p-5 text-slate-500">N/A</td>
                  <td className="p-4 sm:p-5 text-rose-500">Captures full screen &amp; UI buttons</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Photo Story Support</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-600">Native JPG Image Extraction</td>
                  <td className="p-4 sm:p-5 text-slate-500">Unsupported</td>
                  <td className="p-4 sm:p-5 text-slate-500">Compressed screenshot</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Popular Reasons to Archive TikTok Stories */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Valuable Scenarios for Archiving TikTok Stories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-bold text-slate-900 text-base">Flash Discounts &amp; Promo Codes</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                E-commerce brands and influencers frequently post 24-hour affiliate coupon codes and secret discount links on their stories that disappear before you have time to shop.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-bold text-slate-900 text-base">Breaking Industry News &amp; Q&amp;As</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Thought leaders, tech journalists, and educators often answer critical follower questions or share unfiltered industry breakdowns exclusively on their story feeds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-bold text-slate-900 text-base">Creator Competitive Analysis</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Social media managers and marketing teams can monitor competitor campaigns, story formats, and engagement strategies without alerting their marketing departments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  04
                </div>
                <h4 className="font-bold text-slate-900 text-base">Personal Life Keepsakes</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Save birthday greetings, wedding clips, and vacation moments posted by your close friends before they expire and get lost in social media history.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Step-by-Step Instructions */}
        <section className="space-y-6">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            How to Download Any TikTok Story Step-by-Step
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
            {/* iOS Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 font-bold">
                  iOS
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">iPhone &amp; iPad (Safari)</h4>
                  <p className="text-xs text-slate-500">Direct Camera Roll Storage</p>
                </div>
              </div>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
                <li>Tap the creator&apos;s story avatar (with the glowing circular ring).</li>
                <li>Tap the <strong>Share</strong> icon on the story and tap <strong>Copy Link</strong>.</li>
                <li>Open <strong>Safari</strong>, navigate to TikFlow, paste the link, and tap <strong>Save Story in HD</strong>.</li>
                <li>Tap <strong>Download</strong> on Safari&apos;s prompt, open the video, tap <strong>Share &gt; Save Video</strong>.</li>
              </ol>
            </div>

            {/* Android / PC Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                  PC / Android
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Android, PC &amp; Mac</h4>
                  <p className="text-xs text-slate-500">Universal Web Browser</p>
                </div>
              </div>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
                <li>Copy the TikTok story link from your phone or browser address bar.</li>
                <li>Head to TikFlow in Chrome, Edge, or Firefox.</li>
                <li>Paste the URL and click <strong>Save Story in HD</strong>.</li>
                <li>Click <strong>Download MP4 (Without Watermark)</strong> to store the video permanently in your <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">/Download</code> folder.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 5: Ethical & Privacy Boundaries */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-lg">
            <ShieldCheck className="w-6 h-6 text-purple-600" />
            <h4>Privacy Ethics &amp; Creator Respect</h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            TikFlow Story Saver is engineered for personal, non-commercial archiving and fair-use research. Stories often contain candid personal moments; please treat creators with respect. Do not use downloaded story footage to harass, defame, impersonate, or infringe upon the privacy rights of creators. Always uphold ethical digital citizenship.
          </p>
        </section>

        {/* Section 6: FAQ Accordion */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About TikTok Story Downloading
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Clear answers regarding story expiration, anonymity, and device compatibility.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all open:ring-2 open:ring-purple-500/20"
              >
                <summary className="font-bold text-base sm:text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="text-purple-600 group-open:rotate-180 transition-transform text-xl font-black">
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
