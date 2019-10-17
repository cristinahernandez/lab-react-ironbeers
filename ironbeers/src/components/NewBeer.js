import React, { Component } from "react";
import Header from "./Header";
import beerService from "../services/beerService";
import { Link } from "react-router-dom";

class Newbeer extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      contributted: "",
      brewers_tips: "",
      attenuation_level: 0,
      submitted: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    try {
      event.preventDefault();
      const newBeer = await beerService.postNewBeer(this.state);
      console.log(newBeer);
      this.setState({
        submitted: true
      });
    } catch (error) {
      console.log(error);
    }
  }
  handleInput(event) {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }
  render() {
    const {
      name,
      tagline,
      description,
      firstBrewed,
      contributted,
      brewersTips,
      attenuation_level
    } = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <p className="breadcrumbs">
            <Link to="/beers">&laquo; All Beers </Link>
          </p>
          {this.state.submitted ? (
            <h4>
              <center>
                "¡Congratulations! Your beer is on our database now"
              </center>
            </h4>
          ) : (
            <form className="register-form" onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={this.handleInput}
                placeholder="Beer's name"
                value={name}
              />
              <label>Tagline</label>
              <input
                type="text"
                name="tagline"
                onChange={this.handleInput}
                placeholder="Tagline"
                value={tagline}
              />
              <label>Description</label>
              <textarea
                type="text"
                name="description"
                onChange={this.handleInput}
                placeholder="Description of your beer here..."
                value={description}
                rows="10"
                cols="30"
              />
              <label>First Brewed</label>
              <input
                type="date"
                onChange={this.handleInput}
                value={firstBrewed}
              ></input>
              <label>Brewer Tips</label>
              <textarea
                type="text"
                name="brewer_tips"
                onChange={this.handleInput}
                placeholder="Description of your beer here..."
                value={brewersTips}
                rows="3"
                cols="30"
              />
              <label>Attenuation Level</label>
              <input
                type="number"
                name="attenuation_level"
                onChange={this.handleInput}
                placeholder="0"
                value={attenuation_level}
              />
              <label>Contributted by</label>
              <input
                type="text"
                name="contributted"
                onChange={this.handleInput}
                placeholder="Author's name"
                value={contributted}
              />
              <button>Create your own beer!</button>
            </form>
          )}
        </div>
      </>
    );
  }
}

export default Newbeer;
