// Problem 10: Find the smallest number in an Array;

function smallestNumberFromArray(arr){
    let smallest = arr[0];
    for(let i = 1; i < arr.length; i++){
        let currentElement = arr[i];
        if(currentElement < smallest){
            smallest = currentElement;
        }
    }
    return smallest;
}

console.log(smallestNumberFromArray([250, 20, 50, 500, 45, 345, 954, 63]))