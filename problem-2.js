// Problem-2: Sum of a range of number (1 to N)

function sumRange(number) {
  let sum = 0;
  for(let i = 0; i <= number; i++){
    sum = sum + i;
  }
  return sum;
}

console.log(sumRange(2))