/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */


function chunkArrayInGroups(arr, size) {
  let resultArr = [];
  let numOfChunks = Math.ceil(arr.length / size);
  for (let i = 0; i < numOfChunks; i++) {
    resultArr.push(arr.slice(0, size))
    arr.splice(0, size);
  }
  return resultArr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);