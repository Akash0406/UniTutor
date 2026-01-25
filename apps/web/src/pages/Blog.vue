<script setup>
import { useRouter } from "vue-router";
import SectionShell from "../components/common/SectionShell.vue";
import BaseCard from "../components/common/BaseCard.vue";

const router = useRouter();

const posts = [
  {
    slug: "consistent-tutoring-vs-one-off",
    title: "Consistent tutoring vs one-off sessions",
    excerpt:
      "Why recurring support builds confidence, clarity, and better outcomes.",
    date: "2026-01-15",
  },
  {
    slug: "course-fit-matters",
    title: "Course-fit matters more than generic tutoring",
    excerpt: "How tutoring improves when the tutor has done the exact unit.",
    date: "2026-01-18",
  },
];

function openPost(slug) {
  router.push(`/blog/${slug}`);
}
</script>

<template>
  <SectionShell
    title="Blog"
    subtitle="Ideas, study strategy, and how UniT is building a better support model."
  >
    <div class="grid md:grid-cols-2 gap-4">
      <BaseCard v-for="p in posts" :key="p.slug" variant="soft">
        <div class="text-sm opacity-70">{{ p.date }}</div>
        <div class="mt-1 text-xl font-extrabold">{{ p.title }}</div>
        <p class="mt-2 opacity-80">{{ p.excerpt }}</p>
        <button class="btn btn-secondary mt-4" @click="openPost(p.slug)">
          Read
        </button>
      </BaseCard>
    </div>
  </SectionShell>
</template>
