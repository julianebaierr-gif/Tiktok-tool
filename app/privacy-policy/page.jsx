import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Database, 
  Cookie, 
  Globe2, 
  Server, 
  AlertCircle, 
  CheckCircle2, 
  Mail, 
  UserCheck, 
  FileText 
} from 'lucide-react';

export const metadata = {
  title: { absolute: 'Privacy Policy & Data Protection Declaration | QukTik' },
  description: 'Official QukTik Privacy Policy: zero-PII data minimization, Google AdSense cookie compliance, GDPR, CCPA/CPRA rights, and security standards.',
  alternates: {
    canonical: 'https://www.quktik.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy & Data Protection Declaration | QukTik',
    description: 'Learn how QukTik safeguards your privacy with stateless stream forwarding, zero account requirements, and global privacy compliance.',
    url: 'https://www.quktik.com/privacy-policy',
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

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 2026';

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 text-slate-700">
      {/* Breadcrumbs Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-200">
            Global Privacy &amp; Data Governance (2026 Revision)
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4 leading-tight">
            Privacy Policy &amp; Data Protection Declaration
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            At QukTik, your digital privacy is our foremost operational standard. This comprehensive Privacy Policy explains how our stateless web infrastructure operates, what limited telemetry is processed, and your rights under global privacy frameworks including GDPR, UK-GDPR, CCPA/CPRA, and CalOPPA.
          </p>
          <div className="mt-3 text-xs font-semibold text-slate-400">
            Last Reviewed &amp; Updated: {lastUpdated} &bull; Document Reference: QT-PRIVACY-2026-V4
          </div>
        </div>

        {/* Content Body Container */}
        <div className="space-y-10 bg-white p-6 sm:p-12 rounded-3xl border border-slate-200 shadow-sm leading-relaxed text-sm sm:text-base">

          {/* Section 1: Introduction & Data Controller */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                1. Introduction &amp; Data Controller Identification
              </h2>
            </div>
            <p>
              This Privacy Policy governs the operations of <strong>QukTik</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or the &quot;Service&quot;), accessible via <Link href="/" className="text-rose-700 font-semibold hover:underline">https://www.quktik.com</Link>, along with our specialized tools including the <Link href="/tiktok-video-downloader" className="text-rose-700 font-semibold hover:underline">TikTok Video Downloader</Link>, <Link href="/tiktok-mp3" className="text-rose-700 font-semibold hover:underline">TikTok MP3 Audio Converter</Link>, <Link href="/tiktok-photo" className="text-rose-700 font-semibold hover:underline">Photo Slideshow Downloader</Link>, and <Link href="/douyin-downloader" className="text-rose-700 font-semibold hover:underline">Douyin Downloader</Link>.
            </p>
            <p>
              For the purposes of the General Data Protection Regulation (Regulation (EU) 2016/679 - &quot;GDPR&quot;) and the UK Data Protection Act 2018, QukTik serves as the <strong>Data Controller</strong> with respect to the limited technical telemetry generated when you navigate our web properties. Our foundational philosophy is grounded in <em>Privacy by Design and by Default</em> (GDPR Article 25): we collect only the absolute minimum information required to deliver high-performance stream parsing safely and reliably.
            </p>
            <p className="text-slate-600">
              If you have any questions or wish to exercise statutory privacy entitlements, you can reach our designated Data Protection Officer (DPO) at <a href="mailto:privacy@quktik.com" className="text-rose-700 font-bold underline">privacy@quktik.com</a> or visit our <Link href="/contact" className="text-rose-700 font-semibold hover:underline">Contact Center</Link>.
            </p>
          </section>

          {/* Section 2: What We DO NOT Collect */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <EyeOff className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                2. Information We DO NOT Collect (Zero-PII &amp; Zero Media Hosting)
              </h2>
            </div>
            <p>
              Unlike conventional web platforms that require identity registration or profile tracking, QukTik operates on a <strong>Stateless Zero-Retention Architecture</strong>. We want to be unequivocally clear regarding what we never collect:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No Personal Identity Accounts</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We do not provide account registration. We never request, collect, or store names, email addresses, phone numbers, home addresses, dates of birth, social media credentials, or government IDs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No Payment or Financial Data</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  QukTik is 100% free. We never request credit card numbers, PayPal accounts, banking information, or billing data. There are no subscriptions, micro-transactions, or hidden fees.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Server Storage of Media</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We do NOT store, archive, or maintain copies of videos, audio tracks, or photos downloaded through the platform. Streams are transmitted directly from CDN origin nodes to your browser in real time.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No Device Fingerprinting or Keystroke Logs</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We do not execute canvas fingerprinting, audio context probing, battery level inspection, accelerometer tracking, or keystroke recording scripts on user devices.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Ephemeral Technical Telemetry & Transient Server Logs */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                3. Ephemeral Technical Telemetry &amp; Transient Server Logs
              </h2>
            </div>
            <p>
              When your browser requests a webpage or submits an API parsing request to QukTik, our web servers automatically generate standard, ephemeral technical log entries. This processing is conducted pursuant to <strong>GDPR Article 6(1)(f) (Legitimate Interests)</strong> to ensure infrastructure security, defend against DDoS attacks, and enforce rate limits.
            </p>
            <p>
              The transient information recorded in these logs includes:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 pl-2 text-xs sm:text-sm">
              <li><strong>Internet Protocol (IP) Address:</strong> Used temporarily for automated rate-limiting (preventing scraping scripts from exceeding 30 requests per minute) and geo-routing requests to the closest CDN edge server.</li>
              <li><strong>HTTP User-Agent String:</strong> Analyzed mechanically to determine device viewport characteristics (e.g., differentiating between iOS Safari and desktop Chrome to format optimal download prompts).</li>
              <li><strong>HTTP Referrer Header:</strong> Indicating the referring web address to evaluate inbound traffic channels.</li>
              <li><strong>Date &amp; Time Stamp:</strong> Documenting the exact millisecond of the network interaction.</li>
              <li><strong>HTTP Status Code &amp; Bytes Transferred:</strong> Tracking transmission success or network failures for real-time error diagnostics.</li>
            </ul>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600">
              <strong>Mandatory Log Retention Window:</strong> All raw server log files are stored on isolated, encrypted edge proxies and are automatically, permanently deleted or anonymized within <strong>24 to 48 hours</strong>. We do not correlate server logs with any external identity records or persistent user databases.
            </div>
          </section>

          {/* Section 4: Cookies, Local Storage & Session State */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                4. Cookies, Local Storage &amp; Client-Side Session State
              </h2>
            </div>
            <p>
              Cookies are small alphanumeric text files stored on your device by your web browser when visiting internet sites. QukTik utilizes cookies and modern HTML5 Local Storage strictly in the following limited capacities:
            </p>
            <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700">
              <p>
                <strong>Essential First-Party Functional Storage:</strong> We use local browser storage (such as <code>localStorage</code> or session tokens) solely to preserve client-side user preferences—for example, your chosen language interface, audio volume state, or UI theme preference across page reloads. These functional keys contain zero personally identifiable data and never transmit data to third parties.
              </p>
              <p>
                <strong>Third-Party Advertising Cookies:</strong> Certified advertising partners (including Google) deploy cookies and web beacons to serve advertisements on QukTik. You can control or disable cookie tracking at any time via your browser settings or third-party opt-out portals.
              </p>
            </div>
          </section>

          {/* Section 5: Google AdSense & Advertising Disclosures (Crucial for 2026 AdSense Policies) */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                5. Google AdSense &amp; Third-Party Advertising Partner Policies
              </h2>
            </div>
            <p>
              QukTik partners with Google AdSense and accredited digital advertising networks to display contextual advertisements across our pages. In compliance with Google Publisher Policies and international privacy regulations, we provide the following explicit disclosures:
            </p>
            <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700">
              <p>
                <strong>Third-Party Vendors &amp; Cookie Usage:</strong> Google and other third-party vendors use cookies to serve ads based on a user&apos;s prior visits to QukTik or other websites across the World Wide Web.
              </p>
              <p>
                <strong>Google DART Cookie:</strong> Google&apos;s use of advertising cookies (including the DoubleClick DART cookie) enables it and its advertising partners to serve targeted ads to our users based on their navigation patterns on QukTik and other sites on the Internet.
              </p>
              <p>
                <strong>Opting Out of Personalized Advertising:</strong> Users have the affirmative right to opt out of personalized interest-based advertising at any time through the following official opt-out portals:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-4 text-slate-600">
                <li>Visit <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-rose-700 font-bold underline">Google Ads Settings</a> to customize or disable personalized advertising across Google properties.</li>
                <li>Visit the <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-rose-700 font-bold underline">Network Advertising Initiative (NAI) Opt-Out Portal</a> to opt out of interest-based ads from participating network members.</li>
                <li>Visit the <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-rose-700 font-bold underline">Digital Advertising Alliance (DAA) WebChoices Tool</a> for universal browser-level choice management.</li>
                <li>European residents may opt out via the <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-rose-700 font-bold underline">European Interactive Digital Advertising Alliance (EDAA)</a> portal.</li>
              </ul>
              <p>
                <strong>IAB Europe Transparency and Consent Framework (TCF v2.2):</strong> For visitors originating from the European Economic Area (EEA) and the United Kingdom, QukTik supports Google Consent Mode v2 and IAB Europe TCF v2.2 standards, allowing you to grant, customize, or revoke consent for personalized advertising, ad storage, and analytics cookies at any time.
              </p>
            </div>
          </section>

          {/* Section 6: Analytics & Performance Metrics */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                6. Privacy-First Analytics &amp; Performance Monitoring
              </h2>
            </div>
            <p>
              To monitor page load speeds, identify broken links, and optimize server capacity, QukTik employs lightweight, privacy-focused analytics solutions, including <strong>Ahrefs Analytics</strong> and Cloudflare Web Analytics.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Unlike invasive surveillance tools, our analytics implementations are designed to operate without tracking users across disparate third-party domains. They do not store persistent tracking cookies on your device, do not collect personal identifiers, and aggregate metric data (such as total monthly visitors, popular browser types, and country of origin) solely in an anonymized, statistical format.
            </p>
          </section>

          {/* Section 7: GDPR & UK-GDPR Rights */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                7. Data Subject Rights Under GDPR &amp; UK Data Protection Laws
              </h2>
            </div>
            <p>
              If you reside within the European Union (EU), European Economic Area (EEA), Switzerland, or the United Kingdom, you possess statutory rights under Articles 15 through 22 of the GDPR regarding the handling of your data:
            </p>
            <div className="space-y-2.5 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700">
              <p><strong>Right of Access (Art. 15):</strong> You have the right to request confirmation as to whether personal data concerning you is being processed and to receive a copy of that data.</p>
              <p><strong>Right to Rectification (Art. 16):</strong> You have the right to obtain the rectification of inaccurate personal data without undue delay.</p>
              <p><strong>Right to Erasure / &quot;Right to be Forgotten&quot; (Art. 17):</strong> You have the right to obtain the erasure of your personal data where statutory grounds apply.</p>
              <p><strong>Right to Restriction of Processing (Art. 18):</strong> You have the right to restrict our processing of your data under specific statutory circumstances.</p>
              <p><strong>Right to Data Portability (Art. 20):</strong> You have the right to receive your personal data in a structured, commonly used, machine-readable format.</p>
              <p><strong>Right to Object (Art. 21):</strong> You have the right to object at any time, on grounds relating to your particular situation, to the processing of your data based on legitimate interests.</p>
              <p><strong>Right to Lodge a Complaint:</strong> You have the legal right to lodge a complaint with your local data protection supervisory authority (e.g., CNIL in France, the ICO in the UK, or BfDI in Germany).</p>
            </div>
            <p className="text-xs text-slate-500">
              Please note: Because QukTik operates without user accounts and purges server logs within 24–48 hours, we do not maintain searchable records indexed by user name or identity. When submitting a Data Subject Access Request (DSAR) to <code>privacy@quktik.com</code>, you must provide your specific IP address and exact timestamp to allow our engineering team to locate any relevant log lines before automatic purging.
            </p>
          </section>

          {/* Section 8: California Privacy Rights (CCPA / CPRA / CalOPPA) */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                8. California Privacy Rights (CCPA / CPRA &amp; CalOPPA)
              </h2>
            </div>
            <p>
              Under the California Consumer Privacy Act of 2018 (CCPA) as amended by the California Privacy Rights Act of 2020 (CPRA), California residents are entitled to specific statutory disclosures:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
              <p className="font-bold text-slate-900 text-sm">
                DO NOT SELL OR SHARE MY PERSONAL INFORMATION:
              </p>
              <p>
                <strong>QukTik has NEVER sold, rented, leased, disclosed, or shared personal information of any user to third parties for monetary or other commercial consideration, and we will never do so in the future.</strong>
              </p>
              <p>
                Under the CCPA/CPRA, California consumers have the right to:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                <li>Request disclosure of categories and specific pieces of personal information collected.</li>
                <li>Request deletion of personal information collected from them.</li>
                <li>Request correction of inaccurate personal information.</li>
                <li>Opt out of the &quot;sharing&quot; of personal information for cross-context behavioral advertising.</li>
                <li>Not receive discriminatory treatment for exercising any of their privacy rights.</li>
              </ul>
              <p className="pt-1">
                To submit a California consumer privacy request, email our compliance team at <code>privacy@quktik.com</code> with the subject line <em>&quot;CCPA/CPRA Consumer Privacy Request&quot;</em>.
              </p>
            </div>
          </section>

          {/* Section 9: Children's Privacy (COPPA) */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                9. Protection of Children&apos;s Privacy (COPPA &amp; Age Restrictions)
              </h2>
            </div>
            <p>
              QukTik complies fully with the Children&apos;s Online Privacy Protection Act of 1998 (COPPA) and analogous international youth safety legislation. QukTik is intended solely for general audiences aged 13 and older (or aged 16 and older where required by domestic law in the EEA).
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We do not knowingly solicit, target, or collect personal information from children under 13. If you are a parent or legal guardian and discover that your minor child has transmitted personal information to our servers (such as through our contact email), please notify us immediately at <code>privacy@quktik.com</code>. We will promptly investigate and permanently erase the corresponding records from our server logs.
            </p>
          </section>

          {/* Section 10: Security Protocols & SSL/TLS Encryption */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                10. Information Security &amp; End-to-End Encryption Standards
              </h2>
            </div>
            <p>
              QukTik employs robust administrative, operational, and technical security safeguards designed to prevent unauthorized access, alteration, disclosure, or destruction of information. Our security posture incorporates:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2 text-xs sm:text-sm">
              <li><strong>Mandatory TLS 1.3 Encryption:</strong> All communications between your client device and our edge servers are strictly encrypted utilizing TLS 1.3 cryptographic suites with 256-bit encryption.</li>
              <li><strong>HTTP Strict Transport Security (HSTS):</strong> We enforce an unyielding HSTS policy with <code>includeSubDomains</code> and preloading directives, preventing man-in-the-middle downgrade attacks.</li>
              <li><strong>DNSSEC &amp; DDoS Protection:</strong> Domain Name System Security Extensions (DNSSEC) validate cryptographic integrity, while cloud-scale Web Application Firewalls (WAF) mitigate distributed denial-of-service threats.</li>
              <li><strong>Stateless In-Memory Handling:</strong> Parsing buffers are processed exclusively in volatile memory (RAM) and are cleared immediately upon socket closure.</li>
            </ul>
          </section>

          {/* Section 11: International Data Transfers */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                11. Cross-Border Routing &amp; International Data Transfers
              </h2>
            </div>
            <p>
              QukTik operates across a globally distributed network of edge cache servers. Depending on your physical geographic location, transient web requests may be routed through edge proxies situated in the United States, Europe, or the Asia-Pacific region.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Where technical telemetry is processed across borders, we ensure adequate safeguards are in place, including reliance on European Commission Standard Contractual Clauses (SCCs) and adherence to international data transfer agreements to guarantee a level of protection equivalent to that of the European Union.
            </p>
          </section>

          {/* Section 12: Contacting Our Data Protection Officer */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-md space-y-4 border border-slate-800">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-400" />
              <span>Contact Our Data Protection Officer (DPO)</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              If you have any questions, regulatory inquiries, or wish to exercise statutory data subject rights regarding this Privacy Policy, our Data Protection Officer is available to assist:
            </p>
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm space-y-1.5 text-slate-300">
              <p><strong className="text-white">Designated Officer:</strong> Data Protection &amp; Compliance Team</p>
              <p><strong className="text-white">Direct Privacy Email:</strong> <a href="mailto:privacy@quktik.com" className="text-indigo-400 font-bold hover:underline">privacy@quktik.com</a></p>
              <p><strong className="text-white">Interactive Help Center:</strong> <Link href="/contact" className="text-indigo-400 font-bold hover:underline" aria-label="Official QukTik Contact and Support Portal">Official QukTik Contact &amp; Support Portal</Link></p>
              <p><strong className="text-white">Official Website:</strong> <Link href="/" className="text-indigo-400 font-bold hover:underline">https://www.quktik.com</Link></p>
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              For complete contractual rules governing site usage, see our <Link href="/terms-of-service" className="text-slate-300 underline font-semibold">Terms of Service</Link>. For copyright takedown procedures, see our <Link href="/disclaimer" className="text-slate-300 underline font-semibold">DMCA &amp; Copyright Disclaimer</Link>.
            </p>
          </section>

          {/* Cross Navigation Footer */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4 text-xs">
            <Link href="/terms-of-service" className="text-slate-500 hover:text-slate-900 font-semibold underline">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="text-slate-500 hover:text-slate-900 font-semibold underline">
              DMCA Disclaimer
            </Link>
            <Link href="/about" className="text-slate-500 hover:text-slate-900 font-semibold underline">
              About QukTik
            </Link>
            <Link href="/contact" className="text-slate-500 hover:text-slate-900 font-semibold underline">
              Contact Support
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
