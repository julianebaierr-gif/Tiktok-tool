// lib/telegram.js
// Real-time Telegram Alert Service for QukTik Media Processing

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '9218440985:AAExRvo9VuFZO4CdYpP0vagH9YByBow0LSI';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '7396061312';

// In-memory anti-spam deduplication cache
// Prevents flooding Telegram chat if multiple users hit the same broken link or repeated failures occur
const alertCooldowns = new Map();
const COOLDOWN_MS = 5 * 60 * 1000; // 5-minute cooldown per unique error signature
const MAX_COOLDOWNS = 200;

function isThrottled(key) {
  const now = Date.now();
  const lastSent = alertCooldowns.get(key);
  if (lastSent && now - lastSent < COOLDOWN_MS) {
    return true;
  }
  if (alertCooldowns.size >= MAX_COOLDOWNS) {
    const oldestKey = alertCooldowns.keys().next().value;
    if (oldestKey) alertCooldowns.delete(oldestKey);
  }
  alertCooldowns.set(key, now);
  return false;
}

/**
 * Escapes reserved HTML characters for Telegram HTML parse_mode
 */
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Asynchronously sends an incident alert to Telegram.
 * Non-blocking, fault-tolerant, with timeout protection.
 */
export async function sendTelegramAlert({
  type = 'Download Error',
  url = 'N/A',
  error = 'Unknown error',
  provider = 'N/A',
  ip = 'N/A',
  userAgent = 'N/A',
  statusCode = 500,
  extra = null,
}) {
  try {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return;
    }

    // Deduplication signature
    const sigKey = `${type}:${url}:${error}`;
    if (isThrottled(sigKey)) {
      console.log(`[Telegram Alert] Throttled duplicate incident: ${sigKey.slice(0, 80)}`);
      return;
    }

    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';

    // Build visually organized Telegram alert card
    const lines = [
      `🚨 <b>QukTik System Alert</b>`,
      `━━━━━━━━━━━━━━━━━━`,
      `⚠️ <b>Event:</b> <code>${escapeHtml(type)}</code>`,
      `🌐 <b>Status Code:</b> <code>${escapeHtml(statusCode)}</code>`,
      url && url !== 'N/A' ? `🔗 <b>Target URL:</b> <code>${escapeHtml(url)}</code>` : null,
      provider && provider !== 'N/A' ? `⚙️ <b>Provider/Tier:</b> <code>${escapeHtml(provider)}</code>` : null,
      `❌ <b>Error:</b> <pre>${escapeHtml(typeof error === 'string' ? error : JSON.stringify(error)).slice(0, 450)}</pre>`,
      ip && ip !== 'N/A' ? `📍 <b>Client IP:</b> <code>${escapeHtml(ip)}</code>` : null,
      userAgent && userAgent !== 'N/A' ? `📱 <b>Device:</b> <code>${escapeHtml(userAgent.slice(0, 80))}</code>` : null,
      extra ? `📝 <b>Meta:</b> <code>${escapeHtml(typeof extra === 'string' ? extra : JSON.stringify(extra))}</code>` : null,
      `🕒 <b>Time:</b> <code>${timestamp}</code>`,
    ].filter(Boolean);

    const message = lines.join('\n');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4500);

    const endpoint = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      const errText = await res.text();
      console.warn(`[Telegram Alert] API status ${res.status}:`, errText.slice(0, 100));
    }
  } catch (err) {
    // Non-fatal warning — never crash or delay the main user flow
    console.warn('[Telegram Alert Warning]:', err.message);
  }
}

/**
 * Sends a user-submitted bug/issue report directly to the admin on Telegram.
 * Guaranteed delivery with HTML formatting and plain-text fallback.
 */
export async function sendTelegramReport({
  url = 'N/A',
  issueCategory = 'General Issue',
  description = '',
  contact = 'Anonymous',
  lang = 'en',
  pageUrl = 'N/A',
  ip = 'N/A',
  userAgent = 'N/A',
}) {
  try {
    const botToken = (process.env.TELEGRAM_BOT_TOKEN || '9218440985:AAExRvo9VuFZO4CdYpP0vagH9YByBow0LSI').trim();
    const chatId = (process.env.TELEGRAM_CHAT_ID || '7396061312').trim();

    if (!botToken || !chatId) {
      return { ok: false, error: 'Missing botToken or chatId', botTokenPresent: !!botToken, chatIdPresent: !!chatId };
    }

    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';

    const lines = [
      `📢 <b>New User Issue Report</b>`,
      `━━━━━━━━━━━━━━━━━━`,
      `📌 <b>Category:</b> <code>${escapeHtml(issueCategory)}</code>`,
      `🌐 <b>Language:</b> <code>${escapeHtml(lang ? lang.toUpperCase() : 'EN')}</code>`,
      url && url !== 'N/A' && url.trim().length > 0 ? `🔗 <b>Target URL:</b> <code>${escapeHtml(url.trim())}</code>` : null,
      pageUrl && pageUrl !== 'N/A' ? `📄 <b>Page:</b> <code>${escapeHtml(pageUrl)}</code>` : null,
      `💬 <b>User Message:</b>`,
      `<pre>${escapeHtml(description.slice(0, 1200))}</pre>`,
      contact && contact !== 'Anonymous' && contact.trim().length > 0 ? `👤 <b>Contact:</b> <code>${escapeHtml(contact.trim())}</code>` : `👤 <b>Contact:</b> <i>Anonymous</i>`,
      ip && ip !== 'N/A' ? `📍 <b>Client IP:</b> <code>${escapeHtml(ip)}</code>` : null,
      userAgent && userAgent !== 'N/A' ? `📱 <b>Device:</b> <code>${escapeHtml(userAgent.slice(0, 90))}</code>` : null,
      `🕒 <b>Time:</b> <code>${timestamp}</code>`,
    ].filter(Boolean);

    const message = lines.join('\n');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);

    const endpoint = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      return { ok: true, data };
    }

    // If HTML parsing failed or Telegram returned an error, fallback to raw plain text
    const errText = await res.text();
    console.warn(`[Telegram Report] HTML parse failed (${res.status}): ${errText.slice(0, 100)}, attempting plain text fallback...`);

    const plainLines = [
      `📢 New User Issue Report`,
      `━━━━━━━━━━━━━━━━━━`,
      `Category: ${issueCategory}`,
      `Language: ${(lang || 'EN').toUpperCase()}`,
      url && url !== 'N/A' && url.trim().length > 0 ? `Target URL: ${url.trim()}` : null,
      pageUrl && pageUrl !== 'N/A' ? `Page: ${pageUrl}` : null,
      `User Message:\n${description}`,
      contact && contact !== 'Anonymous' && contact.trim().length > 0 ? `Contact: ${contact.trim()}` : `Contact: Anonymous`,
      ip && ip !== 'N/A' ? `Client IP: ${ip}` : null,
      `Time: ${timestamp}`,
    ].filter(Boolean);

    const fallbackRes = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: plainLines.join('\n'),
        disable_web_page_preview: true,
      }),
    });

    const fallbackText = await fallbackRes.text();

    return {
      ok: fallbackRes.ok,
      htmlStatus: res.status,
      htmlError: errText,
      fallbackStatus: fallbackRes.status,
      fallbackResponse: fallbackText,
      tokenPrefix: botToken.slice(0, 8),
      chatId,
    };
  } catch (err) {
    console.warn('[Telegram Report Warning]:', err.message);
    return { ok: false, error: err.message };
  }
}
