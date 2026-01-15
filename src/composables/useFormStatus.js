import { ref } from "vue";

/**
 * Small helper to manage form state consistently.
 */
export function useFormStatus() {
  const loading = ref(false);
  const successMsg = ref("");
  const errorMsg = ref("");
  const fieldIssues = ref([]);

  function resetMessages() {
    successMsg.value = "";
    errorMsg.value = "";
    fieldIssues.value = [];
  }

  return { loading, successMsg, errorMsg, fieldIssues, resetMessages };
}
