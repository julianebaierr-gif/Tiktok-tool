'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Is TikFlow free, and is there any limit on how many videos I can download?',
      a: 'Yes, TikFlow is completely free with no daily or monthly limits. You do not need an account, credit card, or subscription. You can save as many videos and songs as you like.',
    },
    {
      q: 'How does TikFlow remove the watermark without making the video blurry?',
      a: 'Traditional apps try to blur or crop out the bouncing logo, which damages video quality. TikFlow does not do that. When someone uploads a video, TikTok generates an untouched original video before putting their animated watermark over it. We simply fetch that untouched original file directly from the content delivery network, keeping the original 1080p sharpness.',
    },
    {
      q: 'Where do downloaded videos go on my phone or computer?',
      a: 'On Windows and Mac, files save directly to your computer\'s "Downloads" folder. On Android phones, you will find files in your Downloads folder, Files app, or Gallery. On iPhone and iPad, Safari saves files to Safari Downloads, where you can tap "Save Video" to send it right into your Photos Camera Roll.',
    },
    {
      q: 'Can I download only the background song or audio from a video?',
      a: 'Yes. Every video link you enter gives you a pink "Download MP3 Audio" button. This extracts just the soundtrack in high-quality 320kbps MP3 format, ideal for music playlists, video editing, or custom phone ringtones.',
    },
    {
      q: 'Can I download TikTok photo slideshows and carousels?',
      a: 'Yes! When you paste a link to a TikTok photo dump or image carousel, TikFlow automatically shows each individual photo in high-definition JPG format so you can save them all to your gallery.',
    },
    {
      q: 'Do I have to install any apps or browser extensions?',
      a: 'No apps are required. TikFlow runs 100% inside your standard web browser (Safari, Chrome, Firefox, Edge, Samsung Internet). This keeps your phone safe from suspicious third-party app installations.',
    },
    {
      q: 'Does TikFlow keep copies of the videos I download?',
      a: 'No. We respect your privacy. We never store, host, or keep copies of any videos on our servers. When you request a download, the file streams straight from TikTok\'s public network to your browser.',
    },
    {
      q: 'Is it safe and legal to download TikTok videos?',
      a: 'Yes. Downloading public videos for personal offline watching, educational study, or backing up your own creative uploads is standard fair use. However, you should never sell or claim ownership of other creators\' videos without their permission.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700 mb-3 border border-slate-200">
          <HelpCircle className="w-4 h-4 text-rose-500" />
          <span>Got Questions?</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Everything you need to know about downloading videos, audio, and photos with TikFlow.
        </p>
      </div>

      <div className="space-y-3.5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between text-slate-900 font-bold text-base sm:text-lg focus:outline-none"
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-rose-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
