<script setup>
import { ref, watch } from "vue";
import EoiStatusBadge from "./EoiStatusBadge.vue";

const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, default: "EOI" },
  item: { type: Object, default: null },
  saving: { type: Boolean, default: false },
});

const emit = defineEmits(["close", "save"]);

const status = ref("new");
const internalNote = ref("");

watch(
  () => props.item,
  (v) => {
    status.value = v?.status || "new";
    internalNote.value = v?.internalNote || "";
  },
  { immediate: true },
);

function onSave() {
  emit("save", {
    status: status.value,
    internalNote: internalNote.value,
  });
}
</script>

<template>
  <div v-if="open" class="fixed inset-0 z-50">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/40" @click="$emit('close')"></div>

    <!-- Panel -->
    <div
      class="absolute right-0 top-0 h-full w-full max-w-xl surface rounded-l-3xl p-5 overflow-y-auto"
    >
      <div class="flex items-start justify-between gap-4">
        <div>
          <div class="text-xs opacity-60">Details</div>
          <h2 class="text-xl font-extrabold tracking-tight">{{ title }}</h2>
          <div class="mt-2">
            <EoiStatusBadge :status="item?.status || 'new'" />
          </div>
        </div>

        <button
          class="btn btn-ghost btn-sm rounded-full"
          @click="$emit('close')"
        >
          Close
        </button>
      </div>

      <div class="h-px bg-base-300/50 my-5"></div>

      <!-- Admin actions -->
      <div class="space-y-4">
        <div class="grid sm:grid-cols-2 gap-3">
          <label class="form-control w-full">
            <div class="label"><span class="label-text">Status</span></div>
            <select v-model="status" class="select select-bordered w-full">
              <option value="new">new</option>
              <option value="in_review">in_review</option>
              <option value="shortlisted">shortlisted</option>
              <option value="rejected">rejected</option>
            </select>
          </label>

          <div class="text-sm opacity-70 sm:pt-9">
            Update status as you process applications.
          </div>
        </div>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Internal notes</span>
          </div>
          <textarea
            v-model="internalNote"
            class="textarea textarea-bordered min-h-[120px]"
            placeholder="Private notes (only admin can see)"
          ></textarea>
        </label>

        <button
          class="btn btn-primary w-full rounded-xl"
          :disabled="saving"
          @click="onSave"
        >
          <span v-if="saving" class="loading loading-spinner"></span>
          <span>{{ saving ? "Saving..." : "Save changes" }}</span>
        </button>
      </div>

      <div class="h-px bg-base-300/50 my-6"></div>

      <!-- Raw info -->
      <div class="space-y-3">
        <div class="text-sm font-bold">Submission</div>

        <div v-if="item" class="space-y-2 text-sm">
          <div class="grid grid-cols-3 gap-2">
            <div class="opacity-60">Name</div>
            <div class="col-span-2">
              {{ item.fullName || item.name || "—" }}
            </div>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <div class="opacity-60">Email</div>
            <div class="col-span-2">{{ item.email || "—" }}</div>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <div class="opacity-60">Phone</div>
            <div class="col-span-2">{{ item.phone || "—" }}</div>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <div class="opacity-60">University</div>
            <div class="col-span-2">{{ item.university || "—" }}</div>
          </div>

          <!-- Show extra fields without being strict -->
          <div class="mt-3 text-xs opacity-60">Raw JSON</div>
          <pre
            class="text-xs whitespace-pre-wrap bg-base-200/40 rounded-xl p-3 border border-base-300/40"
            >{{ item }}</pre
          >
        </div>
      </div>
    </div>
  </div>
</template>
