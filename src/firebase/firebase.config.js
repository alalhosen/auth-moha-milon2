// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFqnVmIH3o5IhUY5ioanFdfUpfrzsqGCM",
  authDomain: "auth-moha-milon2-aaa58.firebaseapp.com",
  projectId: "auth-moha-milon2-aaa58",
  storageBucket: "auth-moha-milon2-aaa58.firebasestorage.app",
  messagingSenderId: "955389230087",
  appId: "1:955389230087:web:a7715f94e8a1b66b79bea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;