// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwHCa1xy5IWc6ODRX2URymO1OPZtE3KsM",
  authDomain: "uhelp-844d9.firebaseapp.com",
  databaseURL: "https://uhelp-844d9-default-rtdb.firebaseio.com",
  projectId: "uhelp-844d9",
  storageBucket: "uhelp-844d9.appspot.com",
  messagingSenderId: "448239813210",
  appId: "1:448239813210:web:9446649723b5a67b7c8e63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db = getFirestore(app);