<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

function isActive(name) {
  return route.name === name;
}
</script>

<template>
  <div class="surface rounded-2xl">
    <div class="p-4">
      <div class="flex items-center justify-between">
        <div class="text-xs font-semibold opacity-60">Navigation</div>
        <div class="badge badge-secondary badge-outline">v1</div>
      </div>

      <ul class="menu mt-2 p-0">
        <li>
          <router-link :class="isActive('Dashboard') ? 'active' : ''" to="/">
            Dashboard
          </router-link>
        </li>

        <li class="menu-title mt-2"><span>EOIs</span></li>
        <li>
          <router-link
            :class="isActive('TutorEOIs') ? 'active' : ''"
            to="/eois/tutors"
          >
            Tutor EOIs
          </router-link>
        </li>
        <li>
          <router-link
            :class="isActive('StudentEOIs') ? 'active' : ''"
            to="/eois/students"
          >
            Student EOIs
          </router-link>
        </li>

        <li class="menu-title mt-2"><span>Content</span></li>
        <li><a class="opacity-60 cursor-not-allowed">Blog (next)</a></li>

        <li class="menu-title mt-2"><span>Settings</span></li>
        <li>
          <router-link
            :class="isActive('Openings') ? 'active' : ''"
            to="/settings/openings"
          >
            Openings
          </router-link>
        </li>
      </ul>

      <div class="mt-4 text-xs opacity-60 leading-relaxed">
        Admin access requires allowlist approval (adminUsers/UID).
      </div>
    </div>
  </div>
</template>
