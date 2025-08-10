import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Caminho absoluto para facilitar imports
const rootDir = path.resolve(__dirname);

export default defineConfig({
  root: rootDir, // mantém a raiz do projeto
  plugins: [
    react({
      jsxRuntime: 'automatic', // Evita precisar importar React em cada arquivo
      babel: {
        plugins: [
          // Exemplo: suporte a decorators, optional chaining, etc.
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src'), // Permite importar arquivos com "@/"
      '@components': path.resolve(rootDir, 'src/components'),
      '@assets': path.resolve(rootDir, 'src/assets'),
      '@styles': path.resolve(rootDir, 'src/styles'),
      '@utils': path.resolve(rootDir, 'src/utils'),
      '@pages': path.resolve(rootDir, 'src/pages'),
      '@hooks': path.resolve(rootDir, 'src/hooks'),
      '@services': path.resolve(rootDir, 'src/services')
    },
  },
  server: {
    port: 5173,
    strictPort: true, // Impede trocar a porta automaticamente
    host: true, // Permite acesso na rede local (teste em celular/tablet)
    open: true, // Abre no navegador automaticamente
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Facilita debug no build
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
  preview: {
    allowedHosts: ['maquina-campanha-frontend.onrender.com'],
    port: 4173,
  },
});
