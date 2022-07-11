// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdCrRlovmnXdUokg0pECOXuXww76Mkn-A",
  authDomain: "fir-practice-26b61.firebaseapp.com",
  projectId: "fir-practice-26b61",
  storageBucket: "fir-practice-26b61.appspot.com",
  messagingSenderId: "1008454825962",
  appId: "1:1008454825962:web:9be8b0386f24e17b6ea493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
