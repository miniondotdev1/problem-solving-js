// Problem 13: Loop through an object's properties

let monitor = {
    color: "black",
    brand: "LG",
    display: "Something",
    size: "Something",
    test: "Dummy"
}

// First way
for(let key in monitor){
    console.log(key, ": ", monitor[key]);
}

// keys method