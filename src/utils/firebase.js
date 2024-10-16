// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM4Gg-qWyIly9YJb8J5lk0el4M1yaGfXc",
  authDomain: "netflix-gpt-ae8f9.firebaseapp.com",
  projectId: "netflix-gpt-ae8f9",
  storageBucket: "netflix-gpt-ae8f9.appspot.com",
  messagingSenderId: "85800808352",
  appId: "1:85800808352:web:ab49ae900c51ce13607ec5",
  measurementId: "G-TX5XDSH0DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);