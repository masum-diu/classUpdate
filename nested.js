//

let register = {
  name: "xyz",
  email: "xyz@gmail.com",
  password: "12345",
};
let login = {
  email: "xyz@gmail.com",
  password: "1234",
};

if (register.name && register.email && register.password) {
  console.log("user Account has created");

  if (register.email === login.email && register.password === login.password) {
    console.log("user account login sucessful");
  } else {
    console.log("information invalid");
  }
} else {
  console.log("account not created");
}
