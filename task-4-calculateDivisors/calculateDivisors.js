const { check, runTest, skipTest } = require("../test-api/index.js");

function calculateDivisors(number) {
	const divisors = [];
	for (let i = 1; i <= number; i++) {
		if (number % i === 0) {
			divisors.push(i);
		}
	}
	return divisors;
}

runTest(
	"should return all divisors of a given number",
	function () {
		// ...add check() assertions here
		check(calculateDivisors(1)).isEqualTo([1]);
		check(calculateDivisors(6)).isEqualTo([1, 2, 3, 6]);
	}
);
runTest("should return all divisors of a given Prime number", function () {
	check(calculateDivisors(17)).isEqualTo([1, 17]);
});