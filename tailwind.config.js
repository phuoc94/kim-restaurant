/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
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
