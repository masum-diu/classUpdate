// Check if a number is even or odd

let nubmer = 5;
if (nubmer % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// lists 1st 10 data 2nd time 5 data 3rd time 8 data

let num1 = 11;
let num2 = 5;
let num3 = 8;

if (num1 % 2 === 0 && num2 % 2 === 0) {
  console.log(`${num1} and ${num2} if check even `);
} else if (num1 % 2 === 0 && num3 % 2 === 0) {
  console.log(`${num1} and ${num3} if check even `);
} else if (num2 % 2 === 0 && num3 % 2 === 0) {
  console.log(`${num1} and ${num3} if check even `);
} else {
  console.log("Odd");
}

// 2%2=0 if 1===0 this is even other wise odd
