import React from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import '@/app/globals.css';
import ExampleComponent from '../components/ExampleComponent';

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');

  return (
    <div className="w-full">
      <h1 className="text-primary">{t('title')}</h1>
      <ExampleComponent />
    </div>
  );
}
