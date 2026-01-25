<script setup>
import SectionShell from "../common/SectionShell.vue";
import BaseCard from "../common/BaseCard.vue";
</script>

<template>
  <SectionShell
    title="How it works"
    subtitle="Simple now, extensible later: verification, matching, recurring scheduling."
  >
    <div class="grid md:grid-cols-3 gap-4">
      <BaseCard>
        <div class="badge badge-outline">Step 1</div>
        <h3 class="mt-3 text-lg font-extrabold">Tutor applies</h3>
        <p class="mt-2 opacity-80">
          Submit your expression of interest with units, expertise, and
          availability.
        </p>
      </BaseCard>

      <BaseCard>
        <div class="badge badge-outline">Step 2</div>
        <h3 class="mt-3 text-lg font-extrabold">Course-fit review</h3>
        <p class="mt-2 opacity-80">
          We review whether you have done the unit and can teach it clearly.
        </p>
      </BaseCard>

      <BaseCard>
        <div class="badge badge-outline">Step 3</div>
        <h3 class="mt-3 text-lg font-extrabold">Match + recurring support</h3>
        <p class="mt-2 opacity-80">
          Students get consistent sessions from Week 1 through finals.
        </p>
      </BaseCard>
    </div>
  </SectionShell>
</template>
