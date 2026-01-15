import { onCall, HttpsError } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

import { TutorEoiZodSchema } from "./validation/tutorEoi.schema.js";
import { StudentEoiZodSchema } from "./validation/studentEoi.schema.js";

initializeApp();
const db = getFirestore();

/**
 * Tutor EOI (Callable)
 */
export const submitTutorEOI = onCall(
  { region: "australia-southeast1" },
  async (request) => {
    try {
      const parsed = TutorEoiZodSchema.safeParse(request.data);
      if (!parsed.success) {
        throw new HttpsError("invalid-argument", "Invalid form data", {
          issues: parsed.error.issues,
        });
      }

      const data = parsed.data;

      const docRef = await db.collection("tutorEOIs").add({
        ...data,
        email: data.email.trim().toLowerCase(),
        units: data.units.map((u) => u.trim().toUpperCase()),
        expertiseAreas: data.expertiseAreas.map((x) => x.trim()),
        status: "New",
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });

      return { ok: true, message: "Tutor EOI submitted", id: docRef.id };
    } catch (err) {
      console.error("submitTutorEOI crashed:", err);
      if (err?.name === "HttpsError") throw err;
      throw new HttpsError("internal", "Internal Server Error");
    }
  }
);

/**
 * Student EOI (Callable)
 */
export const submitStudentEOI = onCall(
  { region: "australia-southeast1" },
  async (request) => {
    try {
      const parsed = StudentEoiZodSchema.safeParse(request.data);
      if (!parsed.success) {
        throw new HttpsError("invalid-argument", "Invalid form data", {
          issues: parsed.error.issues,
        });
      }

      const data = parsed.data;

      const docRef = await db.collection("studentEOIs").add({
        ...data,
        email: data.email.trim().toLowerCase(),
        units: data.units.map((u) => u.trim().toUpperCase()),
        status: "New",
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });

      return { ok: true, message: "Student EOI submitted", id: docRef.id };
    } catch (err) {
      console.error("submitStudentEOI crashed:", err);
      if (err?.name === "HttpsError") throw err;
      throw new HttpsError("internal", "Internal Server Error");
    }
  }
);
