// const country = "valobasi Bangladesh";


// const test=()=>{
//     console.log(country);
// };
// test()

// array

let fruits = ["apple", "banana", "orange"];

fruits.push("lichi") // it will be acceptable. because the array type is string

fruits.push(34) // it give an error, because the assing value not a string

let mixed  = ["apple", 43, true];

mixed.push(90) // true beacuse array type is mixed and inside array there is a number varible



// Object

let developer ={
    name: "Hasibul",
    age:24,
    jobStatus: true
}


developer.name =" Hasan" // true because inside object property name is a string type
developer.name = 67 // flase because inside object property name is not a number type

// now new peroperty adding on object, beacuse typescript take a define object like a schema