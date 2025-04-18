import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const locales = ['en', 'ro'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, API, and _next
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // If path already includes locale, do nothing
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    // 👇 Detect browser language from "Accept-Language" header
    const acceptLanguage = request.headers.get('accept-language');
    const browserLang = acceptLanguage?.split(',')[0].split('-')[0]; // e.g., "ro"

    const matchedLocale = locales.includes(browserLang || '')
      ? browserLang
      : defaultLocale;

    return NextResponse.redirect(
      new URL(`/${matchedLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_static|favicon.ico).*)'],
};
