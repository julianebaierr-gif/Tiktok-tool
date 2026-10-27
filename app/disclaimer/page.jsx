import React from 'react';
import { ShieldAlert, Mail, FileText, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'DMCA & Copyright Disclaimer | TikFlow',
  description: 'TikFlow DMCA Copyright Takedown Policy and Disclaimer regarding third-party platforms and content ownership.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-slate-300 leading-relaxed text-sm sm:text-base">
      
      <div className="border-b border-slate-800 pb-8 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
          Copyright & Compliance
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
          DMCA Policy & Disclaimer
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          TikFlow respects intellectual property rights and complies with the Digital Millennium Copyright Act (17 U.S.C. § 512).
        </p>
      </div>

      <div className="space-y-8">
        
        {/* Explicit Non-Affiliation Disclaimer */}
        <section className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <span>Trademark & Non-Affiliation Notice</span>
          </h2>
          <p className="text-slate-300 text-sm">
            <strong>TikFlow is an independent web utility and is NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with TikTok, ByteDance Ltd., Musical.ly, or any of their subsidiaries or affiliates.</strong>
          </p>
          <p className="text-slate-400 text-xs">
            The name &quot;TikTok&quot; as well as related names, marks, emblems, and images are registered trademarks of ByteDance Ltd. The use of these trademarks on our website is solely for the purpose of descriptive identification of third-party public URL structures in accordance with nominative fair use.
          </p>
        </section>

        {/* Media Hosting Disclaimer */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">No Copyrighted Media Hosting</h2>
          <p>
            TikFlow does <strong>NOT host, store, replicate, or index</strong> any copyrighted videos, audio files, or photographs on its web servers. All media streamed through this tool is fetched on-demand directly from public content delivery network (CDN) servers operated by the respective source platform.
          </p>
          <p>
            TikFlow functions strictly as a client-side parsing and stream-forwarding proxy. Once a user completes their download, no digital copy remains on our infrastructure.
          </p>
        </section>

        {/* DMCA Takedown Notice Procedure */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">DMCA Takedown Procedure</h2>
          <p>
            If you are a copyright owner or an authorized agent representing a copyright holder, and you believe that any material accessed via our web tool infringes upon your copyright, you may submit a formal notification pursuant to the Digital Millennium Copyright Act by providing our Designated Copyright Agent with the following information in writing:
          </p>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-sm space-y-2 text-slate-300">
            <p>1. A physical or electronic signature of a person authorized to act on behalf of the copyright owner.</p>
            <p>2. Identification of the copyrighted work claimed to have been infringed.</p>
            <p>3. Identification of the specific material (e.g., the exact TikTok URL) that is claimed to be infringing, with sufficient information to enable us to locate and block processing of the URL.</p>
            <p>4. Your contact information, including your full legal name, physical mailing address, telephone number, and email address.</p>
            <p>5. A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</p>
            <p>6. A statement, made under penalty of perjury, that the information in the notification is accurate, and that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</p>
          </div>
        </section>

        {/* Contact Email */}
        <section className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-cyan-400" />
            <span>Designated DMCA Agent Contact</span>
          </h3>
          <p className="text-sm text-slate-400">
            Please transmit all DMCA notifications and takedown requests directly to our compliance department:
          </p>
          <p className="text-cyan-400 font-mono text-sm">
            Email: <a href="mailto:dmca@tikflow.app" className="underline font-bold">dmca@tikflow.app</a>
          </p>
          <p className="text-xs text-slate-500">
            Upon receipt of a valid and complete notification, we will promptly investigate and take appropriate action, including permanently blacklisting the reported URL from our processing engine within 24 to 48 hours.
          </p>
        </section>

      </div>
    </div>
  );
}
