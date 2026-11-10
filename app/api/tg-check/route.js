import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const token = (process.env.TELEGRAM_BOT_TOKEN || '9218440985:AAExRvo9VuFZO4CdYpP0vagH9YByBow0LSI').trim();
  const botRes = await fetch(`https://api.telegram.org/bot${token}/getMe`);
  const bot = await botRes.json();

  const updatesRes = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
  const updates = await updatesRes.json();

  return NextResponse.json({ bot, updates });
}
