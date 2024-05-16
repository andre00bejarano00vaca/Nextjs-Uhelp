// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Okmb7FjLXpUXIP2Ouo-jRZGseprYQGE",
  authDomain: "uhelp-sustituto.firebaseapp.com",
  projectId: "uhelp-sustituto",
  storageBucket: "uhelp-sustituto.appspot.com",
  messagingSenderId: "259874304204",
  appId: "1:259874304204:web:e6c1a09bbcda79759a9269"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db = getFirestore(app);