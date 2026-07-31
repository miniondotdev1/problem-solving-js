// Input: an array of numbers
// Output: array with only even numbers
// Returns: an array
 
function keepEvenNumbers(numbers) {
  let result = [];
  
  for(let i =0; i < numbers.length; i++){
    let arrayNumber = numbers[i];
    if(arrayNumber % 2 === 0){
        result.push(arrayNumber)
    }
  }
 
  return result;
}
 
console.log(keepEvenNumbers([3, -5, 8, -1, 0])); // Expected: [8, 0]
