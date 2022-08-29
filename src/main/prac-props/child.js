import './child.css';

import React, { Component } from "react";

export class Child extends Component {
Card = () => {
this.props.addCard(this.props.ele)
}
  render() {
    return (
      <div className="box">
        {this.props.ele.id}
        <p>{this.props.ele.name}</p>
        <p>quanty = {this.props.ele.quanty}</p>
        <button onClick={this.Card}>Add</button>
      </div>
    );
  }
}

export default Child;
