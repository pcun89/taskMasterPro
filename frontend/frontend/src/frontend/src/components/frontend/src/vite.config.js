// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/taskMasterPro/',   // <<-- required for GitHub Pages subpath
    plugins: [react()],
})
