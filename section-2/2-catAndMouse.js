const { check, runTest, skipTest } = require("../test-api/index.js");

function calculateJump(locations, jumpLength) {
	/*
  You will be given an array containing string representations of the locations of a cat and multiple mice.
  You will also be given a positive integer which represents how far the cat can jump.

  Your task is to calculate how many, if any, mice can the cat catch in one jump.

  Each space "x" expends 1 of the cat's movement.
  The cat will always go for the highest number of mice it can catch if there are mice before and after it in the array.

  E.g.
    calculateJump(["cat", "x", "mouse"], 5)
    // => 1
  */
	const catIndex = locations.indexOf("cat");


	if (catIndex === -1) return 0;

	let miceCaught = 0;

	let distance = 0;
	for (let i = catIndex - 1; i >= 0; i--) {
		if (locations[i] === "mouse") {
			if (distance <= jumpLength) {
				miceCaught++;
			}
		} else if (locations[i] === "x") {
			distance++;
		} else {
			break;
		}
	}

	distance = 0;

	for (let i = catIndex + 1; i < locations.length; i++) {
		if (locations[i] === "mouse") {
			if (distance <= jumpLength) {
				miceCaught++;
			}
		} else if (locations[i] === "x") {
			distance++;
		} else {
			break;
		}
	}

	return miceCaught;
}
runTest("returns 1 when the cat can catch a single mouse", function () {
	// Arrange
	const locations = ["cat", "x", "mouse"];

	// Act
	const result = calculateJump(locations, 5);

	// Assert
	check(result).isEqualTo(1);
});

// ...and add more test blocks down here!
runTest("returns 0 when no mice are within reach", function () {
	// Arrange
	const locations = ["cat", "x", "x", "mouse"];

	// Act
	const result = calculateJump(locations, 2);

	// Assert
	check(result).isEqualTo(0);
});

runTest("returns correct count when multiple mice are within reach", function () {
	// Arrange
	const locations = ["cat", "x", "mouse", "x", "mouse"];

	// Act
	const result = calculateJump(locations, 4);

	// Assert
	check(result).isEqualTo(2);
});

runTest("returns correct count when the cat is between two groups of mice", function () {
	// Arrange
	const locations = ["mouse", "x", "cat", "x", "mouse", "x", "mouse"];

	// Act
	const result = calculateJump(locations, 4);

	// Assert
	check(result).isEqualTo(3);
});
runTest("returns the total count of all reachable mice", function () {
	// Arrange
	const locations = ["mouse", "x", "mouse", "x", "cat", "x", "mouse", "x", "mouse"];

	// Act
	const result = calculateJump(locations, 5);

	// Assert
	check(result).isEqualTo(4);
});