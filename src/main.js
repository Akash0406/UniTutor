import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/tailwind.css";
import { initTheme } from "./composables/useTheme";

initTheme();

createApp(App).use(router).mount("#app");
