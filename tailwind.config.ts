import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(to right bottom, #083160 0%, #083160 25%, #04182F 50%, #04182F 100%)",
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
      colors: {
        grey100: "#F0F2F5",
        grey200: "#E4E7EC",
        grey300: "#D0D5DD",
        grey400: "#98A2B3",
        grey500: "#667185",
        grey600: "#475367",
        grey900: "#101928",
        primary400: "#1374E4",
        primary500: "#1574E5",
        primary700: "#0D5EBA",
        primary600: "#136AD0",
        "dark-cyan-blue": "#030E1C",
      },
    },
  },
  plugins: [],
};
export default config;
