module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')({
      flexbox: 'no-2009',
      grid: 'autoplace'
    }),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('cssnano')({
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
                normalizeWhitespace: true,
                mergeLonghand: true,
                cssDeclarationSorter: true
              }
            ]
          })
        ]
      : [])
  ]
};
