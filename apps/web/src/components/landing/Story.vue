<script setup>
import SectionShell from "../common/SectionShell.vue";
import BaseCard from "../common/BaseCard.vue";
</script>

<template>
  <SectionShell
    title="The mid-semester tutor search problem"
    subtitle="When you find a tutor late, you often get mismatch. UniT is built to prevent that from Week 1."
  >
    <div class="grid lg:grid-cols-2 gap-6 items-start">
      <BaseCard>
        <h3 class="text-xl font-extrabold">What usually happens</h3>
        <p class="mt-3 opacity-80 leading-relaxed">
          It’s mid-semester, you’re staring at a looming assignment, stress
          creeping in, and the deadline is just days away. You search for a
          tutor online and pick someone who claims they are familiar with the
          topic.
        </p>
        <p class="mt-3 opacity-80 leading-relaxed">
          The result: they haven’t done your course, their explanations go over
          your head, and you leave more confused than when you started.
        </p>
      </BaseCard>

      <BaseCard variant="soft">
        <h3 class="text-xl font-extrabold">How UniT is different</h3>
        <ul class="mt-4 space-y-3">
          <li class="p-4 rounded-2xl bg-base-100 border border-base-300">
            <div class="font-semibold">Continuous support</div>
            <div class="opacity-80">
              Guidance from the first lecture to the final exam.
            </div>
          </li>
          <li class="p-4 rounded-2xl bg-base-100 border border-base-300">
            <div class="font-semibold">Tutors who know your unit</div>
            <div class="opacity-80">
              They have done the course and excelled at it.
            </div>
          </li>
          <li class="p-4 rounded-2xl bg-base-100 border border-base-300">
            <div class="font-semibold">Proactive help</div>
            <div class="opacity-80">
              We help every step of the way, not only one-offs.
            </div>
          </li>
        </ul>
      </BaseCard>
    </div>
  </SectionShell>
</template>
