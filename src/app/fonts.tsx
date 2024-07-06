import { Marcellus, Karla } from 'next/font/google';

export const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-primary',
});

export const dmSans = Karla({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-secondary',
});
