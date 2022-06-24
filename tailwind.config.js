const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
