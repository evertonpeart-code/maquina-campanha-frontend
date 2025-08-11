/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',
        secondary: '#34A853',
        accent: '#FBBC05',
        danger: '#EA4335',
        darkBg: '#121212',
        lightBg: '#FFFFFF'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem'
        }
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.08)',
        button: '0 2px 8px rgba(0, 0, 0, 0.12)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
};
