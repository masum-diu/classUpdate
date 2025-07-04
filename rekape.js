// // javascript programming language

// // premative data types

// // scope
// var x = 10;
// let y = 20;
// const z = 29;

// {
//   var Newz = 30; // var is function scoped, so it can be accessed outside the block
//   let NewX = 30;
//   const NewY = 40;
//   function pas() {
//     var fu = 50;
//     console.log(NewY); // 40
//   }
// }
// console.log(NewX, NewY, Newz); // ReferenceError: NewX is not defined, NewY is not defined

// const checkScope = () => {
//   //   console.log(x, y, z);
// };
// // console.log(NewX);
// checkScope();
// 3 types of scope

// 1. Global scope
// 2. Function scope
// 3. Block scope

// let name = "John Doe";
// name = "masum";
// console.log(name);

// const apple = ["apple", "banana", "orange"];
// apple.push("grape"); // Adds 'grape' to the end of the array
// console.log(apple);
// useState is a hook in React that allows you to add state to functional components

const userAccess = async () => {
  await setTimeout(() => {
    let user = "localcard-1234";
    let newInfo = user.slice(9, 14).split("-");
    let userId = newInfo[1];
    let role = ["admin", "superAdmin", "customer"];

    role.slice(0, 1).map((item) => {
      console.log(item);
    });

    if (role.slice(0, 1).includes("admin")) {
      console.log("required access authorization by superAdmin");
    } else {
      console.log("access authorization not found");
    }
  }, 1000);
};
