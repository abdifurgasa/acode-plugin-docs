import { db } from "../js/core/firebase.js";
import {
  doc,
  updateDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { createBilling } from "./billingService.js";

// COMPLETE ORDER + AUTO BILLING
export const completeOrder = async (id) => {

  const ref = doc(db, "orders", id);

  // update status
  await updateDoc(ref, {
    status: "completed"
  });

  // get order data
  const snap = await getDoc(ref);
  const order = snap.data();

  // create billing automatically
  await createBilling({
    id,
    ...order
  });

};