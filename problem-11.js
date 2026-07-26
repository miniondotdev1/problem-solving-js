// Problem 11: Sum an Average of an Array

function sumAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
}

console.log(sumAverage([3, 5, 23, 65, 90]));
