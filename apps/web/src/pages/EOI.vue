<script setup>
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import SectionShell from "../components/common/SectionShell.vue";
import BaseCard from "../components/common/BaseCard.vue";

import TutorEOISection from "../components/landing/TutorEOISection.vue";
import StudentEOISection from "../components/landing/StudentEOISection.vue";

const route = useRoute();
const router = useRouter();

// default to tutor if query missing
const mode = computed(() =>
  route.query.t === "student" ? "student" : "tutor"
);

function setMode(next) {
  router.push({ path: "/eoi", query: { t: next } });
}

// if someone manually changes URL query, keep UI consistent
watch(
  () => route.query.t,
  () => {
    // no-op; mode computed handles it
  }
);
</script>

<template>
  <SectionShell
    title="Expression of Interest"
    subtitle="Choose the option that fits you — tutor applications or student support interest."
  >
    <!-- Toggle -->
    <div class="flex flex-wrap gap-2 mb-8">
      <button
        type="button"
        class="btn btn-sm"
        :class="mode === 'tutor' ? 'btn-primary' : 'btn-outline'"
        @click="setMode('tutor')"
      >
        Tutor
      </button>

      <button
        type="button"
        class="btn btn-sm"
        :class="mode === 'student' ? 'btn-secondary' : 'btn-outline'"
        @click="setMode('student')"
      >
        Student
      </button>
    </div>

    <!-- Student -->
    <div v-if="mode === 'student'">
      <StudentEOISection />
    </div>

    <!-- Tutor -->
    <div v-else>
      <TutorEOISection />
    </div>
  </SectionShell>
</template>
