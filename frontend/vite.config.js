import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Read only the backend port; database and admin credentials stay on the server.
  const backendDir = fileURLToPath(new URL('../backend', import.meta.url))
  const backendEnv = loadEnv(mode, backendDir, 'PORT')

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: `http://127.0.0.1:${backendEnv.PORT || 5000}`,
          changeOrigin: true,
        },
      },
    },
  }
})
