<script setup>
defineProps({
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
});
</script>

<template>
  <div class="space-y-6">
    <header class="space-y-2">
      <h1 class="text-3xl sm:text-4xl font-black tracking-tight">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="opacity-70 leading-relaxed">
        {{ subtitle }}
      </p>
      <div class="h-px bg-base-300/50 mt-4"></div>
    </header>

    <slot />
  </div>
</template>
