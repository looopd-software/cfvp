import { Metadata } from 'next';

export const baseMetadata: Metadata = {
  title: {
    template: '%s | CFVP',
    default: 'CFVP | Profesionales en Ciencias Económicas',
  },
  description:
    'En Castro, Fernandez, Vignau y Pianovi somos un estudio de profesionales en ciencias economicas de la ciudad de Rosario',
  keywords: [
    'walter castro',
    'marcelo fernandez',
    'mateo vignau',
    'tomas pianovi',
    'martin pianovi',
    'consultoria',
    'ciencias economicas',
    'profesionales',
    'estudio contable',
    'economia',
    'rosario',
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
