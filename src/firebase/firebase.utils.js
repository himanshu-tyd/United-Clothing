import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, collection, getDoc, setDoc,userAuth } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXPyg32p8PUIwvlbQ1eTqAcSbPpfDTsZo",
  authDomain: "united-clothing-72902.firebaseapp.com",
  projectId: "united-clothing-72902",
  storageBucket: "united-clothing-72902.appspot.com",
  messagingSenderId: "500740268063",
  appId: "1:500740268063:web:a0cdf3a559c0bf7ac4f52a",
  measurementId: "G-W3S156V0RC"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const provider=new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
const signInWithGoogle=async()=>{
  try{
    const result=await signInWithPopup(auth,provider);
    console.log("Sing-in Successful:",result.user);
  }catch(error){
    console.log("Error signin with google",error);
  }
};

// const createUserProfile=async(userAuth,additionalData)=>{
//     if(!userAuth){
//       return;
//     }

// }

export { auth, firestore, signInWithGoogle };
export default app;
