// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpWdHB8naeCyNEIezfcVJm04FmNrIRN5I",
  authDomain: "smile-seekers.firebaseapp.com",
  projectId: "smile-seekers",
  storageBucket: "smile-seekers.appspot.com",
  messagingSenderId: "92636409377",
  appId: "1:92636409377:web:83dea1c25af59642f77d60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;