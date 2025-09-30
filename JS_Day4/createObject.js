// Create an object with some properties (like name, age, city). Then, access and print those properties using dot notation and bracket notation.

let obj = {
  name: "Amandeep Awwasthi",
  age: 27,
  city: "Palampur",
};

console.log(obj.name);
console.log(obj.age);
console.log(obj.city);

console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["city"]);


// Add a new property to the object and update an existing one. Print the updated object.
obj.country = "India";
obj.age = 32;

console.log(obj);


delete obj.city;

console.log(obj);


for(let key in obj){
    console.log(key, obj[key]);
}