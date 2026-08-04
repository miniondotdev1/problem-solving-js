// Problem 14: you are given object containing information about a student.

// Tasks
/**
 * print all keys. 
 * print all values.
 * print each key-value pair.
 * // name: Uthso
 * // age: 26
 * //university: DIU
 * // department: CSE
 * 
 * Count the total number of properties in the object. 
 * check if the object contains a property named "email"
 * 
 * // expected input:
 * const student  {
 * // name: Uthso
 * // age: 26
 * //university: DIU
 * // department: CSE
 * };
 * 
 * // expected outpur:
 * 
 * name age university department
 * 
 * Uthso 26 DIU CSE
 * 
 * name: uthso
 * age: 26
 * university; DIU
 * department: CSE
 * 
 * Total properties: 4
 * Has Email: false
 * 
 * 
*/

const student = {
    name: "Utsho",
    age: 25,
    university: "DIU",
    department: "CSE"
};

function objOperation(obj){
    for(let key in obj){
        console.log(key)
    }

    for (let key in obj) {
      console.log(obj[key]);
    }
    for (let key in obj) {
      console.log(key, ": ", obj[key]);
    }

    let objKeyCount = Object.keys(obj).length
    console.log("Total properties: ", objKeyCount);

    let hasEmailProperty = obj.hasOwnProperty("email")
    console.log("Has Email: ", hasEmailProperty)

}

objOperation(student)

