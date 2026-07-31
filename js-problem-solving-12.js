// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number

function averageOfArray(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    let totalNumber = numbers[i]
    total += totalNumber;
  }
  
    let avg = total / numbers.length

  return avg;
}

console.log(averageOfArray([2, 4, 6])); // Expected: 4
