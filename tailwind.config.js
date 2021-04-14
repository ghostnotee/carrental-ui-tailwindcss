const { guessProductionMode } = require("@ngneat/tailwind");
const colors = require("tailwindcss/colors");

process.env.TAILWIND_MODE = guessProductionMode() ? "build" : "watch";

module.exports = {
  prefix: "",
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      // transparent: "transparent",
      // current: "currentColor",
      white: colors.white,
      blueGray: colors.blueGray,
      green: colors.green,
      lightBlue: colors.lightBlue,
      teal: colors.teal,
      emerald: colors.emerald,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      rose: colors.rose,
      pink: colors.pink,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
