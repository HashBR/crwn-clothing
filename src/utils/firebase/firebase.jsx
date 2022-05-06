import { initializeApp } from 'firebase/app';
import { getAuth , signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6DDBbCaDpc3QDxHxo1Kl7soQ4Levoz5k",
  authDomain: "crwn-clothing-db-f8bea.firebaseapp.com",
  projectId: "crwn-clothing-db-f8bea",
  storageBucket: "crwn-clothing-db-f8bea.appspot.com",
  messagingSenderId: "502287111010",
  appId: "1:502287111010:web:6d53925bdc783a5269523b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);