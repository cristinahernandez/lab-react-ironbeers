import React, { Component } from "react";
import Header from "./Header";
import beerService from "../services/beerService";
import Card from "./Card";
import { Link } from "react-router-dom";

class Randombeer extends Component {
  constructor() {
    super();
    this.state = {
      randomBeer: {},
      loading: true
    };
  }
  async componentDidMount() {
    try {
      const randomBeer = await beerService.getRandomBeer("/random");
      this.setState({
        randomBeer: randomBeer,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { randomBeer } = this.state;
    return (
      <>
        <Header />
        <div className="container single-beer">
          <p className="breadcrumbs">
            <Link to="/">&laquo; Random Beer</Link>
          </p>
          {this.state.loading && <div className="loading">loading...</div>}
          <Card
            image={randomBeer.image_url}
            name={randomBeer.name}
            tagline={randomBeer.tagline}
            contributted={randomBeer.contributed_by}
            id={randomBeer._id}
            noButton={true}
          />
        </div>
      </>
    );
  }
}

export default Randombeer;
