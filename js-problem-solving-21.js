// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string

function reverseWords(sentence) {
  let reversedWord = "";

  // for(let i =0; i < sentence.length; i++){
  //     let checkSentence = sentence[i];
  //
  // }

  let splitSentence = sentence.split(" ");
  let reversedSplitSentence = splitSentence.reverse()
  return reversedSplitSentence.join(" ")

}

console.log(reverseWords("hello world")); // Expected: "world hello"
