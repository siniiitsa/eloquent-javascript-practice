const chessboard = size => {
  let board = '';

  for (let y = 0; y < size; ++y) {
    for (var x = 0; x < size; ++x) {
      board += (x + y) % 2 === 0 ? ' ' : '#';
    }
    board += '\n';
  }

  return board;
}

console.log(chessboard(8));