import { Router } from "express";
import {
  createTeacherController,
  readSpecificTeacherController,
  readTeacherController,
} from "../controllers/teacherController.js";

let teacherRouter = Router();
teacherRouter
  .route("/")
  .post(createTeacherController)
  .get(readTeacherController);

//dynamic routes
teacherRouter.route("/:id").get(readSpecificTeacherController);
export default teacherRouter;
