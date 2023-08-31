import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        dark: colors.slate[900],
        light: colors.slate[100],
        green: colors.green[400],
        primary: colors.violet[500],
        secondary: colors.sky[400],
        nuetral: colors.zinc[500],
        danger: colors.rose[600],
      },
      opacity:{
        highlight: '.10'
      }
    },
  },
  plugins: [],
};
