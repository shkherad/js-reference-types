'use strict';

//takes a long string, creates and array of each words
//by splitting at each ' '

const splitIntoWords = function (paragraph){
  let words = paragraph.split(' ')
  return words
}

//normalize a single word
//replace non letters and transform to uppercase
const normalizeWord = function (word){
  return word.replace(/\W+/,'').toUpperCase();
}

//normalize an entire array

const normalizeArray = function(wordArray) {
  normalArray = wordArray.map(normalizeWord)
  return normalArray
}

// list normalized words into an object to get rid of repeats
const getUnique = function (normalArray) {
  let uniqueWordsObject = {};
  normalArray.forEach( function (word){
    uniqueWordsObject[word] = 0;
  })
  return uniqueWordsObject
}

// turn unique object keys into an array

const uniqueObjectToArray = function (uniqueWordsObject){
 let uniqueArray = Object.keys(uniqueWordsObject);
 return uniqueArray
}


// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const getNormalizedWords = function(paragraph) {
  let words = splitIntoWords(paragraph);
  let normalArray = normalizeArray(words);
  return normalArray
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const getUniqueWords = function (paragraph) {
  let normalArray = getNormalizedWords(paragraph)
  let uniqueWordsObject = getUnique(normalArray)
  let uniqueArray = uniqueObjectToArray(uniqueWordsObject)
  return uniqueArray
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (paragraph) {
  let totalWords = getNormalizedWords(paragraph).length;
  console.log("Total words: "+totalWords);
  let totalUniqueWords = getUniqueWords(paragraph).length;
  console.log("Total unique words: "+totalUniqueWords);
};

// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount,
};
