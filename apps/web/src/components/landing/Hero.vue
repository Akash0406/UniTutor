<script setup>
function scrollToEOI() {
  document
    .getElementById("eoi")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
</script>

<template>
  <section class="section-pad">
    <div class="container-max">
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div class="badge badge-secondary badge-outline">
            Semester-long support model
          </div>

          <h1
            class="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]"
          >
            Avoid the crash.
            <span class="block opacity-80"
              >Stay supported from Week 1 to finals.</span
            >
          </h1>

          <p
            class="mt-6 text-lg md:text-xl opacity-80 leading-relaxed max-w-xl"
          >
            One-off tutoring is like cramming the night before an exam.
            Consistent tutoring is like training for a marathon: steady,
            supported, and effective.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <button class="btn btn-primary" @click="scrollToEOI">
              Become a Tutor
            </button>
            <button class="btn btn-outline" @click="scrollToEOI">
              Expression of Interest
            </button>
          </div>

          <div class="mt-10 grid grid-cols-3 gap-3 max-w-xl">
            <div class="rounded-2xl border border-base-300 p-4 bg-base-200/40">
              <div class="text-sm opacity-70">Model</div>
              <div class="font-bold">Recurring</div>
            </div>
            <div class="rounded-2xl border border-base-300 p-4 bg-base-200/40">
              <div class="text-sm opacity-70">Tutors</div>
              <div class="font-bold">Course-fit</div>
            </div>
            <div class="rounded-2xl border border-base-300 p-4 bg-base-200/40">
              <div class="text-sm opacity-70">Outcome</div>
              <div class="font-bold">Confidence</div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div
            class="rounded-3xl border border-base-300 bg-base-200/40 p-6 md:p-8"
          >
            <div class="flex items-center justify-between">
              <div class="font-extrabold text-lg">Tutor onboarding preview</div>
              <div class="badge badge-primary badge-outline">v1</div>
            </div>

            <div class="mt-6 space-y-3">
              <div class="p-4 rounded-2xl bg-base-100 border border-base-300">
                <div class="font-semibold">Week 1</div>
                <div class="opacity-80">
                  Set goals, map assignments, build a plan
                </div>
              </div>
              <div class="p-4 rounded-2xl bg-base-100 border border-base-300">
                <div class="font-semibold">Weeks 2–10</div>
                <div class="opacity-80">
                  Recurring sessions and continuous feedback
                </div>
              </div>
              <div class="p-4 rounded-2xl bg-base-100 border border-base-300">
                <div class="font-semibold">Finals</div>
                <div class="opacity-80">
                  Targeted revision and exam readiness
                </div>
              </div>
            </div>

            <button class="btn btn-primary btn-block mt-6" @click="scrollToEOI">
              Tutor with UniT
            </button>

            <p class="mt-3 text-xs opacity-60">
              We are collecting tutor expressions of interest first.
            </p>
          </div>

          <div
            class="absolute -z-10 -right-10 -bottom-12 w-72 h-72 rounded-full bg-secondary/20 blur-3xl"
          ></div>
          <div
            class="absolute -z-10 -left-10 -top-12 w-72 h-72 rounded-full bg-primary/20 blur-3xl"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
