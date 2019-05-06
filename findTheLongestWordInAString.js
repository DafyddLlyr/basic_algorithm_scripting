/* Return the length of the longest word in the provided sentence.

Your response should be a number. */

function findLongestWordLength(str) {
  let resultArr = str.split(" ") // Break string in array of words
  .map(x => x.length) // Change from words to length values
  .sort(function(a, b) { return b - a}); // Sort by largest
  return resultArr[0]; // Return first item in array (longest word)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

