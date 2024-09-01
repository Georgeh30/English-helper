/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: '#F5F5F5',
        lightText: '#333333',
        lightNavbar: '#E0E0E0',
        lightNavbarText: '#212121',
        lightHover: '#BDBDBD',

        darkBg: '#1B2A49',
        darkText: '#EAECEE',
        darkNavbar: '#2C3E50',
        darkNavbarText: '#EAECEE',
        darkHover: '#34495E',
      },
    },
  },
  plugins: [],
}
