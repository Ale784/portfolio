/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        Deep_plum: '#3A0E6B'
      },
      fontFamily: {
        'sans': ['Inter','sans-serif'],
        'Roboto': ['Roboto Slab','serif']
      },
    }
  },
  plugins: []
}


