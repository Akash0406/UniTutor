<script setup>
import { computed, ref, watch } from "vue";
import EoiStatusBadge from "./EoiStatusBadge.vue";

const props = defineProps({
  title: { type: String, default: "EOIs" },
  items: { type: Array, default: () => [] },
  loading: { type: Boolean, default: false },
  canNext: { type: Boolean, default: false },
  canPrev: { type: Boolean, default: false },
});

const emit = defineEmits(["select", "next", "prev", "refresh"]);

const statusFilter = ref("all");
const q = ref("");

const filtered = computed(() => {
  const term = q.value.trim().toLowerCase();

  return props.items.filter((x) => {
    const statusOk =
      statusFilter.value === "all"
        ? true
        : (x.status || "new") === statusFilter.value;

    if (!statusOk) return false;

    if (!term) return true;

    const hay = [
      x.fullName,
      x.name,
      x.email,
      x.university,
      x.degree,
      x.units,
      x.unitsCsv,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return hay.includes(term);
  });
});

watch(
  () => props.items,
  () => {
    // keep filters as-is, but you can reset if you want
  },
);
</script>

<template>
  <div class="space-y-4">
    <div
      class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
    >
      <div>
        <div class="text-xs opacity-60">List</div>
        <h2 class="text-2xl font-extrabold tracking-tight">{{ title }}</h2>
      </div>

      <div class="flex flex-col sm:flex-row gap-2 sm:items-center">
        <input
          v-model="q"
          class="input input-bordered w-full sm:w-64"
          placeholder="Search name, email, university..."
        />

        <select
          v-model="statusFilter"
          class="select select-bordered w-full sm:w-44"
        >
          <option value="all">All statuses</option>
          <option value="new">new</option>
          <option value="in_review">in_review</option>
          <option value="shortlisted">shortlisted</option>
          <option value="rejected">rejected</option>
        </select>

        <button class="btn btn-ghost" type="button" @click="$emit('refresh')">
          Refresh
        </button>
      </div>
    </div>

    <div class="surface rounded-2xl overflow-hidden">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th class="hidden md:table-cell">University</th>
              <th>Status</th>
              <th class="hidden lg:table-cell">Created</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr v-if="loading">
              <td colspan="6">
                <div class="flex items-center gap-2">
                  <span class="loading loading-spinner"></span>
                  <span class="opacity-70">Loading...</span>
                </div>
              </td>
            </tr>

            <tr v-else-if="filtered.length === 0">
              <td colspan="6" class="opacity-70">No results.</td>
            </tr>

            <tr v-else v-for="row in filtered" :key="row.id" class="hover">
              <td class="font-medium">
                {{ row.fullName || row.name || "—" }}
              </td>
              <td class="opacity-80">{{ row.email || "—" }}</td>
              <td class="hidden md:table-cell opacity-80">
                {{ row.university || "—" }}
              </td>
              <td><EoiStatusBadge :status="row.status || 'new'" /></td>

              <td class="hidden lg:table-cell opacity-70">
                {{
                  row.createdAt?.toDate
                    ? row.createdAt.toDate().toLocaleString()
                    : "—"
                }}
              </td>

              <td class="text-right">
                <button
                  class="btn btn-sm btn-outline rounded-full"
                  @click="$emit('select', row)"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="flex items-center justify-between p-3 border-t border-base-300/40"
      >
        <div class="text-xs opacity-60">
          Tip: Search is applied to the currently loaded page (fast + simple).
        </div>

        <div class="flex gap-2">
          <button
            class="btn btn-sm rounded-full"
            :disabled="!canPrev || loading"
            @click="$emit('prev')"
          >
            Prev
          </button>
          <button
            class="btn btn-sm btn-primary rounded-full"
            :disabled="!canNext || loading"
            @click="$emit('next')"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
