function Ship(length) {
  const shipLength = length;
  let numberOfHits = 0;
  function hit() {
    if (numberOfHits < shipLength) numberOfHits += 1;
  }
  function getHits() {
    return numberOfHits;
  }
  function isSunk() {
    return shipLength === numberOfHits;
  }
  return { length, hit, isSunk, getHits };
}

module.exports = Ship;
