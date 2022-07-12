// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnBpqKPY87gp4M31NTEON9ZLt2krGURE0",
  authDomain: "fir-firestore-45392.firebaseapp.com",
  projectId: "fir-firestore-45392",
  storageBucket: "fir-firestore-45392.appspot.com",
  messagingSenderId: "905718109767",
  appId: "1:905718109767:web:64bf8df00851b7eb5a8362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
