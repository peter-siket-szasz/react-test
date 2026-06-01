import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'user-directory'),
  plugins: [react()],
  server: {
    watch: {
      // Native file events often fail on WSL, Docker, VMs, and synced folders (iCloud/OneDrive).
      // Set VITE_USE_POLLING=false if HMR works without this on your machine.
      usePolling: process.env.VITE_USE_POLLING !== 'false',
      interval: 100,
    },
  },
})
