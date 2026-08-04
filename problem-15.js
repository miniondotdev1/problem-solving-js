// Problem 15: Return all Even Numbers, then their Sum

let arr = [10, 20, 50, 150, 6, 7, 9, 11, 23];

// // without function
// let evenNumbers = [];

// for (let i = 0; i < arr.length; i++) {
//   if(arr[i] %2 === 0){
//     evenNumbers.push(arr[i])
//   }
// }

// // console.log(evenNumbers)

// sum = 0;
// for(let key of evenNumbers){
//     sum += key;
// }
// // console.log(sum)

function getEvenNumbers(arr){
    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }

    return evenNumbers;
}

function getSum (arr){
    let sum = 0;
    for (let key of evenNumbers) {
      sum += key;
    }
    return sum;
}

let evenNumbers = getEvenNumbers(arr)
let sum = getSum(evenNumbers);
console.log(evenNumbers);
console.log(sum)