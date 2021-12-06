import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);

    this.setState({ deck: deck.data });
  }

  async handleClick() {
    let deckID = this.state.deck.deck_id;
    try {
      let url = `${API_BASE_URL}/${deckID}/draw/`;
      let urlData = await axios.get(url);
      if (!urlData.data.success) {
        throw new Error("No More Cards!");
      }
      let card = urlData.data.cards[0];
      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`,
          },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const cards = this.state.drawn.map((card) => (
      <Card name={card.name} image={card.image} key={card.id} />
    ));
    return (
      <div>
        <button onClick={this.handleClick}>Get A Card!</button>
        {cards}
      </div>
    );
  }
}

export default Deck;
