import { getAuth } from "firebase-admin/auth";

export async function grantAdmin(uid) {
  const auth = getAuth();

  await auth.setCustomUserClaims(uid, { admin: true });

  return { success: true };
}
