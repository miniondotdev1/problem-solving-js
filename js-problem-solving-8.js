// Input: a string
// Output: true or false
// Returns: a boolean

function isPalindrome(str) {
let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  if(reversed === str){
    return true;
  }
  return false;
}

console.log(isPalindrome("level")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false
