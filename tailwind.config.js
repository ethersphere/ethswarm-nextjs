/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
        mono: ["iA Mono", ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        dark: "0px 8px 50px 0px #00000012",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-bullets": "#000",
            color: "#000",
            a: {
              color: "#000",
              "&:hover": {
                color: "#000",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
