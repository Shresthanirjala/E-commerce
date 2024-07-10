import { Router } from "express";
import { createClassroomController, readClassroomController } from "../controllers/classroomController.js";

let Classroom  = Router();
Classroom.route("/").post(createClassroomController) .get(readClassroomController);

export default Classroom;