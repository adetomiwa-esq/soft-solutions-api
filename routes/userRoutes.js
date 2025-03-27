import express from "express";
import {
  getUser,
  updateUser,
  createUser,
  getAllUsers,
  deleteUser,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.route("/new").post(createUser);
userRouter.route("/").get(getAllUsers);
//userRouter.route("/").post(userSignUp);
userRouter.route("/:id").delete(deleteUser).put(updateUser);

export default userRouter;
