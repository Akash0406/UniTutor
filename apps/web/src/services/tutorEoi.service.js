import { httpsCallable } from "firebase/functions";
import { functions } from "../config/firebase";

export async function submitTutorEOI(payload) {
  const fn = httpsCallable(functions, "submitTutorEOI");
  const res = await fn(payload);
  return res.data;
}
