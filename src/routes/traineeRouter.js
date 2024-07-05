import { Router } from "express";
import { createtTraineeController } from "../controllers/traineeController.js";

let traineeRouter = Router();
traineeRouter.route("/").post(createtTraineeController);
export default traineeRouter;
