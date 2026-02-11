/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0a192f', // Deep Navy
        secondary: '#c5a059', // Muted Gold
        accent: '#f8f9fa', // Off white
      }
    },
  },
  plugins: [],
}
