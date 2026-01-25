import { auth, db } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export function waitForAdminAuth() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        reject(new Error("Not logged in"));
        return;
      }

      const ref = doc(db, "adminUsers", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        resolve(user);
      } else {
        reject(new Error("Not admin"));
      }
    });
  });
}
