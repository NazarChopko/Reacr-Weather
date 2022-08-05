/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "640px" },

      md: { max: "768px", min: "641px" },

      lg: { max: "1024px" },
    },
    colors: {
      primary: "#4793ff",
      lite: "#000",
      basic: "#939cb0",
      darkPrimaryLight: "rgba(147,144,144,0.28)",
      darkPrimaryDark: "#2e3035",
    },
    extend: {
      rotate: {
        360: "360deg",
      },
      keyframes: {
        popup: {
          "0%": { top: "100px", opacity: 0 },
          "100%": { top: "calc(50% - 200px)", opacity: 1 },
        },
        smallPopup: {
          "0%": { top: "50px", opacity: 0 },
          "100%": { top: "15%", opacity: 1 },
        },
        popupAppear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        popupExit: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        ldsEllipsis1: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        ldsEllipsis2: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(24px,0)" },
        },
        ldsEllipsis3: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
      animation: {
        popup: "popup 0.4s linear forwards",
        smallPopup: "smallPopup 0.4s linear forwards",
        popupAppear: "popupAppear 0.2s linear forwards",
        popupExit: "popupExit 0.5s linear",
        ldsEllipsis1: "ldsEllipsis1 0.6s cubic-bezier(0, 1, 1, 0) infinite",
        ldsEllipsis2: "ldsEllipsis2 0.6s cubic-bezier(0, 1, 1, 0) infinite",
        ldsEllipsis3: "ldsEllipsis3 0.6s cubic-bezier(0, 1, 1, 0) infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
