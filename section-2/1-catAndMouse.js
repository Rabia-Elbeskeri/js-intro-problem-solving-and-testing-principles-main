const { check, runTest, skipTest } = require("../test-api/index.js");

function calculateJump(locations, jumpLength) {
	/*
  You will be given an array containing string representations of the locations of a cat and a mouse. The array may also contains walls represented by "W".
  You will also be given a positive integer which represents how far the cat can jump.

  Your task is to calculate if the cat can jump far enough to catch the mouse.

  Each space "x" expends 1 of the cat's movement, and each wall "W" expends 2.
  It does not matter if the cat is before or after the mouse in the array.

  E.g.
    calculateJump(["cat", "W", "mouse"], 5)
    // => true
  */

	const catIndex = locations.indexOf("cat");
	const mouseIndex = locations.indexOf("mouse");
	if (catIndex === -1 || mouseIndex === -1) return false;

	const path = locations.slice(Math.min(catIndex, mouseIndex), Math.max(catIndex, mouseIndex));
	let movementCost = 0;
	for (let space of path) {
		if (space === "x") movementCost += 1;
		if (space === "W") movementCost += 2;
	}
	return movementCost <= jumpLength;
}

runTest("returns false when the cat and mouse are separated by a distance greater than the jump length", function () {
	// Arrange
	const locations = ["cat", "x", "x", "x", "x", "mouse"];

	// Act
	const result = calculateJump(locations, 3);

	// Assert
	check(result).isEqualTo(false);
});

// ...and add more test blocks down here!
runTest("returns true when the cat can reach the mouse within jump length", function () {
	// Arrange
	const locations = ["cat", "x", "x", "mouse"];

	// Act
	const result = calculateJump(locations, 3);

	// Assert
	check(result).isEqualTo(true);
});
runTest("returns false when the cat cannot reach the mouse because walls affecting movement", function () {
	// Arrange
	const locations = ["cat", "W", "x", "x", "mouse"];

	// Act
	const result = calculateJump(locations, 3);

	// Assert
	check(result).isEqualTo(false);
});