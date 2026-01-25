<script setup>
import SectionShell from "../common/SectionShell.vue";
import BaseCard from "../common/BaseCard.vue";

const pillars = [
  {
    title: "Course-specific expertise",
    desc: "Tutors have completed the same unit and understand the content, structure, and assessment expectations.",
  },
  {
    title: "Consistent academic support",
    desc: "Recurring sessions across the semester help you stay on track, build confidence, and improve over time.",
  },
  {
    title: "Help before stress kicks in",
    desc: "Guidance as topics arrive and deadlines approach — not rushed, last-minute one-off sessions.",
  },
];
</script>

<template>
  <SectionShell
    title="Meet The University Tutor"
    subtitle="UniT connects students with tutors who have previously excelled in the same unit and support them consistently from Week 1 to finals."
  >
    <div
      class="grid md:grid-cols-3 gap-4 items-stretch"
      aria-label="Key benefits of UniT"
    >
      <BaseCard
        v-for="p in pillars"
        :key="p.title"
        variant="soft"
        class="h-full shadow-sm transition hover:shadow-lg hover:-translate-y-1 focus-within:shadow-lg"
      >
        <h3 class="text-lg font-extrabold tracking-tight">
          {{ p.title }}
        </h3>
        <p class="mt-2 opacity-80 leading-relaxed">
          {{ p.desc }}
        </p>
      </BaseCard>
    </div>

    <div
      class="mt-8 alert bg-base-200 border border-base-300 shadow-sm"
      role="note"
      aria-label="UniT message"
    >
      <span class="font-semibold">
        Start strong. Stay supported. Succeed.
      </span>
    </div>
  </SectionShell>
</template>
