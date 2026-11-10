/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.tiktokcdn.com' },
      { protocol: 'https', hostname: '**.tiktokcdn-us.com' },
      { protocol: 'https', hostname: '**.byteoversea.com' },
      { protocol: 'https', hostname: '**.ibytedtos.com' },
      { protocol: 'https', hostname: '**.tiktokv.com' },
      { protocol: 'https', hostname: '**.tiktokv.us' },
    ],
  },
  async redirects() {
    return [
      // Consolidate duplicate homepage URLs (Accessible index page resolution)
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/default.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/default.php',
        destination: '/',
        permanent: true,
      },
      // Localized duplicate homepage URLs
      {
        source: '/:lang(es|pt|id|fr|ar|de|vi|tr|it|ru|ja)/index.html',
        destination: '/:lang',
        permanent: true,
      },
      {
        source: '/:lang(es|pt|id|fr|ar|de|vi|tr|it|ru|ja)/index.php',
        destination: '/:lang',
        permanent: true,
      },
      {
        source: '/:lang(es|pt|id|fr|ar|de|vi|tr|it|ru|ja)/index',
        destination: '/:lang',
        permanent: true,
      },
      // Legacy tool aliases
      {
        source: '/photo-downloader',
        destination: '/tiktok-photo',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), 'canvas'];
    return config;
  },
};

module.exports = nextConfig;
