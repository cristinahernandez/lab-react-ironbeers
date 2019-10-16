import React from "react";
import { Link } from "react-router-dom";

const Infobox = props => {
  return (
    <div className="infobox">
      <a href="/">
        <img src={props.image} alt="All Beers" />
      </a>
      <h2>{props.category}</h2>
      <p>{props.paragraph}</p>
      <button>
        <Link to={props.url}>Get {props.category.toLowerCase()}</Link>
      </button>
    </div>
  );
};

export default Infobox;
