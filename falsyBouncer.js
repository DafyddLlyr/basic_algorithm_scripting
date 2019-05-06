/* Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean. */

function bouncer(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      resultArr.push(arr[i]);
      }
  }
  return resultArr;
}

bouncer([7, "ate", "", false, true, 9]);

