class TicTacToe {
  getState = (squares) => {
    const results = Array(8).fill(null);
    for(let i = 0; i < 9; ++i) {
      if (i%4 === 0) {
        results[0] += squares[i];
      }
      if (i > 0 && i < 7 && i%2 === 0) {
        results[1] += squares[i];
      }
      if (i >= 0 && i <= 2) {
        results[2] += squares[i];
      }
      if (i >= 3 && i <= 5) {
        results[3] += squares[i];
      }
      if (i >= 6 && i <= 8) {
        results[4] += squares[i];
      }
      results[5 + i%3] += squares[i];
    }

    for(let i = 0; i < 8; ++i) {
      let res = this.Winner(results[i]);
      if (res != null) return res;
    }
    return null;
  };

  Winner = (line) => {
    if (line === 'nullXXX')
      return 'X';
    if (line === 'nullOOO')
      return 'O';
    return null;
  };

}

export default TicTacToe;