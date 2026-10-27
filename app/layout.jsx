import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://tikflow-downloader.vercel.app'),
  title: {
    default: 'TikFlow - Download TikTok Video Without Watermark in HD (Free Online)',
    template: '%s | TikFlow'
  },
  description: 'Download TikTok videos without watermark in HD MP4 quality and convert TikTok to MP3 audio online for free. Fast, secure, and works on all devices with zero limits.',
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
    'ssstik alternative'
  ],
  authors: [{ name: 'TikFlow Team' }],
  creator: 'TikFlow',
  publisher: 'TikFlow',
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
    url: 'https://tikflow-downloader.vercel.app',
    siteName: 'TikFlow',
    title: 'TikFlow - Download TikTok Videos Without Watermark in HD',
    description: 'Fastest online tool to save TikTok videos without watermark in 1080p Full HD and convert to MP3 audio for free.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikFlow - Free TikTok Video Downloader Without Watermark',
    description: 'Save TikTok videos without watermark in HD MP4 and MP3 audio instantly.',
  },
  alternates: {
    canonical: 'https://tikflow-downloader.vercel.app',
  },
};

export default function RootLayout({ children }) {
  // Schema.org structured data for WebApplication & SoftwareApplication
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'TikFlow',
    'url': 'https://tikflow-downloader.vercel.app',
    'applicationCategory': 'MultimediaApplication',
    'operatingSystem': 'All',
    'browserRequirements': 'Requires modern web browser with HTML5 and JavaScript support',
    'description': 'Free online web tool to download TikTok videos without watermark in HD and convert TikTok audio to MP3.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        {/* Google AdSense Script Placeholder (Ready for user pub ID) */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 flex flex-col min-h-screen antialiased selection:bg-pink-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
