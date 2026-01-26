import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Psy-Diver_Webseite2/', // For local development and GitHub Pages
  build: {
    outDir: 'docs'
  },
  server: {
    host: true, // Expose to local network
    port: 5173
  }
})
