import { Router } from "express";
import * as categories from "../controllers/controlCategories.js";

const routerCategories = Router();

routerCategories.get("/", categories.getPage);
routerCategories.post("/create", categories.createCategory);
routerCategories.post("/delete", categories.deleteCategory);

export default routerCategories;
