import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/taskMasterPro/',   // <-- <— critical for GitHub Pages subpath
    plugins: [react()],
})
