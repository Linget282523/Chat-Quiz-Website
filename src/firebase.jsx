import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD45-BdMnHhDbyOrCztercEomZjvTX9Vbg",
  authDomain: "chat-quiz-website-81ec6.firebaseapp.com",
  databaseURL: "https://chat-quiz-website-81ec6-default-rtdb.firebaseio.com",
  projectId: "chat-quiz-website-81ec6",
  storageBucket: "chat-quiz-website-81ec6.appspot.com",
  messagingSenderId: "286306532855",
  appId: "1:286306532855:web:10f3121a35f79ebb7442f2",
  measurementId: "G-2E364SMLWX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);