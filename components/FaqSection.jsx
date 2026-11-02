'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const DEFAULT_FAQS = [
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
    a: 'No mobile applications or browser extensions are required. QukTik functions entirely within your standard browser (Safari, Chrome, Firefox, Edge, Samsung Internet, Brave). This keeps your phone or computer completely safe from unwanted software and bloated apps.',
  },
  {
    q: 'Does downloading alert the creator that I saved their video?',
    a: 'No. TikTok does not notify creators or accounts when their public video is downloaded through an external browser utility. All downloads are processed privately in your browser without requiring a login.',
  },
  {
    q: 'Is QukTik completely free with no download limits?',
    a: 'Yes, QukTik is 100% free with unlimited daily downloads. There is no subscription, paywall, or credit system. You can archive as many videos, audio tracks, and photo carousels as you need.',
  },
];

export default function FaqSection({
  faqs,
  title,
  badge,
  subtitle,
  langCode = 'en',
  id = 'faq',
  initialOpen = 0,
}) {
  const [openIndex, setOpenIndex] = useState(initialOpen);

  const items = Array.isArray(faqs) && faqs.length > 0 ? faqs : DEFAULT_FAQS;
  const count = items.length;

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const badgeText = badge || `${count} FAQs • QukTik`;
  const headingText = title || 'Frequently Asked Questions';
  const displayHeading = headingText.includes('(') ? headingText : `${headingText} (${count})`;
  const subtitleText = subtitle || 'Everything you need to know about downloading videos, audio, and photos with QukTik.';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items
      .map((item) => ({
        '@type': 'Question',
        name: String(item.q || item.question || '').replace(/<[^>]*>/g, '').trim(),
        acceptedAnswer: {
          '@type': 'Answer',
          text: String(item.a || item.answer || '').replace(/<[^>]*>/g, '').trim(),
        },
      }))
      .filter((q) => q.name && q.acceptedAnswer.text),
  };

  return (
    <section id={id} className="py-14 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6">
      {/* FAQPage Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
          <span>{badgeText}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {displayHeading}
        </h2>
        {subtitleText && (
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {subtitleText}
          </p>
        )}
      </div>

      <div className="space-y-3">
        {items.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border bg-white overflow-hidden shadow-2xs transition-all duration-200 ${
                isOpen
                  ? 'border-rose-200 ring-2 ring-rose-500/10 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left rtl:text-right text-sm sm:text-base font-bold text-slate-900 hover:text-rose-600 transition-colors cursor-pointer gap-3 focus:outline-none"
              >
                <span className="flex items-start gap-2.5">
                  <span className="text-rose-600 font-extrabold shrink-0">{idx + 1}.</span>
                  <span className="leading-snug">{faq.q || faq.question}</span>
                </span>
                <ChevronDown
                  className={`w-4 sm:w-5 h-4 sm:h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-rose-600' : ''
                  }`}
                />
              </button>
              <div
                className={`px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 transition-all ${
                  isOpen ? 'block' : 'hidden'
                }`}
              >
                <div className="pl-6 sm:pl-7 rtl:pl-0 rtl:pr-6 sm:rtl:pr-7">
                  {faq.a || faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
