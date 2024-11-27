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
console.log(person.name);

//in place of . we can use the [] bracket
console.log(person["name"]);
console.log(person[`name`]);
console.log(person['name']);


console.log(person["is'Student"]);

// you can add and new properties or modify existing ones
person.job = "MERN Developer";
person.age = 25;

// we can use [] in place of . notation
// person[`age`] = 20;
// person["age"] = 20;
// person['age'] = 20;

console.log(person)

// How to access the method of inside of object

person.greet()

// we can add dynamic keys in an object

let idType = "collegeId"
let student = {
    [idType]: "A12345",
    sName: "Jeet",
    sAge: 24,
    isStudent: true,
    greet: function () {
        console.log
            (
                `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`
            );
    },
};

student.greet();