<script setup>
import AdminNavbar from "../components/layout/AdminNavbar.vue";
import AdminSidebar from "../components/layout/AdminSidebar.vue";
</script>

<template>
  <div class="min-h-screen admin-bg">
    <AdminNavbar />

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8">
        <aside class="lg:col-span-3">
          <AdminSidebar />
        </aside>

        <main class="lg:col-span-9">
          <div class="surface rounded-2xl p-5 sm:p-6">
            <router-view />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
