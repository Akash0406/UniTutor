import {
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase";

/**
 * Fetch a page of EOIs for a given collection.
 * Uses cursor-based pagination with createdAt desc.
 */
export async function fetchEoiPage({
  collectionName,
  pageSize = 10,
  cursor = null, // last DocumentSnapshot from previous page
}) {
  const colRef = collection(db, collectionName);

  // If createdAt is missing on older docs, ordering may fail.
  // In practice, ensure submit functions add createdAt serverTimestamp.
  const q = cursor
    ? query(
        colRef,
        orderBy("createdAt", "desc"),
        startAfter(cursor),
        limit(pageSize),
      )
    : query(colRef, orderBy("createdAt", "desc"), limit(pageSize));

  const snap = await getDocs(q);

  const items = snap.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));

  const lastDoc = snap.docs.length ? snap.docs[snap.docs.length - 1] : null;

  return { items, lastDoc, empty: snap.empty };
}

/**
 * Update admin-only fields on an EOI doc.
 */
export async function updateEoiAdminFields({
  collectionName,
  id,
  patch, // { status?, internalNote? }
}) {
  const ref = doc(db, collectionName, id);

  await updateDoc(ref, {
    ...patch,
    updatedAt: serverTimestamp(),
  });
}
