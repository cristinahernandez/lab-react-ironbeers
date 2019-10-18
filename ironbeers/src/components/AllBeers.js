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
      loading: true,
      query: ""
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
  handleSearch = event => {
    const { value } = event.target;
    this.setState({
      query: value
    });
  };
  render() {
    const col1 = 15;
    const col2 = 30;
    const beerFiltered = this.state.beers.filter(beer => {
      return beer.name.toLowerCase().includes(this.state.query.toLowerCase());
    });
    return (
      <>
        <Header />
        <div className="container">
          <p className="breadcrumbs">
            <Link to="/">&laquo; All Beers</Link>
          </p>
          <input
            type="text"
            name="query"
            value={this.state.query}
            placeholder="Search a beer"
            onChange={this.handleSearch}
          />
          {this.state.loading && <div className="loading">loading...</div>}
          <div className="row">
            <div className="column">
              {!this.state.loading &&
                beerFiltered
                  .slice(0, col1)
                  .map(beer => (
                    <Card
                      key={beer._id}
                      image={beer.image_url}
                      name={beer.name}
                      tagline={beer.tagline}
                      contributted={beer.contributed_by}
                      id={beer._id}
                      beers={this.handleRandom}
                      noButton={false}
                    />
                  ))}
            </div>
            <div className="column">
              {!this.state.loading &&
                beerFiltered
                  .slice(col1 + 1, col2)
                  .map(beer => (
                    <Card
                      key={beer._id}
                      image={beer.image_url}
                      name={beer.name}
                      tagline={beer.tagline}
                      contributted={beer.contributed_by}
                      id={beer._id}
                    />
                  ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Allbeers;
