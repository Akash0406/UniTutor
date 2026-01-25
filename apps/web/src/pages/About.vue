<script setup>
import SectionShell from "../components/common/SectionShell.vue";
import BaseCard from "../components/common/BaseCard.vue";
import logoUrl from "../assets/Logo.png";

const socials = [
  {
    label: "Facebook",
    handle: "@The University Tutor",
    href: "https://www.facebook.com/people/The-University-Tutor/61580055180861/",
    aria: "UniT on Facebook (opens in a new tab)",
    icon: "facebook",
  },
  {
    label: "Instagram",
    handle: "@theuniversitytutorofficial",
    href: "https://www.instagram.com/theuniversitytutorofficial/",
    aria: "UniT on Instagram (opens in a new tab)",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    handle: "@The University Tutor",
    href: "https://www.linkedin.com/company/the-university-tutor/",
    aria: "UniT on LinkedIn (opens in a new tab)",
    icon: "linkedin",
  },
];
</script>

<template>
  <SectionShell
    title="About & Contact"
    subtitle="UniT brings back structure, accountability, and consistent academic support — from Week 1 to finals."
  >
    <div class="relative">
      <div
        class="absolute -z-10 -right-10 -top-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        class="absolute -z-10 -left-10 -bottom-10 h-64 w-64 rounded-full bg-secondary/15 blur-3xl"
        aria-hidden="true"
      ></div>

      <div class="grid lg:grid-cols-12 gap-6 items-stretch">
        <!-- Left: Brand / Story -->
        <BaseCard
          variant="soft"
          class="lg:col-span-5 p-6 md:p-8 h-full flex flex-col shadow-sm transition hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl"
        >
          <div class="flex items-start gap-4">
            <img
              :src="logoUrl"
              alt="UniT logo"
              class="h-12 w-12 rounded-2xl object-contain bg-base-100/70 border border-base-300"
              width="48"
              height="48"
              loading="eager"
              decoding="async"
            />
            <div class="min-w-0">
              <h2 class="text-xl font-extrabold tracking-tight leading-snug">
                UniT <span class="opacity-70 font-semibold">—</span> The
                University Tutor
              </h2>
              <p class="mt-1 text-sm opacity-75 leading-relaxed max-w-sm">
                Consistent support that students lose after high school.
              </p>
            </div>
          </div>

          <div
            class="mt-6 space-y-4 text-sm md:text-base opacity-85 leading-relaxed"
          >
            <p>
              In high school, support is built into the system: reminders,
              check-ins, and structure. At university, you’re expected to
              recreate all of that yourself — and many students fall behind
              before anyone notices.
            </p>
            <p>
              UniT fills that gap with semester-long support and tutors who have
              excelled in the same subjects you’re studying.
            </p>
          </div>

          <div class="mt-auto pt-6">
            <div class="grid grid-cols-3 gap-3">
              <div
                class="rounded-2xl border border-base-300 bg-base-200/40 p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div class="text-xs opacity-70">Model</div>
                <div class="font-bold">Semester-long</div>
              </div>
              <div
                class="rounded-2xl border border-base-300 bg-base-200/40 p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div class="text-xs opacity-70">Matching</div>
                <div class="font-bold">Course-fit</div>
              </div>
              <div
                class="rounded-2xl border border-base-300 bg-base-200/40 p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div class="text-xs opacity-70">Focus</div>
                <div class="font-bold">Confidence</div>
              </div>
            </div>
          </div>
        </BaseCard>

        <!-- Right: Contact -->
        <BaseCard
          variant="soft"
          class="lg:col-span-7 p-6 md:p-8 h-full flex flex-col shadow-sm transition hover:shadow-xl hover:-translate-y-1 focus-within:shadow-xl"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <h2 class="text-xl font-extrabold tracking-tight">Contact</h2>
              <p class="mt-1 text-sm opacity-75">
                Reach out for partnerships, questions, or onboarding.
              </p>
            </div>
            <div class="badge badge-primary badge-outline">
              Response in 24–48h
            </div>
          </div>

          <div
            class="mt-6 rounded-2xl border border-base-300 bg-base-100/70 backdrop-blur p-5 shadow-sm"
            role="group"
            aria-label="Email contact"
          >
            <div class="text-sm font-semibold opacity-80">Email</div>
            <a
              class="mt-1 inline-flex items-start gap-2 text-base font-bold link link-primary break-all rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
              href="mailto:theuniversitytutorofficial@gmail.com"
              aria-label="Email UniT"
            >
              <span class="break-all"
                >theuniversitytutorofficial@gmail.com</span
              >
              <span class="opacity-60 mt-0.5" aria-hidden="true">↗</span>
            </a>
            <p class="mt-2 text-xs opacity-70">
              Please include your university, subject code(s), and availability.
            </p>
          </div>

          <div class="mt-6 grid sm:grid-cols-2 gap-4" aria-label="Social links">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.aria"
              class="group rounded-2xl border border-base-300 bg-base-100/70 backdrop-blur p-5 shadow-sm transition hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100 h-full min-h-[120px] flex flex-col"
            >
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <div class="text-sm font-semibold opacity-80">
                    {{ s.label }}
                  </div>
                  <div class="mt-1 font-bold leading-snug line-clamp-2">
                    {{ s.handle }}
                  </div>
                </div>

                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-base-300 bg-base-200/40 transition group-hover:bg-base-200/60"
                  aria-hidden="true"
                >
                  <svg
                    v-if="s.icon === 'facebook'"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13V9c0-.6.4-1 1-1Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    v-else-if="s.icon === 'instagram'"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 7h10v10H7V7Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5 7.5h.01"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                    <path
                      d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>

                  <svg
                    v-else
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9v12M6 6.5v.5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M10 21V9h4v2c.7-1.2 2-2 3.5-2 2.5 0 4.5 2 4.5 4.5V21h-4v-6.5c0-1.1-.9-2-2-2s-2 .9-2 2V21h-4Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <div class="mt-auto pt-3 text-xs opacity-70">
                Open {{ s.label }} profile
                <span
                  class="ml-1 inline-block transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                  >→</span
                >
              </div>
            </a>
          </div>

          <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <RouterLink to="/eoi?t=student" class="btn btn-primary w-full">
              Become a Student
            </RouterLink>

            <RouterLink to="/eoi?t=tutor" class="btn btn-outline w-full">
              Become a Tutor
            </RouterLink>
          </div>
        </BaseCard>
      </div>
    </div>
  </SectionShell>
</template>
