import {Component} from "react";
import React from "react";


class Square extends Component {

  render() {
    return (
      <button className="Item" onClick={() => this.props.onclick()}>
        {this.props.value}
      </button>
    )
  }
}

export default Square;
