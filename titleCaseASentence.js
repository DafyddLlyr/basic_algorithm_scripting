/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

function titleCase(str) {
  let myArr = str.toLowerCase().split(' ');
  for (let i = 0; i < myArr.length; i++) {
    myArr[i] = myArr[i].split('');
    myArr[i][0] = myArr[i][0].toUpperCase();
    myArr[i] = myArr[i].join('');
  }
  return myArr.join(' ');
}

titleCase("I'm a little tea pot");