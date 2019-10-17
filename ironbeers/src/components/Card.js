import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <div className="card">
      <div className="image-beer">
        <Link to="/beers/:beerId">
          <img src={props.image} alt={props.name} />
        </Link>
      </div>
      <div className="beer-info">
        <h4>{props.name}</h4>
        <p className="tagline">{props.tagline}</p>
        <p className="credits">
          <strong>Contributted by:</strong>
          <br /> {props.contributted}
        </p>
        <button>
          <Link to="/beers/:beerId">See details</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;