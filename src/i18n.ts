import { redirect } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/app/constants';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) redirect('/');

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
