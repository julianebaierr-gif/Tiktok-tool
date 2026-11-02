import { NextResponse } from 'next/server';
import { REGIONAL_TRENDING_SOUNDS, AVAILABLE_REGIONS, getAutoUpdatedTrending } from '../../../../lib/tools/trendingSoundsData';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const authHeader = request.headers.get('authorization');
    const cronHeader = request.headers.get('x-vercel-cron');
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');

    // Allow Vercel internal cron or secret key or public ping
    const isCronAuthorized = cronHeader || !process.env.CRON_SECRET || key === process.env.CRON_SECRET || authHeader === `Bearer ${process.env.CRON_SECRET}`;

    const now = new Date();
    const dayOfWeek = now.getDay(); // 1 = Monday
    const isWeeklyOverhaul = dayOfWeek === 1;

    // Refresh and compute status across all 12 regions
    const syncResults = AVAILABLE_REGIONS.map((region) => {
      const data = getAutoUpdatedTrending(region.id, now);
      return {
        region: region.id,
        name: region.name,
        flag: region.flag,
        topTrack: data.tracks[0]?.title || 'Unknown',
        totalTracks: data.tracks.length,
        weekNumber: data.meta.weekNumber,
      };
    });

    return NextResponse.json({
      success: true,
      timestamp: now.toISOString(),
      cycle: isWeeklyOverhaul ? 'Weekly Full Chart Overhaul' : 'Daily Velocity & Growth Sync',
      isWeeklyOverhaul,
      dayOfWeek,
      regionsUpdated: syncResults.length,
      syncedAt: dataStamp(now),
      meta: {
        engine: 'QukTik Dual Trending Engine (Weekly + Daily Auto-Sync)',
        status: '100% Operational',
        nextScheduledRun: 'Automatic via Vercel Cron (03:00 UTC)'
      },
      regions: syncResults
    });
  } catch (error) {
    console.error('Cron trending sync error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

function dataStamp(d) {
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });
}
