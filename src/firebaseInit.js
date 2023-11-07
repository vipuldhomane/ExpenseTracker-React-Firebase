import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkShJh98rEVNqasSraRRPDBinlvKkkE40",
  authDomain: "expense-tracker-f8185.firebaseapp.com",
  projectId: "expense-tracker-f8185",
  storageBucket: "expense-tracker-f8185.appspot.com",
  messagingSenderId: "460345940277",
  appId: "1:460345940277:web:125023a1c3910d168c147c",
  measurementId: "G-E2B1KWD8TZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
