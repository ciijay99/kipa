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
        yellow: { 75: '#FFFDF2', 850: '#F0DC6B', 950: '#A69381' },
        red: { 850: '#B50C00' },
      },
      backgroundImage: {
        bg: "linear-gradient(90deg, rgba(0, 34, 36, 0.7) 1%, rgba(0, 0, 0, 0.7) 56%, rgba(15, 103, 53, 0.7) 100%), url('../src/assets/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
