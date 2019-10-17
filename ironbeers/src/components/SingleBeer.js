import React, { Component } from "react";
import { Link } from "react-router-dom";
import beerService from "../services/beerService";
import Header from "./Header";

class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.pathname
    };
  }
  async componentDidMount() {
    try {
      const beer = await beerService.getOneBeer(this.state.id);
      this.setState({
        id: beer
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { id } = this.state;
    return (
      <>
        <Header />
        <div className="container single-beer">
          <p className="breadcrumbs">
            <Link to="/beers">&laquo; All Beers / Single Beer</Link>
          </p>
          <div className="container">
            <div className="card">
              <div className="image-beer">
                <img src={id.image_url} alt={id.name} />
              </div>
              <div className="beer-info">
                <h2>{id.name}</h2>
                <p className="tagline">{id.tagline}</p>
                <p>
                  <strong>First brewed:</strong>
                  <br /> {id.first_brewed}
                </p>
                <p>
                  <strong>Attenuation level:</strong>
                  <br /> {id.attenuation_level}
                </p>
                <p>
                  <strong>Contributted by:</strong>
                  <br /> {id.contributed_by}
                </p>

                <p className="description">{id.description}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SingleBeer;
