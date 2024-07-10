import { Router } from "express";
import { createReviewController, deleteReviewController, readReviewController, readSpecificReviewController, updateReviewController } from "../controllers/reviewController.js"

let reviewRouter = Router()
reviewRouter.route("/").post(createReviewController) .get(readReviewController)

reviewRouter.route("/:id").get(readSpecificReviewController)
.patch(updateReviewController)
.delete(deleteReviewController)
export default reviewRouter;