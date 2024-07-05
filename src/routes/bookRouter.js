import { Router } from "express";
import {
  createBookController,
  readBookController,
} from "../controllers/bookController.js";

let bookRouter = Router();
bookRouter.route("/").post(createBookController).get(readBookController);

export default bookRouter;
