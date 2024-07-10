import { Router } from "express";
import {
  createTeacherController,
  deleteTeacherController,
  readSpecificTeacherController,
  readTeacherController,
  updateTeacherController,
} from "../controllers/teacherController.js";

let teacherRouter = Router();
teacherRouter
  .route("/")
  .post(createTeacherController)
  .get(readTeacherController);

//dynamic routes
teacherRouter.route("/:id").get(readSpecificTeacherController)
.patch(updateTeacherController)
.delete(deleteTeacherController)
export default teacherRouter;
