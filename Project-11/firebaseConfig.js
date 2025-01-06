// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add this line
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY_bN2iqrXjMlFSWyTnxXlO-0o_9YbkdE",
  authDomain: "full-stack-eee64.firebaseapp.com",
  projectId: "full-stack-eee64",
  storageBucket: "full-stack-eee64.appspot.com",
  messagingSenderId: "316731716426",
  appId: "1:316731716426:web:44a101aab649cbfa56c7b3"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app) 
const auth = getAuth(app)

export { auth, db }