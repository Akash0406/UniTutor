<script setup>
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
  <div class="min-h-screen bg-base-100 text-base-content">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
