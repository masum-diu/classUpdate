// function outer() {
//   let increment = 0;
//   return function inner() {
//     increment++;
//     console.log(increment);
//   };
// }
// const conter = outer();
// conter();

// flat array

// nested array
let alpha = ["a", "b", ["c", ["d", 1, 4, ["sakib", "masum", "rabbi"]]]];
console.log(alpha.flat(3).map((x) => x.length));
