// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU1QYO6b5UloqhXSfmHTqmue8bTjeMrGc",
  authDomain: "sylani-hackathon-b7fe1.firebaseapp.com",
  projectId: "sylani-hackathon-b7fe1",
  storageBucket: "sylani-hackathon-b7fe1.appspot.com",
  messagingSenderId: "848007916906",
  appId: "1:848007916906:web:4cfad8872835562d4b8913",
  measurementId: "G-TWNFVD8X1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);
const db = getFirestore(app)

export {auth,analytics,db}