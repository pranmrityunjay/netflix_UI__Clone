
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIXXB4FkDpHpTnu7RLasBw0hawMNfF3AA",
  authDomain: "netflixgpt-pran.firebaseapp.com",
  projectId: "netflixgpt-pran",
  storageBucket: "netflixgpt-pran.appspot.com",
  messagingSenderId: "179658498062",
  appId: "1:179658498062:web:b1d290ef971fe3d690dc5f",
  measurementId: "G-86DEFBNPGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();