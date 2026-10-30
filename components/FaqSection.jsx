'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How do I download TikTok videos without watermark for free?',
      a: 'Open the TikTok app or website, find your desired video, tap "Share", and choose "Copy Link". Paste the URL into the search box on QukTik above and click "Download". Once the result appears, click "Download MP4 (Without Watermark)" to save the clean video file directly to your device.',
    },
    {
      q: 'Does QukTik need my TikTok login or password?',
      a: 'No, absolutely not. QukTik never asks for your TikTok account password, username, phone number, or verification code. The entire process runs by parsing public post URLs directly. You should never enter your social media passwords on any third-party downloader website.',
    },
    {
      q: 'Where will the downloaded file be saved on iPhone, Android, or PC?',
      a: 'On Windows and Mac, files save to your default "Downloads" folder (press Ctrl+J on Windows or Cmd+Option+L on Mac to view them). On Android, files go into your "Downloads" folder, accessible in Files by Google or your Gallery app. On iPhone and iPad, Safari saves files to the Downloads section of Apple\'s "Files" app; open the video in Files, tap Share, and select "Save Video" to add it directly to your Photos Camera Roll.',
    },
    {
      q: 'Can QukTik access private videos, friends-only posts, or drafts?',
      a: 'No. QukTik operates exclusively on publicly accessible web posts. Private accounts, friends-only clips, and drafts are protected by platform privacy settings and cannot be accessed. QukTik strictly respects creator privacy preferences.',
    },
    {
      q: 'Will a downloaded video without watermark always be 1080p Full HD?',
      a: 'QukTik delivers the exact highest-resolution stream stored on TikTok\'s content delivery servers (typically 1080x1920 or 720x1280). If the creator recorded in high definition, you get full 1080p clarity with zero re-encoding loss. However, a video originally recorded in low lighting or low resolution cannot be artificially upscaled.',
    },
    {
      q: 'How do I save only the background music or audio in 320kbps MP3 format?',
      a: 'Paste your TikTok link into QukTik and, on the result card, click the green "Download MP3 Audio (320kbps)" button. This extracts the audio channel into a standalone MP3 file that you can listen to offline, import into video editing software, or set as a custom phone ringtone.',
    },
    {
      q: 'Can I download TikTok photo slideshows and image carousels?',
      a: 'Yes! When you paste a link to a TikTok photo post, QukTik automatically detects the image carousel and displays high-resolution thumbnails for every slide. You can download individual pictures in original JPG format or save the accompanying background audio.',
    },
    {
      q: 'Why did my download stop or show "Unable to retrieve media"?',
      a: 'This usually occurs for one of four reasons: (1) The video was deleted or set to private by the creator, (2) Safari popup blockers halted the download prompt (tap "Download" on the prompt), (3) Your device storage is full, or (4) The short link expired. If one server is slow, click "Server 2 (HD Mirror)" on the result card for an alternate route.',
    },
    {
      q: 'Does downloading a video remove every logo or give me commercial reuse rights?',
      a: 'QukTik removes the dynamic TikTok platform watermark and username overlay. However, any text, stickers, or creator watermarks manually edited into the footage by the author remain. Additionally, downloading does not transfer copyright; always ask for permission before using someone else\'s video in commercial or monetized projects.',
    },
    {
      q: 'Do I need to install any app or browser extension?',
      a: 'No applications, APKs, or browser extensions are required. QukTik functions entirely within your standard browser (Safari, Chrome, Firefox, Edge, Samsung Internet, Brave). This keeps your phone or computer completely safe from unwanted software and bloated apps.',
    },
    {
      q: 'Does downloading alert the creator that I saved their video?',
      a: 'No. TikTok does not notify creators or accounts when their public video is downloaded through an external browser utility. All downloads are 100% anonymous and private.',
    },
    {
      q: 'Is QukTik completely free with no download limits?',
      a: 'Yes, QukTik is 100% free with unlimited daily downloads. There is no subscription, paywall, or credit system. You can archive as many videos, audio tracks, and photo carousels as you need.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* FAQPage Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center mb-14">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          FAQ
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Everything you need to know about downloading videos, audio, and photos with QukTik.
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
                  className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-rose-600' : ''
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
