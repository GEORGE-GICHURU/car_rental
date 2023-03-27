import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJjxXbqjtFhXuDhCVaXZXWAax2zYYEcGo",
    authDomain: "gymate-80dd0.firebaseapp.com",
    projectId: "gymate-80dd0",
    storageBucket: "gymate-80dd0.appspot.com",
    messagingSenderId: "1024908511659",
    appId: "1:1024908511659:web:919199b4710509c3f52aee",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);