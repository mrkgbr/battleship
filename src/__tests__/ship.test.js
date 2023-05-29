/* eslint-disable no-undef */
const Ship = require("../factories/ship");

describe("new Ship default values testing", () => {
  test("test new ship length", () => {
    expect(new Ship(4).length).toBe(4);
  });

  test("test new ship default hits number", () => {
    expect(new Ship(4).getHits()).toBe(0);
  });
});

describe("new Ship hit function testing", () => {
  const ship = new Ship(4);
  ship.hit();
  test("used hit() once, result should be 1", () => {
    expect(ship.getHits()).toBe(1);
  });
});

describe("new Ship isSunk() function testing", () => {
  const ship = new Ship(4);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  test("number of hits is 4, it should be true", () => {
    expect(ship.isSunk()).toBe(true);
  });
});

describe("new Ship isSunk() function testing", () => {
  const ship = new Ship(4);
  ship.hit();
  ship.hit();
  test("number of hits is 2 and the length is 4, it should be false", () => {
    expect(ship.isSunk()).toBe(false);
  });
});
