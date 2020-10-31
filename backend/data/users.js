import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("1234567", 10),
    isAdmin: true,
  },
  {
    name: "Jonathan Nshuti",
    email: "jonathan@gmail.com",
    password: bcrypt.hashSync("1234567", 10),
  },
  {
    name: "Jane",
    email: "jane@gmail.com",
    password: bcrypt.hashSync("1234567", 10),
  },
];
export default users;
