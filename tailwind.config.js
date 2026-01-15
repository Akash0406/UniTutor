import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        unitLight: {
          primary: "#5B5CFF",
          "primary-content": "#ffffff",
          secondary: "#2B7BFF",
          "secondary-content": "#ffffff",
          accent: "#7C3AED",
          "accent-content": "#ffffff",
          neutral: "#0B1020",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#F4F7FF",
          "base-300": "#E6ECFF",
          "base-content": "#0B1020",
        },
      },
      {
        unitDark: {
          primary: "#7C3AED",
          "primary-content": "#ffffff",
          secondary: "#2B7BFF",
          "secondary-content": "#ffffff",
          accent: "#5B5CFF",
          "accent-content": "#ffffff",
          "neutral-content": "#0B1020",
          "base-100": "#070A13",
          "base-200": "#0B1020",
          "base-300": "#101A33",
          "base-content": "#E5E7EB",
        },
      },
    ],
  },
};
