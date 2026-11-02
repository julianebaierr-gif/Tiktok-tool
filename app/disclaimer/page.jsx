import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import React from 'react';
import { 
  ShieldAlert, 
  Mail, 
  Scale, 
  FileCheck, 
  AlertTriangle, 
  Server, 
  Globe2, 
  BookOpen, 
  HelpCircle,
  CheckCircle2,
  Lock,
  ExternalLink
} from 'lucide-react';

export const metadata = {
  title: 'DMCA Policy & Copyright Disclaimer | QukTik',
  description: 'Official DMCA Takedown Policy, Copyright Disclaimer, Safe Harbor Protections under 17 U.S.C. § 512, and Trademark Non-Affiliation Notice for QukTik.',
  alternates: {
    canonical: 'https://www.quktik.com/disclaimer',
  },
  openGraph: {
    title: 'DMCA Policy & Copyright Disclaimer | QukTik',
    description: 'Statutory DMCA Copyright Compliance, Trademark Non-Affiliation Disclaimers, and Safe Harbor Protections.',
    url: 'https://www.quktik.com/disclaimer',
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

export default function DisclaimerPage() {
  const lastUpdated = 'January 2026';

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 text-slate-700">
      {/* Breadcrumbs Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ name: 'DMCA & Copyright Disclaimer', url: '/disclaimer' }]} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-rose-700 bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200">
            Statutory Safe Harbor &amp; Copyright Compliance
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4 leading-tight">
            DMCA Policy &amp; Copyright Disclaimer
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            QukTik respects the intellectual property rights of original creators, artists, record labels, and production entities. This document outlines our statutory compliance under the Digital Millennium Copyright Act (DMCA), our non-affiliation disclaimers, and our takedown request protocol.
          </p>
          <div className="mt-3 text-xs font-semibold text-slate-400">
            Current Regulatory Revision: {lastUpdated} &bull; Document ID: QT-LEGAL-DMCA-2026
          </div>
        </div>

        {/* Core Disclaimer Warning Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/80 border border-amber-200/90 shadow-xs mb-10 space-y-3">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-lg">
            <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0" />
            <span>Essential Non-Affiliation &amp; Trademark Fair Use Notice</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-amber-900 font-medium">
            <strong>QukTik is an independent technical web utility. QukTik is NOT affiliated, associated, authorized, endorsed by, sponsored by, or in any way officially connected with TikTok, ByteDance Ltd., Musical.ly, Douyin, or any of their corporate subsidiaries or affiliates.</strong>
          </p>
          <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
            The name &quot;TikTok&quot;, the TikTok logo, &quot;Douyin&quot;, and related trademarks, trade names, service marks, and graphic brand assets are registered trademarks of ByteDance Ltd. or their respective owners. Any reference to these marks on QukTik is strictly nominative, descriptive, and utilized under the established legal doctrine of Nominative Trademark Fair Use (15 U.S.C. § 1115(b)(4)) to describe the compatibility and intended technical functionality of our web tools.
          </p>
        </div>

        {/* Content Body Container */}
        <div className="space-y-10 bg-white p-6 sm:p-12 rounded-3xl border border-slate-200 shadow-sm leading-relaxed text-sm sm:text-base">
          
          {/* Section 1: Conduit Immunity & Zero-Hosting Philosophy */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                1. Technical Architecture &amp; Conduit Immunity (17 U.S.C. § 512(a))
              </h2>
            </div>
            <p>
              Under Title 17 of the United States Code, Section 512(a) (the Online Copyright Infringement Liability Limitation Act, or OCILLA), automated service providers that act as conduits for digital communications receive statutory safe harbor immunity from copyright infringement damages.
            </p>
            <p>
              QukTik operates strictly as a <strong>transitory, stateless communication conduit</strong>. Our technical architecture is engineered around the following irreversible operational principles:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>Zero Server Storage &amp; No Media Archives</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  QukTik does not host, store, replicate, or archive any audio, video, photo, or media files on its servers or internal databases. No digital copies exist before, during, or after a parsing request is processed.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>Real-Time Stream Forwarding</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  When a user inputs a URL, our reverse-proxy infrastructure inspects the publicly available manifest headers published by ByteDance&apos;s Content Delivery Network (CDN) and immediately forwards the clean stream directly to the user&apos;s browser client.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>No Re-Encoding or Manipulation</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our servers do not alter, transcode, strip DRM, or modify the underlying bitstream. The video or audio delivered is the exact raw public artifact maintained by the origin host.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>Automated, Unbiased Transmission</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The entire parsing process is executed automatically by programmatic routines initiated solely by the end user. No human operator at QukTik selects, screens, reviews, or curates the content requested.
                </p>
              </div>
            </div>
            <p className="text-slate-600">
              Because QukTik does not maintain intermediate or permanent copies of any media, any copyright claim regarding the hosting or existence of the material should properly be directed to the origin hosting provider (ByteDance Ltd.) or the individual account holder who published the video.
            </p>
          </section>

          {/* Section 2: Fair Use Doctrine & Transformative Purposes */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                2. Fair Use Principles &amp; Legitimate Archival Purpose
              </h2>
            </div>
            <p>
              Under Section 107 of the United States Copyright Act (17 U.S.C. § 107) and analogous fair dealing provisions in international jurisdictions, the reproduction of copyrighted material for purposes such as criticism, commentary, news reporting, teaching, scholarship, or academic research is recognized as legally protected <strong>Fair Use</strong>.
            </p>
            <p>
              QukTik provides technical software utilities designed to facilitate legitimate, non-infringing use cases, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2 text-xs sm:text-sm">
              <li><strong>Creator Content Archiving:</strong> Enabling content creators to download master, uncompressed backups of their own original broadcasts, skits, and educational videos for preservation, multi-platform syndication, or off-site portfolio backups.</li>
              <li><strong>Academic &amp; Cultural Research:</strong> Providing digital sociologists, ethnographers, and media studies scholars with the means to archive ephemeral viral artifacts for cultural analysis and linguistic research before algorithmic deletion.</li>
              <li><strong>Offline Personal Study:</strong> Permitting individual users to view informative tutorials, fitness workouts, culinary recipes, and language guides offline while traveling in areas without stable broadband connectivity.</li>
              <li><strong>Fair Use Commentary &amp; News Reporting:</strong> Allowing digital journalists and satirists to reference specific short-form media snippets in transformative editorial critiques, reaction commentaries, and educational essays.</li>
            </ul>
            <p className="text-slate-600">
              Users of QukTik are solely responsible for evaluating whether their specific use of downloaded content constitutes legally recognized Fair Use under their domestic jurisdiction. QukTik does not grant, transfer, or license any copyright or intellectual property rights to the content processed through its software.
            </p>
          </section>

          {/* Section 3: Statutory DMCA Takedown Procedure (17 U.S.C. § 512(c)) */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                3. Mandatory DMCA Notice Requirements (17 U.S.C. § 512(c)(3))
              </h2>
            </div>
            <p>
              If you are a copyright owner, an exclusive licensee, or an authorized legal agent thereof, and you believe that content processed through QukTik infringes upon your copyrighted works, you may submit a formal notification pursuant to the Digital Millennium Copyright Act. Although QukTik does not host files, we maintain an automated URL blacklisting mechanism that prevents our parsers from retrieving specified media IDs.
            </p>
            <p>
              To be legally effective under 17 U.S.C. § 512(c)(3), your written notification must be transmitted to our Designated DMCA Agent and must contain all of the following six statutory elements:
            </p>
            
            <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 font-black flex items-center justify-center shrink-0 text-xs">1</span>
                <div>
                  <strong>Physical or Electronic Signature:</strong> A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 font-black flex items-center justify-center shrink-0 text-xs">2</span>
                <div>
                  <strong>Identification of Copyrighted Work:</strong> Identification of the copyrighted work claimed to have been infringed, or, if multiple works at a single site are covered by a single notification, a representative list of such works (including proof of copyright registration or authoritative ownership verification).
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 font-black flex items-center justify-center shrink-0 text-xs">3</span>
                <div>
                  <strong>Identification of the Infringing Material:</strong> Identification of the specific material that is claimed to be infringing or to be the subject of infringing activity, and that is to be removed or access to which is to be disabled, including the exact URL(s) on TikTok and QukTik.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 font-black flex items-center justify-center shrink-0 text-xs">4</span>
                <div>
                  <strong>Complainant Contact Information:</strong> Information reasonably sufficient to permit the service provider to contact the complaining party, such as an official physical legal address, direct telephone number, and official corporate email address.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 font-black flex items-center justify-center shrink-0 text-xs">5</span>
                <div>
                  <strong>Good Faith Belief Statement:</strong> A formal statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 font-black flex items-center justify-center shrink-0 text-xs">6</span>
                <div>
                  <strong>Perjury Penalty Statement:</strong> A formal statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 space-y-1">
              <p className="font-bold">Important Notice Regarding False Statements (17 U.S.C. § 512(f)):</p>
              <p>
                Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing may be subject to severe liability for statutory damages, court costs, and attorneys&apos; fees incurred by the alleged infringer, copyright owner, or service provider.
              </p>
            </div>
          </section>

          {/* Section 4: Counter-Notification Procedure (17 U.S.C. § 512(g)) */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                4. Statutory Counter-Notification &amp; Restoration Procedure (17 U.S.C. § 512(g))
              </h2>
            </div>
            <p>
              If a user believes that a URL or media item was blocked as a result of a mistake or misidentification (e.g., the content is authorized under Fair Use, or the submitter is the original copyright holder), the affected user may submit a formal Counter-Notification to our Designated Agent.
            </p>
            <p>
              Pursuant to 17 U.S.C. § 512(g)(3), a valid Counter-Notification must be a written communication that includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2 text-xs sm:text-sm">
              <li>A physical or electronic signature of the subscriber.</li>
              <li>Identification of the material that was removed or to which access was disabled and the location at which the material appeared before it was removed.</li>
              <li>A statement under penalty of perjury that the subscriber has a good faith belief that the material was removed or disabled as a result of mistake or misidentification.</li>
              <li>The subscriber&apos;s name, address, telephone number, and a statement that the subscriber consents to the jurisdiction of the Federal District Court for the judicial district in which the address is located, or if the address is outside the United States, for any judicial district in which the service provider may be found, and that the subscriber will accept service of process from the person who provided the original notification.</li>
            </ul>
            <p className="text-slate-600">
              Upon receipt of a valid Counter-Notification, QukTik will promptly forward a copy to the original complaining party. Unless the copyright owner files an action seeking a court order within ten to fourteen (10–14) business days, QukTik may restore parsing capability for the disputed URL.
            </p>
          </section>

          {/* Section 5: Repeat Infringer Policy (17 U.S.C. § 512(i)) */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                5. Repeat Infringer Policy (17 U.S.C. § 512(i)(1)(A))
              </h2>
            </div>
            <p>
              In accordance with Section 512(i)(1)(A) of the DMCA, QukTik maintains and reasonably implements a policy that provides for the termination in appropriate circumstances of subscribers and account holders of the service provider&apos;s system or network who are repeat infringers.
            </p>
            <p>
              Because QukTik is a public, registration-free service that does not maintain user accounts, passwords, or customer memberships, enforcement of our repeat infringer policy is conducted via:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Permanent URL &amp; Profile Blacklisting</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Upon receipt of valid, repeated infringement notices regarding specific creator handles or video collections, QukTik permanently adds those accounts and domain paths to our global blacklist database, blocking all future parsing attempts.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Subnet &amp; IP Access Blocking</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Network IP ranges and subnets identified as repeatedly submitting automated batch scraping scripts or processing copyrighted commercial film releases are blocked from accessing our edge proxies.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: User Warranties, Indemnity & Commercial Prohibition */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                6. User Warranties, Non-Commercial Restrictions &amp; Indemnity
              </h2>
            </div>
            <p>
              By accessing and utilizing QukTik&apos;s tools (including our <Link href="/tiktok-video-downloader" className="text-rose-700 font-semibold hover:underline">TikTok Video Downloader</Link>, <Link href="/tiktok-mp3" className="text-rose-700 font-semibold hover:underline">TikTok MP3 Audio Converter</Link>, <Link href="/tiktok-photo" className="text-rose-700 font-semibold hover:underline">Photo Slideshow Downloader</Link>, and <Link href="/douyin-downloader" className="text-rose-700 font-semibold hover:underline">Douyin Downloader</Link>), you expressly represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2 text-xs sm:text-sm">
              <li>You will use downloaded content exclusively for personal, private, non-commercial offline archiving, scholarly commentary, or educational study.</li>
              <li>You will not republish, broadcast, sell, license, or monetize downloaded media without explicit, written permission from the copyright owner.</li>
              <li>You will not utilize QukTik to infringe upon the trademark, trade secret, privacy, or intellectual property rights of any individual or entity.</li>
              <li>You agree to defend, indemnify, and hold harmless QukTik, its operators, contributors, affiliates, and hosting providers against any and all claims, damages, liabilities, costs, or expenses (including reasonable attorneys&apos; fees) arising from your breach of these warranties or unauthorized exploitation of downloaded media.</li>
            </ul>
          </section>

          {/* Section 7: International Treaties & Jurisdiction */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Globe2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                7. International Copyright Treaties &amp; Global Compliance
              </h2>
            </div>
            <p>
              QukTik complies with international intellectual property treaties, including the Berne Convention for the Protection of Literary and Artistic Works, the World Intellectual Property Organization (WIPO) Copyright Treaty, and Directive (EU) 2019/790 of the European Parliament on copyright in the Digital Single Market.
            </p>
            <p className="text-slate-600">
              International copyright holders outside the United States may submit notices complying with either the DMCA format described above or applicable local legislation (such as European Union eCommerce Directive 2000/31/EC Notice-and-Takedown protocols). All valid notices will be processed with equal priority by our compliance team.
            </p>
          </section>

          {/* Section 8: Designated DMCA Agent Contact Box */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-md space-y-4 border border-slate-800">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-rose-500" />
              <span>Designated DMCA Compliance Agent</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              To submit a formal notice of claimed copyright infringement or counter-notification, transmit your written documentation to our designated compliance desk:
            </p>
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm space-y-1.5 text-slate-300">
              <p><strong className="text-white">Designated Agent:</strong> QukTik Legal &amp; Copyright Compliance Team</p>
              <p><strong className="text-white">Official Notice Email:</strong> <a href="mailto:dmca@quktik.com" className="text-rose-400 font-bold hover:underline">dmca@quktik.com</a></p>
              <p><strong className="text-white">Online Portal:</strong> <Link href="/contact" className="text-rose-400 font-bold hover:underline">https://www.quktik.com/contact</Link></p>
              <p><strong className="text-white">Standard Notice Processing SLA:</strong> Within 24 to 48 business hours</p>
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              Please note: Inquiries unrelated to copyright claims or DMCA safe harbor matters will not receive a reply through the DMCA inbox. For general support, bug reports, and feedback, please use <a href="mailto:support@quktik.com" className="text-slate-300 underline">support@quktik.com</a>.
            </p>
          </section>

          {/* Internal Cross-Navigation Links */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4 text-xs">
            <Link href="/terms-of-service" className="text-slate-500 hover:text-slate-900 font-semibold underline">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-900 font-semibold underline">
              Privacy Policy
            </Link>
            <Link href="/about" className="text-slate-500 hover:text-slate-900 font-semibold underline">
              About QukTik Architecture
            </Link>
            <Link href="/contact" className="text-slate-500 hover:text-slate-900 font-semibold underline">
              Support Center
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
