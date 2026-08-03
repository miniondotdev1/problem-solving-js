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
    // console.log(key, ": ", monitor[key]);
}

// keys method

let objKey = Object.keys(monitor)


for (let i = 0; i < objKey.length; i++) {
  let key = objKey[i]
//   console.log(key, ': ', monitor[key]);
}

// another method 

for( let key of objKey){
    console.log(key, ': ' , monitor[key]);
}