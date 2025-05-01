import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  assetsInclude: ['**/*.JPG'],
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
=======
    plugins: [react()],
    base: process.env.VITE_BASE_PATH || "/ethnile/tree/master",
    server: {
        watch: {
            usePolling: true,
        }
    }
>>>>>>> branch-2
})
