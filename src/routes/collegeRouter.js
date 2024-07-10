import { Router } from "express";
import { createCollegeController, deleteCollegeController, readCollegeController, readSpecificCollegeController, updateCollegeController } from "../controllers/collegeController.js";

let collegeRouter = Router(); 
collegeRouter.route("/").post(createCollegeController) .get(readCollegeController);

collegeRouter.route("/:id").get(readSpecificCollegeController)
.patch(updateCollegeController)
.delete(deleteCollegeController)

export default collegeRouter;             