<script setup>
import PageShell from "../components/common/PageShell.vue";
</script>

<template>
  <PageShell
    title="Dashboard"
    subtitle="Quick view of EOIs, content and operational controls."
  >
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="surface rounded-2xl p-5">
        <div class="flex items-center justify-between">
          <div class="text-sm opacity-70">Tutor EOIs</div>
          <div class="badge badge-primary badge-outline">Live</div>
        </div>
        <div class="text-4xl font-extrabold mt-3">0</div>
        <div class="text-xs opacity-60 mt-1">Table view in next chunk</div>
      </div>

      <div class="surface rounded-2xl p-5">
        <div class="flex items-center justify-between">
          <div class="text-sm opacity-70">Student EOIs</div>
          <div class="badge badge-secondary badge-outline">Live</div>
        </div>
        <div class="text-4xl font-extrabold mt-3">0</div>
        <div class="text-xs opacity-60 mt-1">Table view in next chunk</div>
      </div>

      <div class="surface rounded-2xl p-5">
        <div class="flex items-center justify-between">
          <div class="text-sm opacity-70">Blog Posts</div>
          <div class="badge badge-accent badge-outline">Draft</div>
        </div>
        <div class="text-4xl font-extrabold mt-3">0</div>
        <div class="text-xs opacity-60 mt-1">CMS in later chunk</div>
      </div>
    </div>

    <div class="grid lg:grid-cols-12 gap-4 mt-6">
      <div class="lg:col-span-7 surface rounded-2xl p-5">
        <div class="text-lg font-bold">Operational checklist</div>
        <ul class="mt-3 space-y-2 opacity-80">
          <li class="flex gap-2">
            <span class="badge badge-outline">1</span>
            Build EOI tables with filters + status + notes
          </li>
          <li class="flex gap-2">
            <span class="badge badge-outline">2</span>
            Add opening toggles (enable/disable student/tutor intake)
          </li>
          <li class="flex gap-2">
            <span class="badge badge-outline">3</span>
            Add Blog CMS (draft → publish)
          </li>
        </ul>
      </div>

      <div class="lg:col-span-5 surface rounded-2xl p-5">
        <div class="text-lg font-bold">Security posture</div>
        <div class="mt-3 text-sm opacity-75 leading-relaxed">
          Admin access is allowlisted via Firestore
          <span class="font-mono">adminUsers/{uid}</span>. EOIs are
          readable/writable only by admin sessions.
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <span class="badge badge-success badge-outline">Auth required</span>
          <span class="badge badge-success badge-outline"
            >Allowlist enforced</span
          >
          <span class="badge badge-success badge-outline">Rules locked</span>
        </div>
      </div>
    </div>
  </PageShell>
</template>
