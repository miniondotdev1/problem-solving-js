// problem-5: Reverse a string

function reversedSTR(str){
    let reversed = '';
    for(let i = str.length -1; i >= 0; i--){
        let letter = str[i];
        reversed += letter;
    }
    return reversed;
}

console.log(reversedSTR('Deep Leaning'))