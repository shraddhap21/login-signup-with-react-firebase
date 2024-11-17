// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC64XJtj0e68rgaO8e7qpwiQeFSshBq-Q",
  authDomain: "authentication-6ce52.firebaseapp.com",
  projectId: "authentication-6ce52",
  storageBucket: "authentication-6ce52.firebasestorage.app",
  messagingSenderId: "198530678662",
  appId: "1:198530678662:web:0b4e8bb820bf3b4432f607"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export{ auth}