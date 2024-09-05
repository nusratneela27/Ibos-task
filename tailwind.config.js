/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    barlow: ['Barlow', 'sans-serif'],
  },
  plugins: [

    require('daisyui')
  ],
  daisyui: {
    themes: ["light"],
  },
}