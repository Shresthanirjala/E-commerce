import { Router } from "express";
import { createdoctorController } from "../controllers/doctorController.js";

const doctorRouter = Router();
doctorRouter.route("/").post(createdoctorController);
export default doctorRouter;
