
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAadiS-j7IGVWMHLCqSIcnaQ6-RuDfoX-o",
  authDomain: "chatroom-92122.firebaseapp.com",
  projectId: "chatroom-92122",
  storageBucket: "chatroom-92122.appspot.com",
  messagingSenderId: "294973787789",
  appId: "1:294973787789:web:b511fcd776e802215d1cc4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();