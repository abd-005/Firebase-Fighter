// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz9lhI_sIkc1TapDpNTtUPQG0p5jLbhP0",
  authDomain: "fir-fighter-2f1d9.firebaseapp.com",
  projectId: "fir-fighter-2f1d9",
  storageBucket: "fir-fighter-2f1d9.firebasestorage.app",
  messagingSenderId: "851944821583",
  appId: "1:851944821583:web:96b926d1a538486752ab3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
