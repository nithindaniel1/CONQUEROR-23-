import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2Jy0nuP3Swi63szFiJO9hR6dF0k67hGA",
  authDomain: "doctor-appointment-b7706.firebaseapp.com",
  projectId: "doctor-appointment-b7706",
  storageBucket: "doctor-appointment-b7706.appspot.com",
  messagingSenderId: "1042639494325",
  appId: "1:1042639494325:web:18f263495ee73900a472fc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
