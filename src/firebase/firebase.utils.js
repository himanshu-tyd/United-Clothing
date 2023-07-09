import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCXPyg32p8PUIwvlbQ1eTqAcSbPpfDTsZo",
  authDomain: "united-clothing-72902.firebaseapp.com",
  projectId: "united-clothing-72902",
  storageBucket: "united-clothing-72902.appspot.com",
  messagingSenderId: "500740268063",
  appId: "1:500740268063:web:a0cdf3a559c0bf7ac4f52a",
  measurementId: "G-W3S156V0RC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () =>
  signInWithPopup(auth, provider).catch((error) => {
    if (error.code === "auth/cancelled-popup-request") {
      console.log("popup cancelled");
    } else {
      console.error("Error sign in with google");
    }
  });

export { auth, firestore, signInWithGoogle };
export default app;
