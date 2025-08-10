import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Função que carrega variáveis de ambiente conforme o modo (dev/prod)
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    root: path.resolve(__dirname), // Mantém a raiz do projeto
    plugins: [
      react({
        jsxRuntime: 'automatic', // Não precisa importar React manualmente
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
      strictPort: true, // Não troca de porta automaticamente
      host: true, // Acessível pela rede local
      open: true, // Abre no navegador
    },
    build: {
      outDir: 'dist',
      sourcemap: true, // Útil para debug
      minify: 'esbuild', // Mais rápido e eficiente
      target: 'esnext', // Código mais otimizado
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
      port: env.PORT || 4173, // Usa porta do ambiente, se existir
    },
    define: {
      'process.env': env, // Permite usar process.env no frontend
    },
  };
});
