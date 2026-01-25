<script setup>
import SectionShell from "../common/SectionShell.vue";
import BaseCard from "../common/BaseCard.vue";

const steps = [
  {
    step: "Step 1",
    title: "Register for the semester",
    desc: "Tutors and students submit an expression of interest with their university, subjects, and availability so we can plan support early.",
  },
  {
    step: "Step 2",
    title: "We verify and match",
    desc: "We verify course-fit and match students with tutors who have previously excelled in the same subject and understand the assessments.",
  },
  {
    step: "Step 3",
    title: "Recurring support all semester",
    desc: "Sessions run consistently across the teaching weeks, with ongoing check-ins, assignment planning, and exam readiness through to finals.",
  },
];
</script>

<template>
  <SectionShell
    title="How it works"
    subtitle="Semester-long support that brings structure back — from Week 1 to finals."
  >
    <div
      class="grid md:grid-cols-3 gap-4 items-stretch"
      aria-label="How UniT works in three steps"
    >
      <BaseCard
        v-for="s in steps"
        :key="s.step"
        class="h-full shadow-sm transition hover:shadow-lg hover:-translate-y-1 focus-within:shadow-lg"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="badge badge-outline">{{ s.step }}</div>
          <span class="sr-only">{{ s.step }}</span>
        </div>

        <h3 class="mt-3 text-lg font-extrabold tracking-tight">
          {{ s.title }}
        </h3>

        <p class="mt-2 opacity-80 leading-relaxed">
          {{ s.desc }}
        </p>
      </BaseCard>
    </div>
  </SectionShell>
</template>
