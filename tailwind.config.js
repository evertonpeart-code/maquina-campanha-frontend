/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Escaneia todos os arquivos React
  ],
  darkMode: 'class', // Alternância manual; pode trocar para 'media' se quiser automático
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',   // Azul Google Ads
        secondary: '#34A853', // Verde Google
        accent: '#FBBC05',    // Amarelo Google
        danger: '#EA4335',    // Vermelho Google
        darkBg: '#121212',    // Fundo para modo escuro
        lightBg: '#FFFFFF',   // Fundo para modo claro
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.08)', // Sombras suaves para cartões
        button: '0 2px 8px rgba(0, 0, 0, 0.12)', // Sombras para botões
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),       // Melhorias em inputs e formulários
    require('@tailwindcss/typography'),  // Melhor tipografia
    require('@tailwindcss/aspect-ratio') // Controle de proporção para imagens e vídeos
  ],
};
