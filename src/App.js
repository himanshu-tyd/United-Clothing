import "./App.css";
import React, { useState, useEffect } from "react";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop";
import Header from "./components/header/header";
import Access from "./pages/accesspage/accesspage";
import SignIn from "./components/sign-in/sign-in";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import SignUp from "./components/sign-up/sign-up";
import { getDoc } from "firebase/firestore";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        const snapShot = await getDoc(userRef);
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data(),
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, []);

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/access" component={Access} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
