<script setup>
import SectionShell from "../common/SectionShell.vue";
import BaseCard from "../common/BaseCard.vue";
import StudentEOIForm from "../eoi/StudentEOIForm.vue";

const benefits = [
  "Consistent academic support across the semester",
  "Guidance as you learn new topics week by week",
  "Help before deadlines and stress peak",
];
</script>

<template>
  <SectionShell
    id="eoi"
    title="Expression of Interest: Become a Student"
    subtitle="Register for Semester 1, 2026 and we’ll match you with a course-fit tutor when support is available."
  >
    <div class="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
      <!-- Left: Info -->
      <BaseCard
        variant="soft"
        class="shadow-sm transition hover:shadow-lg hover:-translate-y-1 focus-within:shadow-lg"
        aria-labelledby="student-eoi-heading"
      >
        <h3
          id="student-eoi-heading"
          class="text-xl md:text-2xl font-extrabold tracking-tight"
        >
          Students: get semester-long support
        </h3>

        <p class="mt-3 opacity-80 leading-relaxed">
          UniT supports you from Week 1 through to finals with structured,
          recurring help — so you understand content early, plan assessments
          ahead of time, and stay on track all semester.
        </p>

        <ul
          class="mt-4 space-y-2 opacity-80 list-disc pl-5"
          role="list"
          aria-label="Benefits of registering as a student"
        >
          <li v-for="b in benefits" :key="b">
            {{ b }}
          </li>
        </ul>

        <div class="mt-6 text-sm opacity-70 leading-relaxed">
          No login required. Your submission is stored securely and used only
          for matching and communication.
        </div>
      </BaseCard>

      <!-- Right: Form -->
      <BaseCard
        class="relative overflow-hidden shadow-sm transition hover:shadow-lg hover:-translate-y-1 focus-within:shadow-lg"
        aria-label="Student expression of interest form"
      >
        <div
          class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-90"
          aria-hidden="true"
        ></div>

        <div class="pt-3">
          <StudentEOIForm />
        </div>
      </BaseCard>
    </div>
  </SectionShell>
</template>
