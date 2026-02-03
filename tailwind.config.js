/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gaming: {
          dark: '#120202', // Very dark red/black
          light: '#2a0505', // Dark red
          accent: '#FFD700', // Gold
          accent2: '#FF0000', // Red
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or similar
      }
    },
  },
  plugins: [],
}
