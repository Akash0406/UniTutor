/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        unitLight: {
          primary: "#5B5CFF",
          secondary: "#2B6DFF",
          accent: "#7C3AED",
          neutral: "#111827",
          "base-100": "#FFFFFF",
          "base-200": "#F7F8FF",
          "base-300": "#E6E8FF",
        },
      },
      {
        unitDark: {
          primary: "#7C3AED",
          secondary: "#2B6DFF",
          accent: "#5B5CFF",
          neutral: "#0B1020",
          "base-100": "#0B1020",
          "base-200": "#0F1730",
          "base-300": "#16224A",
        },
      },
    ],
    darkTheme: "unitDark",
  },
};
