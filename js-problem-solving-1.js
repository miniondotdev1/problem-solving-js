// Example format to follow for every task:
// Input: a number
// Output: "Positive", "Negative", or "Zero"
// Returns: a string


function checkTask(str){
    if(str>= 1){
        return "Positive";
    }
    else if(str <= -1){
        return "Negative";
    }
    else{
        return "Zero"
    }
}

console.log(checkTask(0))