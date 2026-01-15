import { httpsCallable } from "firebase/functions";
import { functions } from "../config/firebase";

export async function submitStudentEOI(payload) {
  const fn = httpsCallable(functions, "submitStudentEOI");
  const res = await fn(payload);
  return res.data;
}
