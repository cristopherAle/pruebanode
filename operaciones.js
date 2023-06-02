//const fs = require("fs")

// const register = (name, email, age, address)=>{
//   const data = {
//     name,
//     email,
//     age,
//     address
//   }
//   fs.writeFileSync("citas.json", JSON.stringify(data));
// console.log("data creada correctamente");
// };
const fs = require("fs")
const register = (name, email, age, address) => {
  const data = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  data.push({ name, email, age, address });
  fs.writeFileSync("citas.json", JSON.stringify(data));
  console.log("data created successfully");
};


const read = ()=>{
  const data = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(data);
};

module.exports={
  register,
  read,
};