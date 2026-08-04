// Input: an array of words, a length threshold
// Output: array of words longer than the threshold
// Returns: an array

function getWordsLongerThan(words, minLength) {
  let longWords = [];

  for(let i =0; i< words.length; i++){
    let word = words[i];

    if(word.length > minLength){
        longWords.push(word)
    }
  }
  

  return longWords;
}

// Input: an array
// Output: the number of elements in the array
// Returns: a number

function countArray(arr) {
  let count = 0;
  
  for(let i = 0; i < arr.length; i++){
    count++
  }

  return count;
}

let words = ["cat", "elephant", "dog", "hippopotamus", "ox"];
let longWords = getWordsLongerThan(words, 3);
let total = countArray(longWords);

console.log(longWords); // Expected: ["elephant", "hippopotamus"]
console.log(total); // Expected: 2
