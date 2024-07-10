import { Router } from "express";
import { createDepartmentController, deleteDepartmentController, readDepartmentController, readSpecificDepartmentController, updateDepartmentController } from "../controllers/departmentController.js";

let departmentRouter=Router();
departmentRouter.route("/").post(createDepartmentController) .get(readDepartmentController)
departmentRouter.route("/:id").get(readSpecificDepartmentController)
.patch(updateDepartmentController)
.delete(deleteDepartmentController)
export default departmentRouter;