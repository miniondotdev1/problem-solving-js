// Input: a number
// Output: the number with digits reversed
// Returns: a number
 
function reverseNumber(num) {
  let str = num.toString();

  let reversed = Number(str.split('').reverse().join(''))
  return reversed
 
}
 
console.log(reverseNumber(1234)); 
console.log(reverseNumber(7));    
