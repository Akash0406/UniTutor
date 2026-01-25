<script setup>
import { ref, computed } from "vue";
import { submitStudentEOI } from "../../services/studentEoi.service";

const fullName = ref("");
const email = ref("");
const phone = ref("");
const university = ref("");
const degree = ref("");
const unitsText = ref("");
const consent = ref(false);

const loading = ref(false);
const successMsg = ref("");
const errorMsg = ref("");

const formErrorId = "student-eoi-form-error";
const formSuccessId = "student-eoi-form-success";

const fullNameId = "student-full-name";
const emailId = "student-email";
const phoneId = "student-phone";
const universityId = "student-university";
const degreeId = "student-degree";
const unitsId = "student-units";
const unitsHelpId = "student-units-help";
const consentId = "student-consent";

const isBusy = computed(() => loading.value);

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
  consent.value = false;
}

async function submit() {
  resetMsgs();
  loading.value = true;

  try {
    const payload = {
      semester: "Semester 1, 2026",
      fullName: fullName.value,
      email: email.value,
      phone: phone.value,
      university: university.value,
      degree: degree.value,
      units: splitCSV(unitsText.value),
      consent: consent.value,
    };

    const res = await submitStudentEOI(payload);
    successMsg.value = res?.message || "Submitted successfully.";
    resetForm();
  } catch (e) {
    errorMsg.value = e?.message || "Something went wrong. Please try again.";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <form
    class="space-y-5"
    @submit.prevent="submit"
    :aria-busy="isBusy"
    :aria-describedby="
      errorMsg ? formErrorId : successMsg ? formSuccessId : undefined
    "
  >
    <div class="flex items-start justify-between gap-4">
      <div>
        <div class="text-xl md:text-2xl font-extrabold tracking-tight">
          Semester 1, 2026 Tutee Registration
        </div>
        <div class="mt-1 text-sm opacity-70">
          The University Tutor (UniT) supports you from day one of the semester
          to the very end. We match you with tutors who have previously excelled
          in the same course you’re studying and provide consistent guidance
          throughout the semester.
        </div>
      </div>
      <div class="badge badge-secondary badge-outline">2 minutes</div>
    </div>

    <div
      v-if="successMsg"
      class="alert alert-success"
      role="status"
      aria-live="polite"
      :id="formSuccessId"
    >
      <span>{{ successMsg }}</span>
    </div>
    <div
      v-if="errorMsg"
      class="alert alert-error"
      role="alert"
      aria-live="assertive"
      :id="formErrorId"
    >
      <span>{{ errorMsg }}</span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <label class="form-control w-full" :for="fullNameId">
        <div class="label"><span class="label-text">Full name</span></div>
        <input
          :id="fullNameId"
          v-model="fullName"
          class="input input-bordered w-full"
          placeholder="Your full name"
          autocomplete="name"
          required
        />
      </label>

      <label class="form-control w-full" :for="emailId">
        <div class="label"><span class="label-text">Email address</span></div>
        <input
          :id="emailId"
          v-model="email"
          class="input input-bordered w-full"
          placeholder="name@email.com"
          autocomplete="email"
          inputmode="email"
          required
        />
      </label>

      <label class="form-control w-full" :for="phoneId">
        <div class="label">
          <span class="label-text">Phone No (optional)</span>
        </div>
        <input
          :id="phoneId"
          v-model="phone"
          class="input input-bordered w-full"
          placeholder="+61..."
          autocomplete="tel"
          inputmode="tel"
        />
      </label>

      <label class="form-control w-full" :for="universityId">
        <div class="label"><span class="label-text">University</span></div>
        <input
          :id="universityId"
          v-model="university"
          class="input input-bordered w-full"
          placeholder="Monash University"
          required
        />
      </label>

      <label class="form-control w-full lg:col-span-2" :for="degreeId">
        <div class="label">
          <span class="label-text">Degree</span>
        </div>
        <input
          :id="degreeId"
          v-model="degree"
          class="input input-bordered w-full"
          placeholder="Bachelor of ..."
          required
        />
      </label>

      <label class="form-control w-full lg:col-span-2" :for="unitsId">
        <div class="label">
          <span class="label-text"
            >Subjects requiring help with in Semester 1, 2026 (comma
            separated)</span
          >
        </div>
        <input
          :id="unitsId"
          v-model="unitsText"
          class="input input-bordered w-full"
          placeholder="FIT2099, FIT5137"
          :aria-describedby="unitsHelpId"
          required
        />
        <div class="mt-2 text-xs opacity-60" :id="unitsHelpId">
          Add all subjects you want ongoing support with this semester.
        </div>
      </label>
    </div>

    <div class="flex items-start gap-3">
      <input
        :id="consentId"
        v-model="consent"
        type="checkbox"
        class="checkbox checkbox-secondary mt-1"
        required
      />
      <label :for="consentId" class="cursor-pointer">
        <span class="text-sm opacity-80 leading-relaxed">
          I consent to UniT storing my details to contact me about tutoring
          support.
        </span>
      </label>
    </div>

    <button
      class="btn btn-secondary btn-block"
      type="submit"
      :disabled="isBusy"
    >
      <span
        v-if="isBusy"
        class="loading loading-spinner"
        aria-hidden="true"
      ></span>
      <span>{{ loading ? "Submitting..." : "Submit Tutee Registration" }}</span>
    </button>

    <div class="text-xs opacity-60 text-center">
      We’ll review and contact you if we can match a tutor for your subjects.
    </div>
  </form>
</template>
