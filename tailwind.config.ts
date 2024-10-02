import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px"
      },
      fontFamily: {
        manrope: ["Manrope", "system-ui"],
        schibsted: ["Schibsted Grotesk", "sans-serif"],
      },
      lineHeight: {
        loosest: "6rem",
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
        "getStarted-bg": "url(/images/getstarted-frame.svg)",
        "getStarted-bg-mob": "url(/images/getstarted-frame-mob.svg)",
      },
      fontSize: {
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
        "5.5xl": "3.5rem",
      },
      colors: {
        neutral100: "#F2F4F7",
        grey10: "#F5F5F5",
        grey25: "#040404",
        grey50: "#F9FAFB",
        grey100: "#F0F2F5",
        grey200: "#E4E7EC",
        grey300: "#D0D5DD",
        grey400: "#98A2B3",
        grey500: "#667185",
        grey600: "#475367",
        grey700: "#344054",
        grey800: "#1D2739",
        grey900: "#101928",
        primary50: "#E8F1FC",
        primary100: "#B6D4F7",
        primary200: "#93BFF3",
        primary300: "#62A2EE",
        primary400: "#1374E4",
        primary500: "#1574E5",
        primary600: "#136AD0",
        primary700: "#0D5EBA",
        primary800: "#083160",
        primary900: "#093160",
        error: {
          50: "#FBEAE9",
          100: "#EB9B98",
          300: "#DD524D",
        },
        warning: {
          50: "#FEF6E7",
          75: "#FBE2B7",
          200: "#F7C164",
          400: "#F3A218",
        },
        success: {
          50: "#E7F6EC",
          75: "#B5E3C4",
          100: "#91D6A8",
          200: "#5FC381",
          300: "#40B869",
        },
        brown: {
          50: "#FBF1F1",
          75: "#F0E6E6",
          200: "#CDC4C4",
          300: "#B7AFAF",
        },
        ash: "#D0D5DD",
        ash10: "#5D5D5D",
        "dashboard-bg": "#F5F5F5",
        "dark-cyan-blue": "#030E1C",
        "alert-green": "#04802E",
        "alert-red": "#CB1A14",
      },
      zIndex: {
        "10000": "10000",
      },
      boxShadow: {
        "custom-strong":
          "0 5px 10px rgba(0, 0, 0, 0.15), 0 -5px 10px rgba(0, 0, 0, 0.15), 5px 0 10px rgba(0, 0, 0, 0.15), -5px 0 10px rgba(0, 0, 0, 0.15)",
        "dark-blue": "0 4px 20px rgba(4, 60, 72, 0.08)",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOutUp: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 0.6s ease-out",
        fadeOutUp: "fadeOutUp 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
