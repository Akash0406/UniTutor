import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

const PUBLIC_SETTINGS_REF = doc(db, "settings", "public");

/**
 * Read public settings (safe to be readable by everyone).
 */
export async function getPublicSettings() {
  const snap = await getDoc(PUBLIC_SETTINGS_REF);
  return snap.exists() ? snap.data() : null;
}

/**
 * Update openings toggles (admin-only write via rules).
 * Uses merge so it won't overwrite other future settings fields.
 */
export async function updateOpenings({ tutorOpen, studentOpen }) {
  await setDoc(
    PUBLIC_SETTINGS_REF,
    {
      openings: { tutorOpen, studentOpen },
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}
