'use strict';

// TODO: use argv
var file = 'example-text.txt';
var amountWords = 10;

var fs = require('fs');
var split = require('strsplit');

fs.readFile(file, 'utf-8', splitIntoWords);

function splitIntoWords(err, text) {
	'use strict';

	if (err)
	{
		console.log(err);
		return;
	}
	var allWords = split(text, /[\s,.?!-]+/);
	allWords.sort(sortByStringSize);
	console.log(allWords);
	translate(allWords.slice(allWords.length-amountWords));
}

function sortByStringSize(strA, strB) {
	'use strict';

	return strA.length > strB.length;
}

function translate(words) {
	console.log(words)
}