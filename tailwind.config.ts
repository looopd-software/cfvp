import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        white: 'var(--white-color)',
        black: 'var(--black-color)',
        'gray-100': '#F3F3F3',
        'gray-200': '#F9F9FF',
        'gray-300': '#9B9B9D',
        'gray-500': '#5B5A62',
        neutral: '#5B5A62',
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: ['var(--font-serif)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
