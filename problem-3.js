// Problem-3: Factorial of a Number

function factorialNumber(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result *= i;
    }
    return result;
}

console.log(factorialNumber(4))
