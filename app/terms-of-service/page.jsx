import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import React from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Scale, 
  AlertOctagon, 
  Lock, 
  HelpCircle, 
  Clock, 
  Globe2, 
  CheckCircle2, 
  Server,
  Zap,
  Flame
} from 'lucide-react';

export const metadata = {
  title: 'Terms of Service & User Agreement | QukTik',
  description: 'Official Terms of Service, Acceptable Use Policy, and Legal User Agreement for QukTik online video and audio downloader.',
  alternates: {
    canonical: 'https://www.quktik.com/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service & User Agreement | QukTik',
    description: 'Understand the terms governing your use of QukTik media downloader, acceptable use rules, and legal liabilities.',
    url: 'https://www.quktik.com/terms-of-service',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 2026';

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 text-slate-700">
      {/* Breadcrumbs Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ name: 'Terms of Service', url: '/terms-of-service' }]} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
            Binding Legal Contract &amp; User Agreement
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4 leading-tight">
            Terms of Service &amp; Conditions of Use
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Please review these Terms of Service carefully before utilizing QukTik. By accessing our web application, tools, APIs, or reverse-proxy download parsers, you acknowledge that you have read, understood, and agreed to be legally bound by this agreement.
          </p>
          <div className="mt-3 text-xs font-semibold text-slate-400">
            Effective Date: {lastUpdated} &bull; Document Reference: QT-LEGAL-TOS-2026-V3
          </div>
        </div>

        {/* Content Body Container */}
        <div className="space-y-10 bg-white p-6 sm:p-12 rounded-3xl border border-slate-200 shadow-sm leading-relaxed text-sm sm:text-base">

          {/* Section 1: Acceptance & Legal Capacity */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                1. Acceptance of Terms &amp; Legal Capacity
              </h2>
            </div>
            <p>
              These Terms of Service constitute a legally binding agreement between you (whether individually or as an authorized representative of an entity, referred to herein as &quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and QukTik (&quot;Service&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), accessible at <Link href="/" className="text-rose-700 font-semibold hover:underline">https://www.quktik.com</Link>.
            </p>
            <p>
              By accessing, browsing, copying links into, or otherwise using any feature of QukTik (including our <Link href="/tiktok-video-downloader" className="text-rose-700 font-semibold hover:underline">TikTok Video Downloader</Link>, <Link href="/tiktok-mp3" className="text-rose-700 font-semibold hover:underline">TikTok MP3 Converter</Link>, <Link href="/photo-downloader" className="text-rose-700 font-semibold hover:underline">Photo Slideshow Downloader</Link>, and <Link href="/douyin-downloader" className="text-rose-700 font-semibold hover:underline">Douyin Downloader</Link>), you affirm that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2 text-xs sm:text-sm">
              <li>You are at least thirteen (13) years of age (or the minimum age of digital consent required in your country of residence). If you are between 13 and 18 years old, you have reviewed these terms with a parent or legal guardian who accepts them on your behalf.</li>
              <li>You possess the legal capacity, authority, and competence to enter into and abide by all provisions of this agreement.</li>
              <li>Your use of QukTik does not violate any applicable domestic, federal, state, municipal, or international law, statute, or regulation.</li>
            </ul>
            <p className="text-slate-600">
              If you do not unconditionally agree to all terms and conditions contained herein, you must immediately discontinue using our website and terminate all active sessions.
            </p>
          </section>

          {/* Section 2: Description of the Service & Architecture */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                2. Scope of Service &amp; Stateless Technical Operation
              </h2>
            </div>
            <p>
              QukTik provides a browser-based, client-side assistive web utility engineered to inspect publicly available manifest metadata delivered by third-party short-form video networks (principally TikTok and Douyin). The service parses the public web structure to extract direct media Uniform Resource Locators (URLs) for user-directed offline caching and archival.
            </p>
            <p>
              You acknowledge and agree to the following operational parameters:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">No Storage or Hosting</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  QukTik is not a video host, media repository, or storage provider. We do not host, store, index, or archive any copyrighted video, audio, or image files on our servers. Media streams are forwarded in real time directly from public CDN origin nodes to your browser client.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">No Account Registration</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The service is offered entirely registration-free. We do not create user accounts, require usernames, passwords, credit card numbers, or store personally identifiable profiles.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Free &amp; Ad-Supported</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  QukTik is accessible free of charge. Infrastructure operating expenses, network egress costs, and software maintenance are financed exclusively through non-intrusive, privacy-compliant contextual advertisements served by accredited third-party networks (including Google AdSense).
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Algorithmic Neutrality</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our software acts mechanically upon URLs submitted by users. QukTik does not curate, editorialize, rank, censor, or promote any specific TikTok creator, political ideology, commercial product, or media genre.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Acceptable Use Policy & Prohibited Conduct */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <AlertOctagon className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                3. Acceptable Use Policy &amp; Prohibited Conduct
              </h2>
            </div>
            <p>
              You agree to use QukTik solely for lawful, personal, non-commercial purposes in full accordance with these terms. As an express condition of your access, you agree that you shall NOT:
            </p>
            <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700">
              <p>
                <strong>a. Automated Scraping &amp; Denial of Service:</strong> Deploy automated crawlers, headless browser clusters, scraping spiders, scripts, or botnets to execute batch parsing requests or attempt to overwhelm, impair, or exhaust our server resources (e.g., executing more than 30 automated requests per minute per IP address).
              </p>
              <p>
                <strong>b. Reverse-Engineering &amp; Exploitation:</strong> Decompile, reverse-engineer, disassemble, modify, or derive source code from QukTik&apos;s proprietary edge-routing algorithms, manifest parsers, or API endpoints without prior written authorization.
              </p>
              <p>
                <strong>c. Circumvention of Security Controls:</strong> Bypass, disable, tamper with, or circumvent any security measures, rate-limiting tokens, CAPTCHA challenges, or IP-based access restrictions implemented by QukTik.
              </p>
              <p>
                <strong>d. Copyright Infringement &amp; Piracy:</strong> Use the service to download, reproduce, re-encode, or distribute commercially licensed content (such as full-length motion pictures, pay-per-view broadcasts, or proprietary studio music stems) without express written authorization from the copyright holder.
              </p>
              <p>
                <strong>e. Commercial Resale &amp; Whitelabeling:</strong> Resell, lease, sublicense, distribute, mirror, or repackage QukTik&apos;s API or web tools as part of a paid commercial software application, paid browser extension, or commercial SaaS product without an executed partnership agreement.
              </p>
              <p>
                <strong>f. Harassment &amp; Privacy Violations:</strong> Use downloaded media to stalk, harass, intimidate, defame, impersonate, or violate the personal privacy or publicity rights of any individual, minor, or public figure.
              </p>
              <p>
                <strong>g. Circumventing Technological Access Controls:</strong> Attempt to process links from private accounts, restricted friends-only lists, or content protected by active digital rights management (DRM) mechanisms that you are not legally authorized to access.
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Violation of any provision in this Acceptable Use Policy may result in immediate, permanent IP blacklisting, termination of access, and notification of law enforcement authorities where appropriate.
            </p>
          </section>

          {/* Section 4: Intellectual Property & Ownership */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                4. Intellectual Property Rights &amp; Trademark Boundaries
              </h2>
            </div>
            <p>
              <strong>QukTik Proprietary Assets:</strong> All text, graphical interfaces, custom illustrations, icons, CSS stylesheets, layout designs, domain names, branding, source code, and software functionality comprising QukTik are the exclusive intellectual property of QukTik and are protected under international copyright, trademark, and trade secret laws. No portion of our software or branding may be copied or republished without written consent.
            </p>
            <p>
              <strong>User &amp; Creator Content:</strong> QukTik claims zero ownership, copyright, or licensing rights over the videos, audios, slideshows, or graphics processed through the tool. All intellectual property rights, moral rights, and commercial distribution rights in the media remain exclusively with the original creators, copyright holders, or ByteDance Ltd.
            </p>
            <p>
              <strong>Third-Party Trademarks:</strong> &quot;TikTok&quot;, &quot;ByteDance&quot;, &quot;Douyin&quot;, &quot;Musical.ly&quot;, and related logos and slogans are trademarks or registered trademarks of ByteDance Ltd. Reference to these trademarks on QukTik is made strictly under the doctrine of Nominative Trademark Fair Use (15 U.S.C. § 1115(b)(4)) to inform consumers of the technological compatibility of our parsing tools. For complete details, see our <Link href="/disclaimer" className="text-rose-700 font-semibold hover:underline">DMCA &amp; Copyright Disclaimer</Link>.
            </p>
          </section>

          {/* Section 5: Permitted Fair-Use Archival & User Warranties */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                5. User Representations, Warranties &amp; Permitted Fair Use
              </h2>
            </div>
            <p>
              You expressly represent and warrant to QukTik that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2 text-xs sm:text-sm">
              <li>You either (i) are the original creator and copyright owner of the media file processed, or (ii) have obtained all necessary licenses, permissions, and consents from the copyright owner to download the file, or (iii) are utilizing the content strictly within the bounds of statutory Fair Use (17 U.S.C. § 107) for non-commercial criticism, commentary, scholarship, or personal offline backup.</li>
              <li>You will not upload, re-publish, broadcast, monetize, or publicly distribute downloaded media in any manner that infringes upon third-party copyrights or violates TikTok&apos;s platform Terms of Service.</li>
              <li>You assume sole, unshared legal responsibility for any copyright infringement, civil liability, or criminal penalties that may arise from your unauthorized downloading, reproduction, or distribution of third-party copyrighted works.</li>
            </ul>
          </section>

          {/* Section 6: Third-Party Links, AdSense & External Networks */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                6. Third-Party Advertisements, External Links &amp; CDNs
              </h2>
            </div>
            <p>
              QukTik may display contextual advertisements served by certified advertising networks, including Google AdSense. In addition, our website may include hyperlinks to external websites, services, or resources operated by third parties.
            </p>
            <p>
              You acknowledge that QukTik has no control over, and assumes no responsibility for, the content, privacy policies, practices, goods, or services offered by third-party advertisers or external websites. Clicking on an advertisement or external link is undertaken at your own sole discretion and risk. For details on how advertising cookies are utilized, please consult our <Link href="/privacy-policy" className="text-rose-700 font-semibold hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          {/* Section 7: Disclaimer of Warranties */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                7. Disclaimer of Warranties (&quot;As-Is&quot; &amp; &quot;As-Available&quot;)
              </h2>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
              <p>
                THE SERVICE IS PROVIDED ON AN &quot;AS-IS&quot; AND &quot;AS-AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, QUKTIK EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                <li>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</li>
                <li>WARRANTIES THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, ACCURATE, OR FREE FROM BUGS, LATENCY, OR GLITCHES.</li>
                <li>WARRANTIES REGARDING THE QUALITY, COMPATIBILITY, INTEGRITY, OR TIMELINESS OF ANY MEDIA DOWNLOADED OR PARSED THROUGH THE WEBSITE.</li>
                <li>WARRANTIES THAT OUR SOFTWARE WILL REMAIN COMPATIBLE WITH UPSTREAM PLATFORM API, PROTOCOL, OR CODEC REVISIONS INTRODUCED BY TIKTOK OR BYTEDANCE LTD.</li>
              </ul>
            </div>
          </section>

          {/* Section 8: Limitation of Liability */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                8. Limitation of Liability &amp; Exclusion of Damages
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL QUKTIK, ITS OWNERS, DIRECTORS, EMPLOYEES, AFFILIATES, AGENTS, OR LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, LOSS OF PROFITS, DATA LOSS, REPUTATIONAL DAMAGE, WORK STOPPAGE, COMPUTER FAILURE, OR LOSS OF GOODWILL) ARISING OUT OF OR IN CONNECTION WITH:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 pl-2 text-xs sm:text-sm">
              <li>YOUR ACCESS TO, USE OF, OR INABILITY TO ACCESS OR USE THE SERVICE;</li>
              <li>ANY DOWNLOADING, STORAGE, REPRODUCTION, OR SUBSEQUENT DISSEMINATION OF THIRD-PARTY MEDIA PROCESSED VIA OUR TOOLS;</li>
              <li>ANY CONDUCT, STATEMENTS, OR CONTENT TRANSMITTED BY ANY THIRD PARTY ON OR THROUGH THE SERVICE;</li>
              <li>ANY BUGS, VIRUSES, TROJAN HORSES, OR CORRUPTED MEDIA STREAMS TRANSMITTED BY UPSTREAM CDNS; OR</li>
              <li>ANY ACTIONS TAKEN BY COPYRIGHT HOLDERS OR THIRD-PARTY SOCIAL NETWORKS IN RESPONSE TO MEDIA ARCHIVED THROUGH OUR PARSERS.</li>
            </ul>
            <p className="text-xs text-slate-500">
              IN ALL EVENTS, QUKTIK&apos;S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE USE OF THE SERVICE SHALL BE STRICTLY LIMITED TO ZERO DOLLARS ($0.00 USD), OWING TO THE FREE AND PUBLIC NATURE OF THE SERVICE.
            </p>
          </section>

          {/* Section 9: Indemnification */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                9. Indemnification Obligations
              </h2>
            </div>
            <p>
              You agree to defend, indemnify, and hold harmless QukTik, its creators, operators, subsidiaries, affiliates, officers, contractors, and agents from and against any and all claims, demands, liabilities, damages, losses, fines, costs, or expenses (including reasonable attorneys&apos; fees and legal court costs) resulting from or arising out of:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 pl-2 text-xs sm:text-sm">
              <li>Your breach or alleged breach of any term, warranty, or covenant contained within these Terms of Service;</li>
              <li>Your violation of any applicable law, statutory copyright regulation, or intellectual property right of any third party;</li>
              <li>Your downloading, saving, publishing, broadcasting, commercializing, or distributing any media file obtained via QukTik; or</li>
              <li>Any willful misconduct, fraud, or negligence committed by you in connection with your use of our web software.</li>
            </ul>
          </section>

          {/* Section 10: Modifications, Governing Law & Dispute Resolution */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                10. Governing Law, Dispute Resolution &amp; Severability
              </h2>
            </div>
            <p>
              <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the general principles of international contract law and the substantive laws of the applicable operational jurisdiction, without regard to its conflict of law principles.
            </p>
            <p>
              <strong>Class Action Waiver:</strong> YOU AND QUKTIK AGREE THAT ANY PROCEEDINGS TO RESOLVE DISPUTES WILL BE CONDUCTED SOLELY ON AN INDIVIDUAL BASIS. NEITHER YOU NOR QUKTIK SHALL SEEK TO HAVE ANY DISPUTE HEARD AS A CLASS ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR IN ANY OTHER PROCEEDING IN WHICH EITHER PARTY ACTS OR PROPOSES TO ACT IN A REPRESENTATIVE CAPACITY.
            </p>
            <p>
              <strong>Severability:</strong> If any provision or portion of these Terms is determined by a court of competent jurisdiction to be unlawful, void, or unenforceable, that provision shall be deemed severable and shall not affect the validity and enforceability of any remaining provisions.
            </p>
            <p>
              <strong>Modifications to Terms:</strong> QukTik reserves the exclusive right to modify, amend, or update these Terms of Service at any time. When updates occur, we will revise the &quot;Effective Date&quot; at the top of this document. Your continued use of the website following any posted modifications constitutes your affirmative acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 11: Contact & Communication */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-md space-y-4 border border-slate-800">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-rose-500" />
              <span>Questions Regarding These Terms?</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              If you have any questions, legal inquiries, or formal feedback regarding our Terms of Service, please reach out to our legal compliance desk:
            </p>
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm space-y-1.5 text-slate-300">
              <p><strong className="text-white">Legal Inquiry Email:</strong> <a href="mailto:support@quktik.com" className="text-rose-400 font-bold hover:underline">support@quktik.com</a></p>
              <p><strong className="text-white">DMCA Copyright Notices:</strong> <a href="mailto:dmca@quktik.com" className="text-rose-400 font-bold hover:underline">dmca@quktik.com</a></p>
              <p><strong className="text-white">Online Help Desk:</strong> <Link href="/contact" className="text-rose-400 font-bold hover:underline">https://www.quktik.com/contact</Link></p>
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              For information regarding how we handle privacy, see our <Link href="/privacy-policy" className="text-slate-300 underline font-semibold">Privacy Policy</Link>. For technical information on our architecture, read <Link href="/about" className="text-slate-300 underline font-semibold">About QukTik</Link>.
            </p>
          </section>

          {/* Cross Navigation Footer */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4 text-xs">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-900 font-semibold underline">
              Privacy Policy
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
