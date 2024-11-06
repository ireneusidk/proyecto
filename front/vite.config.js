import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://proyecto-m9kz.onrender.com', // Reemplaza esta URL con la URL de tu backend en Render
        changeOrigin: true,
        secure: false, // Si tu backend usa HTTPS, cambia esto a true
      },
    },
  },
})