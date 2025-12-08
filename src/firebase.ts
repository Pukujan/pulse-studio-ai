// src/firebase.ts
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

// --- IMPORTANT ---
// PULLS CONFIG FROM YOUR .env FILE
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// --- DEBUGGING ---
// This will show you in the browser console what values are being loaded.
// Check if any of them are "undefined". If they are, the .env file is not being read correctly.
console.log("Firebase Config Loaded:", firebaseConfig);
// --- END DEBUGGING ---

// --- IMPORTANT ---


// Use a unique name for this app instance to avoid conflicts
const APP_NAME = 'pulse-studio-app';

// Initialize Firebase App
// Check if app is already initialized to avoid errors
const app = !getApps().length ? initializeApp(firebaseConfig, APP_NAME) : getApp(APP_NAME);

// Get Firestore and Auth instances
const db = getFirestore(app);
const auth = getAuth(app);

// Function to sign in the user anonymously
const getAnonymousUser = async () => {
  try {
    const userCredential = await signInAnonymously(auth);
    return userCredential.user;
  } catch (error) {
    console.error("Anonymous sign-in failed:", error);
    return null;
  }
};


export { db, auth, getAnonymousUser };
