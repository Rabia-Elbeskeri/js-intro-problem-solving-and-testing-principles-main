const { check, runTest, skipTest } = require("../test-api/index.js");

function calculateJump(locations, catJumpLength, mouseRunLength) {
	/*
  You will be given an array containing string representations of the locations of a cat and multiple mice. Hiding holes for mice are represented by "O".
  You will also be given one positive integer which represents how far the cat can jump, and a second one representing how far the mouse can move.

  Your task is to determine if the cat can catch the mouse before it hides. 

  Each space "x" expends 1 of the cat's and mouse's movement. 
  The cat and mouse moce simultaneously, so the cat has to catch the mouse before the mouse would go over to a hole "O".

  E.g.
    calculateJump(["cat", "mouse", "x", "O"], 5, 1)
    //  => true
  */

	const catIndex = locations.indexOf("cat");
	const miceIndices = [];
	const holeIndices = [];

	for (let i = 0; i < locations.length; i++) {
		if (locations[i] === "mouse") miceIndices.push(i);
		if (locations[i] === "O") holeIndices.push(i);
	}

	if (catIndex === -1 || miceIndices.length === 0) return false;

	for (let mouseIndex of miceIndices) {
		let distanceToMouse = Math.abs(catIndex - mouseIndex);

		let distanceToHole = Infinity;
		for (let holeIndex of holeIndices) {
			let holeDistance = Math.abs(mouseIndex - holeIndex);
			if (holeDistance < distanceToHole) {
				distanceToHole = holeDistance;
			}
		}


		let catMoves = distanceToMouse / catJumpLength;
		let mouseMoves = distanceToHole / mouseRunLength;

		if (catMoves <= mouseMoves) {
			return true;
		}
	}

	return false;
}

runTest("returns true when the cat can reach the mouse before it reaches a hole",
	function () {
		// ...add check() assertions here
		// Arrange
		const locations = ["cat", "mouse", "x", "O"];

		// Act
		const result = calculateJump(locations, 5, 1);

		// Assert
		check(result).isEqualTo(true);
	});


// ...and add more test blocks down here!
runTest("returns false when the mouse can reach the hole before the cat", function () {
	// Arrange
	const locations = ["cat", "x", "mouse", "x", "O"];

	// Act
	const result = calculateJump(locations, 1, 3);

	// Assert
	check(result).isEqualTo(false);
});

runTest("returns true when the cat catches the mouse just in time", function () {
	// Arrange
	const locations = ["cat", "x", "mouse", "x", "O"];

	// Act
	const result = calculateJump(locations, 2, 1);

	// Assert
	check(result).isEqualTo(true);
});



runTest("returns true when the cat can jump far enough to reach any mouse", function () {
	// Arrange
	const locations = ["cat", "x", "mouse", "x", "mouse", "x", "O"];

	// Act
	const result = calculateJump(locations, 10, 2);

	// Assert
	check(result).isEqualTo(true);
});

runTest("returns false when the mouse has a hole right next to it", function () {
	// Arrange
	const locations = ["cat", "x", "mouse", "O"];

	// Act
	const result = calculateJump(locations, 3, 1);

	// Assert
	check(result).isEqualTo(false);
});