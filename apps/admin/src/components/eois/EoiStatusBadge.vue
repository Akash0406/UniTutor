<script setup>
const props = defineProps({
  status: { type: String, default: "new" },
});

function badgeClass(s) {
  switch (s) {
    case "new":
      return "badge badge-primary badge-outline";
    case "in_review":
      return "badge badge-secondary badge-outline";
    case "shortlisted":
      return "badge badge-success badge-outline";
    case "rejected":
      return "badge badge-error badge-outline";
    default:
      return "badge badge-outline";
  }
}

function label(s) {
  if (!s) return "—";
  return s.replaceAll("_", " ");
}
</script>

<template>
  <span :class="badgeClass(props.status)">
    {{ label(props.status) }}
  </span>
</template>
