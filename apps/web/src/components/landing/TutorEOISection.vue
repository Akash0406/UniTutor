<script setup>
import SectionShell from "../common/SectionShell.vue";
import BaseCard from "../common/BaseCard.vue";
import TutorEOIForm from "../eoi/TutorEOIForm.vue";
</script>

<template>
  <SectionShell
    id="eoi"
    title="Expression of Interest: Become a Tutor"
    subtitle="If you want to tutor with consistent, semester-long sessions, register your interest here."
  >
    <div
      class="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start"
      role="region"
      aria-labelledby="tutor-eoi-heading"
    >
      <!-- Left: Info -->
      <BaseCard
        variant="soft"
        class="lg:sticky lg:top-24 shadow-sm transition focus-within:shadow-lg"
        aria-labelledby="tutor-fit-title"
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <h3
              id="tutor-fit-title"
              class="text-xl md:text-2xl font-extrabold tracking-tight"
            >
              What UniT looks for in tutors
            </h3>
            <p class="mt-2 opacity-80 leading-relaxed">
              UniT is built around semester-long academic support. These
              qualities matter more than one-off tutoring experience.
            </p>
          </div>
        </div>

        <ul class="mt-6 space-y-3" role="list" aria-label="Tutor requirements">
          <li
            class="p-4 rounded-2xl bg-base-100 border border-base-300 transition hover:border-primary/40 focus-within:border-primary/40"
          >
            <div class="font-semibold">Course-fit</div>
            <div class="opacity-80">
              You have completed the units you intend to tutor.
            </div>
          </li>

          <li
            class="p-4 rounded-2xl bg-base-100 border border-base-300 transition hover:border-primary/40 focus-within:border-primary/40"
          >
            <div class="font-semibold">Consistency</div>
            <div class="opacity-80">
              You can commit to regular sessions across the semester.
            </div>
          </li>

          <li
            class="p-4 rounded-2xl bg-base-100 border border-base-300 transition hover:border-primary/40 focus-within:border-primary/40"
          >
            <div class="font-semibold">Clarity</div>
            <div class="opacity-80">
              You explain concepts in a way students can clearly follow.
            </div>
          </li>
        </ul>

        <p class="mt-6 text-sm opacity-70 leading-relaxed">
          Submissions are stored securely for tutor recruitment purposes only.
          We’ll contact you if your profile matches upcoming demand.
        </p>
      </BaseCard>

      <!-- Right: Form -->
      <BaseCard
        class="relative overflow-hidden shadow-sm transition focus-within:shadow-lg"
        aria-label="Tutor expression of interest form"
      >
        <div
          class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-90"
          aria-hidden="true"
        ></div>

        <div class="pt-3">
          <TutorEOIForm />
        </div>
      </BaseCard>
    </div>
  </SectionShell>
</template>
