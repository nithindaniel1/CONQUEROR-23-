// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Jy0nuP3Swi63szFiJO9hR6dF0k67hGA",
  authDomain: "doctor-appointment-b7706.firebaseapp.com",
  projectId: "doctor-appointment-b7706",
  storageBucket: "doctor-appointment-b7706.appspot.com",
  messagingSenderId: "1042639494325",
  appId: "1:1042639494325:web:18f263495ee73900a472fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }