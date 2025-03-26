import express from "express";
import {
  getUser,
  updateUser,
  createUser,
  getAllUsers,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.route("/new").post(createUser);
userRouter.route("/").get(getAllUsers);
//userRouter.route("/").post(userSignUp);
userRouter.route("/:id").get(getUser).put(updateUser);

export default userRouter;
