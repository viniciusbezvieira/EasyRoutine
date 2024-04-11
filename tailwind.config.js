/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      regular: 'Nunito, sans-serif',
      medium: 'NunitoMedium, sans-serif',
      bold: 'NunitoBold, sans-serif',
    },
    extend: {},
  },
  plugins: [],
};
