// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAsyaXvUoQdlHgoOQmX_RIwinNM4k51Uk",
  authDomain: "ecommerce-34850.firebaseapp.com",
  projectId: "ecommerce-34850",
  storageBucket: "ecommerce-34850.appspot.com",
  messagingSenderId: "331000157974",
  appId: "1:331000157974:web:0f6d27e9800c793911a237"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)