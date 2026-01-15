<script setup>
defineProps({
  id: { type: String, default: "" },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  tight: { type: Boolean, default: false },
});
</script>

<template>
  <section :id="id" :class="tight ? 'py-10 md:py-14' : 'section-pad'">
    <div class="container-max">
      <header v-if="title || subtitle" class="max-w-3xl">
        <h2
          v-if="title"
          class="text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          {{ title }}
        </h2>
        <p v-if="subtitle" class="mt-3 text-lg opacity-80 leading-relaxed">
          {{ subtitle }}
        </p>
      </header>

      <div class="mt-10">
        <slot />
      </div>
    </div>
  </section>
</template>
