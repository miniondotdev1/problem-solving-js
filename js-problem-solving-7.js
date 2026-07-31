// Input: a string
// Output: the string without its first and last character
// Returns: a string
 
function removeFirstAndLast(str) {
  let splitSTR = str.split('');
  splitSTR.shift();
  splitSTR.pop();
  
  return splitSTR.join('')

}
 
console.log(removeFirstAndLast("Hello")); // Expected: "ell"
