<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTheme } from "../../composables/useTheme";

const router = useRouter();
const route = useRoute();
const { theme, toggleTheme } = useTheme();

const isDark = computed(() => theme.value === "unitDark");

function go(path) {
  router.push(path);
}

/**
 * Scroll to EOI section if on Home.
 * If on other pages, navigate home then scroll.
 */
function scrollToEOI() {
  const doScroll = () => {
    document
      .getElementById("eoi")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (route.path !== "/") {
    router.push("/").then(() => setTimeout(doScroll, 60));
    return;
  }
  doScroll();
}
</script>

<template>
  <div
    class="sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b border-base-300"
  >
    <div class="container-max">
      <div class="navbar px-0">
        <div class="navbar-start gap-2">
          <button
            class="btn btn-ghost text-xl font-extrabold tracking-tight"
            @click="go('/')"
          >
            UniT
            <span
              class="ml-2 text-sm font-semibold opacity-70 hidden sm:inline"
            >
              The University Tutor
            </span>
          </button>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal gap-1">
            <li><a @click="go('/')">Home</a></li>

            <li>
              <details>
                <summary>Solutions</summary>
                <ul
                  class="p-2 bg-base-100 rounded-xl border border-base-300 w-60"
                >
                  <li><a @click="scrollToEOI">Expression of Interest</a></li>
                  <li><a @click="go('/about')">How UniT works</a></li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>News & Events</summary>
                <ul
                  class="p-2 bg-base-100 rounded-xl border border-base-300 w-60"
                >
                  <li><a @click="go('/news')">News</a></li>
                  <li><a @click="go('/blog')">Blog</a></li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>About Us</summary>
                <ul
                  class="p-2 bg-base-100 rounded-xl border border-base-300 w-60"
                >
                  <li><a @click="go('/about')">Mission</a></li>
                  <li><a @click="go('/about')">Our Team</a></li>
                  <li><a @click="go('/about')">Contact</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div class="navbar-end gap-2">
          <button class="btn btn-ghost" @click="toggleTheme">
            {{ isDark ? "Light" : "Dark" }}
          </button>

          <button
            class="btn btn-outline hidden sm:inline-flex"
            @click="scrollToEOI"
          >
            Expression of Interest
          </button>

          <button class="btn btn-primary" @click="scrollToEOI">
            Become a Tutor
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
