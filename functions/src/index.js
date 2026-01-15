import { onCall, HttpsError } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { TutorEoiZodSchema } from "./validation/tutorEoi.schema.js";

initializeApp();
const db = getFirestore();

export const submitTutorEOI = onCall(
  { region: "australia-southeast1" },
  async (request) => {
    try {
      const parsed = TutorEoiZodSchema.safeParse(request.data);
      if (!parsed.success) {
        console.warn("Validation failed:", parsed.error.issues);
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

      return { ok: true, message: "EOI submitted successfully", id: docRef.id };
    } catch (err) {
      console.error("submitTutorEOI crashed:", err);

      // If it’s already a HttpsError, rethrow
      if (err?.name === "HttpsError") throw err;

      throw new HttpsError("internal", "Internal Server Error");
    }
  }
);
