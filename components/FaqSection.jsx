'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Is TikFlow free to use, and is there any daily download limit?',
      a: 'Yes, TikFlow is 100% free to use with unlimited downloads. You do not need to register an account, purchase tokens, or enter credit card information. You can save as many videos and audio tracks as you need.',
    },
    {
      q: 'How does TikFlow download TikTok videos without any watermark?',
      a: 'When a creator uploads a video, TikTok generates two streams: a raw source stream without branding and a public stream with the animated watermark overlay. TikFlow directly connects to the raw, unbranded content delivery stream to give you the original clean video.',
    },
    {
      q: 'Where are downloaded TikTok videos stored on my device?',
      a: 'Files are saved to your device’s default download directory. On Windows and Mac, this is usually your system "Downloads" folder. On Android, files are in your Files/Downloads app or Gallery. On iOS (iPhone/iPad), files go to Safari Downloads and can be moved to the Photos app.',
    },
    {
      q: 'Can I extract and download only the MP3 sound or music?',
      a: 'Absolutely! Every TikTok post analyzed by TikFlow provides a dedicated "Download MP3 Audio" button. You can download the isolated background soundtrack at up to 320kbps bitrate for offline listening or ringtone creation.',
    },
    {
      q: 'Can I download TikTok photo slideshows and carousels?',
      a: 'Yes. When you paste a TikTok photo slideshow link, TikFlow automatically parses every individual photo in the carousel. You can preview and download each high-resolution image separately without quality loss.',
    },
    {
      q: 'Do I need to install any apps or browser extensions?',
      a: 'No installation is needed. TikFlow operates completely online within your standard web browser (Chrome, Safari, Firefox, Edge, Opera, Samsung Internet) across desktop, mobile, and tablet devices.',
    },
    {
      q: 'Does TikFlow keep copies of videos or track my downloads?',
      a: 'No. TikFlow respects user privacy. We do not store, archive, or keep copies of any videos on our servers. All media is fetched on-the-fly and streamed directly between TikTok’s CDN servers and your browser.',
    },
    {
      q: 'Is it legal to download TikTok videos for personal use?',
      a: 'Downloading public TikTok videos for personal offline watching, educational study, or backing up your own creative uploads is generally considered fair use. However, you should never redistribute, monetize, or republish other creators’ copyrighted content without their express written permission.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-cyan-400 mb-3 border border-slate-700">
          <HelpCircle className="w-4 h-4" />
          <span>Help & Support Center</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400">
          Everything you need to know about using TikFlow to save videos and audio.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-slate-900/80 border border-slate-800/80 overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between text-white font-semibold text-sm sm:text-base focus:outline-none"
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
