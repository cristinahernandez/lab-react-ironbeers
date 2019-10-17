import React, { Component } from "react";
import Header from "./Header";
import Card from "./Card";
import { Link } from "react-router-dom";
import beerService from "../services/beerService";

class Allbeers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      loading: true
    };
  }
  async componentDidMount() {
    try {
      const beers = await beerService.getAllBeers();
      this.setState({
        beers,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }
  // componentDidMount() {
  //   axios.get("https://ih-beer-api.herokuapp.com/beers").then(response => {
  //     this.setState({
  //       beers: response.data
  //     });
  //   });
  // }
  render() {
    const col1 = 15;
    const col2 = 30;
    return (
      <>
        <Header />
        <div className="container">
          <p className="breadcrumbs">
            <Link to="/">&laquo; All Beers</Link>
          </p>
          {this.state.loading && <div className="loading">loading...</div>}
          <div className="row">
            <div className="column">
              {!this.state.loading &&
                this.state.beers
                  .slice(0, col1)
                  .map(
                    beer =>
                      beer.image_url !==
                        "https://images.punkapi.com/v2/keg.png" && (
                        <Card
                          key={beer._id}
                          image={beer.image_url}
                          name={beer.name}
                          tagline={beer.tagline}
                          contributted={beer.contributed_by}
                          id={beer._id}
                        />
                      )
                  )}
            </div>
            <div className="column">
              {!this.state.loading &&
                this.state.beers
                  .slice(col1 + 1, col2)
                  .map(
                    beer =>
                      beer.image_url !==
                        "https://images.punkapi.com/v2/keg.png" && (
                        <Card
                          key={beer._id}
                          image={beer.image_url}
                          name={beer.name}
                          tagline={beer.tagline}
                          contributted={beer.contributed_by}
                          id={beer._id}
                        />
                      )
                  )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Allbeers;
