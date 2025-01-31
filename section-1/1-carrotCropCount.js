const { check, runTest, skipTest } = require("../test-api/index.js");

function carrotCropCount(gardenPatch) {
	/*
  Spring came, the desire to have a veggie garden overwhelmed you and so you planted some seeds. Now they are all grown, how many are carrots?

  You are given a garden patch represented by a nested array. Count the total number of carrots found, and return it.
  */
	let count = 0;

	function countCarrots(arr) {
		for (let item of arr) {
			if (Array.isArray(item)) {
				countCarrots(item);
			} else if (item === "carrot") {
				count++;
			}
		}
	}

	countCarrots(gardenPatch);
	return count;
}

runTest("counts the carrots when there are only carrots present", function () {
	// Arrange
	const garden = ["carrot"]

	// Act
	const count = carrotCropCount(garden)

	// Assert
	check(count).isEqualTo(1);
});

runTest(
	"returns 0 when the garden contains no carrots", function () {
		// ...add check() assertions here
		// Arrange
		const garden = ["potato", "tomato", "lettuce"];

		// Act
		const count = carrotCropCount(garden);

		// Assert
		check(count).isEqualTo(0);
	}
);

// ...and add more test blocks down here!
runTest("returns 0 when the garden is empty", function () {
	// Arrange
	const garden = [];

	// Act
	const count = carrotCropCount(garden);

	// Assert
	check(count).isEqualTo(0);
});
runTest("returns 0 when the garden contains only non-vegetable items", function () {
	// Arrange
	const garden = ["rock", "soil", "water"];

	// Act
	const count = carrotCropCount(garden);

	// Assert
	check(count).isEqualTo(0);
});