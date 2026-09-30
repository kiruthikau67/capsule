import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Vercel serves the app at the domain root; GitHub Pages uses /capsule/.
  base: process.env.VERCEL ? '/' : '/capsule/',
  plugins: [
    tailwindcss(),
    react()
  ],
  optimizeDeps: {
    include: ["gsap"],
  },
});