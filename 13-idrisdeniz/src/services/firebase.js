// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG2yF2JJXVRMIhJz2Ra3qGjP7qrlUmd6g",
  authDomain: "siliconmade-6f7e6.firebaseapp.com",
  projectId: "siliconmade-6f7e6",
  storageBucket: "siliconmade-6f7e6.appspot.com",
  messagingSenderId: "908881641908",
  appId: "1:908881641908:web:1e2db7c22cd2733501b2e1",
  measurementId: "G-4GBKT8EQ5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getFirestore(app);