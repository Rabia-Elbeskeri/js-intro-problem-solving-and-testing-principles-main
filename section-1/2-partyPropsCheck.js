const { check, runTest, skipTest } = require("../test-api/index.js");

function partyPropCheck(stock, colour) {
	/*
  Its nearly party time! But how many items do we have to fit the colour scheme? 

  You will be given a stock object, and a colour. Return the number of items which match the given colour. The colour "rainbow" is a match for all colours.
  */
	let count = 0;

	for (let category in stock) {
		for (let itemColour in stock[category]) {
			if (itemColour === colour || colour === "rainbow") {
				count += stock[category][itemColour];
			}
		}
	}

	return count;
}

runTest("counts the props when only one item is in stock", function () {
	// Arrange
	const stock = {
		balloons: {
			purple: 3,
		},
	}

	// Act
	const result = partyPropCheck( stock, "purple" )
	
	// Assert
	check(result).isEqualTo(3);
});

skipTest(
	"returns 0 when the stock does not contain the given colour", function () {
		// ...add check() assertions here
		// Arrange
		const stock = {
			balloons: { red: 5 },
			streamers: { blue: 10 },
		}

		// Act
		const result = partyPropCheck(stock, "green");

		// Assert
		check(result).isEqualTo(0);
	});


// ...and add more test blocks down here!
runTest("counts all items when colour is 'rainbow'", function () {
	// Arrange
	const stock = {
		balloons: { red: 5, purple: 3 },
		streamers: { blue: 10, green: 2 },
		confetti: { yellow: 6 },
	}

	// Act
	const result = partyPropCheck(stock, "rainbow");

	// Assert
	check(result).isEqualTo(26);
});

runTest("returns 0 when stock is empty", function () {
	// Arrange
	const stock = {};

	// Act
	const result = partyPropCheck(stock, "purple");

	// Assert
	check(result).isEqualTo(0);
});