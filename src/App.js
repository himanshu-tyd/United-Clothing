import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route , } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop";



const App=()=> {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
