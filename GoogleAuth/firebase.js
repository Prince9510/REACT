// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJFpYWVzgDhAHVk2nCa60u9zkP5h8yrzk",
  authDomain: "auth-4ed0b.firebaseapp.com",
  projectId: "auth-4ed0b",
  storageBucket: "auth-4ed0b.firebasestorage.app",
  messagingSenderId: "51327104278",
  appId: "1:51327104278:web:b4c333d0f44bcdbff00c37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()