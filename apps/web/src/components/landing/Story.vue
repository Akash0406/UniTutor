<script setup>
import SectionShell from "../common/SectionShell.vue";
import BaseCard from "../common/BaseCard.vue";
</script>

<template>
  <SectionShell
    title="The mid-semester tutor search problem"
    subtitle="When help starts too late, mismatches happen. UniT is designed to prevent that from Week 1."
  >
    <div
      class="grid lg:grid-cols-2 gap-6 items-start"
      role="region"
      aria-labelledby="mid-semester-problem"
    >
      <!-- Problem side -->
      <BaseCard
        class="h-full shadow-sm transition hover:shadow-lg focus-within:shadow-lg"
      >
        <h3
          id="mid-semester-problem"
          class="text-xl font-extrabold tracking-tight"
        >
          What usually happens
        </h3>

        <p class="mt-3 opacity-80 leading-relaxed">
          It’s mid-semester. An assignment deadline is approaching, stress is
          building, and you realise you’re not fully understanding the content.
          You search online for a tutor and choose someone who says they are
          “familiar” with the topic.
        </p>

        <p class="mt-3 opacity-80 leading-relaxed">
          The outcome is often frustrating: the tutor hasn’t taken your unit,
          explanations don’t match your coursework, and you walk away more
          confused than before.
        </p>
      </BaseCard>

      <!-- UniT difference -->
      <BaseCard
        variant="soft"
        class="h-full shadow-sm transition hover:shadow-lg focus-within:shadow-lg"
        aria-labelledby="unit-difference"
      >
        <h3 id="unit-difference" class="text-xl font-extrabold tracking-tight">
          How UniT is different
        </h3>

        <ul
          class="mt-4 space-y-3"
          role="list"
          aria-label="How UniT provides better support"
        >
          <li
            class="p-4 rounded-2xl bg-base-100 border border-base-300 transition hover:bg-base-200/60"
          >
            <div class="font-semibold">Continuous support</div>
            <div class="opacity-80">
              Guidance from the first lecture through to final exams.
            </div>
          </li>

          <li
            class="p-4 rounded-2xl bg-base-100 border border-base-300 transition hover:bg-base-200/60"
          >
            <div class="font-semibold">Tutors who know your unit</div>
            <div class="opacity-80">
              Your tutor has completed the same course and achieved strong
              results.
            </div>
          </li>

          <li
            class="p-4 rounded-2xl bg-base-100 border border-base-300 transition hover:bg-base-200/60"
          >
            <div class="font-semibold">Proactive help</div>
            <div class="opacity-80">
              Support is planned ahead of deadlines, not rushed at the last
              minute.
            </div>
          </li>
        </ul>
      </BaseCard>
    </div>
  </SectionShell>
</template>
