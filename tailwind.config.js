/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 'media' para automático pelo SO
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8', // Azul Google Ads
        secondary: '#34A853', // Verde Google
        accent: '#FBBC05', // Amarelo Google
        danger: '#EA4335', // Vermelho Google
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
