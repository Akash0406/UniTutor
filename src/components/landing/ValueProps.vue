<script setup>
import SectionShell from "../common/SectionShell.vue";
import BaseCard from "../common/BaseCard.vue";
</script>

<template>
  <SectionShell
    title="Meet The University Tutor"
    subtitle="We connect students with tutors who have previously excelled in the same unit and can support them consistently."
  >
    <div class="grid md:grid-cols-3 gap-4">
      <BaseCard variant="soft">
        <h3 class="text-lg font-extrabold">Course-specific expertise</h3>
        <p class="mt-2 opacity-80">
          Tutors know the exact challenges because they have been there
          themselves.
        </p>
      </BaseCard>

      <BaseCard variant="soft">
        <h3 class="text-lg font-extrabold">Consistent academic support</h3>
        <p class="mt-2 opacity-80">
          Recurring sessions and feedback loops that improve learning over time.
        </p>
      </BaseCard>

      <BaseCard variant="soft">
        <h3 class="text-lg font-extrabold">Help before stress kicks in</h3>
        <p class="mt-2 opacity-80">
          Guidance as topics arrive, not only when deadlines are close.
        </p>
      </BaseCard>
    </div>

    <div class="mt-8 alert bg-base-200 border border-base-300">
      <span class="font-semibold">Start strong. Stay supported. Succeed.</span>
    </div>
  </SectionShell>
</template>
