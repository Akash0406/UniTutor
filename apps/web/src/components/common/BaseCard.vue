<script setup>
defineProps({
  variant: { type: String, default: "default" }, // default | soft
});
</script>

<template>
  <div
    class="rounded-3xl border border-base-300"
    :class="variant === 'soft' ? 'bg-base-200/60' : 'bg-base-100'"
  >
    <div class="p-6 md:p-8">
      <slot />
    </div>
  </div>
</template>
