import { NextResponse } from 'next/server';
import { sendTelegramReport } from '../../../lib/telegram';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      url = '',
      issueType = 'general',
      issueLabel = 'User Report',
      description = '',
      contact = '',
      lang = 'en',
      pageUrl = '',
      userAgent = '',
    } = body || {};

    if (!description || typeof description !== 'string' || description.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please describe the issue.' },
        { status: 400 }
      );
    }

    const clientIp = req.headers.get('cf-connecting-ip') || 
                     req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'N/A';

    const headerUa = req.headers.get('user-agent') || userAgent || 'N/A';

    // Dispatch to Telegram Admin Bot (non-blocking / asynchronous)
    sendTelegramReport({
      url: url.trim(),
      issueCategory: issueLabel || issueType,
      description: description.trim(),
      contact: contact.trim() || 'Anonymous',
      lang: lang || 'en',
      pageUrl: pageUrl.trim(),
      ip: clientIp,
      userAgent: headerUa,
    }).catch(err => {
      console.warn('[Report Telegram Delivery Warning]:', err.message);
    });

    return NextResponse.json({
      success: true,
      message: 'Report received successfully and dispatched to admin.',
    });
  } catch (err) {
    console.error('[/api/report error]:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to process report.' },
      { status: 500 }
    );
  }
}
