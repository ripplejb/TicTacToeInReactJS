import {Component} from "react";
import React from "react";
import Square from './Square';
import TicTacToe from '../Business/TicTacToe';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      lastValue: 'X',
      winner: null
    };
  }

  clickHandle = (i) => {
    if (this.state.winner != null) {
      this.props.winnerHandle(this.state.winner);
      return;
    }

    const squares = this.state.squares.slice();
    let lastValue = this.state.lastValue;

    squares[i] = lastValue;
    if (lastValue === 'X') lastValue = 'O';
    else lastValue = 'X';
    const winner = new TicTacToe().getState(squares);
    this.setState({squares: squares, lastValue: lastValue, winner: winner});
  };

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      onclick = {() => this.clickHandle(i)}
    />
  }

  render() {
    let buttons = [];
    for (let i = 0; i < this.props.value; i++) {
      buttons.push(this.renderSquare(i))
    }
    return buttons;
  }
}

export default Board;