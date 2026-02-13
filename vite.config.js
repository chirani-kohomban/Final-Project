import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  // Use root base path for Vercel deployment
  base: '/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        subscribe: resolve(__dirname, 'subscribe.html'),
        community: resolve(__dirname, 'community.html'),
        impact: resolve(__dirname, 'impact.html')
      }
    }
  }
})
