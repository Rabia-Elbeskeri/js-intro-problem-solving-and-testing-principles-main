const { check, runTest, skipTest } = require("../test-api/index.js");

function consecutiveItems(integers, a, b) {
	/*
You are given a list of unique integers arr, and two integers a and b. 
Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/
	const indexA = integers.indexOf(a);
	return (integers[indexA - 1] === b || integers[indexA + 1] === b);
}

runTest("returns true when the given numbers are consecutive", function () {
	// Arrange
	const numsToCheck = [1, 2]

	// Act
	const result = consecutiveItems(numsToCheck, 1, 2)

	// Assert
	check(result).isEqualTo(true);
});

runTest("returns true when the given numbers are consecutive for a larger array", function () {
	// Arrange
	const numsToCheck = [5, 2, 3, 12]

	// Act
	const result = consecutiveItems(numsToCheck, 2, 3)

	// Assert
	check(result).isEqualTo(true);
});

// populate the different steps for the next condition
runTest("returns false when the given numbers are not consecutive", function () {
	// Arrange
	const numsToCheck = [10, 15, 20, 25];
	// Act
	const result = consecutiveItems(numsToCheck, 10, 20);
	// Assert
	check(result).isEqualTo(false);
});


// ...and add more test blocks down here!
runTest("returns true when numbers are consecutive but appear in reverse order", function () {
	// Arrange
	const numsToCheck = [8, 6, 7];

	// Act
	const result = consecutiveItems(numsToCheck, 7, 6);

	// Assert
	check(result).isEqualTo(true);
});