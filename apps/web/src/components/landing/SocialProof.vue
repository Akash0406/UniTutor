<script setup>
import SectionShell from "../common/SectionShell.vue";
import BaseCard from "../common/BaseCard.vue";

const features = [
  {
    label: "Built for",
    title: "Semester-long support",
    desc: "Tutors and students work together consistently across the teaching weeks, building momentum from Week 1 through to finals.",
  },
  {
    label: "Focus",
    title: "Course-matched tutoring",
    desc: "Students are supported by tutors who have previously excelled in the same subject and understand the assessment structure.",
  },
  {
    label: "Outcome",
    title: "Less stress, more progress",
    desc: "Clear weekly guidance, early assignment planning, and check-ins that prevent last-minute panic.",
  },
];
</script>

<template>
  <SectionShell
    title="Designed for consistent support, not one-off sessions"
    subtitle="UniT brings back structure and accountability — without taking away your independence."
    tight
  >
    <div
      class="grid md:grid-cols-3 gap-4 items-stretch"
      aria-label="Key benefits of UniT"
    >
      <BaseCard
        v-for="f in features"
        :key="f.title"
        variant="soft"
        class="h-full shadow-sm transition hover:shadow-lg hover:-translate-y-1 focus-within:shadow-lg"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="text-sm opacity-70">{{ f.label }}</div>
        </div>

        <h3 class="text-2xl font-extrabold mt-1 tracking-tight">
          {{ f.title }}
        </h3>

        <p class="mt-2 opacity-80 leading-relaxed">
          {{ f.desc }}
        </p>
      </BaseCard>
    </div>
  </SectionShell>
</template>
