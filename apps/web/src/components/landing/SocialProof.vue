<script setup>
import SectionShell from "../common/SectionShell.vue";
import BaseCard from "../common/BaseCard.vue";
</script>

<template>
  <SectionShell
    title="Designed for consistent support, not one-off sessions"
    subtitle="Clarity, trust, and a conversion-first layout for tutors."
    tight
  >
    <div class="grid md:grid-cols-3 gap-4">
      <BaseCard variant="soft">
        <div class="text-sm opacity-70">Built for</div>
        <div class="text-2xl font-extrabold mt-1">Recurring classes</div>
        <p class="mt-2 opacity-80">
          A tutor stays with students throughout the semester to build momentum.
        </p>
      </BaseCard>

      <BaseCard variant="soft">
        <div class="text-sm opacity-70">Focus</div>
        <div class="text-2xl font-extrabold mt-1">Course-fit tutoring</div>
        <p class="mt-2 opacity-80">
          Tutors have done the exact unit and understand assessment
          expectations.
        </p>
      </BaseCard>

      <BaseCard variant="soft">
        <div class="text-sm opacity-70">Outcome</div>
        <div class="text-2xl font-extrabold mt-1">
          Less panic, more progress
        </div>
        <p class="mt-2 opacity-80">
          Help before stress peaks, not after it becomes overwhelming.
        </p>
      </BaseCard>
    </div>
  </SectionShell>
</template>
