import { Router } from "express";
import {
  createBookController,
  deleteBookController,
  readBookController,
  readSpecificBookController,
  updateBookController,
  
} from "../controllers/bookController.js";

let bookRouter = Router();
bookRouter.route("/").post(createBookController).get(readBookController);

bookRouter.route("/:id").get(readSpecificBookController)
.patch(updateBookController)
.delete(deleteBookController)

export default bookRouter;
