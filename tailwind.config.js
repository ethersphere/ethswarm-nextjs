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
          600: "#2D3843",
          700: "#212426",
          750: "#1F2831",
          800: "#141516",
          900: "#000000",
        },
        orange: {
          onDark: "#FF7A00",
          hover: "#FFAA45",
          500: "#FF6B26",
        },
        green: {
          200: "#D9EDDB",
          400: "#117800",
          500: "#1BE601",
        },
        yellow: {
          200: "#FFE2C0",
          400: "#EB7000",
        },
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
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: "translateX(200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: "translateX(-200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: 0, transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
          to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
    animation: {
      scaleIn: "scaleIn 200ms ease",
      scaleOut: "scaleOut 200ms ease",
      fadeIn: "fadeIn 200ms ease",
      fadeOut: "fadeOut 200ms ease",
      enterFromLeft: "enterFromLeft 250ms ease",
      enterFromRight: "enterFromRight 250ms ease",
      exitToLeft: "exitToLeft 250ms ease",
      exitToRight: "exitToRight 250ms ease",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
