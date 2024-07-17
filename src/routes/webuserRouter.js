import { Router } from "express";
import { createWebuserController, deleteWebuserController, forgotPassword, LoginWebUser, myProfile, readSpecificWebuserController, readWebuserController, resetPassword, updatePassword, updateProfile, updateWebuserController, verifyEmail } from "../controllers/webuserController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import isAuthorization from "../middleware/isAuthorization.js";

const webuserRouter = Router();
webuserRouter.route("/").post(createWebuserController) 
webuserRouter.route("/").get(isAuthenticated,isAuthorization(["admin","superAdmin"]),readWebuserController);
webuserRouter.route("/verify-email").post(verifyEmail);
webuserRouter.route("/login").post(LoginWebUser);
webuserRouter.route("/my-profile").get(isAuthenticated, myProfile);
webuserRouter.route("/update-profile").patch(isAuthenticated, updateProfile);
webuserRouter.route("/update-password").patch(isAuthenticated, updatePassword);
webuserRouter.route("/forgot-password").post(forgotPassword);
webuserRouter.route("/reset-password").patch(isAuthenticated,resetPassword);

webuserRouter.route("/:id").get(isAuthenticated, isAuthorization(["admin","superAdmin"]),readSpecificWebuserController)
.patch(isAuthenticated,isAuthorization(["superAdmin"]),updateWebuserController)
.delete(isAuthenticated,isAuthorization(["superAdmin"]),deleteWebuserController)

export default webuserRouter;
