/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'eliaviv-green': '#0a3d30', // Le vert foncé du logo
      'eliaviv-gold': '#d4a356',  // L'or du logo
      'eliaviv-soft': '#6ba292',  // Le vert d'eau des feuilles
      'eliaviv-light': '#f4f7f6', // Pour les fonds de section
    },
    },
  },
  plugins: [],
};
