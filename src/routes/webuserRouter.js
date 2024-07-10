import { Router } from "express";
import { createWebuserController, deleteWebuserController, readSpecificWebuserController, readWebuserController, updateWebuserController } from "../controllers/webuserController.js";

const webuser = Router();
webuser.route("/").post(createWebuserController) .get(readWebuserController)

webuser.route("/:id").get(readSpecificWebuserController)
.patch(updateWebuserController)
.delete(deleteWebuserController)
export default webuser;