import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 4173, // Usa el puerto proporcionado por Render o el 4173 para desarrollo local
    proxy: {
      '/api': {
        target: process.env.VITE_BACKEND_URL || 'https://proyecto-m9kz.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
