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
    port: process.env.PORT || 4173,  // Usa el puerto asignado por Render o un valor predeterminado local
    host: '0.0.0.0'  // Asegúrate de exponer el puerto para que Render lo pueda acceder
  }
})
