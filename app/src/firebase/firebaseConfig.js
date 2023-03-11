// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1zg27CKqc1esiYhBBrXlNCLEBnVvjQT0",
    authDomain: "apical-9fad4.firebaseapp.com",
    projectId: "apical-9fad4",
    storageBucket: "apical-9fad4.appspot.com",
    messagingSenderId: "1007027412749",
    appId: "1:1007027412749:web:7e03d1b3d5ca8a531e5a44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);