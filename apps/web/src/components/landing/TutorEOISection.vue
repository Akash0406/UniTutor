<script setup>
import SectionShell from "../common/SectionShell.vue";
import BaseCard from "../common/BaseCard.vue";
import TutorEOIForm from "../eoi/TutorEOIForm.vue";
</script>

<template>
  <SectionShell
    id="eoi"
    title="Expression of Interest: Become a Tutor"
    subtitle="If you want to tutor with recurring sessions across a semester, register your interest here."
  >
    <div class="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
      <!-- Left: Info -->
      <BaseCard variant="soft" class="lg:sticky lg:top-24">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h3 class="text-xl md:text-2xl font-extrabold tracking-tight">
              What UniT needs from tutors
            </h3>
            <p class="mt-2 opacity-80 leading-relaxed">
              We’re building a semester-long support model. These traits matter
              more than “one-off” tutoring.
            </p>
          </div>
          <div class="badge badge-primary badge-outline">Tutor fit</div>
        </div>

        <ul class="mt-6 space-y-3">
          <li
            class="p-4 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/40 transition"
          >
            <div class="font-semibold">Course-fit</div>
            <div class="opacity-80">You’ve completed the units you teach.</div>
          </li>

          <li
            class="p-4 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/40 transition"
          >
            <div class="font-semibold">Consistency</div>
            <div class="opacity-80">
              You can commit to recurring sessions across the semester.
            </div>
          </li>

          <li
            class="p-4 rounded-2xl bg-base-100 border border-base-300 hover:border-primary/40 transition"
          >
            <div class="font-semibold">Clarity</div>
            <div class="opacity-80">
              You explain in a way students can follow.
            </div>
          </li>
        </ul>

        <div class="mt-6 text-sm opacity-70 leading-relaxed">
          Submissions are stored for recruitment purposes. We’ll contact you if
          your profile matches upcoming demand.
        </div>
      </BaseCard>

      <!-- Right: Form -->
      <BaseCard class="relative overflow-hidden">
        <!-- subtle top accent -->
        <div
          class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-90"
        ></div>
        <div class="pt-2">
          <TutorEOIForm />
        </div>
      </BaseCard>
    </div>
  </SectionShell>
</template>
