// Input: an object, a key (string), a default value
// Output: the value at that key, or the default
// Returns: any value

function getValueOrDefault(obj, key, defaultValue) {
  
    return obj[key] !== undefined ? obj[key] : defaultValue;
}

let person = { name: "Sam", age: 25 };
console.log(person["grade"]);

console.log(getValueOrDefault(person, "age", 0)); // Expected: 25
console.log(getValueOrDefault(person, "grade", "N/A")); // Expected: "N/A"


