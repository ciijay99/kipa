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
        bg2: "linear-gradient(90deg, rgba(0, 34, 36, 0.7) 1%, rgba(0, 0, 0, 0.7) 56%, rgba(15, 103, 53, 0.7) 100%), url('../src/assets/images/video.gif')",
      },
      boxShadow: {
        '3xl': '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
      },
    },
  },
  plugins: [],
};
