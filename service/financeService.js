import { db } from "../js/core/firebase.js";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// PAY ALL BILLS FOR WORKER
export const payWorkerBills = async (workerEmail) => {

  const q = query(
    collection(db, "billing"),
    where("worker", "==", workerEmail),
    where("status", "==", "unpaid")
  );

  const snap = await getDocs(q);

  let total = 0;

  for (const d of snap.docs) {

    const data = d.data();
    total += Number(data.amount);

    await updateDoc(doc(db, "billing", d.id), {
      status: "paid"
    });

  }

  // Save payment record
  await addDoc(collection(db, "payments"), {
    worker: workerEmail,
    amount: total,
    method: "cash",
    createdAt: new Date()
  });

  return total;
};