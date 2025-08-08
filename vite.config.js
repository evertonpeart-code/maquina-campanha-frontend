import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname), // mantém a raiz do projeto
  plugins: [react()],
  preview: {
    allowedHosts: ['maquina-campanha-frontend.onrender.com']
  }
})
