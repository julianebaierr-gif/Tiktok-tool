import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import React from 'react';

export const metadata = {
  title: 'Privacy Policy',
  description: 'QukTik Privacy Policy detailing our cookie policy, log files, user privacy rights under GDPR and CCPA, and data protection practices.',
  alternates: {
    canonical: 'https://quktik.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy',
    description: 'QukTik Privacy Policy detailing our cookie policy and user privacy rights under GDPR and CCPA.',
    url: 'https://quktik.com/privacy-policy',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-slate-700 leading-relaxed text-sm sm:text-base">
      <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />
      
      <div className="border-b border-slate-200 pb-8 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200">
          Privacy &amp; Data
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-500">
          Last Updated &amp; Reviewed: {lastUpdated}
        </p>
      </div>

      <div className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
        
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">1. Introduction</h2>
          <p>
            At <strong>QukTik</strong> (accessible at <Link href="/" className="text-rose-700 font-semibold hover:underline">https://quktik.com</Link>), your privacy is one of our top priorities. Whether using our <Link href="/tiktok-video-downloader" className="text-rose-700 font-semibold hover:underline">video downloader</Link> or <Link href="/tiktok-mp3" className="text-rose-700 font-semibold hover:underline">MP3 converter</Link>, we collect minimal data. This Privacy Policy explains what information we receive when you visit our website and how it is handled.
          </p>
          <p>
            If you have questions about this policy, feel free to reach out to us at <a href="mailto:privacy@quktik.com" className="text-rose-700 underline">privacy@quktik.com</a>, visit our <Link href="/contact" className="text-rose-700 font-semibold hover:underline">Contact Page</Link>, or read our <Link href="/terms-of-service" className="text-rose-700 font-semibold hover:underline">Terms of Service</Link> and <Link href="/disclaimer" className="text-rose-700 font-semibold hover:underline">DMCA Policy</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">2. No Personal Video Storage</h2>
          <p>
            QukTik does not require user accounts, passwords, email addresses, or payment cards. When you paste a TikTok link, our system retrieves the public file directly from the content delivery network and delivers it to your browser. We do not store, archive, or keep copies of the media files on our web servers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">3. Google AdSense &amp; Advertising Cookies</h2>
          <p>
            Google is a third-party vendor on our website. Google uses cookies (including DART cookies) to serve relevant advertisements to visitors based on visits to this and other websites across the web.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2">
            <li>Third-party advertising partners, including Google, use cookies to display ads tailored to your browsing interests.</li>
            <li>You can opt out of personalized Google advertising at any time by visiting the official <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer" className="text-rose-700 underline">Google Ads Settings</a>.</li>
            <li>You can also opt out of broader third-party cookie advertising networks by visiting <a href="https://www.aboutads.info" target="_blank" rel="noreferrer" className="text-rose-700 underline">www.aboutads.info</a>.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">4. Server Log Files</h2>
          <p>
            Like almost all websites, QukTik collects standard, anonymous server log files. This data includes IP addresses, browser types, Internet Service Providers (ISPs), date and time stamps, and referring/exit pages. None of this information is linked to personally identifiable details. It is used strictly for server health, preventing abuse, and ensuring website uptime.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">5. GDPR Rights (For European Visitors)</h2>
          <p>
            If you reside within the European Economic Area (EEA), you have data protection rights including the right to access, rectify, or request deletion of any personal data we hold. Since we do not collect personal accounts, we store no identifiable profiles.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">6. CCPA Rights (California Residents)</h2>
          <p>
            Under the California Consumer Privacy Act, consumers have the right to request disclosure or deletion of personal information. <strong>QukTik does not sell personal user information under any circumstances.</strong>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">7. Children&apos;s Privacy (COPPA)</h2>
          <p>
            QukTik does not knowingly collect personal information from children under 13. If you believe your child submitted personal information, please contact us immediately, and we will remove it from our server logs.
          </p>
        </section>

      </div>
    </div>
  );
}
