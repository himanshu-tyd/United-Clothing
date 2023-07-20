import "./App.css";
import React, { useEffect } from "react";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop";
import Header from "./components/header/header";
import Access from "./pages/accesspage/accesspage";
import SignIn from "./components/sign-in/sign-in";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import SignUp from "./components/sign-up/sign-up";
import { getDoc } from "firebase/firestore";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";

const App = ({ setCurrentUser, currentUser }) => {
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
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/signup" render={()=>(currentUser ? <Redirect to="/"/>: <SignUp/>)} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={()=> (currentUser ? <Redirect to="/"/> :<SignIn/>)} />
        <Route exact path="/acces" render={() => (currentUser ? <Redirect to="/"/> : <Access/>)} / >
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
} 

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
const mapStateProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateProps, mapDispatchToProps)(App);
