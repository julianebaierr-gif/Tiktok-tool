import React from 'react';

export const metadata = {
  title: 'Terms of Service | TikFlow',
  description: 'TikFlow Terms of Service governing the use of our online media downloader, intellectual property guidelines, and fair-use limitations.',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-slate-300 leading-relaxed text-sm sm:text-base">
      
      <div className="border-b border-slate-800 pb-8 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          User Agreement
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
          Terms of Service
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          Last Updated & Effective: {lastUpdated}
        </p>
      </div>

      <div className="space-y-8">
        
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the TikFlow website (the &quot;Service&quot;), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue your use of the Service immediately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">2. Scope & Permitted Use</h2>
          <p>
            TikFlow is provided solely as a technical convenience tool for personal, non-commercial, and fair-use educational archiving. You agree to use the Service in compliance with all applicable local, national, and international laws, regulations, and third-party platform terms.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-400 pl-2">
            <li>You may only download content for which you possess proper intellectual property authorization or legitimate fair-use privilege (e.g., personal offline backups of your own uploaded videos).</li>
            <li>You agree not to monetize, sell, distribute, or broadcast downloaded third-party media files without explicit written consent from the copyright holder.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">3. Intellectual Property Rights</h2>
          <p>
            TikFlow does not claim any ownership, title, or interest in any video, audio, image, or text processed through the Service. All trademarks, copyrights, and intellectual property associated with TikTok, Musical.ly, and ByteDance Ltd. belong exclusively to their respective owners.
          </p>
          <p>
            The software, layout, design, trademarks, code, and graphical assets of the TikFlow website remain the exclusive intellectual property of TikFlow.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">4. Prohibited Activities</h2>
          <p>You agree not to engage in any of the following prohibited behaviors:</p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-400 pl-2">
            <li>Employing automated bots, spiders, or scrapers to perform denial-of-service (DDoS) or high-volume scraping attacks on our servers.</li>
            <li>Attempting to bypass security, rate-limiting, or firewall protections.</li>
            <li>Using the Service to infringe upon the intellectual property, privacy, or publicity rights of any third party.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">5. Disclaimer of Warranties & Limitation of Liability</h2>
          <p>
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            In no event shall TikFlow, its operators, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to, use of, or inability to use the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">6. Modifications to Terms</h2>
          <p>
            TikFlow reserves the right to amend these Terms of Service at any time without prior notice. Continued use of the website following any modifications constitutes your formal acceptance of the updated terms.
          </p>
        </section>

      </div>
    </div>
  );
}
