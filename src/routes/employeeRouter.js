import { Router } from "express";
import { createEmployeeController, deleteEmployeeController, readEmployeeController,  readSpecificEmployeeController, updateEmployeeController } from "../controllers/employeeController.js";

const employeeRouter = Router();
employeeRouter.route("/").post(createEmployeeController) .get(readEmployeeController);

employeeRouter.route("/:id").get(readSpecificEmployeeController)
.patch(updateEmployeeController)
.delete(deleteEmployeeController)
export default employeeRouter;
