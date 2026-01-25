<script setup></script>

<template>
  <main class="container-max py-16 space-y-20">
    <!-- Hero / Intro -->
    <section class="max-w-4xl mx-auto text-center space-y-6">
      <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">
        How UniT Works
      </h1>
      <p class="text-base md:text-lg opacity-80">
        UniT is designed to support you from the first week of semester through
        to the final assessment — with structure, consistency, and guidance that
        most students lose when they enter university.
      </p>
    </section>

    <!-- Blog / Context -->
    <section
      class="max-w-4xl mx-auto bg-base-100 rounded-2xl border border-base-300 shadow-sm p-8 md:p-10 space-y-6"
      aria-labelledby="support-gap-heading"
    >
      <h2 id="support-gap-heading" class="text-2xl font-bold tracking-tight">
        From High School to University: Where Did the Support Go?
      </h2>

      <div class="space-y-4 text-sm md:text-base opacity-85 leading-relaxed">
        <p>
          In high school, support is everywhere. Teachers check in on you daily.
          Classes are small. You are reminded about homework, assessments, and
          exams. If you fall behind, someone notices and steps in.
        </p>

        <p>
          There is structure. There is accountability. There is consistent
          one-on-one guidance.
        </p>

        <p>Then university begins — and everything changes.</p>

        <p>
          University promises independence, flexibility, and freedom. But for
          many students, it also brings confusion and isolation. Lectures have
          hundreds of students. Consultations are limited or fully booked. You
          are expected to figure things out on your own.
        </p>

        <p>
          You might attend a lecture, take notes, and still walk out thinking,
          <em>“I do not actually understand what I am supposed to do.”</em>
        </p>

        <p>
          When you struggle, no one checks in. No one follows up. No one tracks
          your progress. This does not mean you are incapable — it means the
          support system disappeared.
        </p>

        <p>
          UniT exists to bring back what worked in high school, without taking
          away your independence. We provide consistent academic support,
          regular check-ins, and tutors who understand your course and
          assessments.
        </p>

        <p>
          Learning does not become easier at university. Expectations increase.
          What students need is not less help, but better and more consistent
          help.
        </p>

        <p class="font-semibold">
          UniT is here to make sure no student has to navigate university alone.
        </p>
      </div>
    </section>

    <!-- How It Works Steps -->
    <section class="space-y-10" aria-labelledby="how-it-works-heading">
      <h2
        id="how-it-works-heading"
        class="text-2xl md:text-3xl font-extrabold tracking-tight text-center"
      >
        Our Process
      </h2>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Step 1 -->
        <article
          class="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1 focus-within:shadow-lg"
        >
          <h3 class="text-lg font-bold mb-3">
            Step 1: Register for the Upcoming Semester
          </h3>
          <p class="text-sm opacity-80 leading-relaxed">
            Students register with UniT before or at the start of the semester.
            During registration, you tell us your university, degree, the
            subjects you need support with, how long each session should be, and
            how often you want support.
          </p>
        </article>

        <!-- Step 2 -->
        <article
          class="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1 focus-within:shadow-lg"
        >
          <h3 class="text-lg font-bold mb-3">
            Step 2: We Match You With the Right Tutor
          </h3>
          <p class="text-sm opacity-80 leading-relaxed">
            We carefully match you with a tutor who has completed the same
            subject, achieved a strong grade, and understands the structure,
            content, and assessment expectations.
          </p>
        </article>

        <!-- Step 3 -->
        <article
          class="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1 focus-within:shadow-lg"
        >
          <h3 class="text-lg font-bold mb-3">
            Step 3: Your Semester Schedule Is Set
          </h3>
          <p class="text-sm opacity-80 leading-relaxed">
            Once matched, we organise a consistent schedule for the entire
            semester. Sessions align with teaching weeks, assessments, and exams
            — creating routine and clarity from week one.
          </p>
        </article>

        <!-- Step 4 -->
        <article
          class="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1 focus-within:shadow-lg"
        >
          <h3 class="text-lg font-bold mb-3">
            Step 4: Ongoing One-on-One Support
          </h3>
          <p class="text-sm opacity-80 leading-relaxed">
            Across the semester, your tutor helps you understand weekly content,
            break down assignments early, build confidence, and develop
            effective study habits.
          </p>
        </article>

        <!-- Step 5 -->
        <article
          class="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1 focus-within:shadow-lg md:col-span-2 lg:col-span-2"
        >
          <h3 class="text-lg font-bold mb-3">
            Step 5: Supported Until the End of Semester
          </h3>
          <p class="text-sm opacity-80 leading-relaxed">
            UniT supports you throughout the entire semester — not just before
            exams or deadlines. We stay with you until the end, so you never
            feel stuck, lost, or behind.
          </p>
        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="text-center space-y-6">
      <h2 class="text-2xl font-bold">Ready for Consistent Support?</h2>
      <p class="opacity-80 max-w-xl mx-auto">
        University is demanding, but you don’t have to do it alone. UniT brings
        back structure, accountability, and guidance — without taking away your
        independence.
      </p>

      <div class="flex justify-center gap-4">
        <RouterLink to="/eoi?t=student" class="btn btn-primary">
          Become a Student
        </RouterLink>
        <RouterLink to="/eoi?t=tutor" class="btn btn-outline">
          Become a Tutor
        </RouterLink>
      </div>
    </section>
  </main>
</template>
