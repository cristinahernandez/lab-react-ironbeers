import React from "react";
import "./App.css";
import Homepage from "./components/HomePage";
import { Switch, Route } from "react-router-dom";
import Allbeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import Newbeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/beers" component={Allbeers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="new-beer" component={Newbeer} />
      </Switch>
    </div>
  );
}

export default App;
