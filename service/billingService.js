import { db } from "../js/core/firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// CREATE BILL
export const createBilling = async (order) => {

  return await addDoc(collection(db, "billing"), {
    orderId: order.id,
    worker: order.createdBy,
    amount: Number(order.price),
    status: "unpaid",
    createdAt: new Date()
  });

};