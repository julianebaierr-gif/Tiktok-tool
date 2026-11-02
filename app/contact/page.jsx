import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import React from 'react';
import { 
  Mail, 
  Clock, 
  Shield, 
  HelpCircle, 
  AlertCircle, 
  FileText, 
  CheckCircle2, 
  Send, 
  Server, 
  Smartphone, 
  Globe2, 
  MessageSquare,
  Lock,
  Layers,
  Laptop,
  Flame,
  LifeBuoy
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact Support & Help Center | QukTik',
  description: 'Connect with QukTik support for technical assistance, bug reports, DMCA copyright takedown requests, partnership inquiries, and self-service diagnostics.',
  alternates: {
    canonical: 'https://www.quktik.com/contact',
  },
  openGraph: {
    title: 'Contact QukTik Support & Help Center',
    description: 'Get in touch with the QukTik support team for technical assistance, copyright notices, or platform diagnostics.',
    url: 'https://www.quktik.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 text-slate-700">
      {/* Breadcrumbs Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ name: 'Contact Support', url: '/contact' }]} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-rose-700 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200">
            Support &amp; Communication Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4 leading-tight">
            How Can We Assist You Today?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you need assistance troubleshooting a video link, wish to submit a DMCA copyright notice, require technical clarifications, or want to discuss enterprise partnerships, our global support desk is available to assist.
          </p>
        </div>

        {/* Top Interactive Form & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Contact Info Sidebar */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-rose-600" />
                <span>Dedicated Inboxes</span>
              </h3>
              
              <div className="flex items-start space-x-3 text-sm border-b border-slate-100 pb-4">
                <Mail className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">General Support &amp; Bugs</p>
                  <a href="mailto:support@quktik.com" className="text-rose-700 font-semibold hover:underline block text-xs sm:text-sm">
                    support@quktik.com
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Link errors, feature ideas, and UI troubleshooting</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm border-b border-slate-100 pb-4">
                <Shield className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">DMCA &amp; Legal Notices</p>
                  <a href="mailto:dmca@quktik.com" className="text-indigo-600 font-semibold hover:underline block text-xs sm:text-sm">
                    dmca@quktik.com
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Expedited 24-hour copyright takedown queue</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm border-b border-slate-100 pb-4">
                <Lock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Privacy &amp; Data Protection</p>
                  <a href="mailto:privacy@quktik.com" className="text-emerald-700 font-semibold hover:underline block text-xs sm:text-sm">
                    privacy@quktik.com
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">GDPR, CCPA, and telemetry inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm pt-1">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Response SLA Windows</p>
                  <p className="text-slate-600 text-xs mt-0.5">
                    <strong>DMCA Notices:</strong> Within 24 hours<br />
                    <strong>Technical Bugs:</strong> 24 to 48 hours<br />
                    <strong>General Feedback:</strong> 48 to 72 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-md text-xs leading-relaxed space-y-2 border border-slate-800">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Before Submitting a Ticket</span>
              </h4>
              <p className="text-slate-300">
                Please check the self-service knowledge base below. Over 85% of common download issues (such as Safari permission prompts or private account limitations) can be resolved immediately without waiting for a support reply.
              </p>
            </div>
          </div>

          {/* Interactive Form Container */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3 mb-2">
                <h3 className="text-lg font-black text-slate-900">Send an Inquiry to Our Engineers</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete the form below with relevant diagnostic details (such as the target URL and your operating system) for expedited resolution.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

        </div>

        {/* Comprehensive Self-Service Knowledge Base & Diagnostics (1400+ Words) */}
        <div className="space-y-12">
          
          {/* Section 1: Diagnostic Troubleshooting Guide */}
          <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                1. Diagnostic Guide: Common Download Issues &amp; Instant Solutions
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              If our web utility displays an error message or fails to generate a download button, review the following eight technical scenarios before submitting a support ticket. In virtually all cases, browser security settings or platform-side access controls are the root cause.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-700 text-xs flex items-center justify-center font-black">1</span>
                  <span>&quot;Unable to Retrieve Media&quot; Error</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  This error occurs when the target video is set to <strong>Private</strong>, restricted to <strong>Friends Only</strong>, or was deleted by the author or platform moderators. QukTik operates exclusively on public CDN streams. We cannot bypass privacy controls, view drafts, or access private profiles under any circumstances.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-black">2</span>
                  <span>iPhone / iPad Safari Download Popups</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When tapping &quot;Download MP4&quot; on iOS Safari, Apple displays a prompt: <em>&quot;Do you want to download this file?&quot;</em> You must tap <strong>Download</strong>. Once finished, tap the small blue downward arrow in Safari&apos;s address bar, open the video in Apple&apos;s <em>Files</em> app, tap <em>Share</em>, and select <strong>Save Video</strong> to move it into your Camera Roll.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 text-xs flex items-center justify-center font-black">3</span>
                  <span>Douyin (Chinese TikTok) Link Parsing</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When copying share links from the Chinese Douyin app, the clipboard often contains Chinese introductory text (e.g., <em>%7.34 复制打开抖音...</em>). You can paste the entire block directly into our <Link href="/douyin-downloader" className="text-rose-700 font-semibold hover:underline">Douyin Downloader</Link>; our automated regex isolates the clean <code>v.douyin.com</code> URL automatically.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-black">4</span>
                  <span>Audio Muted on Downloaded Video</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If your downloaded video plays silently, the background sound was muted platform-wide by TikTok due to a copyright licensing expiration in your jurisdiction. To download alternative viral audio stems, visit our <Link href="/trending-sounds" className="text-rose-700 font-semibold hover:underline">Trending Sounds Chart</Link> or isolate the track via our <Link href="/tiktok-mp3" className="text-rose-700 font-semibold hover:underline">MP3 converter</Link>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 text-xs flex items-center justify-center font-black">5</span>
                  <span>Error 429 Too Many Requests (Rate Limiting)</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To safeguard our platform against distributed scrapers and automated bots, QukTik enforces a generous rate limit of 30 downloads per minute per IP address. If you trigger an Error 429 notice, simply pause for 60 seconds. Normal processing will resume automatically without needing a browser restart or VPN alteration.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-teal-100 text-teal-700 text-xs flex items-center justify-center font-black">6</span>
                  <span>Photo Slideshows &amp; Image ZIP Bundles</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For photo carousel posts, QukTik extracts every individual slide at its maximum native JPEG resolution (up to 1080x1920). You can choose to download images one by one or save the whole gallery packaged with its background audio stem through our dedicated <Link href="/photo-downloader" className="text-rose-700 font-semibold hover:underline">Photo Downloader</Link>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-sky-100 text-sky-700 text-xs flex items-center justify-center font-black">7</span>
                  <span>Browser AdBlocker or Extension Conflicts</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Aggressive browser extensions or strict network firewalls may inadvertently block client-side blob downloads or data URIs. If clicking &quot;Download Server 1&quot; causes the browser to hang without initiating a transfer, try temporarily disabling third-party content blockers or right-clicking the download button to select &quot;Save Link As...&quot;.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 text-xs flex items-center justify-center font-black">8</span>
                  <span>Android Chrome &amp; Samsung Internet Downloads</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  On Android devices, downloaded videos are automatically saved to your system <code>/Download</code> directory and appear immediately in Google Photos or Samsung Gallery. If a download fails to trigger, verify that Chrome or Samsung Internet has storage permissions enabled in your device settings.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Statutory DMCA Takedown Protocol */}
          <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                2. Copyright Owners: DMCA Takedown Procedure
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              QukTik respects the intellectual property rights of creators, record labels, and production studios. Under 17 U.S.C. § 512(c) of the Digital Millennium Copyright Act (DMCA), copyright owners or authorized representatives may request the removal or blocking of access to specific media links.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              To ensure immediate processing by our legal team, your written notice sent to <code>dmca@quktik.com</code> must include the following statutory components:
            </p>
            <ol className="list-decimal list-inside space-y-2.5 text-xs sm:text-sm text-slate-600 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <li><strong>Physical or Electronic Signature:</strong> The signature of the copyright owner or a person authorized to act on their behalf.</li>
              <li><strong>Identification of the Copyrighted Work:</strong> A clear description of the copyrighted original work claimed to have been infringed, including original source links.</li>
              <li><strong>Identification of the Specific URL on QukTik:</strong> The exact URL or post identifier on our service that should be blocked.</li>
              <li><strong>Your Contact Information:</strong> Your legal name, physical mailing address, telephone number, and official email address.</li>
              <li><strong>Good Faith Statement:</strong> A formal statement that you have a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
              <li><strong>Statement Under Penalty of Perjury:</strong> A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
            </ol>
            <p className="text-xs text-slate-500">
              For complete legal disclosures, consult our full <Link href="/disclaimer" className="text-rose-700 font-semibold hover:underline">DMCA &amp; Copyright Policy</Link>.
            </p>
          </section>

          {/* Section 3: Privacy, Data Deletion & GDPR Inquiries */}
          <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                3. Privacy, Data Subject Rights &amp; GDPR / CCPA Compliance
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              Under European Union General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA/CPRA) regulations, users have statutory rights regarding the transparency and handling of their personal data.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              Because QukTik enforces a <strong>Stateless Zero-Log Architecture</strong>, we do not require account creation, do not store phone numbers, and do not maintain permanent user registries. Temporary server logs (such as IP addresses utilized for DDoS mitigation) are automatically purged within 24 to 48 hours. If you wish to submit a formal Data Subject Access Request (DSAR) or have questions regarding our telemetry practices, email our Data Protection Officer at <code>privacy@quktik.com</code>. Learn more in our <Link href="/privacy-policy" className="text-rose-700 font-semibold hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          {/* Section 4: Responsible Security Disclosure & Bug Bounties */}
          <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                4. Responsible Security Vulnerability Disclosure
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              QukTik maintains a strong commitment to digital security, HTTPS HSTS standards, and safe web operations. If you are an independent cybersecurity researcher who has identified an edge routing vulnerability, Cross-Site Scripting (XSS) risk, or rate-limiting flaw in our architecture, we welcome responsible coordinated disclosure.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Please email technical vulnerability summaries with reproducible proof-of-concept steps to <code>security@quktik.com</code>. We ask that researchers allow our engineering team 72 hours to remediate reported issues before publishing public advisories. We do not offer cash bounties at this time, but we gladly provide written public attribution on our security acknowledgments board.
            </p>
          </section>

          {/* Section 5: Press, Media & Partnership Inquiries */}
          <section className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl space-y-4 border border-slate-800">
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-rose-500" />
              <span>5. Press, Academic Research &amp; Partnership Inquiries</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We frequently collaborate with media organizations, internet culture researchers, universities, and technology publishers. If you are preparing a journalistic report on short-form media archiving, need commentary on video compression algorithms, or wish to explore high-volume API integrations for research projects, reach out directly to <code>partners@quktik.com</code>.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <Link href="/about" className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-bold transition-all">
                Learn About Our Technology
              </Link>
              <Link href="/terms-of-service" className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-bold transition-all">
                Review Terms of Service
              </Link>
              <Link href="/disclaimer" className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-bold transition-all">
                DMCA Copyright Policy
              </Link>
            </div>
          </section>

          {/* Section 6: Enterprise & Educational SLA Guidelines */}
          <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                6. Service Level Agreements &amp; Operational Reliability Standards
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              QukTik operates across distributed cloud infrastructure with automated multi-region failover. We maintain an historical uptime target of 99.9% across our global reverse-proxy edge clusters. Our infrastructure monitoring systems continuously probe CDN health, ensuring that upstream TikTok API schema changes are detected and resolved within minutes of deployment.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                    <th className="py-3 px-4 font-bold">Inquiry Category</th>
                    <th className="py-3 px-4 font-bold">Designated Inbox</th>
                    <th className="py-3 px-4 font-bold">Standard Resolution SLA</th>
                    <th className="py-3 px-4 font-bold">Priority Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">DMCA Copyright Infringement Notice</td>
                    <td className="py-3 px-4">dmca@quktik.com</td>
                    <td className="py-3 px-4">&lt; 24 Business Hours</td>
                    <td className="py-3 px-4"><span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-rose-700">Critical</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Security Vulnerability Report</td>
                    <td className="py-3 px-4">security@quktik.com</td>
                    <td className="py-3 px-4">&lt; 48 Hours Initial Review</td>
                    <td className="py-3 px-4"><span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800">High</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Technical Downloader Bug / Failure</td>
                    <td className="py-3 px-4">support@quktik.com</td>
                    <td className="py-3 px-4">24 - 48 Hours</td>
                    <td className="py-3 px-4"><span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-700">Medium</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Data Subject Rights (GDPR / CCPA)</td>
                    <td className="py-3 px-4">privacy@quktik.com</td>
                    <td className="py-3 px-4">Up to 30 Calendar Days</td>
                    <td className="py-3 px-4"><span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">Standard</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-slate-900">Press, Academic &amp; Research Partnerships</td>
                    <td className="py-3 px-4">partners@quktik.com</td>
                    <td className="py-3 px-4">3 - 5 Business Days</td>
                    <td className="py-3 px-4"><span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">Standard</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 7: Support FAQs */}
          <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                7. Frequently Asked Support Questions
              </h2>
            </div>
            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  Why is my downloaded video saved as an MP4 rather than a MOV or WebM?
                </h4>
                <p className="leading-relaxed">
                  MP4 (MPEG-4 Part 14) formatted with H.264 video compression and AAC audio encoding is the universally recognized multimedia container. It guarantees seamless playback across all platforms including Windows, macOS, iOS, Android, and popular editing suites like Adobe Premiere, Final Cut Pro, and CapCut without requiring third-party codec packs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  Can QukTik download deleted TikTok videos if I have the URL saved?
                </h4>
                <p className="leading-relaxed">
                  No. Because QukTik operates strictly as a real-time, stateless proxy and does not maintain internal video archives, when a creator or TikTok moderator deletes a video, the content is permanently purged from ByteDance&apos;s origin servers. Our parser cannot retrieve files that no longer exist on the public CDN.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  Does QukTik compress video bitrate or reduce audio clarity during processing?
                </h4>
                <p className="leading-relaxed">
                  Zero compression is applied. QukTik locates the pristine, uncompressed master stream that ByteDance stores for high-definition playback. If the original video was captured and uploaded in 1080p Full HD at 60 frames per second, that exact bitstream is passed directly to your browser for preservation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  Is there any subscription fee, credit card requirement, or usage quota?
                </h4>
                <p className="leading-relaxed">
                  QukTik is 100% free and requires no subscription, registration, credit card, or personal account. The platform is supported by non-intrusive contextual advertising, ensuring unrestricted access for content creators, students, and everyday internet users worldwide.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
