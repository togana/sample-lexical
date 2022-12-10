import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { name } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${name}/`,
})
