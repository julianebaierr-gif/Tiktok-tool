import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://quktik.com'),
  title: {
    default: 'QukTik - Save TikTok Videos Without Watermark in HD (Free Online)',
    template: '%s | QukTik'
  },
  description: 'Clean, fast online tool to download TikTok videos without watermark in HD MP4 quality and extract MP3 audio. 100% free with no registration or apps required.',
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
  authors: [{ name: 'QukTik Team' }],
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
    title: 'QukTik - Download TikTok Videos Without Watermark in HD',
    description: 'Fastest online tool to save TikTok videos without watermark in 1080p Full HD and convert to MP3 audio for free.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QukTik - Free TikTok Video Downloader Without Watermark',
    description: 'Save TikTok videos without watermark in HD MP4 and MP3 audio instantly.',
  },
  alternates: {
    canonical: 'https://quktik.com',
  },
};

export default function RootLayout({ children }) {
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'QukTik',
    'url': 'https://quktik.com',
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
    <html lang="en">
      <head>
        {/* Google AdSense Script Placeholder (Ready for user pub ID) */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
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
