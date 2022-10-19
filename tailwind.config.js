/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        '3xl': '4px 24px 60px rgba(109, 141, 173, 0.25)',
      },
      fontFamily: {
        burtons:'burtons',
      },
    },
  },
  plugins: [],
}