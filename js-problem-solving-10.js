// Input: an array of numbers
// Output: the second smallest number
// Returns: a number

function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    if(currentNumber < smallest){
        secondSmallest = smallest
        smallest = currentNumber
    }
    else if(currentNumber < secondSmallest && currentNumber !== smallest){
        secondSmallest = currentNumber
    }
        
  }

  return secondSmallest;
}

console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8
