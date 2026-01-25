<script setup>
import { useRouter } from "vue-router";
import heroCampus from "../../assets/hero-campus.png";

const router = useRouter();

function goToTutorEOI() {
  router.push("/eoi?t=tutor");
}

function goToStudentEOI() {
  router.push("/eoi?t=student");
}

function scrollToEOI() {
  document
    .getElementById("eoi")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
</script>

<template>
  <section
    class="relative section-pad overflow-hidden"
    aria-labelledby="hero-heading"
  >
    <!-- Background image -->
    <!-- <div
      class="absolute inset-0 -z-20 bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroCampus})` }"
      aria-hidden="true"
    ></div> -->

    <!-- Overlay for contrast -->
    <div
      class="absolute inset-0 -z-10 bg-base-100/85 dark:bg-base-100/90"
      aria-hidden="true"
    ></div>

    <div class="container-max">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left content -->
        <div>
          <div class="badge badge-secondary badge-outline">
            Semester-long academic support
          </div>

          <h1
            id="hero-heading"
            class="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]"
          >
            University is harder
            <span class="block opacity-80"> without consistent support. </span>
          </h1>

          <p
            class="mt-6 text-lg md:text-xl opacity-85 leading-relaxed max-w-xl"
          >
            UniT connects you with tutors who have already succeeded in your
            course and supports you
            <strong>from week one to the final exam</strong>. No last-minute
            panic. No falling behind unnoticed.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <button class="btn btn-primary" @click="goToStudentEOI">
              Become a Student
            </button>
            <button class="btn btn-outline" @click="goToTutorEOI">
              Become a Tutor
            </button>
          </div>

          <!-- Value blocks -->
          <div class="mt-10 grid grid-cols-3 gap-3 max-w-xl">
            <div
              class="rounded-2xl border border-base-300 p-4 bg-base-200/40 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div class="text-sm opacity-70">Support model</div>
              <div class="font-bold">Semester-long</div>
            </div>

            <div
              class="rounded-2xl border border-base-300 p-4 bg-base-200/40 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div class="text-sm opacity-70">Tutors</div>
              <div class="font-bold">Course-matched</div>
            </div>

            <div
              class="rounded-2xl border border-base-300 p-4 bg-base-200/40 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div class="text-sm opacity-70">Focus</div>
              <div class="font-bold">Confidence</div>
            </div>
          </div>
        </div>

        <!-- Right interactive card -->
        <div class="relative">
          <div
            class="rounded-3xl border border-base-300 bg-base-100/90 backdrop-blur p-6 md:p-8 shadow-sm transition hover:shadow-xl hover:-translate-y-1"
          >
            <div class="flex items-center justify-between">
              <div class="font-extrabold text-lg">
                What semester support looks like
              </div>
              <div class="badge badge-primary badge-outline">Semester 1</div>
            </div>

            <div class="mt-6 space-y-3">
              <div
                class="p-4 rounded-2xl bg-base-200/40 border border-base-300"
              >
                <div class="font-semibold">Week 1</div>
                <div class="opacity-80">
                  Understand expectations, map assessments, set goals
                </div>
              </div>

              <div
                class="p-4 rounded-2xl bg-base-200/40 border border-base-300"
              >
                <div class="font-semibold">Teaching weeks</div>
                <div class="opacity-80">
                  Regular sessions, concept clarity, early assignment prep
                </div>
              </div>

              <div
                class="p-4 rounded-2xl bg-base-200/40 border border-base-300"
              >
                <div class="font-semibold">End of semester</div>
                <div class="opacity-80">
                  Revision, exam readiness, confidence under pressure
                </div>
              </div>
            </div>

            <button class="btn btn-primary btn-block mt-6" @click="scrollToEOI">
              Tutor with UniT
            </button>

            <p class="mt-3 text-xs opacity-60">
              We onboard tutors first to ensure quality and availability.
            </p>
          </div>

          <!-- Decorative glows -->
          <div
            class="absolute -z-10 -right-12 -bottom-12 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"
            aria-hidden="true"
          ></div>
          <div
            class="absolute -z-10 -left-12 -top-12 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
