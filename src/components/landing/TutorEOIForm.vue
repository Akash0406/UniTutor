<script setup>
import { ref } from "vue";
import { submitTutorEOI } from "../../services/tutorEoi.service";
import { useFormStatus } from "../../composables/useFormStatus";

const fullName = ref("");
const email = ref("");
const phone = ref("");
const university = ref("");
const degree = ref("");
const unitsText = ref("");
const expertiseText = ref("");
const tutoringMode = ref("Online");
const availability = ref("");
const experienceSummary = ref("");
const linkedInUrl = ref("");
const resumeUrl = ref("");
const consent = ref(false);

const { loading, successMsg, errorMsg, fieldIssues, resetMessages } =
  useFormStatus();

function splitCSV(text) {
  return text
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function resetForm() {
  fullName.value = "";
  email.value = "";
  phone.value = "";
  university.value = "";
  degree.value = "";
  unitsText.value = "";
  expertiseText.value = "";
  tutoringMode.value = "Online";
  availability.value = "";
  experienceSummary.value = "";
  linkedInUrl.value = "";
  resumeUrl.value = "";
  consent.value = false;
}

async function submit() {
  resetMessages();
  loading.value = true;

  try {
    const payload = {
      fullName: fullName.value,
      email: email.value,
      phone: phone.value,
      university: university.value,
      degree: degree.value,
      units: splitCSV(unitsText.value),
      expertiseAreas: splitCSV(expertiseText.value),
      tutoringMode: tutoringMode.value,
      availability: availability.value,
      experienceSummary: experienceSummary.value,
      linkedInUrl: linkedInUrl.value,
      resumeUrl: resumeUrl.value,
      consent: consent.value,
    };

    const data = await submitTutorEOI(payload);
    successMsg.value = data?.message || "Submitted successfully";
    resetForm();
  } catch (err) {
    // Callable function errors typically surface via err.message + err.details
    const details = err?.details;
    errorMsg.value =
      details?.message ||
      err?.message ||
      "Something went wrong. Please try again.";
    fieldIssues.value = details?.issues || [];
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="submit">
    <div class="flex items-center justify-between">
      <h3 class="text-xl font-extrabold">Tutor EOI Form</h3>
      <div class="badge badge-primary badge-outline">2 minutes</div>
    </div>

    <div v-if="successMsg" class="alert alert-success">
      <span>{{ successMsg }}</span>
    </div>

    <div v-if="errorMsg" class="alert alert-error">
      <span>{{ errorMsg }}</span>
    </div>

    <div v-if="fieldIssues.length" class="text-sm opacity-80">
      <ul class="list-disc pl-5">
        <li v-for="(i, idx) in fieldIssues" :key="idx">
          <span class="font-semibold">{{ i.path?.join(".") }}</span
          >: {{ i.message }}
        </li>
      </ul>
    </div>

    <div class="grid md:grid-cols-2 gap-3">
      <label class="form-control">
        <div class="label"><span class="label-text">Full name</span></div>
        <input
          v-model="fullName"
          class="input input-bordered"
          placeholder="Your name"
        />
      </label>

      <label class="form-control">
        <div class="label"><span class="label-text">Email</span></div>
        <input
          v-model="email"
          class="input input-bordered"
          placeholder="name@email.com"
        />
      </label>
    </div>

    <div class="grid md:grid-cols-2 gap-3">
      <label class="form-control">
        <div class="label">
          <span class="label-text">Phone (optional)</span>
        </div>
        <input
          v-model="phone"
          class="input input-bordered"
          placeholder="+61..."
        />
      </label>

      <label class="form-control">
        <div class="label"><span class="label-text">Tutoring mode</span></div>
        <select v-model="tutoringMode" class="select select-bordered">
          <option>Online</option>
          <option>On-campus</option>
          <option>Both</option>
        </select>
      </label>
    </div>

    <div class="grid md:grid-cols-2 gap-3">
      <label class="form-control">
        <div class="label"><span class="label-text">University</span></div>
        <input
          v-model="university"
          class="input input-bordered"
          placeholder="Monash University"
        />
      </label>

      <label class="form-control">
        <div class="label">
          <span class="label-text">Degree (optional)</span>
        </div>
        <input
          v-model="degree"
          class="input input-bordered"
          placeholder="Master of IT"
        />
      </label>
    </div>

    <label class="form-control">
      <div class="label">
        <span class="label-text">Units you can tutor (comma separated)</span>
      </div>
      <input
        v-model="unitsText"
        class="input input-bordered"
        placeholder="FIT2099, FIT5137"
      />
    </label>

    <label class="form-control">
      <div class="label">
        <span class="label-text">Expertise areas (comma separated)</span>
      </div>
      <input
        v-model="expertiseText"
        class="input input-bordered"
        placeholder="Databases, Web Development"
      />
    </label>

    <label class="form-control">
      <div class="label"><span class="label-text">Availability</span></div>
      <textarea
        v-model="availability"
        class="textarea textarea-bordered min-h-[120px]"
        placeholder="Days/times you can tutor, timezone, preferred session length"
      />
    </label>

    <label class="form-control">
      <div class="label">
        <span class="label-text">Experience summary (optional)</span>
      </div>
      <textarea
        v-model="experienceSummary"
        class="textarea textarea-bordered min-h-[90px]"
        placeholder="Tutoring, mentoring, grades, projects, teaching experience"
      />
    </label>

    <div class="grid md:grid-cols-2 gap-3">
      <label class="form-control">
        <div class="label">
          <span class="label-text">LinkedIn URL (optional)</span>
        </div>
        <input
          v-model="linkedInUrl"
          class="input input-bordered"
          placeholder="https://linkedin.com/in/..."
        />
      </label>

      <label class="form-control">
        <div class="label">
          <span class="label-text">Resume URL (optional)</span>
        </div>
        <input
          v-model="resumeUrl"
          class="input input-bordered"
          placeholder="https://drive.google.com/..."
        />
      </label>
    </div>

    <label class="cursor-pointer flex items-start gap-3">
      <input
        v-model="consent"
        type="checkbox"
        class="checkbox checkbox-primary mt-1"
      />
      <span class="text-sm opacity-80">
        I consent to UniT storing my details for tutor recruitment and
        contacting me about next steps.
      </span>
    </label>

    <button class="btn btn-primary btn-block" type="submit" :disabled="loading">
      <span v-if="loading" class="loading loading-spinner"></span>
      <span>{{
        loading ? "Submitting..." : "Submit Expression of Interest"
      }}</span>
    </button>

    <p class="text-xs opacity-60 text-center">
      We will review and contact you if your profile matches upcoming demand.
    </p>
  </form>
</template>
