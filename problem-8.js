// Problem 8: Count words in a sentence;

function countWords(str){
    let strSplit = str.split(' ');
    count = strSplit.length;
    return count;
}

console.log(countWords('I love bangladesh beauty and nature'))