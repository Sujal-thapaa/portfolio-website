import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-website/', // IMPORTANT: match GitHub repo name
  plugins: [react()],
})

