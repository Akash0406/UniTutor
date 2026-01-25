<script setup>
  import SectionShell from "../components/common/SectionShell.vue";
  import BaseCard from "../components/common/BaseCard.vue";

  const items = [
    {
      title: "UniT Landing v1 released",
      date: "2026-01-15",
      summary: "New landing experience with tutor EOI onboarding.",
    },
    {
      title: "Tutor onboarding pipeline planning",
      date: "2026-01-20",
      summary: "Next: verification, matching, and scheduling.",
    },
  ];
</script>

<template>
  <SectionShell title="News" subtitle="Updates and announcements from UniT.">
    <div class="grid md:grid-cols-2 gap-4">
      <BaseCard v-for="n in items" :key="n.title" variant="soft">
        <div class="text-sm opacity-70">{{ n.date }}</div>
        <div class="mt-1 text-xl font-extrabold">{{ n.title }}</div>
        <p class="mt-2 opacity-80">{{ n.summary }}</p>
      </BaseCard>
    </div>
  </SectionShell>
</template>
