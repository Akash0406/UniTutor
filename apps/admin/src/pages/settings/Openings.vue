<script setup>
import { ref } from "vue";
import PageShell from "../../components/common/PageShell.vue";
import {
  getPublicSettings,
  updateOpenings,
} from "../../services/settings.service";

const loading = ref(true);
const saving = ref(false);

const tutorOpen = ref(true);
const studentOpen = ref(true);
const updatedAt = ref(null);
const errorMsg = ref("");

async function load() {
  loading.value = true;
  errorMsg.value = "";
  try {
    const data = await getPublicSettings();

    tutorOpen.value = data?.openings?.tutorOpen ?? true;
    studentOpen.value = data?.openings?.studentOpen ?? true;

    updatedAt.value = data?.updatedAt?.toDate ? data.updatedAt.toDate() : null;
  } catch (e) {
    errorMsg.value = e?.message || "Failed to load settings";
  } finally {
    loading.value = false;
  }
}

async function save() {
  saving.value = true;
  errorMsg.value = "";
  try {
    await updateOpenings({
      tutorOpen: tutorOpen.value,
      studentOpen: studentOpen.value,
    });
    await load();
  } catch (e) {
    errorMsg.value = e?.message || "Failed to save settings";
  } finally {
    saving.value = false;
  }
}

load();
</script>

<template>
  <PageShell
    title="Openings"
    subtitle="Control whether new Student/Tutor EOIs are accepting submissions."
  >
    <div v-if="errorMsg" class="alert alert-error">
      <span class="text-sm">{{ errorMsg }}</span>
    </div>

    <div v-if="loading" class="surface rounded-2xl p-5">
      <div class="flex items-center gap-2">
        <span class="loading loading-spinner"></span>
        <span class="opacity-70">Loading settings...</span>
      </div>
    </div>

    <div v-else class="grid lg:grid-cols-12 gap-4">
      <div class="lg:col-span-7 surface rounded-2xl p-5">
        <div class="text-lg font-extrabold tracking-tight">Intake toggles</div>
        <p class="text-sm opacity-70 mt-1">
          These flags can be used by the public site (Career page) to show
          “Open/Closed”.
        </p>

        <div class="mt-5 space-y-4">
          <div
            class="flex items-center justify-between gap-4 p-4 rounded-2xl border border-base-300/40 bg-base-100/40"
          >
            <div>
              <div class="font-semibold">Tutor intake</div>
              <div class="text-sm opacity-70">
                Allow new tutor expressions of interest.
              </div>
            </div>
            <input
              v-model="tutorOpen"
              type="checkbox"
              class="toggle toggle-primary"
            />
          </div>

          <div
            class="flex items-center justify-between gap-4 p-4 rounded-2xl border border-base-300/40 bg-base-100/40"
          >
            <div>
              <div class="font-semibold">Student intake</div>
              <div class="text-sm opacity-70">
                Allow new student expressions of interest.
              </div>
            </div>
            <input
              v-model="studentOpen"
              type="checkbox"
              class="toggle toggle-secondary"
            />
          </div>

          <button
            class="btn btn-primary rounded-xl w-full"
            :disabled="saving"
            @click="save"
          >
            <span v-if="saving" class="loading loading-spinner"></span>
            <span>{{ saving ? "Saving..." : "Save changes" }}</span>
          </button>

          <div class="text-xs opacity-60">
            Last updated:
            <span class="font-medium">
              {{ updatedAt ? updatedAt.toLocaleString() : "—" }}
            </span>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 surface rounded-2xl p-5">
        <div class="text-lg font-extrabold tracking-tight">
          How this will be used
        </div>

        <ol class="mt-3 space-y-2 opacity-80 text-sm">
          <li>
            <span class="badge badge-outline mr-2">1</span> Landing reads
            <span class="font-mono">settings/public</span>
          </li>
          <li>
            <span class="badge badge-outline mr-2">2</span> Career page shows
            “Open/Closed”
          </li>
          <li>
            <span class="badge badge-outline mr-2">3</span> If closed: disable
            submit buttons + show message
          </li>
        </ol>

        <div class="mt-4 text-xs opacity-60 leading-relaxed">
          Security: Public can only read this single public settings doc.
          Admin-only users can update it.
        </div>
      </div>
    </div>
  </PageShell>
</template>
