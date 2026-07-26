// Problem 12: Filter Numbers greater than an Value;

function getFilteredArray(arr, value) {
  let filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
        filteredArray.push(arr[i])
    }
  }
  return filteredArray;
}

console.log(getFilteredArray([10, 34, 21, 54, 56, 300, 89], 40))