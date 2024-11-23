// console.log("Jeet Joshi");

const student = [
  "Jeet",
  "Sakshi",
  "sara",
  "Nidhi",
  "Darshil",
  "Shiv",
  "Urvi",
  "Riddhi",
  "Meet",
];

//print the data type of the array
// console.log(typeof student);

//gives last value of array
// console.log(student.at(-1));

// console.log(student[5]);

//slice method
// let result = student.slice(2, 5);
//  console.log(result);

//splice method
// let result = student.splice(2, 5);
// console.log(result);

//modify the array
// student[4] = "Dilip";
// console.log(student);

//for of loop to access the element of an array
// for (let person of student) {
//   console.log(person);
// }

// //for in loop to access the index of an array
// for (let person in student) {
//   console.log(person);
// }

// //forEach loop
// student.forEach((currentelement, index, arr) => {
//   console.log(`${currentelement} ${index}`);
//   console.log(arr);
// });

// const result = student.map((currentelement, index, arr) => {
//   return `My friend is ${currentelement}`;
//   console.log(arr);
// });

// console.log(result);

//push method in array it is store in last in element
// student.push("dilip");
// console.log(student);

//pop method in array to remove the last element in array
// student.pop();
// console.log(student);

//unshift using this method we can add the element at starting position on an array
// student.unshift("dilip");
// console.log(student);

//shift using this method we can remove the frist element of an array same as pop but is remove at starting position
// student.shift();
// console.log(student);

//if i want to add some element at between of any array using splice() method i can do this

//spilce(start, deleteCount, item1 , item2 , .... , itemN)
// console.log(student.splice(2, 1));
// console.log(student);

//this line of code is splice the value and add new value at the remove place
// console.log(student.splice(2, 1, "Himani"));

//indexof is return the index of element
// console.log(student.indexOf("sara"));

//lastindexof is return the last index of element
// console.log(student.lastIndexOf("sara"));

//filter method in javascript
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 6, 8, 9];

//this code is return the filter of an array it apply on array number if number is > 5 that number is display not < 5 are not display
// const result = numbers.filter((curElem) => {
//   return curElem > 5;
// });

// console.log(result);

//this is return the other values of an array if it's is == 6 then it is not show the

// let value = 6;
// let updateCart = numbers.filter((curElem) => {
//   return curElem !== value;
// });
// console.log(updateCart);

//interview question write a function a that use the filter method and return the array containg only product with price less than or equal to 500

// this is object

// const product = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "SmartWatch", price: 150 },
// ];

// const filterProduct = product.filter((curElem) => curElem.price <= 500)
// .map((curElem) => curElem.name);

// const filterProduct = product
//   .filter((curEle) => curEle.price <= 500)
//   .map((curEle) => curEle.name);

// console.log(filterProduct);

//filter unique value
// const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];
// // console.log(numbers);

// // console.log([...new Set(numbers)]);

// numbers.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

// console.log(numbers);

// const student2 = [
//   "Jeet",
//   "Sakshi",
//   "Sara",
//   "Nidhi",
//   "Darshil",
//   "Shiv",
//   "Urvi",
//   "Riddhi",
//   "Meet",
// ];

// student2.sort();

// console.log(student2);

//This is use of reduce methos in javascript it is use of find the total real life example is to give the total of cart items

const productPrice = [100, 200, 300, 400, 500];

const totalPrice = productPrice.reduce((accum, curEle) => {
  return accum + curEle;
}, 0);

console.log(totalPrice);
