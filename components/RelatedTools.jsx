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
    color: 'from-rose-500 to-pink-600',
    lightColor: 'text-rose-600 bg-rose-50 border-rose-200'
  },
  {
    slug: '/tiktok-mp3',
    title: 'TikTok to MP3 Converter',
    badge: '320kbps Audio',
    description: 'Extract crystal-clear studio audio, viral sound hooks, and background music instantly.',
    icon: Music,
    color: 'from-amber-500 to-orange-600',
    lightColor: 'text-amber-600 bg-amber-50 border-amber-200'
  },
  {
    slug: '/tiktok-photo',
    title: 'TikTok Photo Downloader',
    badge: 'HD Carousels',
    description: 'Download multi-slide photo carousels and slideshow pictures in original JPG resolution.',
    icon: ImageIcon,
    color: 'from-blue-500 to-cyan-600',
    lightColor: 'text-blue-600 bg-blue-50 border-blue-200'
  },
  {
    slug: '/tiktok-story',
    title: 'TikTok Story Saver',
    badge: '100% Anonymous',
    description: 'Archive 24-hour disappearing TikTok stories before they vanish without creator notification.',
    icon: History,
    color: 'from-purple-500 to-indigo-600',
    lightColor: 'text-purple-600 bg-purple-50 border-purple-200'
  },
  {
    slug: '/douyin-downloader',
    title: 'Douyin Video Downloader',
    badge: '抖音无水印',
    description: 'Download videos and audios from Chinese Douyin with automatic Chinese text URL parsing.',
    icon: Globe2,
    color: 'from-emerald-500 to-teal-600',
    lightColor: 'text-emerald-600 bg-emerald-50 border-emerald-200'
  },
  {
    slug: '/tiktok-ringtone',
    title: 'TikTok Ringtone Maker',
    badge: 'Phone Tones',
    description: 'Convert trending TikTok soundbites into customized ringtones and morning alarms.',
    icon: BellRing,
    color: 'from-pink-500 to-rose-600',
    lightColor: 'text-pink-600 bg-pink-50 border-pink-200'
  },
  {
    slug: '/tiktok-avatar',
    title: 'TikTok Avatar Downloader',
    badge: 'Full-Res PFP',
    description: 'Uncrop and download full-resolution profile pictures and creator avatars in HD.',
    icon: UserCircle,
    color: 'from-indigo-500 to-violet-600',
    lightColor: 'text-indigo-600 bg-indigo-50 border-indigo-200'
  }
];

export default function RelatedTools({ currentSlug = '' }) {
  const filteredTools = ALL_TOOLS.filter((t) => t.slug !== currentSlug);

  return (
    <section className="py-16 bg-slate-50/70 border-t border-b border-slate-200/80 my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-xs font-bold text-rose-600 border border-rose-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete TikTok Suite</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Explore More Free TikTok &amp; Douyin Tools
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Switch seamlessly between our high-speed media processing tools. All tools are 100% free with no watermark.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={tool.slug}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${tool.lightColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-rose-600 group-hover:gap-2.5 transition-all">
                  <span>Open Tool</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
