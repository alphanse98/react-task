
import React, { Component } from "react";
import Addcart from "./Addcart";
import Child from "./child";

export class Parent extends Component {
  constructor() {
    super();
    this.state = {
      card: [],
      product: [
        { id: 1, name: "a", quanty: 1 },
        { id: 2, name: "b", quanty: 1 },
        { id: 3, name: "c", quanty: 1 },
      ],
    };
  }
  addCard = (data) => {
    console.log(data);
    var ab = this.state.card.concat(data)
     this.setState({ card: ab});
  };

  render() {
    return (
      <div>
        {this.state.product.map((ele, index) => (
          <Child key={index} ele={ele} addCard={this.addCard} />
        ))}

        {this.state.card.map((ele, index) => (
          <Addcart key={index} ele={ele} />
        ))}
      </div>
    );
  }
}

export default Parent;
