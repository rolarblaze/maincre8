import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "4.5xl": "2.5rem",
      },
      colors: {
        grey200: "#E4E7EC",
        grey300: "#D0D5DD",
        grey400: "#98A2B3",
        grey500: "#667185",
        grey600: "#475367",
        grey900: "#101928",
        primary400: "#1374E4",
        primary500: "#1574E5",
        primary600: "#136AD0",
      },
    },
  },
  plugins: [],
};
export default config;
