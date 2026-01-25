<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const router = useRouter();
const route = useRoute();

const email = ref("");
const password = ref("");
const loading = ref(false);
const errorMsg = ref("");

async function login() {
  errorMsg.value = "";
  loading.value = true;
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);

    const redirect = route.query.redirect?.toString() || "/";
    router.push(redirect);
  } catch (e) {
    errorMsg.value = e?.message || "Login failed";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="min-h-screen admin-bg flex items-center justify-center px-4">
    <div class="surface rounded-3xl w-full max-w-md p-6 sm:p-7">
      <div class="flex items-center gap-3">
        <div class="font-black text-2xl tracking-tight">UniT</div>
        <div class="badge badge-primary badge-outline">Admin</div>
      </div>

      <h1 class="text-2xl font-extrabold tracking-tight mt-4">Sign in</h1>
      <p class="opacity-70 mt-1 leading-relaxed">
        Access is restricted to approved admin accounts only.
      </p>

      <div v-if="errorMsg" class="alert alert-error mt-4">
        <span class="text-sm">{{ errorMsg }}</span>
      </div>

      <form class="mt-5 space-y-4" @submit.prevent="login">
        <label class="form-control w-full">
          <div class="label"><span class="label-text">Email</span></div>
          <input
            v-model="email"
            class="input input-bordered w-full"
            type="email"
            autocomplete="email"
            placeholder="admin@unit.com.au"
          />
        </label>

        <label class="form-control w-full">
          <div class="label"><span class="label-text">Password</span></div>
          <input
            v-model="password"
            class="input input-bordered w-full"
            type="password"
            autocomplete="current-password"
            placeholder="••••••••"
          />
        </label>

        <button
          class="btn btn-primary w-full rounded-xl"
          type="submit"
          :disabled="loading"
        >
          <span v-if="loading" class="loading loading-spinner"></span>
          <span>{{ loading ? "Signing in..." : "Sign in" }}</span>
        </button>

        <div class="text-xs opacity-60 leading-relaxed">
          If your account is not allowlisted, you will be redirected back to
          login.
        </div>
      </form>
    </div>
  </div>
</template>
