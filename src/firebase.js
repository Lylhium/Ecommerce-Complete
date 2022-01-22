import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIjqFzBQLNQNlodAlJG1EBZx36xXrbQME",
    authDomain: "cocolighted.firebaseapp.com",
    projectId: "cocolighted",
    storageBucket: "cocolighted.appspot.com",
    messagingSenderId: "200704814539",
    appId: "1:200704814539:web:49b7477e6766f67a125a4e",
    measurementId: "G-W3GKRKFEYP"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore (app);

  export default db