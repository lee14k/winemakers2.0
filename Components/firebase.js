import { initializeApp, getApps } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Include collection and addDoc
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // If already initialized, use the existing app
}

const storage = getStorage(app);
const firestore = getFirestore(app); // Include Firestore functions
const auth = getAuth(app);

const anonymousSignIn = async () => {
  try {
    await signInAnonymously(auth);
    console.log('User signed in anonymously');
  } catch (error) {
    console.error('Error signing in anonymously:', error);
  }
};

export { storage, firestore, auth, anonymousSignIn, signInAnonymously, collection, addDoc }; // Export collection and addDoc
