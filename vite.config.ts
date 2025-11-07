import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'  // or vue, svelte, etc.

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/haruva-advisory/', // 👈 your repo name here
})
