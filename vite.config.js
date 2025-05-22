import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// __dirname の代替を作成（ESM には __dirname がないため）
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  // 明示的にPostCSSの設定ファイルを指定
  css: {
    postcss: resolve(__dirname, './postcss.config.js'),
  },
})