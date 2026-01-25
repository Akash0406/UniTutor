import { ref } from "vue";

const STORAGE_KEY = "unit_admin_theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function useTheme() {
  const theme = ref(localStorage.getItem(STORAGE_KEY) || "unitDark");
  console.log(theme);

  function setTheme(next) {
    theme.value = next;
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  function toggleTheme() {
    setTheme(theme.value === "unitDark" ? "unitLight" : "unitDark");
  }

  // Apply immediately on first import/use
  applyTheme(theme.value);

  return { theme, setTheme, toggleTheme };
}
