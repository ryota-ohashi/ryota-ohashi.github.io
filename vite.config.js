import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': path.join(__dirname, './src/')
    }
  },
  server: {
    port: 3333
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/variables.scss";
        `
      },
    }
  }
})
// @import "@/assets/scss/_destyle.scss";
