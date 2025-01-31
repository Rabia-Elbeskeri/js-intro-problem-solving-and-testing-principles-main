const { check, runTest, skipTest } = require("../test-api/index.js");

function calculateJump(locations, jumpLength) {
	/*
  You will be given an array containing string representations of the locations of a cat and a mouse. 
  You will also be given a positive integer which represents how far the cat can jump.

  Your task is to calculate if the cat can jump far enough to catch the mouse. Each space "x" in the array expends 1 from the cat's movement.
  It does not matter if the cat is before or after the mouse in the array.

  E.g.
    calculateJump(["cat", "mouse"], 5) 
    // => true
  */
	const catIndex = locations.indexOf("cat");
	const mouseIndex = locations.indexOf("mouse");

	// Calculate the absolute distance between them
	const distance = Math.abs(catIndex - mouseIndex);

	return distance <= jumpLength;
}

runTest(
	"returns true when the cat is next to the mouse and has a jump length of 1",
	function () {
		// ...add check() assertions here
		const locations = ["cat", "mouse"];

		// Act
		const result = calculateJump(locations, 1);

		// Assert
		check(result).isEqualTo(true);
	}
);

// ...and add more test blocks down here!
runTest("returns true if the cat can reach the mouse within jump length", function () {
	// Arrange
	const locations = ["cat", "x", "x", "mouse"];

	// Act
	const result = calculateJump(locations, 3);

	// Assert
	check(result).isEqualTo(true);
});

runTest("returns false if the at cannot reach the mouse within jump length", function () {
	// Arrange
	const locations = ["cat", "x", "x", "x", "x", "mouse"];

	// Act
	const result = calculateJump(locations, 3);

	// Assert
	check(result).isEqualTo(false);
});
runTest("returns false if the cat and mouse are at the same position", function () {
	// Arrange
	const locations = ["cat", "mouse"];

	// Act
	const result = calculateJump(locations, 0);

	// Assert
	check(result).isEqualTo(false);
});