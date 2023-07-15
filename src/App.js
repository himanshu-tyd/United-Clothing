import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop";
import Header from "./components/header/header";
import Access from "./pages/accesspage/accesspage";
import SingIn from "./components/sign-in/sign-in";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import SignUp from "./components/sign-up/sign-up";
import { getDoc } from "firebase/firestore";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

// ...

componentDidMount() {
  this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfile(userAuth);
      const snapShot=await getDoc(userRef)
      this.setState({
        currentUser: {
          id: snapShot.id,
          ...snapShot.data(),
        },
      });
      console.log(this.state)
    } else {
      this.setState({ currentUser: null });
    }
  });
}

componentWillUnmount() {
  if (this.unsubscribeFromAuth) {
    this.unsubscribeFromAuth();
  }
}

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SingIn} />
          <Route exact path="/acces" component={Access} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
