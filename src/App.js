import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop";
import Header from "./components/header/header";
import Access from "./pages/accesspage/accesspage";
import SingIn from "./components/sign-in/sign-in";
import { auth} from "./firebase/firebase.utils";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: ""
    };
  }




  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount(){
        if(this.unsubscribeFromAuth){
          this.unsubscribeFromAuth();
        }
  }
 
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/signin" component={SingIn} />
          <Route exact path="/acces" component={Access} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/" component={HomePage} />
        </Switch>

      </div>
    );  
  }
}

export default App;
