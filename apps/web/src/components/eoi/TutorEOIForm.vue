<script setup>
import { ref, computed } from "vue";
import { submitTutorEOI } from "../../services/tutorEoi.service";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const fullName = ref("");
const email = ref("");
const phone = ref("");
const university = ref("");
const degree = ref("");
const unitsText = ref("");
const tutoringMode = ref("Online");
const consent = ref(false);

const academicRecordFile = ref(null);
const academicRecordUrl = ref("");

const loading = ref(false);
const uploading = ref(false);
const successMsg = ref("");
const errorMsg = ref("");

const formErrorId = "tutor-eoi-form-error";
const formSuccessId = "tutor-eoi-form-success";

const fullNameId = "tutor-full-name";
const emailId = "tutor-email";
const phoneId = "tutor-phone";
const tutoringModeId = "tutor-mode";
const universityId = "tutor-university";
const degreeId = "tutor-degree";
const unitsId = "tutor-units";
const unitsHelpId = "tutor-units-help";
const academicFileId = "tutor-academic-record";
const academicHelpId = "tutor-academic-help";
const consentId = "tutor-consent";

const isBusy = computed(() => loading.value || uploading.value);

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

function onPickFile(e) {
  const f = e?.target?.files?.[0] || null;
  academicRecordFile.value = f;
  academicRecordUrl.value = "";
}

async function uploadAcademicRecord() {
  if (!academicRecordFile.value) return "";

  uploading.value = true;
  try {
    const storage = getStorage();
    const safeEmail = (email.value || "unknown")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9@._-]/g, "");
    const safeName = (fullName.value || "tutor")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9._-]/g, "");
    const ext = academicRecordFile.value.name.split(".").pop() || "file";
    const path = `tutor-eoi/semester-1-2026/${safeEmail}/${Date.now()}-${safeName}.${ext}`;
    const fileRef = storageRef(storage, path);

    await uploadBytes(fileRef, academicRecordFile.value, {
      contentType: academicRecordFile.value.type || "application/octet-stream",
    });

    const url = await getDownloadURL(fileRef);
    academicRecordUrl.value = url;
    return url;
  } catch (e) {
    errorMsg.value = "Upload failed. Please try again.";
    return "";
  } finally {
    uploading.value = false;
  }
}

async function submit() {
  resetMsgs();
  loading.value = true;

  try {
    if (!academicRecordFile.value) {
      errorMsg.value = "Please upload your academic record before submitting.";
      return;
    }

    let recordUrl = academicRecordUrl.value;
    if (!recordUrl) {
      recordUrl = await uploadAcademicRecord();
    }

    if (!recordUrl || !/^https?:\/\/.+/i.test(recordUrl)) {
      errorMsg.value = "Upload failed. Please try again.";
      return;
    }

    const payload = {
      semester: "Semester 1, 2026",
      fullName: fullName.value,
      email: email.value,
      phone: phone.value,
      university: university.value,
      degree: degree.value,
      units: splitCSV(unitsText.value),
      tutoringMode: tutoringMode.value,
      academicRecordUrl: recordUrl,
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
          Tutor Registration — Semester 1, 2026
        </div>
        <div class="mt-1 text-sm opacity-70">
          UniT connects you with students in subjects you’ve previously excelled
          in, so you can tutor consistently throughout the semester.
        </div>
      </div>
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

      <label class="form-control w-full" :for="tutoringModeId">
        <div class="label"><span class="label-text">Tutoring mode</span></div>
        <select
          :id="tutoringModeId"
          v-model="tutoringMode"
          class="select select-bordered w-full"
          required
        >
          <option>Online</option>
          <option>In person</option>
          <option>Hybrid</option>
        </select>
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

      <label class="form-control w-full" :for="degreeId">
        <div class="label"><span class="label-text">Degree</span></div>
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
            >Subjects looking to tutor in Semester 1, 2026 (comma
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
          Note: You must have achieved a grade of 7 in the course to be eligible
          to tutor it.
        </div>
      </label>

      <label class="form-control w-full lg:col-span-2" :for="academicFileId">
        <div class="label">
          <span class="label-text"
            >Academic records for verification (required)</span
          >
        </div>
        <input
          :id="academicFileId"
          type="file"
          class="file-input file-input-bordered w-full"
          accept=".pdf,.jpg,.jpeg,.png"
          @change="onPickFile"
          :aria-describedby="academicHelpId"
          required
        />
        <div class="mt-2 text-xs opacity-60" :id="academicHelpId">
          Records are kept private and used for verification purposes only.
        </div>
      </label>
    </div>

    <div class="flex items-start gap-3">
      <input
        :id="consentId"
        v-model="consent"
        type="checkbox"
        class="checkbox checkbox-primary mt-1"
        required
      />
      <label :for="consentId" class="cursor-pointer">
        <span class="text-sm opacity-80 leading-relaxed">
          I consent to UniT storing my details for tutor recruitment and
          contacting me about next steps.
        </span>
      </label>
    </div>

    <button class="btn btn-primary btn-block" type="submit" :disabled="isBusy">
      <span
        v-if="isBusy"
        class="loading loading-spinner"
        aria-hidden="true"
      ></span>
      <span>{{
        uploading
          ? "Uploading..."
          : loading
            ? "Submitting..."
            : "Submit Expression of Interest"
      }}</span>
    </button>

    <div class="text-xs opacity-60 text-center">
      We will review and contact you if your profile matches Semester 1, 2026
      demand.
    </div>
  </form>
</template>
