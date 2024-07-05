import { Router } from "express";
import { createEmployeeController } from "../controllers/employeeController.js";

const employeeRouter = Router();
employeeRouter.route("/").post(createEmployeeController);
export default employeeRouter;
