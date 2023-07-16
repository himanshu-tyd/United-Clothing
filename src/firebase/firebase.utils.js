
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";

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

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Sign-in Successful:", result.user);
  } catch (error) {
    console.log("Error signing in with Google", error);
  }
};
const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return null;

  const userRef = doc(firestore, "users", userAuth.uid);

  if (!(await getDoc(userRef)).exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};


export { auth, firestore, signInWithGoogle, createUserProfile };
export default app;
