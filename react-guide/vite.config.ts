import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    target: 'es2020',
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MISSING_EXPORT') return
        warn(warning)
      },
    },
  },
  define: {
    'process.env.ESBUILD_SKIP_BINARY_VERSION_CHECK': '"1"'
  }
})
