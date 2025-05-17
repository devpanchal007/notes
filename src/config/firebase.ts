import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTjq4V1KWQ-XfDw31vrUcNHOr3XE_3TRo",
    authDomain: "dsalearn-1937f.firebaseapp.com",
    projectId: "dsalearn-1937f",
    storageBucket: "dsalearn-1937f.firebasestorage.app",
    messagingSenderId: "573254619168",
    appId: "1:573254619168:web:31966c83ab104acd21ac45",
    measurementId: "G-LR2ZGRXKR2"
    };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);