/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        customBlue: '#146C94',
        customBlueClear: '#19A7CE',
      },
    },
  },
  plugins: [],
}

