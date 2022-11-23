import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAkS8kFQ5a2gASMf1T4AvcZAJVu38haCk",
  authDomain: "divlinks-2a39d.firebaseapp.com",
  projectId: "divlinks-2a39d",
  storageBucket: "divlinks-2a39d.appspot.com",
  messagingSenderId: "262115328287",
  appId: "1:262115328287:web:84e1a0ca9f5a9fafde302a",
  measurementId: "G-W5C3JFLP6L",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
