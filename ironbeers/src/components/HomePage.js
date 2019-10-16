import React from "react";
import Infobox from "./Infobox";
import AllBeers from "./AllBeers";
import { Route } from "react-router-dom";

const Homepage = () => {
  const p1 =
    "Lorem ipsum dolor amet id magna flannel velit skateboard, ugh consequat helvetica pork belly locavore pariatur butcher selfies eiusmod crucifix. ";
  const p2 =
    "Green juice dreamcatcher esse sartorial meggings cred glossier woke retro adipisicing you probably haven't heard of them pour-over heirloom.";
  const p3 =
    "Echo park you probably haven't heard of them hexagon biodiesel, polaroid literally non. Anim dolore hammock in aute tofu franzen umami venmo. ";
  return (
    <div className="container">
      <h1>Ironbeers</h1>
      <Route exact path="/beers" component={AllBeers}></Route>
      <Infobox
        category="All the beers"
        image="/img/allbeers.jpg"
        paragraph={p1}
        url={"/beers"}
      />
      <Infobox
        category="Random beer"
        image="/img/randombeer.jpg"
        paragraph={p2}
        url={"/random-beer"}
      />
      <Infobox
        category="New beer"
        image="/img/newbeer.jpg"
        paragraph={p3}
        url={"/new-beer"}
      />
    </div>
  );
};

export default Homepage;
