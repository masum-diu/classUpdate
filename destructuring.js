const user = {
  name: "xyz",
  email: "xyz@gmail.com",
  phone: "21932713123",
  role: {
    admin: {
      name: "admin",
      role: "system Admin",
    },
    superUser: "Athor",
    masterUser: "Manager",
  },
};
const { role, superUser } = user.role;
console.log(superUser);

// {
//     user:{
//      name:"xyz",
//     email:"xyz@gmail.com",
// phone:"139213213"
//     }
//     token:"23921831237129073"
// }
