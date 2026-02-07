import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {patchCssModules} from 'vite-css-modules'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    patchCssModules(),
  ],
})
