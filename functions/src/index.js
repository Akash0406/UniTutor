import { onCall, HttpsError } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { TutorEoiZodSchema } from "./validation/tutorEoi.schema.js";

initializeApp();
const db = getFirestore();

/**
 * submitTutorEOI (Callable Function)
 * - Validates with Zod
 * - Normalizes values
 * - Writes to Firestore (collection: tutorEOIs)
 */
export const submitTutorEOI = onCall(
  { region: "australia-southeast1" },
  async (request) => {
    const parsed = TutorEoiZodSchema.safeParse(request.data);
    if (!parsed.success) {
      throw new HttpsError("invalid-argument", "Invalid form data", {
        issues: parsed.error.issues,
      });
    }

    const data = parsed.data;

    const normalized = {
      ...data,
      email: data.email.trim().toLowerCase(),
      units: data.units.map((u) => u.trim().toUpperCase()),
      expertiseAreas: data.expertiseAreas.map((x) => x.trim()),
      status: "New",
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    };

    const docRef = await db.collection("tutorEOIs").add(normalized);

    return {
      ok: true,
      message: "EOI submitted successfully",
      id: docRef.id,
    };
  }
);
