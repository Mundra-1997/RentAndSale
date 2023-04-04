// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM8jcCOPhQHfrtLXRs58S9QSLio7WlNb0",
  authDomain: "housemarket-7fc8f.firebaseapp.com",
  projectId: "housemarket-7fc8f",
  storageBucket: "housemarket-7fc8f.appspot.com",
  messagingSenderId: "296914585423",
  appId: "1:296914585423:web:43f155137a36fc31fba73a",
  measurementId: "G-GFLE02JRDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();