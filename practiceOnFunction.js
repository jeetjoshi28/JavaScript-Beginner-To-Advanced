// console.log("Jeet Joshi");

// function greet(name) {
//   console.log("Hello " + name + ", welcome to the my website.");
// }

// greet("jeet");

//sum of two number with two parameters
var result = (a, b) => {
  a + b;
  console.log("Sum of two number is:", a + b);
};

result(5, 5);
result(50, 5);

//multiplaction of two number
var result = function multi(a, b) {
  console.log("Multiplacation of two number is:", a * b);
  return a * b;
};

result(5, 5);

//multiplaction two number using arrow function
var result = (a, b) => {
  console.log("Multiplaction of two number is:", a * b);
};

result(2, 2);
