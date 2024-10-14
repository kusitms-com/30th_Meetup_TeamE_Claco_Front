/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
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
          foreground: "hsl(var(--primary-foreground))",
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
          foreground: "hsl(var(--secondary-foreground))",
        },
        background: "hsl(var(--background))",
        system: { error: "#E95547", positive: "#8BAFFE" },
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
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    minHeight: {
      "real-screen": "calc(var(--vh) * 100)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
