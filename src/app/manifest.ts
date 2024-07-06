import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CFVP | Profesionales en Ciencias Económicas',
    short_name: 'CFVP',
    description: 'CFVP',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#EDE8E4',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
