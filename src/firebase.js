// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYgN2wbS5sJd8qSlRpkf8GvoPzN8nYf6c",
  authDomain: "chat-51176.firebaseapp.com",
  projectId: "chat-51176",
  storageBucket: "chat-51176.appspot.com",
  messagingSenderId: "371558439629",
  appId: "1:371558439629:web:f0ff2ef78b047e65fb2784"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();