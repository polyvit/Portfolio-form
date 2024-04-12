import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'



// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_OWNER_EMAIL': JSON.stringify(env.REACT_APP_OWNER_EMAIL)
    },
    plugins: [react()],
  }
})
