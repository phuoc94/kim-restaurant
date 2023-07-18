/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Times New Roman", "ui-serif", "Georgia"],
        montserrat: ["Montserrat"],
        inter: ["Inter"],
        libre: ["David Libre"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
