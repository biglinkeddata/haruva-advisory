import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path' // ✅ you were missing this line

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/haruva-advisory/', // 👈 use your repo name here
})

