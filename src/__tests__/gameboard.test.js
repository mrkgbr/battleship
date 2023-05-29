/* eslint-disable no-undef */
const Gameboard = require("../factories/gameboard");

describe("testing Gameboard", () => {
  const newBoard = new Gameboard();
  test("test board length", () => {
    expect(newBoard.createBlankBoard().length).toBe(100);
  });
});
