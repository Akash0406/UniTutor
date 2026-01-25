<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useTheme } from "../../composables/useTheme";

const router = useRouter();
const userEmail = computed(() => auth.currentUser?.email || "Admin");
const { theme, toggleTheme } = useTheme();

async function logout() {
  await signOut(auth);
  router.push({ name: "Login" });
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-base-300/50 bg-base-100/70 backdrop-blur"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="h-16 flex items-center justify-between gap-3">
        <!-- Left: Brand -->
        <div class="flex items-center gap-3 min-w-0">
          <div class="font-black text-xl tracking-tight whitespace-nowrap">
            UniT
          </div>
          <div class="badge badge-primary badge-outline whitespace-nowrap">
            Admin
          </div>
          <div class="hidden md:block text-sm opacity-60 truncate">
            Operations console
          </div>
        </div>

        <!-- Right: actions -->
        <div class="flex items-center gap-2 flex-shrink-0">
          <!-- Theme -->
          <button
            class="btn btn-ghost btn-sm rounded-full"
            type="button"
            @click="toggleTheme"
            aria-label="Toggle theme"
          >
            <span class="text-xs opacity-70">
              {{ theme === "unitDark" ? "Dark" : "Light" }}
            </span>
          </button>

          <!-- Email chip (hide on small) -->
          <div
            class="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-base-300/60 bg-base-100/50"
          >
            <span class="text-xs opacity-60">Signed in</span>
            <span class="text-sm font-medium max-w-[260px] truncate">{{
              userEmail
            }}</span>
          </div>

          <button
            class="btn btn-outline btn-sm rounded-full"
            type="button"
            @click="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
