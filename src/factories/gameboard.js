function Gameboard() {
  const width = 10;

  function createBlankBoard() {
    const board = [];
    for (let i = 0; i < width * width; i += 1) {
      board.push(null);
    }
    return board;
  }

  return { createBlankBoard };
}

module.exports = Gameboard;
