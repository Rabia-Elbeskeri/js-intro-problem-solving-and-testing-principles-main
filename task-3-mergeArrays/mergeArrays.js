const { check, runTest, skipTest } = require("../test-api/index.js");

	function mergeArrays(...arrays) {
		let newArray = [...new Set(arrays.flat())];
		return newArray.sort((a, b) => a - b);
}

runTest(
	"merges two sorted arrays without duplicates",
	function () {
		// ......add check() assertions here
		const arr1 = [1, 3, 5];
		const arr2 = [2, 4, 6];

		// Act
		const result = mergeArrays(arr1, arr2);

		// Assert
		check(result).isEqualTo([1, 2, 3, 4, 5, 6]);
	});
runTest("handles empty arrays", function () {
	// Arrange
	const arr1 = [];
	const arr2 = [1, 2, 3];

	// Act
	const result = mergeArrays(arr1, arr2);

	// Assert
	check(result).isEqualTo([1, 2, 3]);
});
runTest("merges arrays that contain duplicate values", function () {
	// Arrange
	const arr1 = [1, 1, 2, 3];
	const arr2 = [2, 3, 4, 4];

	// Act
	const result = mergeArrays(arr1, arr2);

	// Assert
	check(result).isEqualTo([1, 2, 3, 4]);
});