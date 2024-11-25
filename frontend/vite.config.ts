import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Your Pocket Assistant',
        short_name: 'Assistant',
        description: 'Your assistant in your pocket!',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: './src/assets/favicon/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './src/assets/favicon/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: './src/assets/favicon/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
