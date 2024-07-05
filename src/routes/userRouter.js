import { Router } from "express";
import {
  createUserController,
  readSpecificUserController,
  readUserController,
} from "../controllers/userController.js";

let userRouter = Router();

userRouter.route("/").post(createUserController).get(readUserController);

//dynamic routes
userRouter.route("/:id").get(readSpecificUserController);

export default userRouter;
