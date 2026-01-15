<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTheme } from "../../composables/useTheme";

const router = useRouter();
const route = useRoute();

const { theme, toggleTheme } = useTheme();
const isDark = computed(() => theme.value === "unitDark");

/**
 * Only one dropdown open at a time.
 * values: "solutions" | "news" | "about" | null
 */
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

// Close on outside click + ESC
function onDocClick(e) {
  // If click happens inside navbar, ignore.
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
        <!-- Brand -->
        <button
          class="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-base-200/60 transition"
          @click="go('/')"
        >
          <div class="text-xl font-extrabold tracking-tight">UniT</div>
          <div class="hidden sm:block text-sm opacity-70 font-semibold">
            The University Tutor
          </div>
        </button>

        <!-- Center nav (desktop) -->
        <nav class="hidden lg:flex items-center gap-2">
          <button class="btn btn-ghost btn-sm" @click="go('/')">Home</button>

          <!-- News & Events -->
          <div class="relative">
            <button
              class="btn btn-ghost btn-sm inline-flex items-center gap-2"
              :class="openMenu === 'news' ? 'bg-base-200/60' : ''"
              @click="toggleMenu('news')"
            >
              News &amp; Events
              <span class="opacity-70">▾</span>
            </button>

            <div
              v-show="openMenu === 'news'"
              class="absolute left-0 mt-2 w-56 rounded-2xl border border-base-300 bg-base-100 shadow-lg overflow-hidden"
            >
              <button
                class="w-full text-left px-4 py-3 hover:bg-base-200/60"
                @click="go('/news')"
              >
                News
              </button>
              <button
                class="w-full text-left px-4 py-3 hover:bg-base-200/60"
                @click="go('/blog')"
              >
                Blog
              </button>
            </div>
          </div>

          <!-- About -->
          <div class="relative">
            <button
              class="btn btn-ghost btn-sm inline-flex items-center gap-2"
              :class="openMenu === 'about' ? 'bg-base-200/60' : ''"
              @click="toggleMenu('about')"
            >
              About Us
              <span class="opacity-70">▾</span>
            </button>

            <div
              v-show="openMenu === 'about'"
              class="absolute left-0 mt-2 w-64 rounded-2xl border border-base-300 bg-base-100 shadow-lg overflow-hidden"
            >
              <button
                class="w-full text-left px-4 py-3 hover:bg-base-200/60"
                @click="go('/about')"
              >
                Mission
              </button>
              <button
                class="w-full text-left px-4 py-3 hover:bg-base-200/60"
                @click="go('/about')"
              >
                Our Team
              </button>
              <button
                class="w-full text-left px-4 py-3 hover:bg-base-200/60"
                @click="go('/about')"
              >
                Contact
              </button>
            </div>
          </div>
        </nav>

        <!-- Right actions -->
        <div class="flex items-center gap-3">
          <!-- Theme toggle -->
          <button
            type="button"
            class="btn btn-ghost btn-sm"
            @click="
              () => {
                console.log('theme clicked');
                toggleTheme();
              }
            "
          >
            {{ isDark ? "Light" : "Dark" }}
          </button>

          <button
            class="btn btn-outline btn-sm hidden sm:inline-flex"
            @click="go('/career')"
          >
            Expression of Interest
          </button>

          <button class="btn btn-primary btn-sm" @click="scrollToEOI">
            Become a Tutor
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
