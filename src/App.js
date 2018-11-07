import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  winnerHandle = (winner) => {
    if (winner != null)
      alert('The winner is ' + winner);
  };
  render() {
	return (
	  <Board value="9" winnerHandle = {(winner) => this.winnerHandle(winner)}>

	  </Board>
	);
  }
}

export default App;
