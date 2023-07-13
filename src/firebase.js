
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAtpM3Wu2bkGy8RzFlFCI1LlSddtPOxgoo",
  authDomain: "chatroom-48c64.firebaseapp.com",
  projectId: "chatroom-48c64",
  storageBucket: "chatroom-48c64.appspot.com",
  messagingSenderId: "696298710499",
  appId: "1:696298710499:web:9fbd69e8bd3b048aa36cd6",
  measurementId: "G-WK07EEMYNL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
