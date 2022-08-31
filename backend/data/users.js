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
  {
    name: "Admin User",
    email: "admin1@gmail.com",
    password: bcrypt.hashSync("1234567", 10),
    isAdmin: true,
  },
  {
    name: "Mpano Rubeni",
    email: "rubeni@gmail.com",
    password: bcrypt.hashSync("1234567", 10),
  },
  {
    name: "Mucyo Dany",
    email: "mucyo@gmail.com",
    password: bcrypt.hashSync("1234567", 10),
  },
  {
    name: "Admin User",
    email: "admin2@gmail.com",
    password: bcrypt.hashSync("1234567", 10),
    isAdmin: true,
  },
  {
    name: "Esther Umubyeyi",
    email: "umubyeyi@gmail.com",
    password: bcrypt.hashSync("1234567", 10),
  },
  {
    name: "Dinah Mukamana",
    email: "mukamana@gmail.com",
    password: bcrypt.hashSync("1234567", 10),
  },
];
export default users;
