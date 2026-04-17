import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Check user role
export const checkRole = async (user, allowedRoles) => {

  const ref = doc(db, "staff", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    location.href = "login.html";
    return;
  }

  const data = snap.data();

  if (!allowedRoles.includes(data.role)) {
    alert("Access denied");
    location.href = "login.html";
  }

  return data;
};