/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '600px',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
      colors: {
        green: { 850: '#0F6735', 950: '#106835' },
        gray: { 75: '#F6F6F6' },
        yellow: { 850: '#F0DC6B' },
        red: { 850: '#B50C00' },
      },
      backgroundImage: {
        bg: "url('../src/assets/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
