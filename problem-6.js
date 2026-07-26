// Problem-6: Count Vowels in a string

function checkVowel(str){
    
    const vowels = "aeiou";
    let count = 0;
    for(let i = 0; i < str.length; i++){
        let letter = str[i]
        if(vowels.includes(letter)){
            count ++;
        }
    }
    return count;
}

console.log(checkVowel("programming"))