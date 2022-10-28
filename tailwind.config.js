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
        display: ["Space GroteskVariable", ...defaultTheme.fontFamily.sans],
        mono: ["iA Mono", ...defaultTheme.fontFamily.mono],
      },
      spacing: {
        4.5: "1.125rem",
      },
      backgroundImage: {
        "millions-gradient":
          "linear-gradient(256.26deg, rgba(0, 21, 255, 0.7) 1.59%, rgba(245, 2, 236, 0.364) 94.58%);",
        "gray-gradient":
          "linear-gradient(180deg, #D3D8DC 21.19%, rgba(211, 216, 220, 0) 94.07%);",
      },
      colors: {
        gray: {
          100: "#F6F7F9",
          200: "#F0F1F2",
          225: "#E5E9EC",
          250: "#CDD2D6",
          275: "#D6DBDF",
          300: "#D3D8DC",
          350: "#B2B6B8",
          400: "#565E65",
          500: "#3C3F42",
          700: "#212426",
          800: "#141516",
          900: "#000000",
        },
        orange: {
          onDark: "#FF7A00",
          hover: "#FFAA45",
          500: "#FF8A00",
        },
        green: {
          200: "#D9EDDB",
          400: "#117800",
          500: "#1BE601",
        },
        yellow: {
          200: "#FFE2C0",
          400: "#EB7000"
        }
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
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
