<script setup>
import SectionShell from "../common/SectionShell.vue";
import BaseCard from "../common/BaseCard.vue";
import StudentEOIForm from "../eoi/StudentEOIForm.vue";
</script>

<template>
  <SectionShell
    id="eoi"
    title="Expression of Interest: Become a Student"
    subtitle=""
  >
    <div class="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
      <!-- Left: Info -->
      <BaseCard variant="soft">
        <h3 class="text-xl md:text-2xl font-extrabold tracking-tight">
          Students: get support
        </h3>

        <p class="mt-3 opacity-80 leading-relaxed">
          UniT helps you avoid the crash by keeping support consistent from Week
          1 to finals. Register interest and we’ll contact you when support for
          your unit is available.
        </p>

        <ul class="mt-4 space-y-2 opacity-80">
          <li>Consistent academic support</li>
          <li>Guidance as you learn new topics</li>
          <li>Help before the stress kicks in</li>
        </ul>

        <div class="mt-6 text-sm opacity-70 leading-relaxed">
          No login required. We store your submission securely for matching.
        </div>
      </BaseCard>

      <!-- Right: Form -->
      <BaseCard class="relative overflow-hidden">
        <!-- subtle top accent -->
        <div
          class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-90"
        ></div>
        <div class="pt-2">
          <StudentEOIForm />
        </div>
      </BaseCard>
    </div>
  </SectionShell>
</template>
