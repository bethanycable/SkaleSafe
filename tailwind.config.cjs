/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '425px',
        ml: '950px',
      },
      colors: {
        'light-grey': '#91A3B0',
        'primary-color': '#8DD9CC',
        'teal-blue': '#0A7E8C',
        'dark-grey': '#555555',
        'sapphire-blue': '#126180',
        'prussian-blue': '#003153',
        'fuzzy-wuzzy': '#CC7178',
        'off-white': '#e5e7eb',
        'error-red': '#FF0000',
        white: '#FFFFFF',
        black: '#000000',
        grey: '#6b7280',
        'light-blue': '#0EA8CF',
        pink: '#b784a7',
        purple: '#540E99',
        honeydew: '#F0FFF0',
      },
      height: {
        128: '32rem',
      },
      width: {
        120: '20rem',
      },
    },
  },
  plugins: [],
};
