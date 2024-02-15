// src/firebase/index.js
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTv1KdD7nUn8fbVnTe9WUJWDoaYvrtntM",
    authDomain: "ticks-collectives-s.firebaseapp.com",
    projectId: "ticks-collectives-s",
    storageBucket: "ticks-collectives-s.appspot.com",
    messagingSenderId: "477383898984",
    appId: "1:477383898984:web:5e10923d7ecd20a13208dd",
    measurementId: "G-EH53ZXYRVM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = 'it';

const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});
provider.addScope('profile');
provider.addScope('email');

export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider(); // Define provider inside the function
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });

    return signInWithPopup(auth, provider);
}


onAuthStateChanged(auth, (user) => {
    if (user != null) {
        console.log('Logged in');
    } else {
        console.log('Logged out');
    }
});

export default app;
export { auth, db, provider };