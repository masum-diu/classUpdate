// function add(a, b) {
//   return a + b;
// }
// console.log(add(4, 19));

// if (add(4, 19) > 20) {
//   console.log("The sum is greater than 20");
// } else {
//   console.log("The sum is not greater than 20");
// }

// //
// function incrementTotal(value) {
//   let total = 0;
//   total = value + total;
//   return total;
// }
// const incrementedValue = incrementTotal(8);
// console.log(incrementedValue); // 5

// 🔍 বিশ্লেষণ:
// total ফাংশনের ভেতরে (local scope) declare করা হয়েছে।

// প্রতিবার ফাংশন কল করলে total = 0 থেকে শুরু হচ্ছে।

// কোনো global variable পরিবর্তন করছে না।

// Same input → Same output
// (যেমন, incrementTotal(5) সবসময় 5 দিবে)

// function getCurrenTime() {
//   return new Date().toLocaleTimeString();
// }
// console.log(getCurrenTime());

// function test() {
//   let textMessage = "This is a test message";
//   setTimeout(() => {
//     console.log("logging:", textMessage);
//   }, 3000);

//   return;
// }

// test();

// logging: This is a test message

// setTimeout(function,delay)
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Waiting for 2 seconds...");
  await wait(2000);
  console.log("1st line of code");
  console.log("2nd line of code");
  console.log("3rd line of code");
}

run();

// let promise = new Promise((resolve, reject) => {
//   let condition = true; // Change this to false to test rejection
//   if (condition) {
//     resolve("Promise resolved successfully!");
//   } else {
//     reject("Promise rejected!");
//   }
// });
// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Promise handling complete.");
//   });

let a = 1;
let b = 2;
if (typeof a === "number" && typeof b === "number") {
  console.log("Both a and b are numbers.");
}
