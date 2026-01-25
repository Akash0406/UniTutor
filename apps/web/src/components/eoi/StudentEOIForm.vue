<script setup>
import { ref } from "vue";
import { submitStudentEOI } from "../../services/studentEoi.service";

const fullName = ref("");
const email = ref("");
const phone = ref("");
const university = ref("");
const degree = ref("");
const unitsText = ref("");
const availability = ref("");
const goals = ref("");
const consent = ref(false);

const loading = ref(false);
const successMsg = ref("");
const errorMsg = ref("");

function splitCSV(text) {
  return text
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function resetMsgs() {
  successMsg.value = "";
  errorMsg.value = "";
}

function resetForm() {
  fullName.value = "";
  email.value = "";
  phone.value = "";
  university.value = "";
  degree.value = "";
  unitsText.value = "";
  availability.value = "";
  goals.value = "";
  consent.value = false;
}

async function submit() {
  resetMsgs();
  loading.value = true;

  try {
    const payload = {
      fullName: fullName.value,
      email: email.value,
      phone: phone.value,
      university: university.value,
      degree: degree.value,
      units: splitCSV(unitsText.value),
      availability: availability.value,
      goals: goals.value,
      consent: consent.value,
    };

    const res = await submitStudentEOI(payload);
    successMsg.value = res?.message || "Submitted successfully.";
    resetForm();
  } catch (e) {
    // Callable errors can be wrapped; show the safest message
    errorMsg.value = e?.message || "Something went wrong. Please try again.";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="submit">
    <div class="flex items-start justify-between gap-4">
      <div>
        <div class="text-xl md:text-2xl font-extrabold tracking-tight">
          Student EOI Form
        </div>
        <div class="mt-1 text-sm opacity-70">
          Register interest and we’ll reach out when support is available.
        </div>
      </div>
      <div class="badge badge-secondary badge-outline">2 minutes</div>
    </div>

    <div v-if="successMsg" class="alert alert-success">
      <span>{{ successMsg }}</span>
    </div>
    <div v-if="errorMsg" class="alert alert-error">
      <span>{{ errorMsg }}</span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <label class="form-control w-full">
        <div class="label"><span class="label-text">Full name</span></div>
        <input
          v-model="fullName"
          class="input input-bordered w-full"
          placeholder="Your name"
          autocomplete="name"
        />
      </label>

      <label class="form-control w-full">
        <div class="label"><span class="label-text">Email</span></div>
        <input
          v-model="email"
          class="input input-bordered w-full"
          placeholder="name@email.com"
          autocomplete="email"
        />
      </label>

      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Phone (optional)</span>
        </div>
        <input
          v-model="phone"
          class="input input-bordered w-full"
          placeholder="+61..."
          autocomplete="tel"
        />
      </label>

      <label class="form-control w-full">
        <div class="label"><span class="label-text">University</span></div>
        <input
          v-model="university"
          class="input input-bordered w-full"
          placeholder="Monash University"
        />
      </label>

      <label class="form-control w-full lg:col-span-2">
        <div class="label">
          <span class="label-text">Degree (optional)</span>
        </div>
        <input
          v-model="degree"
          class="input input-bordered w-full"
          placeholder="Master of IT"
        />
      </label>

      <label class="form-control w-full lg:col-span-2">
        <div class="label">
          <span class="label-text"
            >Units you need help with (comma separated)</span
          >
        </div>
        <input
          v-model="unitsText"
          class="input input-bordered w-full"
          placeholder="FIT2099, FIT5137"
        />
      </label>

      <label class="form-control w-full lg:col-span-2">
        <div class="label"><span class="label-text">Availability</span></div>
        <textarea
          v-model="availability"
          class="textarea textarea-bordered w-full min-h-[120px]"
          placeholder="Days/times, timezone, preferred session length"
        />
      </label>

      <label class="form-control w-full lg:col-span-2">
        <div class="label">
          <span class="label-text">Goals / what you need help with</span>
        </div>
        <textarea
          v-model="goals"
          class="textarea textarea-bordered w-full min-h-[120px]"
          placeholder="Assignments, weekly learning, exam prep..."
        />
      </label>
    </div>

    <label class="cursor-pointer flex items-start gap-3">
      <input
        v-model="consent"
        type="checkbox"
        class="checkbox checkbox-secondary mt-1"
      />
      <span class="text-sm opacity-80 leading-relaxed">
        I consent to UniT storing my details to contact me about tutoring
        support.
      </span>
    </label>

    <button
      class="btn btn-secondary btn-block"
      type="submit"
      :disabled="loading"
    >
      <span v-if="loading" class="loading loading-spinner"></span>
      <span>{{ loading ? "Submitting..." : "Submit Student EOI" }}</span>
    </button>

    <div class="text-xs opacity-60 text-center">
      We’ll review and contact you if we can match a tutor for your unit.
    </div>
  </form>
</template>
