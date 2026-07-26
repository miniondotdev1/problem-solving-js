// Problem 9: Find the largest number in an Array;

function largestNumberFromArray(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (currentElement > largest) {
      largest = currentElement;
    }
  }
  return largest;
}

console.log(largestNumberFromArray([250, 20, 5, 500, 45, 345, 954, 63]))