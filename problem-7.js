// Problem-7: Check if a string is a palindrome;

function checkPalindrome(str){
    let reversed = '';
    for(let i = str.length - 1; i>= 0; i--){
        let letter = str[i]
        reversed += letter;
    }
    if(reversed === str){
        return "Palindrome";
    }else{
        return "This string is not a palindrome"
    }
}

console.log(checkPalindrome('dad'))