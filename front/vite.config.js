export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://proyecto-m9kz.onrender.com', // Reemplaza esta URL con la URL de tu backend en Render
        changeOrigin: true,
        secure: true, // Si tu backend usa HTTPS, cambia esto a true
      },
    },
  },
})
