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
          900: "#48161B",
          800: "#592325",
          700: "#692F2C",
          600: "#7A3B36",
          500: "#86433C",
          400: "#9C5E56",
          300: "#B37971",
          200: "#D19D96",
          100: "#EFC1B9",
          50: "#FFE2D7",
          DEFAULT: "#692F2C",
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
          DEFAULT: "#717DE8",
        },
        background: {
          light: "#FBF9F3",
          dark: "#241A16",
        },
        error: "#E95547",
        common: {
          white: "#FFFFFF",
          black: "#000000",
        },
        grayscale: {
          0: "#222222",
          10: "#383838",
          20: "#4E4E4E",
          30: "#646464",
          40: "#7A7A7A",
          50: "#919191",
          60: "#A7A7A7",
          70: "#BDBDBD",
          80: "#D3D3D3",
          90: "#E9E9E9",
          100: "#FFFFFF",
        },
      },
    },
    minHeight: {
      "real-screen": "calc(var(--vh) * 100)",
    },
  },
  plugins: [],
};
