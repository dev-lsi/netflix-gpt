// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzHMn9j-JYlIICnOIL9D_MVnXA2I2yXKk",
  authDomain: "netflixgpt-l.firebaseapp.com",
  projectId: "netflixgpt-l",
  storageBucket: "netflixgpt-l.appspot.com",
  messagingSenderId: "224360297031",
  appId: "1:224360297031:web:25e0dd56bc382840edb762",
  measurementId: "G-DV1LXV6LJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();