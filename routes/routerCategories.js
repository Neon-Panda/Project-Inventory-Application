import { Router } from "express";
import * as categories from "../controllers/controlCategories.js";

const routerCategories = Router();

routerCategories.get("/", categories.getPage);

export default routerCategories;
