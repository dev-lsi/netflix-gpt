// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpn_yspP2lD25gNRv1TXQmNj72OTWN7_w",
  authDomain: "netflix-gpt-2-8e819.firebaseapp.com",
  projectId: "netflix-gpt-2-8e819",
  storageBucket: "netflix-gpt-2-8e819.appspot.com",
  messagingSenderId: "758049405970",
  appId: "1:758049405970:web:d0254a258fe0dc1db6accb",
  measurementId: "G-1X9PXL8J5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);