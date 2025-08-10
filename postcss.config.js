// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Adiciona suporte para minificação e otimização em produção
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('cssnano')({
            preset: 'default',
          }),
        ]
      : []),
  ],
};
