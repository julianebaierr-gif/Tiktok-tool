import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://quktik.com'),
  title: {
    default: 'QukTik - Download TikTok Videos (No Watermark)',
    template: '%s | QukTik'
  },
  description: 'Download TikTok and Douyin videos without watermark in HD MP4 or MP3 audio. 100% free online tool with no app or sign-up needed.',
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
    url: 'https://quktik.com',
    siteName: 'QukTik',
    title: 'QukTik - TikTok & Douyin Video Downloader',
    description: 'Clean, fast online tool to download TikTok and Douyin videos without watermark in HD MP4 quality and extract MP3 audio. 100% free with no registration required.',
    images: [
      {
        url: 'https://quktik.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QukTik - TikTok & Douyin Video Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QukTik - TikTok & Douyin Video Downloader',
    description: 'Save TikTok and Douyin videos without watermark in HD MP4 and MP3 audio instantly.',
    images: ['https://quktik.com/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-quktik',
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
        
        {/* Google Search Console HTML Verification Tag */}
        <meta name="google-site-verification" content="google-site-verification-quktik" />
        <meta name="theme-color" content="#0F172A" />
      </head>
      <body className="bg-[#fcfcfd] text-slate-900 flex flex-col min-h-screen antialiased selection:bg-rose-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
