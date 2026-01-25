<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTheme } from "../../composables/useTheme";
import logoUrl from "../../assets/Logo.png";

const router = useRouter();
const route = useRoute();

const { theme, toggleTheme } = useTheme();
const isDark = computed(() => theme.value === "unitDark");

const openMenu = ref(null);

function closeMenus() {
  openMenu.value = null;
}

function toggleMenu(key) {
  openMenu.value = openMenu.value === key ? null : key;
}

function go(path) {
  closeMenus();
  router.push(path);
}

function scrollToEOI() {
  closeMenus();

  const doScroll = () => {
    document
      .getElementById("eoi")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (route.path !== "/") {
    router.push("/").then(() => setTimeout(doScroll, 80));
    return;
  }
  doScroll();
}

function onDocClick(e) {
  const nav = document.getElementById("unit-navbar");
  if (!nav) return;
  if (nav.contains(e.target)) return;
  closeMenus();
}

function onKeyDown(e) {
  if (e.key === "Escape") closeMenus();
}

onMounted(() => {
  document.addEventListener("click", onDocClick);
  document.addEventListener("keydown", onKeyDown);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onDocClick);
  document.removeEventListener("keydown", onKeyDown);
});
</script>

<template>
  <header
    id="unit-navbar"
    class="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur"
  >
    <div class="container-max">
      <div class="h-16 flex items-center justify-between">
        <button
          class="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-base-200/60 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
          @click="go('/')"
          aria-label="Go to UniT home"
        >
          <img
            :src="logoUrl"
            alt="UniT logo"
            class="h-25 w-25 rounded-xl object-contain"
            width="36"
            height="36"
            loading="eager"
            decoding="async"
          />
        </button>

        <nav
          class="hidden lg:flex items-center gap-2"
          aria-label="Primary navigation"
        >
          <button
            class="btn btn-ghost btn-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
            @click="go('/')"
          >
            Home
          </button>

          <button
            class="btn btn-ghost btn-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
            @click="go('/howitwork')"
          >
            How it works
          </button>

          <div class="relative">
            <button
              class="btn btn-ghost btn-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
              :class="openMenu === 'about' ? 'bg-base-200/60' : ''"
              @click="toggleMenu('about')"
              :aria-expanded="openMenu === 'about'"
              aria-haspopup="menu"
              aria-controls="about-menu"
            >
              About
              <span class="opacity-70" aria-hidden="true">▾</span>
            </button>

            <div
              v-show="openMenu === 'about'"
              id="about-menu"
              class="absolute left-0 mt-2 w-64 rounded-2xl border border-base-300 bg-base-100 shadow-lg overflow-hidden"
              role="menu"
              aria-label="About menu"
            >
              <button
                class="w-full text-left px-4 py-3 hover:bg-base-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                role="menuitem"
                @click="go('/Career')"
              >
                Career
              </button>
              <button
                class="w-full text-left px-4 py-3 hover:bg-base-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                role="menuitem"
                @click="go('/about')"
              >
                Contact
              </button>
            </div>
          </div>
        </nav>

        <div class="flex items-center gap-3">
          <button
            type="button"
            class="btn btn-ghost btn-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
            @click="toggleTheme()"
            :aria-label="
              isDark ? 'Switch to light theme' : 'Switch to dark theme'
            "
          >
            <span class="inline-flex items-center gap-2">
              <svg
                v-if="isDark"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <svg
                v-else
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M21 13.2A7.5 7.5 0 0 1 10.8 3a6.5 6.5 0 1 0 10.2 10.2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="hidden sm:inline">
                {{ isDark ? "Light" : "Dark" }}
              </span>
            </span>
          </button>

          <button
            class="btn btn-outline btn-sm hidden sm:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
            @click="go('/eoi?t=student')"
          >
            Become a Student
          </button>

          <button
            class="btn btn-primary btn-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
            @click="go('/eoi?t=tutor')"
          >
            Become a Tutor
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
