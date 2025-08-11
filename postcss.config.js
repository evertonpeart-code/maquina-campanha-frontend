// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')({
      flexbox: 'no-2009', // Evita prefixos antigos desnecessários
      grid: 'autoplace', // Melhora suporte a grid
    }),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('cssnano')({
            preset: [
              'default',
              {
                discardComments: { removeAll: true }, // Remove todos os comentários
                normalizeWhitespace: true,            // Remove espaços extras
                mergeLonghand: true,                  // Junta propriedades longhand
                cssDeclarationSorter: true,           // Ordena declarações
              },
            ],
          }),
        ]
      : []),
  ],
};
