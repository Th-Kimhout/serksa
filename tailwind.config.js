const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#15803D",
        primaryHover: "#15733D",
        secondary: "#2563EB",
        secondaryHover: "#2563CC",
        textBlack: "gray-900",
        textWhite: "white",
        textGray: "gray-600",
        textGrayLight: "gray-400",
        textGrayDark: "gray-500",
        textGrayHover: "gray-700",
      },
      fontFamily: {
        englishFont: ["Inter", "Arial", "sans-serif"],
        khmerFont: ["Koh Santepheap", "serif"],
      },
      fontSize: {
        Title: "24px",
        Description: "18px",
        Subtitle: "16px",
        Small: "14px",
      },
    },
  },
  plugins: [ flowbite.plugin()],
};
