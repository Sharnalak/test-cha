/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
      serif: ["Comfortaa", "serif"],
    },
    extend: {
      colors: {
        text: "#262626",
        menu: {
          background: "#F6F6F6",
          itemHover: "#D1ECF7",
          icons: "#BAB9BA",
          iconsHover: "#262626",
        },
      },
      width: {
        MENU_WIDTH: "655px",
      },
      keyframes: {
        slideIn: {
          from: { transform: "translate3d(655px, 0, 0)" },
          to: { transform: "translate3d(0, 0, 0)" },
        },
        slideOut: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(655px, 0, 0)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-in-out",
        slideOut: "slideOut 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
