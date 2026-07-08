import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from a /my-portfolio/ subpath, so
// built asset URLs need that prefix there. Vercel serves it from the
// domain root, so assets must be referenced from /. Vercel sets the
// VERCEL env var during its build, which we use to tell the two apart.
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/my-portfolio/',
})
