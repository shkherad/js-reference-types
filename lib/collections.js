'use strict';

const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

// The paragraph split into a list
//Split takes a string and gives an array
let words = paragraph.split(' ');

// The word list normalized (all uppercase with punctuation removed)
// '/\W+/ regular expression identifying all no letter characters'
const normalize = function (word) {
  //replaces non letters with empty string
  //transforms all letters to uppercase
  return word.replace(/\W+/,'').toUpperCase();
}
//array.map interates through each item in array and applies normalize function
let normalizedWords = words.map(normalize);

// The words stored as keys of a dictionary
//Function to create an object with each word as an array
//Cant have two same identical properties in an array
let uniqueWordsAsKeys = function (array) {
  let result = {};

  array.forEach(function (word){
    result[word] = 0;
  });
  return result;
}

// The keys pulled out into a list
let uniqueWords = Object.keys(uniqueWordsAsKeys(normalizedWords));

// The words as keys and the values the count of each word
/*Goal: take normalizedWords (complete lit of the text as a normalized array),
and count the number of particular unique word appears in normalized words.
Finally, we add that frequency to the word frequencies object to obtain a count
*/
let wordFrequencies = {};

normalizedWords.forEach(function (word) {
  if (wordFrequencies[word]){
    wordFrequencies[word] += 1;
  } else {
    wordFrequencies = 1;
  };

}

)

module.exports = {
  normalizedWords,
  uniqueWords,
  wordFrequencies,
};
