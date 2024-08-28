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

        darkBg: '#212121',
        darkText: '#F5F5F5',
        darkNavbar: '#333333',
        darkNavbarText: '#F5F5F5',
        darkHover: '#424242',
      },
    },
  },
  plugins: [],
}
