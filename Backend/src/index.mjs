import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { User } from "./database/Schemas/UserSchema.mjs";

mongoose
  .connect("mongodb://localhost:27017/FullStack")
  .then(console.log("Connected to db"))
  .catch((err) => console.log(err));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// add a single user
app.post("/api/users", async (request, response) => {
  const { body } = request;
  try {
    const newUser = await new User(body).save();
    return response.status(200).send(newUser);
  } catch (error) {
    console.log(`cannot add user to the db ${error}`);
    return response.sendStatus(400);
  }
});

//get all users
app.get("/api/users", async (request, response) => {
  try {
    const allUsers = await User.find({});
    return response.status(200).send(allUsers);
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
});

//delete a user
app.delete("/api/users/:id", async (request, response) => {
  try {
    const { id } = request.params;
    await User.deleteOne({ _id: id });
    return response.sendStatus(200);
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
});

//update a user details
app.patch("/api/users/:id", async (request, response) => {
  try {
    const { name, age } = request.body;
    const { id } = request.params;
    await User.updateOne({ _id: id }, { $set: { name, age } });
    return response.sendStatus(200);
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
});

app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});
