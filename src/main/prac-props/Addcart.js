import React, { Component } from "react";

export class Addcart extends Component {
  remove1 = () => {
    console.log(this.props.ele.name);
  };
  render() {
    return (
      <div className="box">
        {this.props.ele.id}
        <p>{this.props.ele.name}</p>
        <p>quanty = {this.props.ele.quanty}</p>
        <button onClick={this.remove1}>Remove</button>
      </div>
    );
  }
}

export default Addcart;
