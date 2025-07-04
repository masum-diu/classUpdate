// //

// // let register = {
// //   name: "xyz",
// //   email: "xyz@gmail.com",
// //   password: "1234",
// // };
// // let login = {
// //   email: "xyz@gmail.com",
// //   password: "1234",
// // };

// // if (register.name && register.email && register.password) {
// //   console.log("user Account has created");

// //   if (register.email === login.email && register.password === login.password) {
// //     console.log("user account login sucessful");
// //   } else {
// //     console.log("information invalid");
// //   }
// // } else {
// //   console.log("account not created");
// // }

// // let userName = "admin";
// // let password = 1234;

// // if (userName === "admin") {
// //   if (password === 1234) {
// //     console.log("login successful");
// //   } else {
// //     console.log("incrrect Pssword");
// //   }
// // } else {
// //   console.log("userName not found");
// // }

// let joinedRoles = role.join(" - ");
// console.log(joinedRoles); // Output: "admin - superAdmin - customer"

// if (role[0] === "dmin") {
//   console.log("required access authriztion by superAdmin");
// } else if (role[1] === "superAdmin") {
//   console.log("super access");
// } else {
//   console.log("few access");
// }

// let user = "localcard-1234";
// let newInfo = user.slice(9, 14).split("-");
// let userId = newInfo[1];
// let role = ["admin", "superAdmin", "customer"];
// role.slice(0, 1).map((item) => {
//   console.log(item);
// });
// if (role.slice(0, 1).includes("admin")) {
//   console.log("required access authorization by superAdmin");
// } else {
//   console.log("access authorization not found");
// }

// console.log(role);

//localhost:3000/api/v1/user/localcard-1234
// next route path
// const route=nextRoute()
