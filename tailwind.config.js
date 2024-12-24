/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        gray: {
          100: '#686868',
          200: '#ACACAC',
        },
        red: {
          100: '#e7492b',
        },
        green: {
          100: '#00AC4F',
          200: '#D3FFE7',
        },
      },
    },
  },
  plugins: [],
};
