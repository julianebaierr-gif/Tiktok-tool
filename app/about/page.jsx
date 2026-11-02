import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import React from 'react';
import { 
  Shield, 
  Sparkles, 
  Users, 
  Cpu, 
  Globe2, 
  Layers, 
  Lock, 
  Zap, 
  CheckCircle2, 
  Server, 
  Code2, 
  Award, 
  FileText, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export const metadata = {
  title: { absolute: 'About QukTik | Mission, Technology & Creator Transparency' },
  description: 'Learn about QukTik: direct CDN manifest extraction technology, stateless zero-storage privacy, and our mission for ethical media archiving.',
  alternates: {
    canonical: 'https://www.quktik.com/about',
  },
  openGraph: {
    title: 'About QukTik | Mission, Technology & Creator Transparency',
    description: 'Learn about QukTik, our engineering philosophy, direct CDN extraction technology, and ethical short-form media archiving.',
    url: 'https://www.quktik.com/about',
    type: 'website',
    images: [
      {
        url: 'https://www.quktik.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QukTik - TikTok & Douyin Video Downloader',
      },
    ],
    siteName: 'QukTik',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 text-slate-700">
      {/* Breadcrumbs Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-rose-700 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200">
            About QukTik Platform
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4 leading-tight">
            Engineering High-Performance Media Archiving for the Global Web
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            QukTik is an independent, client-first digital utility engineered to empower digital archivists, content creators, sociologists, educators, and video editors with forensic, watermark-free access to public short-form multimedia.
          </p>
        </div>

        {/* Brand Showcase Container */}
        <div className="flex justify-center mb-14">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col items-center justify-center text-center max-w-xl w-full">
            <img 
              src="/logo.svg" 
              alt="QukTik Official Brand Logo" 
              width={360} 
              height={80} 
              className="h-12 sm:h-16 w-auto max-w-full mb-3" 
            />
            <p className="text-xs text-slate-400 font-medium">
              Next-Generation Public Short-Form Media Manifest &amp; Audio Extractor
            </p>
          </div>
        </div>

        {/* Deep-Dive Editorial Body */}
        <div className="space-y-12 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1: Executive Summary & Foundational Genesis */}
          <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                1. Executive Summary &amp; Foundational Genesis
              </h2>
            </div>
            <p>
              In the modern algorithmic landscape, short-form mobile video—spearheaded globally by ByteDance through TikTok and Douyin—has evolved into the world&apos;s dominant creative and cultural communication format. Hundreds of millions of hours of educational tutorials, investigative reporting, cultural dances, comedic sketches, and original musical stems are uploaded each day. However, a systemic technological friction exists across native mobile applications: when creators or viewers export media through native platform controls, the software intentionally burns dynamic, bouncing watermark graphics and username attribution end-cards across the visual frame.
            </p>
            <p>
              For professional post-production video editors, colorists, digital archivists, and content creators wishing to syndicate their own intellectual property onto secondary networks like YouTube Shorts, Instagram Reels, and Pinterest Idea Pins, these dynamic overlays are disastrous. Social media ranking algorithms actively penalize and down-rank videos that feature competitor watermarks, while video editing suites like Adobe Premiere Pro and DaVinci Resolve cannot effectively color-grade or restore footage obstructed by translucent white pixel blocks.
            </p>
            <p>
              QukTik was founded in 2024 to dismantle this technological hurdle. We recognized that public content delivery networks store uncompressed, virgin video master files on their global edge servers prior to client-side watermark rendering. By engineering a transparent, secure, browser-based manifest resolver, QukTik allows users worldwide to obtain clean, broadcast-standard media streams with zero quality loss and absolute privacy.
            </p>
          </section>

          {/* Section 2: Technical Architecture & Edge Manifest Processing */}
          <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                2. Technical Architecture: How QukTik Works Under the Hood
              </h2>
            </div>
            <p>
              Unlike legacy desktop downloading utilities or unauthorized third-party apps that mandate local software installations, security-compromising browser extensions, or administrative root permissions, QukTik operates purely through modern web standards. Our architecture relies on high-speed serverless Edge microservices distributed across high-throughput global gateway nodes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Server className="w-4 h-4 text-rose-600" />
                  <span>Public Manifest Resolution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  When a user pastes a TikTok or Douyin URL, our backend edge workers parse the public HTML payload and media schema. We isolate the direct ByteDance CDN master media URI before watermark injection nodes process the stream.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Zap className="w-4 h-4 text-amber-600" />
                  <span>Zero-Transcoding Stream Piping</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  QukTik never re-encodes, compresses, or alters the video bitrate. Media is piped directly from edge nodes to client storage via native chunked HTTP streaming, preserving original H.264/H.265 profiles and AAC audio tracks.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Code2 className="w-4 h-4 text-indigo-600" />
                  <span>Browser-Native Web Audio API</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  For our <Link href="/trending-sounds" className="text-rose-700 font-semibold hover:underline">Trending Sounds Chart</Link> and <Link href="/tiktok-ringtone" className="text-rose-700 font-semibold hover:underline">Ringtone Trimmer</Link>, we leverage HTML5 Web Audio contexts to let users audition and cut exact 15-30 second audio stems locally on their hardware with zero server latency.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  <span>Client-Side ZIP Packaging</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Our <Link href="/tiktok-bulk-downloader" className="text-rose-700 font-semibold hover:underline">Bulk Downloader</Link> executes multi-threaded concurrent media requests, packaging up to 10 video streams into a unified uncompressed ZIP file entirely within client browser memory using WebAssembly.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic mt-3">
              Note: Because QukTik never performs lossy server-side re-encoding, downloaded media matches the exact forensic bitstream uploaded by the creator, ensuring pristine 1080p Full HD fidelity.
            </p>
          </section>

          {/* Section 3: The 4 Ethical Engineering Pillars */}
          <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                3. Ethical Web Utility Principles: Our 4 Inviolable Pillars
              </h2>
            </div>
            <p>
              The digital utility landscape is unfortunately crowded with unscrupulous services that compromise user security, inject deceptive advertising popups, harvest user phone numbers, or violate platform standards. QukTik was intentionally engineered to provide a safe, reputable, and transparent alternative built upon four foundational pillars:
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-rose-600" />
                  <span>Pillar I: Radical User Privacy &amp; Zero Authentication</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  We believe that using an online utility should never require surrendering your personal identity. QukTik does not require user accounts, email registration, passwords, credit card numbers, or OAuth logins. We do not track your personal identity or tie media queries to persistent user profiles. We enforce strict HTTPS encryption with HTTP Strict Transport Security (HSTS) across all endpoints. Review our detailed commitments in our <Link href="/privacy-policy" className="text-rose-700 font-semibold hover:underline">Privacy Policy</Link>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Server className="w-4 h-4 text-indigo-600" />
                  <span>Pillar II: Ephemeral Stateless Architecture (Zero Server Storage)</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  QukTik operates strictly as a stateless conduit. We do not maintain digital warehouses, file servers, or permanent databases of downloaded videos, audio files, or photographs. Media streams transit ephemeral memory buffers directly to the user&apos;s browser. Once your download finishes, zero digital footprints of the multimedia file remain on our infrastructure.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Pillar III: Preservation of Original Master Quality</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  Unlike lower-tier converters that capture low-bitrate screen recordings or downscale 1080p footage to 720p or 480p to conserve bandwidth, QukTik always fetches the highest available resolution. If the creator uploaded in 1080x1920 Full HD at 60 frames per second, that exact high-framerate master is delivered to your device without pixelation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>Pillar IV: Deep Respect for Creator Rights &amp; Copyright</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  We maintain strict compliance with international copyright statutes, including the United States Digital Millennium Copyright Act (DMCA), the European Union Copyright Directive, and international Fair Use doctrines. QukTik does not bypass digital rights management (DRM) or access private, protected, or paywalled media. Furthermore, we maintain a dedicated 24-hour expedited copyright takedown portal detailed in our <Link href="/disclaimer" className="text-rose-700 font-semibold hover:underline">DMCA &amp; Copyright Policy</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Global Audience Demographics */}
          <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                4. Global User Community: Who Relies on QukTik Daily?
              </h2>
            </div>
            <p>
              Every single day, tens of thousands of individuals across more than 150 countries utilize QukTik for legitimate personal, educational, creative, and professional workflows:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Professional Content Creators &amp; Influencers</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Creators use QukTik to retrieve their own original published videos after losing local mobile files. By downloading clean MP4 masters without platform logos, creators can republish their videos onto Instagram Reels, YouTube Shorts, Snapchat Spotlight, and Facebook Reels without facing algorithmic penalties or shadowbans.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Social Media Marketing Agencies &amp; Video Editors</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Agency media buyers and creative directors manage hundreds of creator assets for influencer marketing campaigns. Through our <Link href="/tiktok-bulk-downloader" className="text-rose-700 font-semibold hover:underline">TikTok Bulk Downloader</Link>, agencies archive up to 10 campaign videos simultaneously into a single organized ZIP folder for client reporting and montage assembly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Academic Researchers, Sociologists &amp; Journalists</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Researchers studying internet culture, virality patterns, linguistic evolution, and social movements rely on QukTik to create verifiable, immutable offline archives of public media before posts are deleted or algorithmically altered.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">International E-Commerce &amp; Dropshipping Analysts</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Cross-border e-commerce professionals track consumer product trends inside domestic Asian markets using our specialized <Link href="/douyin-downloader" className="text-rose-700 font-semibold hover:underline">Douyin Downloader</Link>, studying viral manufacturing demonstrations and packaging innovations directly from ByteDance&apos;s Chinese ecosystem.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Everyday Consumers &amp; Commuters</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Commuters, travelers, fitness enthusiasts, and students save cooking recipes, workout routines, DIY tutorials, language lessons, and viral music clips using our <Link href="/tiktok-mp3" className="text-rose-700 font-semibold hover:underline">MP3 converter</Link> and <Link href="/tiktok-photo" className="text-rose-700 font-semibold hover:underline">Photo Downloader</Link> for seamless offline study on flights and subways.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Legal Neutrality & Trademark Disclaimer */}
          <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                5. Platform Independence &amp; Legal Neutrality
              </h2>
            </div>
            <p>
              QukTik is an independently developed and managed software engineering project. We operate autonomously and have no official corporate affiliation, partnership, sponsorship, or endorsement with TikTok, Douyin, ByteDance Ltd., Musical.ly, or any of their corporate subsidiaries or technology partners.
            </p>
            <p>
              The names &quot;TikTok&quot; and &quot;Douyin&quot;, along with associated logos, wordmarks, trade dress, and iconography, are registered trademarks of ByteDance Ltd. Reference to these trademarks across QukTik is made solely for descriptive, nominative fair-use purposes under trademark law, specifically to inform users regarding platform compatibility. All audio recordings, video clips, profile photographs, and carousel images processed through our utility remain the exclusive property of their respective creators and copyright holders.
            </p>
          </section>

          {/* Section 6: Continuous Innovation & 2026 Roadmap */}
          <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                6. Innovation Roadmap: The Future of Media Utilities
              </h2>
            </div>
            <p>
              As web technologies advance into 2026, QukTik continues to engineer cutting-edge web-first capabilities that push the boundaries of browser performance:
            </p>
            <ul className="space-y-2 list-disc list-inside text-slate-600 text-xs sm:text-sm">
              <li><strong>Native Progressive Web App (PWA) Evolution:</strong> Deep integration with the Web Share Target API on modern Android and iOS devices, enabling users to share directly from the TikTok mobile app to QukTik without manual copy-pasting.</li>
              <li><strong>Decentralized High-Throughput Edge Nodes:</strong> Expanding serverless edge infrastructure across Europe, North America, Southeast Asia, Latin America, and the Middle East to maintain sub-100ms response times globally.</li>
              <li><strong>AI-Assisted Audio Isolation &amp; Noise Gate:</strong> Integrating client-side WebAssembly models to separate vocal speech dialogue from background music tracks during MP3 extraction.</li>
              <li><strong>Multi-Lingual Global Access:</strong> Maintaining dedicated localized experiences across 11 international languages (<Link href="/es" className="text-rose-700 font-semibold hover:underline">Español</Link>, <Link href="/fr" className="text-rose-700 font-semibold hover:underline">Français</Link>, <Link href="/pt" className="text-rose-700 font-semibold hover:underline">Português</Link>, <Link href="/id" className="text-rose-700 font-semibold hover:underline">Bahasa Indonesia</Link>, <Link href="/ar" className="text-rose-700 font-semibold hover:underline">العربية</Link>, <Link href="/de" className="text-rose-700 font-semibold hover:underline">Deutsch</Link>, <Link href="/vi" className="text-rose-700 font-semibold hover:underline">Tiếng Việt</Link>, <Link href="/tr" className="text-rose-700 font-semibold hover:underline">Türkçe</Link>, <Link href="/it" className="text-rose-700 font-semibold hover:underline">Italiano</Link>, <Link href="/ru" className="text-rose-700 font-semibold hover:underline">Русский</Link>, and <Link href="/ja" className="text-rose-700 font-semibold hover:underline">日本語</Link>).</li>
            </ul>
          </section>

          {/* Section 7: Governance & Direct Contact Information */}
          <section className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl space-y-4 border border-slate-800">
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-rose-500" />
              <span>7. Corporate Governance &amp; Contact Inquiries</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We welcome dialogue with creators, researchers, media organizations, and technology partners. If you have questions regarding our technical methodology, wish to report a platform glitch, require media verification, or need to submit a legal notice, our dedicated teams are ready to assist:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block font-medium">General Support &amp; Bugs</span>
                <span className="text-rose-400 font-bold block mt-0.5">support@quktik.com</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block font-medium">Copyright &amp; DMCA Agent</span>
                <span className="text-rose-400 font-bold block mt-0.5">dmca@quktik.com</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block font-medium">Privacy &amp; Data Officer</span>
                <span className="text-rose-400 font-bold block mt-0.5">privacy@quktik.com</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 pt-2">
              You can also use our interactive inquiry form on our <Link href="/contact" className="text-rose-400 font-bold underline hover:text-rose-300">Contact Support Page</Link> or review our <Link href="/terms-of-service" className="text-rose-400 font-bold underline hover:text-rose-300">Terms of Service</Link> and <Link href="/disclaimer" className="text-rose-400 font-bold underline hover:text-rose-300">DMCA Disclaimer</Link>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
