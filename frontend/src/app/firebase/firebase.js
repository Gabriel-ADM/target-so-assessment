import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmMwWKUBStjUFmFsy-HI7KUQeWcXjCNUU",
    authDomain: "target-so-assessment.firebaseapp.com",
    projectId: "target-so-assessment",
    storageBucket: "target-so-assessment.appspot.com",
    messagingSenderId: "28718951260",
    appId: "1:28718951260:web:7ab3a5275a46f05b5faf99"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };