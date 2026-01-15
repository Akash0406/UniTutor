import { z } from "zod";

/**
 * Student EOI validation.
 * Keep strict validation here so the DB stays clean.
 */
export const StudentEoiZodSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(80),
  email: z.string().email("Invalid email"),
  phone: z.string().max(30).optional().or(z.literal("")),
  university: z.string().min(2, "University is required").max(120),
  degree: z.string().max(120).optional().or(z.literal("")),
  units: z
    .array(z.string().min(2).max(40))
    .min(1, "At least one unit is required"),
  availability: z.string().min(5, "Availability is required").max(600),
  goals: z.string().min(5, "Goals are required").max(1500),
  consent: z.boolean().refine((v) => v === true, "Consent is required"),
});
