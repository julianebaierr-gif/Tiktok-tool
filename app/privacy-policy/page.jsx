import React from 'react';

export const metadata = {
  title: 'Privacy Policy | TikFlow (AdSense, GDPR & CCPA Compliant)',
  description: 'TikFlow Privacy Policy detailing our cookie policy, Google AdSense disclosures, log files, user privacy rights under GDPR and CCPA.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-slate-300 leading-relaxed text-sm sm:text-base">
      
      <div className="border-b border-slate-800 pb-8 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
          Legal Documentation
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          Last Updated & Reviewed: {lastUpdated}
        </p>
      </div>

      <div className="space-y-8">
        
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">1. Introduction</h2>
          <p>
            At <strong>TikFlow</strong> (accessible at <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded text-xs">https://tikflow-downloader.vercel.app</code>), the privacy of our visitors is one of our extreme priorities. This Privacy Policy document contains comprehensive information regarding the types of information collected and recorded by TikFlow and how we utilize it.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact our Data Protection Officer at <a href="mailto:privacy@tikflow.app" className="text-cyan-400 underline">privacy@tikflow.app</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">2. No Personal Data Retention for Downloads</h2>
          <p>
            TikFlow operates as a stateless web proxy. When you submit a TikTok URL into our search bar, we do not require account registration, full names, physical addresses, or payment card credentials. The media files retrieved are transferred directly between TikTok content delivery network nodes and your web browser; TikFlow does not store, archive, or replicate the downloaded video or audio files on our servers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">3. Google AdSense & Third-Party Advertising Cookies</h2>
          <p>
            Google is a third-party vendor on our site. Google uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our website and other websites across the Internet.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-400 pl-2">
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites.
            </li>
            <li>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to our sites and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer" className="text-cyan-400 underline">
                Google Ads Settings
              </a>. Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{' '}
              <a href="https://www.aboutads.info" target="_blank" rel="noreferrer" className="text-cyan-400 underline">
                www.aboutads.info
              </a>.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">4. Log Files</h2>
          <p>
            TikFlow follows a standard procedure of utilizing log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of this information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering broad demographic information for server stability and DDoS prevention.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">5. GDPR Privacy Rights (Data Protection Rights)</h2>
          <p>
            Under the European General Data Protection Regulation (GDPR), every user within the European Economic Area (EEA) is entitled to the following rights:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-400 pl-2">
            <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
            <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
            <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
            <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
            <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">6. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA), California consumers have the right to:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-400 pl-2">
            <li>Request that a business disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
            <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
            <li>Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data. <strong>TikFlow does not sell personal user data.</strong></li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">7. Children&apos;s Information (COPPA Compliance)</h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. TikFlow does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe that your child provided this kind of information on our website, we strongly encourage you to contact us immediately, and we will promptly remove such information from our server logs.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white">8. Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </section>

      </div>
    </div>
  );
}
