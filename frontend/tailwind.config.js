/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#007DFC',
        primaryRed: '#D12D2D',
        primaryBlack: '#000000'
      }
    },
  },
  plugins: [],
};
