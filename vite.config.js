import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    root: path.resolve(__dirname),
    plugins: [
      react({
        jsxRuntime: 'automatic',
        fastRefresh: true, // Hot Reload otimizado
        babel: {
          plugins: [
            ['@babel/plugin-transform-runtime', { regenerator: true }]
          ]
        }
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@services': path.resolve(__dirname, 'src/services'),
      },
    },
    server: {
      port: 5173,
      strictPort: true,
      host: true,
      open: false, // Evita abrir aba nova a cada restart
    },
    build: {
      outDir: 'dist',
      sourcemap: false, // Desabilitado no prod p/ reduzir tamanho
      minify: 'esbuild',
      target: 'es2017', // Mais compatível e ainda performático
      cssCodeSplit: true, // Divide CSS por página
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            vendor: ['axios']
          },
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'axios'],
      esbuildOptions: {
        target: 'es2017'
      }
    },
    preview: {
      allowedHosts: ['maquina-campanha-frontend.onrender.com'],
      port: env.PORT || 4173,
    },
    define: {
      'process.env': env,
    },
  };
});
