import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        loosest: "5rem",
      },
      spacing: {
        "4.5": "1.125rem",
      },
      borderRadius: {
        "5xl": "1.875rem",
      },
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(to right bottom, #083160 0%, #083160 25%, #04182F 50%, #04182F 100%)",
      },
      fontSize: {
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
        "5.5xl": "3.5rem",
      },
      colors: {
        grey50: "#F9FAFB",
        grey100: "#F0F2F5",
        grey200: "#E4E7EC",
        grey300: "#D0D5DD",
        grey400: "#98A2B3",
        grey500: "#667185",
        grey600: "#475367",
        grey800: "#1D2739",
        grey900: "#101928",
        primary400: "#1374E4",
        primary500: "#1574E5",
        primary700: "#0D5EBA",
        primary600: "#136AD0",
        primary800: "#083160",
        primary900: "#072548",
        "dark-cyan-blue": "#030E1C",
      },
      boxShadow: {
        'custom-strong': '0 5px 10px rgba(0, 0, 0, 0.15), 0 -5px 10px rgba(0, 0, 0, 0.15), 5px 0 10px rgba(0, 0, 0, 0.15), -5px 0 10px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 0.6s ease-out',
        fadeOutUp: 'fadeOutUp 0.8s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
