import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import React from 'react';
import { ShieldAlert, Mail } from 'lucide-react';

export const metadata = {
  title: 'DMCA & Copyright Disclaimer',
  description: 'QukTik DMCA Copyright Takedown Policy and Disclaimer regarding third-party platforms and content ownership.',
  alternates: {
    canonical: 'https://quktik.com/disclaimer',
  },
  openGraph: {
    title: 'DMCA & Copyright Disclaimer',
    description: 'QukTik DMCA Copyright Takedown Policy and Disclaimer.',
    url: 'https://quktik.com/disclaimer',
    type: 'website',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-slate-700 leading-relaxed text-sm sm:text-base">
      <Breadcrumbs items={[{ name: 'DMCA Disclaimer', url: '/disclaimer' }]} />
      
      <div className="border-b border-slate-200 pb-8 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
          Copyright &amp; Compliance
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4">
          DMCA Policy &amp; Disclaimer
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-500">
          QukTik respects creator intellectual property and complies with the Digital Millennium Copyright Act.
        </p>
      </div>

      <div className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
        
        {/* Trademark Disclaimer */}
        <section className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
          <h2 className="text-lg font-bold text-amber-950 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            <span>Trademark &amp; Non-Affiliation Notice</span>
          </h2>
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>QukTik is an independent web utility. QukTik is NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with TikTok, ByteDance Ltd., Musical.ly, or any of their subsidiaries.</strong>
          </p>
          <p className="text-amber-800 text-xs">
            The name &quot;TikTok&quot; and related marks are registered trademarks of ByteDance Ltd. References to TikTok are strictly nominative and for descriptive purposes.
          </p>
        </section>

        {/* Media Hosting Disclaimer */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">Zero Copyrighted Media Hosting</h2>
          <p>
            QukTik does <strong>NOT store, archive, or host</strong> any copyrighted video or audio content on its servers. When a user pastes a link, our server acts purely as a stream forwarder from public content delivery networks directly to the user&apos;s browser. Once the download finishes, zero digital copies remain on our servers.
          </p>
        </section>

        {/* DMCA Takedown Notice Procedure */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">DMCA Takedown Procedure</h2>
          <p>
            If you are a copyright holder or an authorized representative and believe that any link processed by our tool infringes on your rights, you can request an immediate block by emailing our designated agent with the following details:
          </p>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-2 text-slate-700">
            <p>1. Identification of the copyrighted work claimed to have been infringed.</p>
            <p>2. The specific TikTok URL you wish to block from being processed.</p>
            <p>3. Your contact information (name, email, and phone number).</p>
            <p>4. A statement of good-faith belief that use of the material is unauthorized.</p>
            <p>5. An electronic or physical signature of the authorized copyright owner.</p>
          </div>
        </section>

        {/* Contact Email */}
        <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Mail className="w-5 h-5 text-rose-500" />
            <span>DMCA Compliance Contact</span>
          </h3>
          <p className="text-sm text-slate-600">
            Send all takedown notices directly to: <a href="mailto:dmca@quktik.com" className="text-rose-600 underline font-bold">dmca@quktik.com</a> or submit via our online <Link href="/contact" className="text-rose-600 font-semibold hover:underline">Contact Form</Link>. See also our <Link href="/terms-of-service" className="text-rose-600 font-semibold hover:underline">Terms of Service</Link> and <Link href="/about" className="text-rose-600 font-semibold hover:underline">About QukTik</Link>.
          </p>
          <p className="text-xs text-slate-500">
            Valid takedown requests are typically handled and permanently blacklisted from our tool within 24 to 48 business hours.
          </p>
        </section>

      </div>
    </div>
  );
}
