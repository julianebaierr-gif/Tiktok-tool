import React from 'react';

export const metadata = {
  title: 'Terms of Service',
  description: 'QukTik Terms of Service governing the use of our online media downloader, intellectual property guidelines, and fair-use limitations.',
  alternates: {
    canonical: 'https://quktik.com/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service',
    description: 'QukTik Terms of Service governing the use of our online media downloader.',
    url: 'https://quktik.com/terms-of-service',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-slate-700 leading-relaxed text-sm sm:text-base">
      
      <div className="border-b border-slate-200 pb-8 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
          User Agreement
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4">
          Terms of Service
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-500">
          Last Updated &amp; Effective: {lastUpdated}
        </p>
      </div>

      <div className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
        
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By visiting or using QukTik (the &quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue using the website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">2. Permitted Fair-Use Purpose</h2>
          <p>
            QukTik is provided as a technical web utility for personal offline archiving, research, and creators backing up their own original content. You agree to use the service in compliance with all copyright laws and platform terms.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-600 pl-2">
            <li>You should only download files for personal, non-commercial use, or content for which you hold copyright permission.</li>
            <li>You agree not to sell, monetize, or publicly broadcast someone else&apos;s creative content without the creator&apos;s explicit consent.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">3. Intellectual Property</h2>
          <p>
            QukTik does not claim ownership of any videos, audios, or photos processed through the tool. All copyrights and trademarks belong exclusively to their respective creators and ByteDance Ltd.
          </p>
          <p>
            The software, design, branding, and code of the QukTik website belong to QukTik.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">4. Misuse of the Service</h2>
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-600 pl-2">
            <li>Launch automated bots or scripts aimed at overwhelming our servers.</li>
            <li>Attempt to bypass rate limits or compromise server stability.</li>
            <li>Use the tool to violate the privacy or rights of any individual.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">5. Disclaimer</h2>
          <p>
            QukTik is provided on an &quot;as is&quot; basis without warranties of any kind. We do not guarantee uninterrupted availability and are not liable for any third-party misuse of downloaded media.
          </p>
        </section>

      </div>
    </div>
  );
}
