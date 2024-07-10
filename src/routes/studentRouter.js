import { Router } from "express";
import { createStudentController, deleteStudentController, readStudentController, updateStudentController } from "../controllers/studentController.js";
import { readSpecificProductController } from "../controllers/productController.js";

const studentRouter = Router();

studentRouter.route("/").post(createStudentController).get(readStudentController);

studentRouter.route("/:id").get 
(readSpecificProductController)
.patch(updateStudentController)
.delete(deleteStudentController)

export default studentRouter;
