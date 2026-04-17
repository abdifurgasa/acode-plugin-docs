import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const getRole = async (uid) => {
  const snap = await getDoc(doc(db, "staff", uid));
  return snap.exists() ? snap.data().role : null;
};