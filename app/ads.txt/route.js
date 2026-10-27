export async function GET() {
  const adsContent = `# QukTik Official ads.txt
# Ready for Ad Networks (Monetag, Adsterra, PropellerAds, Google AdSense)
# Contact: support@quktik.com
`;

  return new Response(adsContent, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
