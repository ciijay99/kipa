/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '600px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      colors: {
        green: { 850: '#0F6735', 950: '#116635' },
      },
    },
  },
  plugins: [],
};
