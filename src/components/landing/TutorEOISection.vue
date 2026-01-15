<script setup>
import SectionShell from "../common/SectionShell.vue";
import BaseCard from "../common/BaseCard.vue";
import TutorEOIForm from "./TutorEOIForm.vue";
</script>

<template>
  <SectionShell
    id="eoi"
    title="Expression of Interest: Become a Tutor"
    subtitle="If you want to tutor with recurring sessions across a semester, register your interest here."
  >
    <div class="grid lg:grid-cols-2 gap-6 items-start">
      <BaseCard variant="soft">
        <h3 class="text-xl font-extrabold">What UniT needs from tutors</h3>
        <ul class="mt-4 space-y-3">
          <li class="p-4 rounded-2xl bg-base-100 border border-base-300">
            <div class="font-semibold">Course-fit</div>
            <div class="opacity-80">
              You have completed the units you teach.
            </div>
          </li>
          <li class="p-4 rounded-2xl bg-base-100 border border-base-300">
            <div class="font-semibold">Consistency</div>
            <div class="opacity-80">
              You can commit to recurring sessions across the semester.
            </div>
          </li>
          <li class="p-4 rounded-2xl bg-base-100 border border-base-300">
            <div class="font-semibold">Clarity</div>
            <div class="opacity-80">
              You explain in a way students can follow.
            </div>
          </li>
        </ul>

        <div class="mt-6 text-sm opacity-70">
          Submissions are stored for recruitment purposes. You will be contacted
          if your profile matches demand.
        </div>
      </BaseCard>

      <BaseCard>
        <TutorEOIForm />
      </BaseCard>
    </div>
  </SectionShell>
</template>
