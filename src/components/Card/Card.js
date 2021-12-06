import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <img
          className="Card"
          src={this.props.image}
          alt={this.props.name}
          id={this.props.id}
        />
      </div>
    );
  }
}

export default Card;
