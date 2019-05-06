/* Repeat a given string str (first argument) for num times (second argument).

Return an empty string if num is not a positive number */

function repeatStringNumTimes(str, num) {
  let result = []
  while (num >= 1) {
    console.log(num);
    result.push(str);
    num--;
  }
  return result.join("");
}

repeatStringNumTimes("abc", 3);