// Firebase core setup

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// CONFIG
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "lelo-intarnational-hotel.firebaseapp.com",
  projectId: "lelo-intarnational-hotel",
  storageBucket: "lelo-intarnational-hotel.appspot.com",
  messagingSenderId: "509777274669",
  appId: "1:509777274669:web:393d55c77333420d2315a4"
};

// INIT
const app = initializeApp(firebaseConfig);

// EXPORTS (IMPORTANT)
export const auth = getAuth(app);
export const db = getFirestore(app);