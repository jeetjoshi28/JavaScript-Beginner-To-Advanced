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
    [idType]: "A12345", //dynamic key based on idType
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


// Data moding in JavaScript
// Objects are excellent for modeling real-world entities. for instance, you might represent a car, a user, or a product as an object with properities like color, brand, username, etc...

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2015,
    color: "Blue",
    start: function () {
        console.log("Car started");
    },
};

car.start();

console.log(car);

//pass by value
//In pass by value we can just pass the value of the variable to the function and the function can't change the original variable

let a = 10;
const modifyValue = (x) => (x = 20);

console.log(modifyValue(a));

console.log(a);


// passing by reference: when passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.

let obj = { id: 5, name: "Jeet" };

let obj1 = obj;

obj1.name = "Joshi";
console.log(obj1)
console.log(obj);


// Interview Questions

const target = { A: 1, b: 2 };
const source = { b: 3, c: 4 };

const mergeObject = Object.assign({}, target, source);
console.log(mergeObject);


//Problem: Given an object representing a student, write a function to add a new subject with it's corresponding grade to the student record. Also check if the grades property is present or not?

function addSubject(student, subject, grade) {
    // Check if 'grades' property exists
    if (!student.grades) {
        // If 'grades' is not present, create it as an empty object
        student.grades = {};
    }

    // Add the new subject and grade
    student.grades[subject] = grade;

    console.log(`${subject} added with grade ${grade}.`);
    return student;
}

// Example usage
let studentData = {
    name: "Bob",
    age: 20,
    grades: {
        math: 90,
        science: 85,
        history: 88,
    },
};

addSubject(studentData, "computer", 92);
console.log(studentData);

// Problem: Write a function to compares two object to determine if they have the same properties and values.

const areObjectEqual = (obj1, obj2) => {

    let o1 = Object.keys(obj1);
    let o2 = Object.keys(obj2);

    if (o1.length != o2.length) {
        console.log("There keys are not equal");
        return false;
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};
let objA = { name: "Alice", age: 26, city: "New Yourk" };
let objB = { name: "Alice", age: 26, city: "New Yourk" };
let objC = { name: "Bob", age: 30, city: "San Francisco" };


console.log(areObjectEqual(objA, objB));
console.log(areObjectEqual(objA, objC));



//Problem: Erite a function that transform an array of an objects into an object where the keys are the objects id.

function arrayToObject(array) {
    return array.reduce((result, item) => {
        result[item.id] = item; // Use the 'id' as the key
        return result;
    }, {}); // Initialize an empty object as the accumulator
}

let inputArray = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
];
console.log(arrayToObject(inputArray));