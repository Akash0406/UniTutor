import { createRouter, createWebHistory } from "vue-router";
import { waitForAdminAuth } from "../services/adminAuth";

import Login from "../pages/Login.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import Dashboard from "../pages/Dashboard.vue";
import TutorEOIs from "../pages/eois/TutorEOIs.vue";
import StudentEOIs from "../pages/eois/StudentEOIs.vue";
import Openings from "../pages/settings/Openings.vue";

const routes = [
  { path: "/login", name: "Login", component: Login },

  {
    path: "/",
    component: AdminLayout,
    meta: { requiresAdmin: true },
    children: [
      { path: "", name: "Dashboard", component: Dashboard },

      { path: "eois/tutors", name: "TutorEOIs", component: TutorEOIs },
      { path: "eois/students", name: "StudentEOIs", component: StudentEOIs },
      { path: "settings/openings", name: "Openings", component: Openings },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

let resolved = false;

router.beforeEach(async (to) => {
  if (!to.meta.requiresAdmin) return true;

  try {
    if (!resolved) {
      await waitForAdminAuth();
      resolved = true;
    }
    return true;
  } catch {
    return { name: "Login" };
  }
});

export default router;
