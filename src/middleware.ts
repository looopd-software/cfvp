import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from '@/app/constants';

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
});

export const config = {
  matcher: ['/', '/(en|es)/:path*'],
};
