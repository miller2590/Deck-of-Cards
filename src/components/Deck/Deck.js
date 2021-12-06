import React, { Component } from "react";
import Card from "../Card/Card";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button>Get A Card!</button>
        <Card />
      </div>
    );
  }
}

export default Deck;
