import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAw67chR-ijUVWH0RTh6Zc9MSI2CIOZHSw",
    authDomain: "notes-neo.firebaseapp.com",
    projectId: "notes-neo",
    storageBucket: "notes-neo.firebasestorage.app",
    messagingSenderId: "128880583840",
    appId: "1:128880583840:web:ef7908f1a4c205dad415c5",
    measurementId: "G-NLRF1SG7G9"
    };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);