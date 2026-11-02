import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // 1. Root duplicate index / homepage checks -> 301 to '/'
  if (
    pathname === '/index.html' ||
    pathname === '/index.php' ||
    pathname === '/index' ||
    pathname === '/home' ||
    pathname === '/default.html' ||
    pathname === '/default.php'
  ) {
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  // 2. Localized duplicate index / homepage checks -> 301 to '/:lang'
  const localizedIndexRegex = /^\/(es|pt|id|fr|ar|de|vi|tr|it|ru|ja)\/(index(\.html|\.php)?|default(\.html|\.php)?|home)$/i;
  const match = pathname.match(localizedIndexRegex);
  if (match) {
    url.pathname = `/${match[1]}`;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/index.html',
    '/index.php',
    '/index',
    '/home',
    '/default.html',
    '/default.php',
    '/:lang(es|pt|id|fr|ar|de|vi|tr|it|ru|ja)/index.html',
    '/:lang(es|pt|id|fr|ar|de|vi|tr|it|ru|ja)/index.php',
    '/:lang(es|pt|id|fr|ar|de|vi|tr|it|ru|ja)/index',
    '/:lang(es|pt|id|fr|ar|de|vi|tr|it|ru|ja)/default.html',
    '/:lang(es|pt|id|fr|ar|de|vi|tr|it|ru|ja)/default.php',
    '/:lang(es|pt|id|fr|ar|de|vi|tr|it|ru|ja)/home',
  ],
};
