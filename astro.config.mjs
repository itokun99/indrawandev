import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://indrawan.dev',
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Poppins',
      cssVariable: '--font-sans',
      options: { weights: [300, 400, 500, 600, 700], styles: ['normal'], subsets: ['latin'] }
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Kode Mono',
      cssVariable: '--font-mono',
      options: { weights: [400, 700], styles: ['normal'], subsets: ['latin'] }
    }
  ],
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    routing: {
      prefixDefaultLocale: false
    }
  }
});
