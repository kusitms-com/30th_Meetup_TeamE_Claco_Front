/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard"],
      },
      height: {
        "real-screen": "calc(var(--vh) * 100)",
      },
      colors: {
        primary: {
          900: "#B14E2D",
          800: "#CC5932",
          700: "#DB5F35",
          600: "#E9663A",
          500: "#F46C3E",
          400: "#F47F59",
          300: "#F59576",
          200: "#F7B29D",
          100: "#F9D0C3",
          50: "#F8EBE9",
          DEFAULT: "#E9663A",
        },
        secondary: {
          900: "#080998",
          800: "#1723AF",
          700: "#202FBC",
          600: "#2A3AC9",
          500: "#2F42D4",
          400: "#4F5FE2",
          300: "#717DE8",
          200: "#9CA2EE",
          100: "#C4C6F5",
          50: "#E6E7F3",
          DEFAULT: "#8F9AF8",
        },
        background: {
          light: "#FBF9F3",
          dark: "#1C1C1C",
        },
        system: {
          error: "#E95547",
          positive: "#8BAFFE",
        },
        common: {
          white: "#FFFFFF",
          black: "#000000",
        },
        grayscale: {
          0: "#222222",
          10: "#383838",
          20: "#242424",
          30: "#323232",
          40: "#7A7A7A",
          50: "#919191",
          60: "#8A8585",
          70: "#B3B3B3",
          80: "#ECEBE7",
          90: "#F1EFEF",
          100: "#FFFFFF",
        },
        login: "#FAE64D",
      },
    },
    minHeight: {
      "real-screen": "calc(var(--vh) * 100)",
    },
  },
  plugins: [],
};
