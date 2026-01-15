import { z } from "zod";

/**
 * Tutor Expression of Interest payload validation.
 * Keep strict validation on the server so the DB remains clean.
 */
export const TutorEoiZodSchema = z.object({
  fullName: z.string().min(2).max(80),
  email: z.string().email(),
  phone: z.string().max(30).optional().or(z.literal("")),
  university: z.string().min(2).max(120),
  degree: z.string().max(120).optional().or(z.literal("")),
  units: z.array(z.string().min(2).max(40)).min(1),
  expertiseAreas: z.array(z.string().min(2).max(60)).min(1),
  tutoringMode: z.enum(["Online", "On-campus", "Both"]),
  availability: z.string().min(5).max(600),
  experienceSummary: z.string().max(1500).optional().or(z.literal("")),
  linkedInUrl: z.string().url().optional().or(z.literal("")),
  resumeUrl: z.string().url().optional().or(z.literal("")),
  consent: z.boolean().refine((v) => v === true, "Consent is required"),
});
