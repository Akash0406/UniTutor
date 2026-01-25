import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  plugins: [daisyui],
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
          info: "#0EA5E9",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
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
          info: "#38BDF8",
          success: "#4ADE80",
          warning: "#FBBF24",
          error: "#FB7185",
        },
      },
    ],
    darkTheme: "unitDark",
  },
};
