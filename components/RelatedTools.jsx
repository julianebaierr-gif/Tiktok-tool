import React from 'react';
import Link from 'next/link';
import { 
  Video, 
  Music, 
  Image as ImageIcon, 
  History, 
  Globe2, 
  BellRing, 
  UserCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const ALL_TOOLS = [
  {
    slug: '/tiktok-video-downloader',
    title: 'TikTok Video Downloader',
    badge: '1080p MP4',
    description: 'Save original high-definition videos with no watermark, logos, or author tags.',
    icon: Video,
  },
  {
    slug: '/tiktok-mp3',
    title: 'TikTok to MP3 Converter',
    badge: '320kbps Audio',
    description: 'Extract crystal-clear studio audio, viral sound hooks, and background music instantly.',
    icon: Music,
  },
  {
    slug: '/tiktok-photo',
    title: 'TikTok Photo Downloader',
    badge: 'HD Carousels',
    description: 'Download multi-slide photo carousels and slideshow pictures in original JPG resolution.',
    icon: ImageIcon,
  },
  {
    slug: '/tiktok-story',
    title: 'TikTok Story Saver',
    badge: 'No Login Needed',
    description: 'Archive 24-hour disappearing public TikTok stories in HD before they expire.',
    icon: History,
  },
  {
    slug: '/douyin-downloader',
    title: 'Douyin Video Downloader',
    badge: 'Douyin (抖音)',
    description: 'Download videos and audios from Chinese Douyin with automatic Chinese text URL parsing.',
    icon: Globe2,
  },
  {
    slug: '/tiktok-ringtone',
    title: 'TikTok Ringtone Maker',
    badge: 'M4R & MP3',
    description: 'Create custom ringtones and text alerts from TikTok audio for iPhone and Android.',
    icon: BellRing,
  },
  {
    slug: '/tiktok-avatar',
    title: 'TikTok Avatar / PFP HD',
    badge: 'Full Resolution',
    description: 'View and download full-resolution TikTok profile pictures and avatars in uncropped HD.',
    icon: UserCircle,
  }
];

export default function RelatedTools({ currentSlug }) {
  // Exclude current tool
  const filteredTools = ALL_TOOLS.filter(t => t.slug !== currentSlug);

  return (
    <section className="py-14 sm:py-18 bg-slate-50/70 border-t border-b border-slate-200/80 my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            More Utilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            Explore More TikTok &amp; Douyin Tools
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Switch smoothly between our high-speed media processing tools. All tools are 100% free with no watermarks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={tool.slug}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-800">
                      <Icon className="w-5 h-5 text-rose-600" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/80">
                      {tool.badge}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {tool.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 group-hover:underline">
                  <span>Open Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
