// what is an object

// Object is are a fundamental part of javascript providing a way to group related data and function togetner. In javascript, an object is collection of key - value pair, where each key is staring and each value can be any data typeof, including other objects. Object can have properies and methods, making them versatile for various use cases.

// SYNTEX

// obj = {}

// creating object

const product = {
    id: 1,
    pName: "laptop",
};


const person = {
    name: "jeet",
    age: 24,
    "is'Student": true,

    //method
    greet: function () {
        console.log("Welcome to the person object");
    },
};

// object ma function ne method keyau che.

// you can access object property using dot notation or bracket notation.
console.log(person.age);
console.log(person.name)
console.log(person["is'Student"])