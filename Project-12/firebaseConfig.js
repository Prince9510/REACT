// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add this line
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7OCPN679pGldtOAgPgDJckqv2kDEA9P8",
  authDomain: "crud-project-8c12d.firebaseapp.com",
  projectId: "crud-project-8c12d",
  storageBucket: "crud-project-8c12d.firebasestorage.app",
  messagingSenderId: "122335379492",
  appId: "1:122335379492:web:fcae08536c965914da18b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app) 
const auth = getAuth(app)

export { auth, db }