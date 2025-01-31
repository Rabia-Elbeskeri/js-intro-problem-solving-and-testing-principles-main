const { check, runTest, skipTest } = require("../test-api/index.js");

function sentenceToCamelCase(sentence) {
	let words = sentence.toLowerCase().split(" ");
	let camelCaseStr = words[0] || "";

	for (let i = 1; i < words.length; i++) {
		if (words[i]) {
			camelCaseStr += words[i][0].toUpperCase() + words[i].slice(1);
		}
	}

	return camelCaseStr;
}

runTest("should convert a sentence to camelCase", function () {
	check(sentenceToCamelCase("hello world")).isEqualTo("helloWorld");

});