import { Router } from "express";
import { createStudentController } from "../controllers/studentController.js";

const studentRouter = Router();
studentRouter.route("/").post(createStudentController);
export default studentRouter;
