<script setup>
import SectionShell from "../components/common/SectionShell.vue";
import BaseCard from "../components/common/BaseCard.vue";
</script>

<template>
  <SectionShell
    title="About UniT"
    subtitle="Consistent support from Week 1 to finals, built around course-fit tutoring."
  >
    <div class="grid lg:grid-cols-3 gap-4">
      <BaseCard variant="soft">
        <h3 class="text-lg font-bold">Mission</h3>
        <p class="mt-2 opacity-80 leading-relaxed">
          UniT exists to keep academic support consistent through the whole
          semester, not just when stress peaks.
        </p>
      </BaseCard>

      <BaseCard variant="soft">
        <h3 class="text-lg font-bold">Our approach</h3>
        <p class="mt-2 opacity-80 leading-relaxed">
          We connect students with tutors who have completed the same unit and
          can commit to recurring sessions.
        </p>
      </BaseCard>

      <BaseCard variant="soft">
        <h3 class="text-lg font-bold">Contact</h3>
        <p class="mt-2 opacity-80 leading-relaxed">
          For partnerships and onboarding, contact details can be added here
          later.
        </p>
      </BaseCard>
    </div>
  </SectionShell>
</template>
