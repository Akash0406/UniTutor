import { httpsCallable } from "firebase/functions";
import { functions } from "../config/firebase";

export async function submitTutorEOI(payload) {
  const fn = httpsCallable(functions, "submitTutorEOI");
  try {
    const res = await fn(payload);
    return res.data;
  } catch (err) {
    console.log("Callable error code:", err?.code);
    console.log("Callable error message:", err?.message);
    console.log("Callable error details:", err?.details);
    throw err;
  }
}
