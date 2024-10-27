// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY_bN2iqrXjMlFSWyTnxXlO-0o_9YbkdE",
  authDomain: "full-stack-eee64.firebaseapp.com",
  projectId: "full-stack-eee64",
  storageBucket: "full-stack-eee64.appspot.com",
  messagingSenderId: "316731716426",
  appId: "1:316731716426:web:44a101aab649cbfa56c7b3"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}