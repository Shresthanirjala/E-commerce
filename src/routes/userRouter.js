import { Router } from "express";
import {
  createUserController,
  readSpecificUserController,
  readUserController,
  updateUserController,
  deleteUserController,

} from "../controllers/userController.js";

let userRouter = Router();

userRouter.route("/").post(createUserController).get(readUserController);

//dynamic routes
userRouter.route("/:id").get(readSpecificUserController);
userRouter.route("/:id").patch(updateUserController);
userRouter.route("/:id").delete(deleteUserController);

export default userRouter;
