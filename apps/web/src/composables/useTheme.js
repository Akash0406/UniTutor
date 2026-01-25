import { ref } from "vue";

const STORAGE_KEY = "unit-theme";
const theme = ref(localStorage.getItem(STORAGE_KEY) || "unitLight");

/**
 * Apply theme by setting the daisyUI theme on <html data-theme="...">
 */
function applyTheme(value) {
  theme.value = value;
  document.documentElement.setAttribute("data-theme", value);
  localStorage.setItem(STORAGE_KEY, value);
}

/**
 * Toggle between unitLight and unitDark.
 */
function toggleTheme() {
  applyTheme(theme.value === "unitLight" ? "unitDark" : "unitLight");
}

/**
 * Call once on app startup.
 */
export function initTheme() {
  applyTheme(theme.value);
}

export function useTheme() {
  console.log("theme changed");
  return { theme, applyTheme, toggleTheme };
}
