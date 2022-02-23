// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgOYJGziPQ_8OYejmE4A2BgNpOI8V3oqA",
  authDomain: "reels-599f9.firebaseapp.com",
  projectId: "reels-599f9",
  storageBucket: "reels-599f9.appspot.com",
  messagingSenderId: "632524527027",
  appId: "1:632524527027:web:f6bc1093de21b938aa27c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const storage = getStorage();

export {auth, storage};
export default app;