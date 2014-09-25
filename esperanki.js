'use strict';

// Argv
var file = process.argv[2] || "example-text.txt";
var outputFile = process.argv[3] || "deck.txt";
var amountWords = process.argv[4] || 10;
var sourceLang = process.argv[5] || 'de';
var targetLang = process.argv[6] || 'en'

// Modules
var fs = require('fs');
var split = require('strsplit');
var request = require('request');

fs.readFile(file, 'utf-8', splitIntoWords);

function splitIntoWords(err, text) {
	if (err)
	{
		console.log(err);
		return;
	}

	var allWords = split(text, /[\s,.?!-]+/);
	var nLongestWords = getLongestWords(allWords, amountWords);
	translate(nLongestWords);
}

function translate(words) {
	// http://mymemory.translated.net/api/get?q=Hello%20World!&langpair=en|it
	// Limited to 1000 requests/day
	var joinedWords = words.join();
	var requestUrl = 'http://mymemory.translated.net/api/get?q='+joinedWords+'&langpair='+sourceLang+'|'+targetLang;
	
	request(requestUrl, function(err, response, body) {
		var obj = JSON.parse(body);
		var translation = obj.responseData.translatedText;
		var translatedWords = split(translation, /[,]+/)
		outputDeck(words, translatedWords);
	});
}

function outputDeck(words, translations)
{
	var stream = fs.createWriteStream(outputFile, {flags:"w", encoding: "utf-8"});
	for (var i = 0; i < words.length; i++) {
		stream.write(words[i] + " : " + translations[i]);
		stream.write("\n");
	};
	stream.end();
}

function getLongestWords(source, count) {
	source.sort(sortByStringSize);
	return source.slice(source.length-count)
}

function sortByStringSize(strA, strB) {
	return strA.length > strB.length;
}
