/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black1':'#212529',
        'gray1':'#BBC0C3',
        'gray2' : '#99A0A6',
        'gray3': '#D9D9D91A'
      }
    },
  },
  plugins: [],
}
