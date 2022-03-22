import "./config/db.js";
import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "./controllers/Users.js";
const app = express();
import bodyParser from "body-parser";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//RETURN ALL USERS
app.get("/", getUsers);

//ADD A NEW USER TO THE DATABASE
app.post("/", createUser);

//EDIT A USER BY ID
app.put("/:id", updateUser);

//DELETE : REMOVE A USER BY ID
app.delete("/:id", deleteUser);

app.listen(3001, () => {
  console.log("server ok");
});
