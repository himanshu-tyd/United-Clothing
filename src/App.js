import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route , } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop";
import Header from "./components/header/header";



const App=()=> {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
