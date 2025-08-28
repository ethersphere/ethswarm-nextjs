/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./styles/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /.*/,
      variants: ['hover', 'focus', 'active', 'sm', 'md', 'lg', 'xl'],
    }
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: "#1effbb",
        },
      },
      sizes: {
        50: "12.5rem",
      },
      fontSize: {
        "3xl": "2rem",
      },
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
        mono: ["iA Mono", ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        dark: "0px 8px 50px 0px #00000012",
      },
      maxWidth: {
        "6xl": "1200px",
      },
      backgroundImage: {
        "gradient-odyssey":
          "linear-gradient(100deg, #1F2831 0%, rgba(19, 25, 31, 0.80) 80.3%)",
        "gradient-fairdata":
          "linear-gradient(91deg, #1F2831 0.76%, rgba(19, 25, 31, 0.80) 99.24%)",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-bullets": "#F6F7F9",
            color: "#F6F7F9",
            a: {
              color: "#F6F7F9",
              "&:hover": {
                color: "#F6F7F9",
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
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
