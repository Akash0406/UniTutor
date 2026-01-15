<script setup>
import { useRouter } from "vue-router";
import SectionShell from "../components/common/SectionShell.vue";
import BaseCard from "../components/common/BaseCard.vue";

const router = useRouter();

function openStudent() {
  router.push({ path: "/eoi", query: { t: "student" } });
}

function openTutor() {
  router.push({ path: "/eoi", query: { t: "tutor" } });
}
</script>

<template>
  <SectionShell
    title="Career"
    subtitle="Choose your path. Tutors apply to teach; students register interest to get consistent support."
  >
    <div class="grid lg:grid-cols-2 gap-6">
      <!-- Students -->
      <BaseCard variant="soft" class="relative overflow-hidden">
        <div
          class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary via-primary to-accent opacity-90"
        ></div>

        <div class="flex items-start justify-between gap-4 pt-2">
          <div>
            <h3 class="text-2xl font-extrabold tracking-tight">Students</h3>
            <p class="mt-2 opacity-80 leading-relaxed">
              Register interest to get matched with a course-fit tutor for
              consistent support from Week 1 to finals.
            </p>
          </div>
          <div class="badge badge-secondary badge-outline">Get support</div>
        </div>

        <ul class="mt-4 space-y-2 opacity-80">
          <li>Semester-long support model</li>
          <li>Help before deadlines get stressful</li>
          <li>Guidance as you learn new topics</li>
        </ul>

        <button
          class="btn btn-secondary mt-6"
          type="button"
          @click="openStudent"
        >
          Student Expression of Interest
        </button>
      </BaseCard>

      <!-- Tutors -->
      <BaseCard class="relative overflow-hidden">
        <div
          class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-90"
        ></div>

        <div class="flex items-start justify-between gap-4 pt-2">
          <div>
            <h3 class="text-2xl font-extrabold tracking-tight">Tutors</h3>
            <p class="mt-2 opacity-80 leading-relaxed">
              Apply to become a UniT tutor. We prioritise tutors who have
              completed the same unit and excelled in it.
            </p>
          </div>
          <div class="badge badge-primary badge-outline">Become a tutor</div>
        </div>

        <ul class="mt-4 space-y-2 opacity-80">
          <li>Tutor students consistently</li>
          <li>Teach units you’ve excelled in</li>
          <li>Be part of a structured model</li>
        </ul>

        <button class="btn btn-primary mt-6" type="button" @click="openTutor">
          Tutor Expression of Interest
        </button>
      </BaseCard>
    </div>

    <div class="mt-10 text-sm opacity-70">
      Later: admin will be able to enable/disable openings.
    </div>
  </SectionShell>
</template>
