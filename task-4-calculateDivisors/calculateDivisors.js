const { check, runTest, skipTest } = require("../test-api/index.js");

function calculateDivisors(number) {
   let sum = 0;

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}
runTest("should return 0 for input 1", function () {
    check(calculateDivisors(1), 0);
});
runTest("should return 8 for input 6", function () {
    check(calculateDivisors(6), 8);
});

runTest("should return 23 for input 10", function () {
    check(calculateDivisors(10), 23);
});

runTest("should return 33 for input 12", function () {
    check(calculateDivisors(12), 33);
});



