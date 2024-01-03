import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/proj/',
  build: {
    outDir: 'build', // This is the default, but make sure it's set correctly
  },
})
