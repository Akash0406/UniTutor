<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import SectionShell from "../components/common/SectionShell.vue";

const route = useRoute();
const slug = computed(() => route.params.slug);

const content = computed(() => {
  if (slug.value === "consistent-tutoring-vs-one-off") {
    return {
      title: "Consistent tutoring vs one-off sessions",
      body: "One-off tutoring is reactive. Consistent tutoring is proactive: it builds momentum, fixes gaps early, and reduces panic near deadlines.",
    };
  }
  if (slug.value === "course-fit-matters") {
    return {
      title: "Course-fit matters more than generic tutoring",
      body: "When the tutor has completed the same unit, they understand assessments, common pitfalls, and the exact learning path.",
    };
  }
  return {
    title: "Post not found",
    body: "This post does not exist.",
  };
});
</script>

<template>
  <SectionShell :title="content.title" subtitle="">
    <div class="prose max-w-none">
      <p class="opacity-80 leading-relaxed">{{ content.body }}</p>
    </div>
  </SectionShell>
</template>
