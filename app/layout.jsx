import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PwaManager from '../components/PwaManager';

export const metadata = {
  metadataBase: new URL('https://www.quktik.com'),
  title: {
    default: 'Download TikTok Video No Watermark | QukTik',
    template: '%s | QukTik'
  },
  description: 'Download TikTok videos without watermark in HD MP4 or MP3. Free online TikTok downloader for mobile and PC with no app needed.',
  keywords: [
    'download tiktok video',
    'tiktok without watermark',
    'tiktok video downloader',
    'tiktok to mp3',
    'save tiktok video',
    'tiktok photo downloader',
    'download tiktok hd',
    'snaptik alternative',
    'tiktokio alternative',
    'fasttik alternative',
    'ssstik alternative',
    'tikflow alternative'
  ],
  creator: 'QukTik',
  publisher: 'QukTik',
  alternates: {
    canonical: 'https://www.quktik.com',
    languages: {
      'x-default': 'https://www.quktik.com',
      'en': 'https://www.quktik.com',
      'es': 'https://www.quktik.com/es',
      'pt': 'https://www.quktik.com/pt',
      'id': 'https://www.quktik.com/id',
      'fr': 'https://www.quktik.com/fr',
      'ar': 'https://www.quktik.com/ar',
      'de': 'https://www.quktik.com/de',
      'vi': 'https://www.quktik.com/vi',
      'tr': 'https://www.quktik.com/tr',
      'it': 'https://www.quktik.com/it',
      'ru': 'https://www.quktik.com/ru',
      'ja': 'https://www.quktik.com/ja',
    },
    types: {
      'application/rss+xml': 'https://www.quktik.com/feed.xml',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.quktik.com',
    siteName: 'QukTik',
    title: 'Download TikTok Video No Watermark | QukTik',
    description: 'Download TikTok videos without watermark in HD MP4 or MP3. Free online TikTok downloader for mobile and PC with no app needed.',
    images: [
      {
        url: 'https://www.quktik.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QukTik - TikTok & Douyin Video Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download TikTok Video No Watermark | QukTik',
    description: 'Download TikTok videos without watermark in HD MP4 or MP3. Free online TikTok downloader for mobile and PC with no app needed.',
    images: ['https://www.quktik.com/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-quktik',
    other: {
      'ahrefs-site-verification': '6280d6ffc889f33450faf4b4e2b42b8f54cb5c65bc96be932da9f4d0d51726d4',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Favicon Guidelines (Multiples of 48px square) */}
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* RSS 2.0 & Atom Feed Auto-Discovery for Googlebot & Aggregators */}
        <link rel="alternate" type="application/rss+xml" title="QukTik RSS Feed" href="https://www.quktik.com/feed.xml" />
        <link rel="alternate" type="application/atom+xml" title="QukTik Atom Feed" href="https://www.quktik.com/feed.xml" />

        {/* Google Search Console HTML Verification Tag */}
        <meta name="google-site-verification" content="google-site-verification-quktik" />

        {/* Ahrefs Webmaster Tools Verification */}
        <meta name="ahrefs-site-verification" content="6280d6ffc889f33450faf4b4e2b42b8f54cb5c65bc96be932da9f4d0d51726d4" />

        {/* Ahrefs Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="NIXg5dEvOn43YTeKNu6i8A"
          async
        ></script>

        <meta name="theme-color" content="#0F172A" />
      </head>
      <body className="bg-[#fcfcfd] text-slate-900 flex flex-col min-h-screen antialiased selection:bg-rose-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <PwaManager />
      </body>
    </html>
  );
}
