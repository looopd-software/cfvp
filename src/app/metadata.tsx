import { Metadata } from 'next';

export const baseMetadata: Metadata = {
  title: {
    template: '%s | CFVP',
    default: 'CFVP | Profesionales en Ciencias Económicas',
  },
  description: 'Profesionales en Ciencias Económicas',
  keywords: [
    'castro',
    'fernandez',
    'vignau',
    'pianovi',
    'consultoria',
    'ciencias economicas',
    'profesionales',
  ],
  creator: 'Looopd Solutions',
  generator: 'Next.js',
  category: 'Business, Economics',
  authors: [
    { name: 'CFVP' },
    { name: 'Looopd Solutions', url: 'https://looopd.com' },
  ],
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  applicationName: 'CFVP | Profesionales en Ciencias Económicas',
  appleWebApp: {
    title: 'CFVP',
    statusBarStyle: 'black-translucent',
  },
};
