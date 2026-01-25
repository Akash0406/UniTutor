<script setup>
import { ref } from "vue";
import { submitTutorEOI } from "../../services/tutorEoi.service";

const fullName = ref("");
const email = ref("");
const phone = ref("");
const tutoringMode = ref("Online");
const university = ref("");
const degree = ref("");
const unitsText = ref("");
const expertiseText = ref("");
const availability = ref("");
const experience = ref("");
const linkedInUrl = ref("");
const resumeUrl = ref("");
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

async function submit() {
  resetMsgs();
  loading.value = true;

  try {
    const payload = {
      fullName: fullName.value,
      email: email.value,
      phone: phone.value,
      tutoringMode: tutoringMode.value,
      university: university.value,
      degree: degree.value,
      units: splitCSV(unitsText.value),
      expertiseAreas: splitCSV(expertiseText.value),
      availability: availability.value,
      experienceSummary: experience.value,
      linkedInUrl: linkedInUrl.value,
      resumeUrl: resumeUrl.value,
      consent: consent.value,
    };

    const res = await submitTutorEOI(payload);
    successMsg.value = res?.message || "Submitted successfully.";
  } catch (e) {
    errorMsg.value = e?.message || "Something went wrong. Please try again.";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="submit">
    <!-- Header -->
    <div class="flex items-start justify-between gap-4">
      <div>
        <div class="text-xl md:text-2xl font-extrabold tracking-tight">
          Tutor EOI Form
        </div>
        <div class="mt-1 text-sm opacity-70">
          Fill in the basics — we’ll contact you if your profile matches demand.
        </div>
      </div>
      <div class="badge badge-primary badge-outline">2 minutes</div>
    </div>

    <div v-if="successMsg" class="alert alert-success">
      <span>{{ successMsg }}</span>
    </div>
    <div v-if="errorMsg" class="alert alert-error">
      <span>{{ errorMsg }}</span>
    </div>

    <!-- Form grid: stable across breakpoints -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- Full name -->
      <label class="form-control w-full">
        <div class="label"><span class="label-text">Full name</span></div>
        <input
          v-model="fullName"
          class="input input-bordered w-full"
          placeholder="Your name"
          autocomplete="name"
        />
      </label>

      <!-- Email -->
      <label class="form-control w-full">
        <div class="label"><span class="label-text">Email</span></div>
        <input
          v-model="email"
          class="input input-bordered w-full"
          placeholder="name@email.com"
          autocomplete="email"
        />
      </label>

      <!-- Phone -->
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

      <!-- Mode -->
      <label class="form-control w-full">
        <div class="label"><span class="label-text">Tutoring mode</span></div>
        <select v-model="tutoringMode" class="select select-bordered w-full">
          <option>Online</option>
          <option>On-campus</option>
          <option>Hybrid</option>
        </select>
      </label>

      <!-- University -->
      <label class="form-control w-full">
        <div class="label"><span class="label-text">University</span></div>
        <input
          v-model="university"
          class="input input-bordered w-full"
          placeholder="Monash University"
        />
      </label>

      <!-- Degree -->
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Degree (optional)</span>
        </div>
        <input
          v-model="degree"
          class="input input-bordered w-full"
          placeholder="Master of IT"
        />
      </label>

      <!-- Units (span full width for stability) -->
      <label class="form-control w-full lg:col-span-2">
        <div class="label">
          <span class="label-text">Units you can tutor (comma separated)</span>
        </div>
        <input
          v-model="unitsText"
          class="input input-bordered w-full"
          placeholder="FIT2099, FIT5137"
        />
      </label>

      <!-- Expertise -->
      <label class="form-control w-full lg:col-span-2">
        <div class="label">
          <span class="label-text">Expertise areas (comma separated)</span>
        </div>
        <input
          v-model="expertiseText"
          class="input input-bordered w-full"
          placeholder="Databases, Web Development"
        />
      </label>

      <!-- Availability (full width) -->
      <label class="form-control w-full lg:col-span-2">
        <div class="label"><span class="label-text">Availability</span></div>
        <textarea
          v-model="availability"
          class="textarea textarea-bordered w-full min-h-[120px]"
          placeholder="Days/times you can tutor, timezone, preferred session length"
        />
      </label>

      <!-- Experience -->
      <label class="form-control w-full lg:col-span-2">
        <div class="label">
          <span class="label-text">Experience summary (optional)</span>
        </div>
        <textarea
          v-model="experience"
          class="textarea textarea-bordered w-full min-h-[120px]"
          placeholder="Tutoring, mentoring, grades, projects, teaching experience"
        />
      </label>

      <!-- LinkedIn -->
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">LinkedIn URL (optional)</span>
        </div>
        <input
          v-model="linkedInUrl"
          class="input input-bordered w-full"
          placeholder="https://linkedin.com/in/..."
        />
      </label>

      <!-- Resume -->
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Resume URL (optional)</span>
        </div>
        <input
          v-model="resumeUrl"
          class="input input-bordered w-full"
          placeholder="https://drive.google.com/..."
        />
      </label>
    </div>

    <!-- Consent -->
    <label class="cursor-pointer flex items-start gap-3">
      <input
        v-model="consent"
        type="checkbox"
        class="checkbox checkbox-primary mt-1"
      />
      <span class="text-sm opacity-80 leading-relaxed">
        I consent to UniT storing my details for tutor recruitment and
        contacting me about next steps.
      </span>
    </label>

    <!-- Submit -->
    <button class="btn btn-primary btn-block" type="submit" :disabled="loading">
      <span v-if="loading" class="loading loading-spinner"></span>
      <span>{{
        loading ? "Submitting..." : "Submit Expression of Interest"
      }}</span>
    </button>

    <div class="text-xs opacity-60 text-center">
      We will review and contact you if your profile matches upcoming demand.
    </div>
  </form>
</template>
