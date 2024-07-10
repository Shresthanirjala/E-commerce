import { Router } from "express";
import { createtTraineeController, readSpecificTraineeController, readTraineeController, traineeDeleteController, traineeUpdateController } from "../controllers/traineeController.js";

let traineeRouter = Router();
traineeRouter.route("/").post(createtTraineeController) .get(readTraineeController);


//dynamic routes
traineeRouter.route("/:id").get(readSpecificTraineeController)
.patch(traineeUpdateController)
.delete(traineeDeleteController);

export default traineeRouter;
