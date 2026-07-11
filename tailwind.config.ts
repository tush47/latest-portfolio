import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-sans)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        ink: {
          50: "#eef2f8",
          100: "#d9e2f0",
          200: "#b8c7de",
          300: "#8fa3c4",
          400: "#6b82a8",
          500: "#4a5d7a",
          600: "#3a4c66",
          700: "#2b3a52",
          800: "#1a2740",
          900: "#101a30",
          950: "#0b1224",
        },
        blue: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

export default config;
