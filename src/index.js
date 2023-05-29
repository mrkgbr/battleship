const Ship = require("./factories/ship");

const ship = new Ship(4);
ship.hit();
ship.hit();
ship.hit();
ship.hit();
console.log(ship.isSunk());
console.log(ship.getHits());
